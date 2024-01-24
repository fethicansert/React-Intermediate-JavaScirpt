import React, { useEffect, useReducer, useState } from "react";
import NameList from "./Components/NameList";
import UserForm from "./Components/UserForm";

function App(){
  return (
    <div className="App">
      <NameList />
      <UserForm />
    </div>
  );
}

export default App;
