import React from "react";
//React is a default export here
//import { selectSong } from "../actions";
import SongList from "../components/SongList.js";

function App() {
  return (
    <div className="ui grid container" style={{marginTop: "4em"}}>
      <div className="ui row">
        <div className="eight wide column">
          <SongList />
        </div>
      </div>
    </div>
  );
}

export default App;
