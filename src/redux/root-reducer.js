import postReducer from "./post/post.reducer";

const { combineReducers } = require("redux");

export const rootReducer = combineReducers({
    post: postReducer
})