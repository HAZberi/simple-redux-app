import { combineReducers } from "redux";
// Curly Braces indicate that its a named export and not default export

const songsListReducer = () => {
    return [
        {title: "Tujhe Dekha tou ye jana", duration: "6:37"},
        {title: "Mere Rashke Qamar", duration: "4:37"},
        {title: "Sun Zara", duration: "5:37"},
        {title: "Biba Feat Farasat Anees", duration: "2:37"},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SELECT_SONG"){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsListReducer,
    selectedSong: selectedSongReducer,
});
