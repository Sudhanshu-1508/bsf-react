import React from "react";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import './App.css';
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
     {/* <Message />
      <Greet name= "Sudhanshu" heroName="Batman" />
      <Greet name={"Kulkarni"} heroName="Superman"/>
      <Hello></Hello> */}
      <Counter />
    </div>
  );
}

export default App;
