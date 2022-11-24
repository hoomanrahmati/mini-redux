const reduccer = (state = [], action) => {
  switch (action.type) {
    case "addPerson":
      return [...state, { id: action.payload.id, name: action.payload.name }];
    case "removePerson":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default reduccer;
