import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Please Select A Song to see the Details</div>;
  }

  return (
    <React.Fragment>
      <div className="ui header">Song Details</div>
      <div>
        Title: {selectedSong.title} <br></br> Duration: {selectedSong.duration}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
