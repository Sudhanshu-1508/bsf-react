import React from "react";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import './App.css';
import Message from "./components/Message";
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
     <Message />
      <Greet name= "Sudhanshu" heroName="123" />
      <Greet name={"Kulkarni"} heroName="searfa"/>
      <Hello></Hello> 
      <FunctionClick />
      <EventBind />
      <ParentComponent />
    </div>
  );
}

export default App;
