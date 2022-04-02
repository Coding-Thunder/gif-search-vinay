import PostTypes from "./Post.types";
const INITIAL_STATE = {
  hidden: true,
  Posts: [],
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostTypes.TOOGLE_ADD_POST:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default postReducer;
