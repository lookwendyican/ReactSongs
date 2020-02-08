import React, { Component } from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div>
        <h5 className="text-center text-danger"> Please select a song.</h5>
      </div>
    );
  }
  return (
    <div>
      <h3 className="text-primary"> Details for: </h3>
      <br />
      <p>
        <span className="text-primary">Title:</span> {song.title}
        <br />
        <br />
        <span className="text-primary">Singer: </span>
        {song.singer}
        <br />
        <br />
        <span className="text-primary">Duration:</span> {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
