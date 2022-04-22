import axios from "axios";
import React, { useEffect, useState } from "react";

const GifBox = ({ setGifUrl }) => {
  const [state, setState] = useState({
    title: "trending",
    gifs: null,
    loading: false,
    error: "",
  });

  const fetchGif = async (field) => {
    setState({ loading: true });
    const gifyURL = `https://api.giphy.com/v1/gifs/search?api_key=nnnO1yAe2zK1JCSgkwJIxQzmH74cO1iR&limit=20&offset=0&q=${field}`;
    await axios
      .get(gifyURL)
      .then((response) => {
        setState({ gifs: response.data.data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchGif(state.title);
  }, [state.title]);
  return (
    <div className="relative w-96 h-96 bottom-0 -left-96 bg-white border-2 rounded  overflow-x-hidden overflow-y-scroll">
      <div className="w-full h-20 p-4">
        <input
          type="text"
          value={state.title}
          onChange={(e) => {
            setState({ title: e.target.value });
          }}
          className="border-none w-full p-2 outline-0 shadow-md"
          placeholder="What's on your mind"
        />
      </div>
      <div className="flex flex-wrap justify-between p-4 ">
        {state.gifs &&
          state.gifs.map((data) => (
            <img
              key={data.id}
              className="w-20 cursor-pointer"
              onClick={() => setGifUrl(data.images.fixed_height.url)}
              src={data.images.fixed_height.url}
              alt=""
            />
          ))}
      </div>
    </div>
  );
};

export default GifBox;
