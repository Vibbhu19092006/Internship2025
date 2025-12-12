import { useState } from "react";
import UseEffect from "./UseEffect";
const UseState = () => {
    const [number, updateNumber] = useState(0);
    // const [text,updateText]=useState("");
    const subTract = () => {
        updateNumber(number - 1);
    }
    const addition = () => {
        updateNumber(number + 1);
    }
    const Reset = () => {
        updateNumber(0);

    }
    // const resetText=()=>{
        // updateText("");
    // };
    
    return (
        <div>
            <h2>UseState Hook Example</h2>
            <button onClick={subTract}>-</button>
            <input type="number" value={number} />
            <button onClick={addition}>+</button>
            <button onClick={Reset}>reset</button>
            <br>
            {/* <h2>Text Typing...</h2> */}
            {/* <button onClick={resetText}>Reset Text</button> */}
            {/* <input type="text" value={text} onChange={(event)=>{updateText(event.target.value)}}/> */}
            </br>
        </div>
    )
}
export default UseState;