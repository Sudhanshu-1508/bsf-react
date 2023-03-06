import React from "react";
import Person from "./components/Person";

function NameList() {
  const names = ["B", "C", "A"];
  //const nameList = names.map(name => <h2>{name}</h2>)

  //KeyProp should be unique
  const persons = [
    {
      id: 1,
      name: "A",
      age: 20,
    },
    {
      id: 2,
      name: "B",
      age: 30,
    },
    {
      id: 3,
      name: "C",
      age: 40,
    },
  ];
  const nameList = names.map((name) => <h2 key={name}>{name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;
