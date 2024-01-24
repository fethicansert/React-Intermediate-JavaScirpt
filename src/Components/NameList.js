import React from 'react'
import { useReducer } from 'react';

//Ayni sayfada userForm ve NameList olmasi bile uygulamayi complex hale getirdi...!!
//Compinent halinda calismak daha anlasilir ve daha kolay...
const NameList = () => {
  
  //*State ayni zamanda yapacagi isi olusturuyorum OP
  const [ state, dispatch ] = useReducer((state, action) => {
    switch(action.type) {

      case "SET_NAME" :
        return {...state, name: action.payload} //returning object

      case "ADD_NAME":
        return {
          ...state,
          names: [...state.names, state.name],
          name:''                                 //**Tek seferde multiple state set setName kullanmamiza gerek kalmadi
        }
    }
  },{
    names: ['Ahmet'],
    name: ''
  });

  const nameList = state.names.map((name, index) => (<li key={index}>{name}</li>)); //map also gives index value as argument to use in function

  return (
    <div className="App">
     <input value={state.name} onChange={(e) => dispatch({ type:"SET_NAME",  payload: e.target.value })}></input>
     <ul>
        {nameList}
     </ul>
     <button onClick={() => dispatch({ type:'ADD_NAME' })}>Add</button>  {/* ***Sadece dispatch fonksiyoun kulladim */}
    </div>
  );
}

export default NameList
