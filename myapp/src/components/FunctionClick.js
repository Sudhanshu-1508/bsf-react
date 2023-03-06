import React from "react";

function FunctionClick() {

    function clickHandler(){
        console.log("clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>click</button>    {/* camel case and curly braces */}
        </div>
    )
}

export default FunctionClick