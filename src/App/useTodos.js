import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  //external states
  const {
    updatedTodos: currentTodos,
    updateAndStoreTodos: setCurrentTodos,
    localName,
    updateAndStoreLocalName,
    localState,
    updateAndStoreLocalState,
    loading,
    setLoading,
    error,
    setUpdateData,
  } = useLocalStorage("TODOS_V1", [[], ", escribe tu nombre!", "true"]);

  //internal states
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const [toggleEditTodo, setToggleEditTodo] = React.useState({
    status: false,
    text: "",
    todoId: "",
  });
  const [deleteWarning, setDeleteWarning] = React.useState({
    status: false,
    todoId: "",
  });

  const [uncompleteWarning, setUncompleteWarning] = React.useState({
    status: false,
    todoId: "",
  });

  const [duplicateWarning, setDuplicateWarning] = React.useState({
    status: false,
    todoId: "",
  });

  const [toggleName, setToggleName] = React.useState(false);

  //methods
  const onModalOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  let searchedTodos = [...currentTodos];
  let searchActivated = false;

  if (searchValue.length > 0) {
    searchActivated = true;
    let newTodosArray = searchedTodos.filter((todo) => {
      let todoText = todo.text.toLocaleLowerCase();
      let searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
    searchedTodos = newTodosArray;
  } else {
    searchActivated = false;
    searchedTodos = [...currentTodos];
  }

  let count = currentTodos.length;
  let completed = currentTodos.filter((todo) => todo.complete === true).length;

  const addTodo = (text) => {
    let workTodoArray = [...currentTodos];
    for (let i = 0; i < 100; i++) {
      let result = workTodoArray.filter((obj) => obj.idCode === i);
      if (result.length === 0) {
        let rawIndexes = workTodoArray.map((todo, index) => {
          return todo.complete ? index : "no";
        });
        let indexOfFirstCompleted = rawIndexes.filter(
          (index) => index !== "no"
        );
        if (indexOfFirstCompleted.length === 0) {
          workTodoArray.push({
            text,
            complete: false,
            idCode: i,
          });
        } else {
          workTodoArray.splice(indexOfFirstCompleted[0], 0, {
            text,
            complete: false,
            idCode: i,
          });
        }

        break;
      }
    }

    setCurrentTodos(workTodoArray);
  };

  const completeClick = (idCode) => {
    const indexOfTodo = currentTodos.findIndex((todo) => {
      return todo.idCode === idCode;
    });
    let workTodoArray = [...currentTodos];
    workTodoArray[indexOfTodo].complete = !workTodoArray[indexOfTodo].complete;
    setCurrentTodos(workTodoArray);
  };

  const deleteClick = (idCode) => {
    const indexOfTodo = currentTodos.findIndex((todo) => {
      return todo.idCode === idCode;
    });
    let workTodoArray = [...currentTodos];
    workTodoArray.splice(indexOfTodo, 1);
    setCurrentTodos(workTodoArray);
  };

  const updateAfterDrag = (newOrderArray) => {
    let workTodoArray = newOrderArray.map((eachId) => {
      const arrayOfOne = currentTodos.filter((todo) => {
        return todo.idCode === parseInt(eachId);
      });
      return arrayOfOne[0]; ///returns the only obj inside the array of one
    });
    setCurrentTodos(workTodoArray);
  };

  const updateAfterEdit = (newText, id) => {
    let workTodoArray = currentTodos.slice();
    console.log("id type is:", typeof id);
    const updatedTextTodos = workTodoArray.map((todo) => {
      if (todo.idCode === parseInt(id)) {
        console.log("we are in");
        let newTodo = { ...todo, text: newText };
        return newTodo;
      } else {
        return todo;
      }
    });
    setCurrentTodos(updatedTextTodos);
    setToggleEditTodo({
      status: false,
      text: "",
      todoId: "",
    });
  };

  const duplicateTodo = (id) => {
    let workTodoArray = [...currentTodos];
    let index = workTodoArray.findIndex((todo) => todo.idCode === parseInt(id));
    addTodo(workTodoArray[index].text);
  };

  return {
    addTodo,
    open,
    onModalOpen,
    error,
    loading,
    setLoading,
    count,
    completed,
    searchValue,
    searchActivated,
    setSearchValue,
    handleSearchChange,
    searchedTodos,
    completeClick,
    deleteClick,
    setUpdateData,
    updateAfterDrag,
    toggleEditTodo,
    setToggleEditTodo,
    updateAfterEdit,
    deleteWarning,
    setDeleteWarning,
    uncompleteWarning,
    setUncompleteWarning,
    localName,
    updateAndStoreLocalName,
    toggleName,
    setToggleName,
    localState,
    updateAndStoreLocalState,
    duplicateWarning,
    setDuplicateWarning,
    duplicateTodo,
  };
}

export { useTodos };
