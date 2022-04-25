import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    updatedTodos: currentTodos,
    updateAndStoreTodos: setCurrentTodos,
    loading,
    setLoading,
    error,
    setUpdateData,
  } = useLocalStorage("TODOS_V1", []);

  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [toggle, setToggle] = React.useState(false);

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
        workTodoArray.push({ text, complete: false, idCode: i });
        break;
      }
    }

    setCurrentTodos(workTodoArray);
  };

  console.log(currentTodos); ////CONSOLE LOG DELETE!!!

  const completeClick = (idCode) => {
    const indexOfTodo = currentTodos.findIndex((todo) => {
      return todo.idCode === idCode;
    });
    let workTodoArray = [...currentTodos];
    workTodoArray[indexOfTodo].complete = true;
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
    toggle,
    setToggle,
  };
}

export { useTodos };
