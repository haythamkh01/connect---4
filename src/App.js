
import './App.css';
import React ,{useState} from "react";
import Board from "./components/Board";
import DropZone from "./components/DropZone";
import ColorPicker from "./components/ColorPicker";

function App() {

  return (
      <div className="App">



          <ColorPicker/>
          <div className='game-play'>
              <h1>press RIGHT and LEFT to move the coin</h1>
              <h1>press ENTER or SPACE to drop the coin</h1>
          </div>

          <DropZone/>
          <Board/>

      </div>

  );
}

export default App;
