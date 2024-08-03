"use client";
import { createContext, useReducer } from "react";

const initState = {
  posts: {
    data: [],
    totalPages: 0,
  },
  featuredPosts: [],
  post: {},
  categoryPosts: [],
  loading: false,
  featuredLoading: false,
  error: "",
  message: "",
  success: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "getAllPosts":
      return {
        ...state,
        posts: {
          ...state.posts,
          data: payload.posts,
          totalPages: payload.totalPages,
        },
        success: true,
      };
    case "getFeaturedPosts":
      return {
        ...state,
        featuredPosts: payload.posts,
        success: true,
      };
    case "getCategoryPosts":
      return {
        ...state,
        categoryPosts: payload.posts,
      };
    case "getOnePost":
      return {
        ...state,
        post: payload,
        success: true,
      };
    case "getResponseData":
      return {
        ...state,
        message: payload,
        success: true,
      };
    case "updatePost":
      return {
        ...state,
        posts: {
          ...state.posts,
          data: state.posts.data.map((item) =>
            item._id == payload._id ? payload : item
          ),
        },
      };
    case "startLoading":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "endLoading":
      return {
        ...state,
        loading: false,
      };
    case "startFeaturedLoading":
      return {
        ...state,
        featuredLoading: true,
        error: "",
      };
    case "endFeaturedLoading":
      return {
        ...state,
        featuredLoading: false,
      };
    case "fail":
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const fetchData = async (url, options, onSuccessType) => {
    try {
      const res = await fetch(url, options);
      if (res.ok) {
        const result = await res.json();
        if (result.success) {
          dispatch({ type: onSuccessType, payload: result.data });
        } else {
          dispatch({ type: "fail", payload: result.error });
        }
      } else {
        const errorData = await res.json();
        dispatch({ type: "fail", payload: errorData.error });
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    } finally {
      dispatch({
        type: options.isFeatured ? "endFeaturedLoading" : "endLoading",
      });
    }
  };

  const statusChanged = async (id, status) => {
    fetchData("/api/post/status-changed", {
      method: "POST",
      body: JSON.stringify({ id, status }),
    });
  };

  const featureChanged = async (id, featured) => {
    fetchData("/api/post/featured-changed", {
      method: "POST",
      body: JSON.stringify({ id, featured }),
    });
  };

  const reactionAdded = async (id) => {
    dispatch({ type: "startLoading" });
    fetchData(`/api/post/reaction`, {
      method: "POST",
      body: JSON.stringify({ id }),
    });
  };

  const paginatePost = async (page) => {
    dispatch({ type: "startLoading" });
    fetchData(`/api/post?page=${page}`, {}, "getAllPosts");
  };

  const searchPost = async (searchData) => {
    dispatch({ type: "startLoading" });
    fetchData(
      `/api/post?title=${searchData.title}&tag=${searchData.tag}&categoryId=${searchData.categoryId}&lang=${searchData.lang}&status=${searchData.status}`,
      {},
      "getAllPosts"
    );
  };

  const getCategoryPosts = async (categoryId, currentPostId, lang) => {
    dispatch({ type: "startLoading" });
    fetchData(
      `/api/post?categoryId=${categoryId}&currentPostId=${currentPostId}&lang=${lang}`,
      {},
      "getCategoryPosts"
    );
  };

  const getFeaturedPosts = async (lang) => {
    dispatch({ type: "startFeaturedLoading" });
    fetchData(
      `/api/post?lang=${lang ?? "en"}&featured=true`,
      { isFeatured: true },
      "getFeaturedPosts"
    );
  };

  const getAllPosts = async (params) => {
    dispatch({ type: "startLoading" });
    fetchData(
      `/api/post?lang=${params.lang ?? "en"}&featured=${
        params.featured ?? false
      }&status=${params.status}`,
      {},
      "getAllPosts"
    );
  };

  const getOnePost = async (id, lang) => {
    dispatch({ type: "startLoading" });
    fetchData(`/api/post/${id}?lang=${lang}`, {}, "getOnePost");
  };

  const updatePost = async (formData) => {
    dispatch({ type: "startLoading" });
    fetchData(
      `/api/post/${formData.get("id")}`,
      {
        method: "PUT",
        body: formData,
      },
      "updatePost"
    );
  };

  const deletePost = async (id) => {
    dispatch({ type: "startLoading" });
    try {
      const res = await fetch(`/api/post/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        const result = await res.json();
        if (result.success) {
          getAllPosts({ lang: "en", featured: false, status: true });
        } else {
          dispatch({ type: "fail", payload: result.message });
        }
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    } finally {
      dispatch({ type: "endLoading" });
    }
  };

  const createPost = async (data) => {
    dispatch({ type: "startLoading" });
    try {
      const res = await fetch("/api/post/", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        const result = await res.json();
        if (result.success) {
          dispatch({ type: "getResponseData", payload: result.message });
          getAllPosts({ lang: "en", featured: false, status: "" });
        } else {
          dispatch({ type: "fail", payload: result.message });
        }
      }
    } catch (error) {
      dispatch({ type: "fail", payload: error.message });
    } finally {
      dispatch({ type: "endLoading" });
    }
  };

  return (
    <PostContext.Provider
      value={{
        state,
        dispatch,
        getAllPosts,
        getOnePost,
        updatePost,
        deletePost,
        createPost,
        searchPost,
        paginatePost,
        featureChanged,
        getFeaturedPosts,
        getCategoryPosts,
        reactionAdded,
        statusChanged,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
