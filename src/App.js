import { connect } from "react-redux";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import { tooglePost } from "./redux/post/post.actions";

function App({ show, posts, toogle }) {
  return (
    <div className="app flex justify-center items-center">
      <button
        type="button"
        class="fixed top-10 right-10  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={toogle}
      >
        CLick this button to add a post{" "}
      </button>
      {show ? (
        <SearchBox />
      ) : (
        <div>
          {Array.isArray(posts) &&
            posts.map((data) => (
              <div className="shadow flex flex-col justify-center items-center rounded-lg mb-6 p-4">
                <h1 className="mb-4">{data.title}</h1>
                <img src={data.url} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  show: state.post.tooglePost,
  posts: state.post.posts,
});
const mapDispatchToProps = (dispatch) => ({
  toogle: () => dispatch(tooglePost()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
