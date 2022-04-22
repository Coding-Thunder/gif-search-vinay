const { default: PostTypes } = require("./Post.types");

const INITIAL_STATE = {
  tooglePost: true,
  posts: [],
  showGif: false,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostTypes.TOOGLE_ADD_POST:
      return {
        ...state,
        tooglePost: !state.tooglePost,
      };
    case PostTypes.GIF_TOOGLE:
      return {
        ...state,
        showGif: !state.showGif,
      };
    case PostTypes.CREATE_A_POST:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
