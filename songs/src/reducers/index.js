import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Malamente", singer: "Rosalia", duration: "4:05" },
    { title: "Ocean Eyes", singer: "Billie Eilish", duration: "3:25" },
    { title: "Tormento", singer: "Mon Laferte", duration: "6:05" },
    {
      title: "Beautiful People",
      singer: "Ed Sherran and Khalid",
      duration: "2:55"
    }
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
