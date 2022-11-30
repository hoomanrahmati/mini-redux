import axios from "axios";
import {
  ADD_PERSON,
  REMOVE_PERSON,
  ADD_LIST,
  POST_START,
  POST_ERROR,
  POST_SUCCESS,
} from "./actionType";

export const addPerson = (name) => {
  return {
    type: ADD_PERSON,
    payload: { name, id: Math.random() * 10000 },
  };
};

export const removePerson = (id) => ({
  type: REMOVE_PERSON,
  payload: { id },
});

export const addList = (list) => ({
  type: ADD_LIST,
  payload: {
    list,
  },
});

export const postStart = () => ({
  type: POST_START,
  payload: {},
});

export const postError = (errorMessage) => ({
  type: POST_ERROR,
  payload: { err: errorMessage },
});

export const postSuccess = (data) => ({
  type: POST_SUCCESS,
  payload: { list: data },
});

export const fetchList = () => {
  return (dispatch) => {
    dispatch(postStart());
    console.log("********");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        const data = result.data.map((item) => ({
          name: item.title,
          id: item.id,
        }));
        dispatch(postSuccess(data));
      })
      .catch((err) => {
        dispatch(postError(err.message));
      });
  };
};
