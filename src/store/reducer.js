import {
  ADD_LIST,
  ADD_PERSON,
  REMOVE_PERSON,
  POST_ERROR,
  POST_START,
  POST_SUCCESS,
} from "./actionType";
const reduccer = (state = [], action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, { id: action.payload.id, name: action.payload.name }];
    case REMOVE_PERSON:
      return state.filter((item) => item.id !== action.payload.id);
    case ADD_LIST:
      return [...state, ...action.payload.list];
    case POST_START:
      return [];
    case POST_SUCCESS:
      return action.payload.list;
    case POST_ERROR:
      return [];
    default:
      return state;
  }
};

export default reduccer;
