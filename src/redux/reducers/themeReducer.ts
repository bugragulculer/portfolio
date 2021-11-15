const themeReducer = (state = "light", action: any): any => {
  switch (action.type) {
    case "CHANGE_THEME":
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
