import React from "react";
import { connect } from "react-redux";

const SongList = (props) => {
  console.log(props);
  return <div>Song List</div>;
};
//This can be named any thing but its a convention so use it as is
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
