import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import "./AppUI.css";
import { ChangeAlert } from "../ChangeAlert";
import { Toggle } from "../Toggle";

function App() {
  const {
    open,
    onModalOpen,
    addTodo,
    error,
    loading,
    setLoading,
    count,
    completed,
    searchedTodos,
    searchValue,
    handleSearchChange,
    completeClick,
    deleteClick,
    searchActivated,
    setUpdateData,
    toggle,
    setToggle,
  } = useTodos();
  return (
    <>
      {!loading ? (
        <TodoCounter count={count} completed={completed} toggle={toggle} />
      ) : (
        <div className="topSkeleton"></div>
      )}
      <TodoSearch
        loading={loading}
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />

      <TodoList
        toggle={toggle}
        searchValue={searchValue}
        error={error}
        count={count}
        searchedTodos={searchedTodos}
        loading={loading}
        searchActivated={searchActivated}
        onError={() => <p>Ups... algo salió mal</p>}
      >
        {(todo) => (
          <TodoItem
            toggle={toggle}
            text={todo.text}
            key={todo.idCode}
            completed={todo.complete}
            completeClick={() => {
              completeClick(todo.idCode);
            }}
            deleteClick={() => {
              deleteClick(todo.idCode);
            }}
          />
        )}
      </TodoList>

      {open && (
        <Modal>
          <TodoForm
            toggle={toggle}
            addTodo={addTodo}
            onModalOpen={onModalOpen}
          />
        </Modal>
      )}

      <CreateTodoButton onClick={onModalOpen} />

      <Toggle toggle={toggle} setToggle={setToggle} />

      <ChangeAlert setLoading={setLoading} reload={setUpdateData} />
    </>
  );
}

export default App;
