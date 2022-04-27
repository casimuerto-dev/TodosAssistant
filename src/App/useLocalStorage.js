import React from "react";

const useLocalStorage = (Item, initialState) => {
  const [updatedTodos, setUpdatedTodos] = React.useState(initialState[0]);
  const [localName, setLocalName] = React.useState(initialState[1]);
  const [localState, setLocalState] = React.useState(initialState[2]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [updateData, setUpdateData] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localTodos = localStorage.getItem(Item[0]);
        const localNameStore = localStorage.getItem(Item[1]);
        const localStateStore = localStorage.getItem(Item[2]);

        let parsedTodos;
        let parsedName;
        let parsedState;

        if (localTodos) {
          parsedTodos = JSON.parse(localTodos);
        } else {
          parsedTodos = initialState[0];
        }
        if (localNameStore) {
          parsedName = JSON.parse(localNameStore);
        } else {
          parsedName = initialState[1];
        }
        if (localStateStore) {
          parsedState = JSON.parse(localStateStore);
        } else {
          parsedState = initialState[2];
        }

        setUpdatedTodos(parsedTodos);
        setLocalName(parsedName);
        setLocalState(parsedState);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }, 1000);
  }, [updateData]);

  const updateAndStoreTodos = (newArr) => {
    try {
      localStorage.setItem(Item[0], JSON.stringify(newArr));
      setUpdatedTodos(newArr);
    } catch (error) {
      setError(error);
    }
  };

  const updateAndStoreLocalName = (newName) => {
    try {
      localStorage.setItem(Item[1], JSON.stringify(newName));
      setLocalName(newName);
    } catch (error) {
      setError(error);
    }
  };

  const updateAndStoreLocalState = (newState) => {
    try {
      localStorage.setItem(Item[2], JSON.stringify(newState));
      setLocalState(newState);
    } catch (error) {
      setError(error);
    }
  };

  return {
    updatedTodos,
    updateAndStoreTodos,
    localName,
    updateAndStoreLocalName,
    localState,
    updateAndStoreLocalState,
    loading,
    setLoading,
    error,
    setUpdateData,
  };
};

export { useLocalStorage };
