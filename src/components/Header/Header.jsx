import React, { useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import { BiPhotoAlbum } from "react-icons/bi";
import { BsCameraVideoFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { tooglePost } from "../../redux/Post/Post.actions";
import { connect } from "react-redux";

const Header = ({ toogle }) => {
  const [Items] = useState([
    { icon: RiPencilFill, title: "Compose Post" },
    { icon: BiPhotoAlbum, title: "Photo/Video Album" },
    { icon: BsCameraVideoFill, title: "Live Video" },
  ]);
  return (
    <div className="bg-slate-100 flex p-2 ">
      {Items.map((data) => (
        <div className="flex  items-center mr-8 cursor-pointer">
          <data.icon className="mr-2" />
          <p className="text-blue-800">{data.title}</p>
        </div>
      ))}
      <GrClose onClick={toogle} className="absolute right-2 cursor-pointer" />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toogle: () => dispatch(tooglePost()),
});
export default connect(null, mapDispatchToProps)(Header);
