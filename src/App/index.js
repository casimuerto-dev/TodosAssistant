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
    duplicateWarning,
    setDuplicateWarning,
    duplicateTodo,
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
            setDuplicateWarning={setDuplicateWarning}
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
            toggleTheme={localState}
            toggleEditTodo={toggleEditTodo}
            setToggleEditTodo={setToggleEditTodo}
            updateAfterEdit={updateAfterEdit}
          />
        </Modal>
      )}
      {deleteWarning.status && (
        <Modal>
          <Warning>
            <h2 className="warningTitle" style={{ color: "brown" }}>
              ¿Deseas eliminar la tarea?
            </h2>
            <div className="yesNoDiv">
              <button
                className="noButton"
                onClick={() => setDeleteWarning({ status: false, idCode: "" })}
              >
                No, cambié de opinión
              </button>
              <button
                className="yesButton"
                onClick={() => {
                  deleteClick(deleteWarning.idCode);
                  setDeleteWarning({ status: false, idCode: "" });
                }}
              >
                Si, eliminar
              </button>
            </div>
          </Warning>
        </Modal>
      )}

      {uncompleteWarning.status && (
        <Modal>
          <Warning>
            <h2 className="warningTitle" style={{ color: "brown" }}>
              ¿Deseas marcar la tarea como no completada?
            </h2>
            <div className="yesNoDiv">
              <button
                className="noButton"
                onClick={() =>
                  setUncompleteWarning({ status: false, idCode: "" })
                }
              >
                No, cambié de opinión
              </button>
              <button
                className="yesButton"
                onClick={() => {
                  completeClick(uncompleteWarning.idCode);
                  setUncompleteWarning({ status: false, idCode: "" });
                }}
              >
                Si, descompletar
              </button>
            </div>
          </Warning>
        </Modal>
      )}

      {duplicateWarning.status && (
        <Modal>
          <Warning>
            <h2 className="warningTitle" style={{ color: "brown" }}>
              ¿Deseas duplicar la tarea?
            </h2>
            <div className="yesNoDiv">
              <button
                className="noButton"
                onClick={() =>
                  setDuplicateWarning({ status: false, idCode: "" })
                }
              >
                No, cambié de opinión
              </button>
              <button
                className="yesButton"
                onClick={() => {
                  duplicateTodo(duplicateWarning.idCode);
                  setDuplicateWarning({ status: false, idCode: "" });
                }}
              >
                Si, duplicar
              </button>
            </div>
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
