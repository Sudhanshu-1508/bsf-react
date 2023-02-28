import React from 'react';

const Hello = () =>{
  //  return(
  //      <div>
  //          <h1>JSX</h1>
  //      </div>
  //  )
        return React.createElement("div",
        {id: "Hello", className: "DummyClass"},
        React.createElement("h1", null , "JSX"))
}

export default Hello;