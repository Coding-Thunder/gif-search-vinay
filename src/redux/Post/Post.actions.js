import PostTypes from "./Post.types";

export const tooglePost = () => ({
  type: PostTypes.TOOGLE_ADD_POST,
});

export const toogleGif = () => ({
  type: PostTypes.GIF_TOOGLE,
});

export const addPost = (list) => ({
  type: PostTypes.CREATE_A_POST,
  payload: list,
});
