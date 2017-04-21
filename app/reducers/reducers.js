export const commnetReducer = (state="", action) => {
  switch(action.type) {
    case "NEW_COMMENT":
    return action.commentText;

    default:
      return state;
  }
}