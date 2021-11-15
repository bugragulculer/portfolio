const langReducer = (state = "en", action: any): any => {
  switch (action.type) {
    case "CHANGE_LANG":
      return action.payload;
    default:
      return state;
  }
};

export default langReducer;
