"use client";
import axios from "axios";
import { createContext, useReducer } from "react";

export const GeneralSettingContext = createContext();
const initValue = {
  generals: [],
  general: {},
  success: false,
  errorMsg: "",
  loading: false,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "getAllGenerals":
      return {
        ...state,
        success: true,
        generals: payload,
      };
    case "error":
      return {
        ...state,
        errorMsg: payload,
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
    default:
      return state;
  }
}

export const GeneralSettingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initValue);

  const getAllGenerals = async () => {
    try {
      dispatch({ type: "startLoading" });
      const res = await axios.get("/api/general_setting");
      if (res.status == 200) {
        dispatch({ type: "endLoading" });
        const data = res.data;
        if (data.success) {
          dispatch({ type: "getAllGenerals", payload: data.data });
        } else {
          dispatch({ type: "error", payload: res.message });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GeneralSettingContext.Provider
      value={{
        state,
        getAllGenerals,
      }}
    >
      {children}
    </GeneralSettingContext.Provider>
  );
};
