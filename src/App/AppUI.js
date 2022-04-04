import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import "./AppUI.css";

export function AppUI() {
  const {
    open,
    onModalOpen,
    error,
    loading,
    count,
    searchedTodos,
    completeClick,
    deleteClick,
    searchActivated,
  } = React.useContext(TodoContext);
  return (
    <>
      {!loading ? <TodoCounter /> : <div className="topSkeleton"></div>}
      <TodoSearch loading={loading} />

      <TodoList loading={loading} searchActivated={searchActivated}>
        {error && <p>Ups... algo salió mal</p>}
        {!loading && count === 0 ? (
          <h2 className="empty">Crea un TODO!</h2>
        ) : null}
        {searchedTodos.length !== 0
          ? searchedTodos.map((todo) => (
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
            ))
          : !loading && <h1 className="empty">No hay TODOs para mostrar!</h1>}
      </TodoList>

      {open && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton onClick={onModalOpen} />
    </>
  );
}
