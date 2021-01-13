//Action Creator
export const selectSong = (song) => {
    //Returns an action
    return {
        type: "SELECT_SONG",
        payload: song,
    }
}