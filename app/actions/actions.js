export const addComment = (commentText) => {
  return {
    type: "NEW_COMMENT",
    commentText
  }
}