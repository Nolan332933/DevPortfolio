"use client";
import { createContext, useReducer } from "react";

export const CategoryContext = createContext(null);

const initState = {
  categories: {
    data: [],
    totalPages: 0,
  },
  category: {},
  loading: false,
  error: null,
  message: "",
  success: false,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "getAllCategories":
      return {
        ...state,
        categories: {
          ...state.categories,
          data: payload.data.categories,
          totalPages: payload.data.totalPages,
        },
        success: true,
        message: payload.message,
      };
    case "startLoading":
      return {
        ...state,
        loading: true,
      };
    case "endLoading":
      return {
        ...state,
        loading: false,
      };
    case "fail":
      return {
        ...state,
        message: payload,
        success: false,
      };
    default:
      return state;
  }
}

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  //   get all categories
  const getAllCategories = async () => {
    dispatch({ type: "startLoading" });
    try {
      const response = await fetch("/api/category");
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          dispatch({ type: "getAllCategories", payload: result });
        } else {
          dispatch({ type: "fail", payload: result.message });
        }
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    }
  };

  return (
    <CategoryContext.Provider value={{ state, getAllCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
