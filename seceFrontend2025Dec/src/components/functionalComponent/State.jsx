import { useState } from "react";
const State=()=>{
    const [State,updateState]=useState("State component");
    function setState(){
        updateState("updated state compo.");
    }
    function hstate(){
        updateState("mouse entered the game. ")
    }

    return(
        <div>
            <p>This is a {State} component</p>
            <button onClick={setState}>Update</button>
            <button onClick={hstate}>Touch me</button>
            <p>{State}</p>
            </div>
    );
};
export default State;