export const commentReducer = (state="", action) => {
  switch(action.type) {
    case "NEW_COMMENT":
    return action.commentText;

    default:
      return state;
  }
}