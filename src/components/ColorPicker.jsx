import React, {useState} from "react";
import    "../App.css"
import "./ColorPicker.css"

const ColorPicker =()=>{

    const [currPlayerColor ,setCurrPlayerColor] =useState("#ffffff")
    const [oppPlayerColor ,setOppPlayerColor] =useState("#ffffff")

    const handleColorChange =(e)=>{
       setCurrPlayerColor(e.target.value)

    }
    const handleOppColorChange =(e)=>{
     setOppPlayerColor(e.target.value)
    }





    return <div className="color-picker-container">
        <h1>Player One Color Picker</h1>
        <div className="color-display" style={{backgroundColor: currPlayerColor }}>

        </div>
        <label>Player One Select a color :</label>
        <input type="color" value={currPlayerColor} onChange={handleColorChange}/>


        <h1>Player Two Color Picker</h1>
        <div className="color-display2" style={{backgroundColor: oppPlayerColor}}>

        </div>
        <label>Player Two Select a color :</label>
        <input type="color" value={oppPlayerColor} onChange={handleOppColorChange}/>


    </div>
}
export default ColorPicker
