import { combineReducers } from "redux";
import postReducer from "./Post/Post.reducer";

const rootReducer = combineReducers({
  post: postReducer,
});
export default rootReducer;
