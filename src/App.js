import React, { useEffect, useState } from "react";

let countz = 0;


function Counter({name}){
  // console.log(`Counter ${name} Created`);
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Count = {count}</button>
  );
}

function NameList(){
  
  const [nameList, setNameList] = useState(['Hasan', 'Zeliha', 'Bortu', 'Fethi']);
  const [name, setName] = useState('');
  const namesList = nameList.map( name => (<li key={name}>{name}</li>));

  const addName = () => {
    setNameList([...nameList,name]);
    setName('');
  }

  return (
    <>
     <Counter />
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></input>
      <button onClick={ addName }>Add</button>
      <ul>
        {namesList}
      </ul>
    </>
  
  );
}


function App() {
  return (
    <div className="App">
      <NameList />
    </div>
  );
}

export default App;
