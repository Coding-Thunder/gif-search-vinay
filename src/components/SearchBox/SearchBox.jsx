import React, { Component } from "react";
import { FaUserTag } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { AiOutlineGif } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import Header from "../Header/Header";
import { addPost, toogleGif, tooglePost } from "../../redux/Post/Post.actions";
import { connect } from "react-redux";
import GifBox from "../GifBox/GifBox";

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      gifUrl: null,
      BottomElementsItems: [
        {
          icons: FaUserTag,
          title: "Tag friends",
        },
        {
          icons: IoLocation,
          title: "Check in",
        },
        {
          icons: AiOutlineGif,
          title: "GIF",
        },
        {
          icons: FaCalendarAlt,
          title: "Tag Event",
        },
      ],
    };
  }

  setGifUrl = (url) => {
    this.setState({ gifUrl: url }, console.log(this.state));
  };

  CreateANewPost = () => {
    if (this.props.posts[0]) {
      this.props.addAPost([
        ...this.props.posts,
        { title: this.state.title, url: this.state.gifUrl },
      ]);
    } else {
      this.props.addAPost([
        { title: this.state.title, url: this.state.gifUrl },
      ]);
    }
    this.setState({ title: "", gifUrl: null }, () => {
      this.props.toggle();
      this.props.gifToggle();
    });
  };
  render() {
    return (
      <>
        <div
          style={{
            minHeight: "400px",
          }}
          className="bg-white w-2/5   drop-shadow-lg rounded relative"
        >
          <Header />
          <div className="w-full h-40  p-4">
            <input
              type="text"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
              className=" w-full border-none outline-0"
              placeholder="What's on your mind"
            />
          </div>
          {this.state.gifUrl && (
            <div className="flex justify-center">
              {" "}
              <img className="w-50 -mb-20" src={this.state.gifUrl} alt="" />
            </div>
          )}
          <button
            type="button"
            class="absolute top-20  right-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={this.CreateANewPost}
          >
            Add Post{" "}
          </button>

          <div className="absolute bottom-0 justify-between items-center w-full h-auto flex flex-wrap p-4 ">
            {this.state.BottomElementsItems.map((data) => (
              <div
                onClick={
                  data.title === "GIF" ? this.props.gifToggle : undefined
                }
                className="flex bg-slate-100 hover:bg-slate-200 cursor-pointer text-base  w-5/12 p-3 items-center mb-2 rounded-3xl"
              >
                <data.icons className="mr-4" />
                <p>{data.title}</p>
              </div>
            ))}
          </div>
          {this.props.gifShow && <GifBox setGifUrl={this.setGifUrl} />}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  gifShow: state.post.showGif,
  posts: state.post.posts,
});

const mapDispatchToProps = (dispatch) => ({
  gifToggle: () => dispatch(toogleGif()),
  addAPost: (list) => dispatch(addPost(list)),
  toggle: () => dispatch(tooglePost()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
