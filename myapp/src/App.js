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
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import Form from "./components/Form";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (    
    <div className="App">
      {/* 
      <Inline />
      <StyleSheet primary={true}/>
      <NameList />
     <Message />
      <Greet name= "Sudhanshu" heroName="123" />
      <Greet name={"Kulkarni"} heroName="searfa"/>
      <Hello></Hello> 
      <FunctionClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
      */}
       <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">

          </Route>
        </Switch>
      <Form />
      <About />
    </div>
  ); 
}

export default App;
