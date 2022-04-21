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

  const [searchValue, setSearchValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
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
    workTodoArray.push({ text, complete: false });
    setCurrentTodos(workTodoArray);
  };

  const completeClick = (text) => {
    const indexOfTodo = currentTodos.findIndex((todo) => {
      return todo.text === text;
    });
    let workTodoArray = [...currentTodos];
    workTodoArray[indexOfTodo].complete = true;
    setCurrentTodos(workTodoArray);
  };

  const deleteClick = (text) => {
    const indexOfTodo = currentTodos.findIndex((todo) => {
      return todo.text === text;
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
