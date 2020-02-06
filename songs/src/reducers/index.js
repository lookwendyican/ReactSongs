import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Malamente", duration: "4:05" },
    { title: "Ocean Eyes", duration: "3:25" },
    { title: "Tormento", duration: "6:05" },
    { title: "Beautiful People", duration: "2:55" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
