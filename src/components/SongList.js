import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions"

const SongList = (props) => {
  const renderedList = props.songs.map((song, i) => (
    <div className="item" key={i}>
      <div className="right floated content">
        <button onClick={()=>props.selectSong(song)} className="ui button primary">Select</button>
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

export default connect(mapStateToProps, {selectSong})(SongList);
