import React, { useState } from "react";
import Greeting from "./components/Greeting";
import NameInput from "./components/NameInput";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <Greeting name={name} /> 
      <NameInput setName={setName} /> 
    </div>
  );
}

export default App;
