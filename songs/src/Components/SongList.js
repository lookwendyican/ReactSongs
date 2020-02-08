import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div>
          {" "}
          <ListGroup key={song.title}>
            <ListGroupItem className="content">
              {song.title}

              <button
                className="btn btn-info float-right"
                onClick={() => this.props.selectSong(song)}
              >
                Select
              </button>
            </ListGroupItem>
          </ListGroup>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

//The state is from our reduxStore
const mapStateToProps = state => {
  return { songs: state.songs };
};

//First argument is mapStateToProps.
//Second argument is selectSong from the actions
//Connect function automatically takes the action that gets returned and throws it into the DISPATCH function.
export default connect(mapStateToProps, { selectSong })(SongList);
