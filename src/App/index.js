import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ChangeAlert } from "../ChangeAlert";
import { Toggle } from "../Toggle";
import { EditTodo } from "../EditTodo";
import "./AppUI.css";
import { Warning } from "../Warning/Warning";
import { NameModal } from "../NameModal";

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
  } = useTodos();

  return (
    <>
      {!loading ? (
        <TodoCounter count={count} completed={completed} toggle={localState} />
      ) : (
        <div className="topSkeleton"></div>
      )}
      <TodoSearch
        loading={loading}
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />

      <TodoList
        toggle={localState}
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
            setToggleEditTodo={setToggleEditTodo}
            idCode={todo.idCode}
            toggle={localState}
            text={todo.text}
            key={todo.idCode}
            completed={todo.complete}
            completeClick={() => {
              completeClick(todo.idCode);
            }}
            deleteClick={() => {
              deleteClick(todo.idCode);
            }}
            updateAfterDrag={updateAfterDrag}
            setDeleteWarning={setDeleteWarning}
            setUncompleteWarning={setUncompleteWarning}
          />
        )}
      </TodoList>

      {open && (
        <Modal>
          <TodoForm
            toggle={localState}
            addTodo={addTodo}
            onModalOpen={onModalOpen}
          />
        </Modal>
      )}
      {toggleEditTodo.status && (
        <Modal>
          <EditTodo
            toggleEditTodo={toggleEditTodo}
            setToggleEditTodo={setToggleEditTodo}
            updateAfterEdit={updateAfterEdit}
          />
        </Modal>
      )}
      {deleteWarning.status && (
        <Modal>
          <Warning>
            <h2 style={{ color: "brown" }}>¿Deseas eliminar la tarea?</h2>
            <button
              onClick={() => setDeleteWarning({ status: false, idCode: "" })}
            >
              No, cambié de parecer
            </button>
            <button
              onClick={() => {
                deleteClick(deleteWarning.idCode);
                setDeleteWarning({ status: false, idCode: "" });
              }}
            >
              Si, eliminar
            </button>
          </Warning>
        </Modal>
      )}

      {uncompleteWarning.status && (
        <Modal>
          <Warning>
            <h2 style={{ color: "brown" }}>
              ¿Deseas marcar la tarea como no completada?
            </h2>
            <button
              onClick={() =>
                setUncompleteWarning({ status: false, idCode: "" })
              }
            >
              No, cambié de parecer
            </button>
            <button
              onClick={() => {
                completeClick(uncompleteWarning.idCode);
                setUncompleteWarning({ status: false, idCode: "" });
              }}
            >
              Si, descompletar
            </button>
          </Warning>
        </Modal>
      )}

      {toggleName && (
        <Modal>
          <NameModal
            toggle={localState}
            setToggleName={setToggleName}
            setUserName={updateAndStoreLocalName}
          />
        </Modal>
      )}

      <CreateTodoButton onClick={onModalOpen} />

      <Toggle
        userName={localName}
        toggle={localState}
        setToggle={updateAndStoreLocalState}
        setToggleName={setToggleName}
        loading={loading}
      />

      <ChangeAlert setLoading={setLoading} reload={setUpdateData} />
    </>
  );
}

export default App;
