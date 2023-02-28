import React from "react";

function Greet({name,heroName}) {
  //  console.log(name)
  return (
    <div className="Greeting">
      <h1>Hello!! {name} aka {heroName}</h1>
    </div>
  );
}

export default Greet;
