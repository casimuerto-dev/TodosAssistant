import React from "react";

const useLocalStorage = (Item, initialState) => {
  const [updatedTodos, setUpdatedTodos] = React.useState(initialState);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [updateData, setUpdateData] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localTodos = localStorage.getItem(Item);

        let parsedTodos;

        if (localTodos) {
          parsedTodos = JSON.parse(localTodos);
        } else {
          parsedTodos = initialState;
        }
        setUpdatedTodos(parsedTodos);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, [updateData]);

  const updateAndStoreTodos = (newArr) => {
    try {
      localStorage.setItem(Item, JSON.stringify(newArr));
      setUpdatedTodos(newArr);
    } catch (error) {
      setError(error);
    }
  };
  return {
    updatedTodos,
    updateAndStoreTodos,
    loading,
    setLoading,
    error,
    setUpdateData,
  };
};

export { useLocalStorage };
