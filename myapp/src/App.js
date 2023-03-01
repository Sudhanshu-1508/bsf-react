import React from "react";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import './App.css';
import Message from "./components/Message";
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./NameList";

function App() {
  return (
    <div className="App">
      <NameList />
     <Message />
      <Greet name= "Sudhanshu" heroName="123" />
      <Greet name={"Kulkarni"} heroName="searfa"/>
      <Hello></Hello> 
      <FunctionClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
    </div>
  );
}

export default App;
