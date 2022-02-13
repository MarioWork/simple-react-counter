import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";


export default function App(){

    const [count,setCount] = React.useState(0);

    function add(){
        console.log("hello add");
        setCount(prevCount =>prevCount+1);
    }
    
    function sub(){
        console.log("hello sub");
        setCount(prevCount =>  prevCount-1);
    }


    return (
        <div className="container">
            <div className="counter--container">
                    <button className="counter--btn" onClick={sub}>-</button>
                    <h1 className="counter">{count}</h1>
                    <button className="counter--btn" onClick={add}>+</button>
            </div>
        </div>
    );
}

ReactDOM.render(<App />,document.getElementById("root"));