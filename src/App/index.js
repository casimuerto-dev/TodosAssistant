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
import { MockComponent } from "./MockComponent";
import { MockContainer } from "./MockContainer";

// const todos = [
//   { text: "cortar cebolla", complete: false },
//   { text: "tomar curso intro react", complete: false },
//   { text: "llorar con la llorona", complete: false },
// ];

function App(props) {
  const {
    open,
    onModalOpen,
    addTodo,
    error,
    loading,
    count,
    completed,
    searchedTodos,
    searchValue,
    handleSearchChange,
    completeClick,
    deleteClick,
    searchActivated,
  } = useTodos();
  return (
    <>
      {!loading ? (
        <TodoCounter count={count} completed={completed} />
      ) : (
        <div className="topSkeleton"></div>
      )}
      <TodoSearch
        loading={loading}
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />

      <TodoList
        searchValue={searchValue}
        error={error}
        count={count}
        searchedTodos={searchedTodos}
        loading={loading}
        searchActivated={searchActivated}
        onError={() => <p>Ups... algo salió mal</p>}
        onNoLoadingAndNoCount={() => <h2 className="empty">Crea un TODO!</h2>}
      >
        {(todo) => (
          <TodoItem
            text={todo.text}
            key={todo.text}
            completed={todo.complete}
            completeClick={() => {
              completeClick(todo.text);
            }}
            deleteClick={() => {
              deleteClick(todo.text);
            }}
          />
        )}
      </TodoList>

      {open && (
        <Modal>
          <TodoForm addTodo={addTodo} onModalOpen={onModalOpen} />
        </Modal>
      )}

      <CreateTodoButton onClick={onModalOpen} />

      <MockContainer>
        <MockComponent />
        <MockComponent />
      </MockContainer>
    </>
  );
}

export default App;
