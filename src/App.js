import React, { useCallback, useEffect, memo, useReducer, useState } from "react";
import NameList from "./Components/NameList";
import UserForm from "./Components/UserForm";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App(){
  const [show, setShow] = useState(true);


  return (
    <div className="App">
      <Header />
      {show && <StopWatch />}
      <button onClick={() => setShow(false)}>Hide</button>
    </div>
  );
}


export default App;


const StopWatch = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);

  console.log(`count ${count}`);
  console.log(`name ${name}`);

  useEffect(() => {
    // const countInterval = setInterval(() => {
    //   console.log(`Interval Working ${count}`);
    //   setCount(count => count + 1);
    // },1000);
    console.log("Use Effetct");

    const clear = () => {
      console.log("Interval Clear");
    }
    return clear;

  },[count]);



  return (
    <>
      <p style={{textAlign:'center'}} onClick={console.log('p')}>{count}</p>
      <button onClick={() => {
        setCount(count => count + 1);
        setName(name => name + 1);
      }}>Add</button>
    </>
  );
}

// The cleanup function runs not only during unmount, but before every re-render with changed dependencies. 
//Cleanup function sadece unmountda calismaz eger dependecies degisdiysede calisir
//onClick event calistiginda reacr event handlerin butun codu islemesine izin verir 
//Event icinde setState fonkiyonuna geldigimizde direkt re-render yapmayiz butun codu isleriz
//Eger baska bir setState var ise onu da isleme aliriz butun event handle kodu islendikten sonra re-render yapilir...

//ilk renderde comp mount olur ve ardindan useEffect calisir 
//Button tiklamnip state degistiginde state yenilerniz re-render yapilir ve eger dependecies degisdiyse
//useEffect icindeki cleanUp fonksoyinuda calisir
//ve ardindan useEffect calisir
//Yani === mount copm => useEffect => new State => update Comp => if(dependecies change) => cleanUp func => useEffect