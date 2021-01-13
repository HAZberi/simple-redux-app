import React from "react";
import { connect } from "react-redux";

const SongList = (props) => {
  console.log(props);

  const renderedList = props.songs.map((song) => (
    <div className="item">
      <div className="right floated content">
        <button className="ui button primary">Select</button>
      </div>
      <div className="content">{song.title}</div>
    </div>
  ));

  return <div className="ui divided list">{renderedList}</div>;
};
//This can be named any thing but its a convention so use it as is
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
