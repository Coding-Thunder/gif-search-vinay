import postReducer from "./Post/Post.reducer";

const { combineReducers } = require("redux");

export const rootReducer = combineReducers({
  post: postReducer,
});
