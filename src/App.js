import React, { useCallback, useEffect, memo, useReducer, useState } from "react";
import NameList from "./Components/NameList";
import UserForm from "./Components/UserForm";

//1083


const GreetingMemo = memo(function Greeting({name, func}){
  func("Grettings Comp")
  return <p>Gretings {name}</p>
});



function App(){
  console.log("App Created");
  const [nameList, setNameList] = useState([]);
  const [nameId, setNameId] = useState(null)
  const [comment, setComment] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:3500/names`).
    then(response => response.json()).
    then(data => setNameList(data)).
    catch(err => console.log(err));
  },[]);

  const fetchComment = useCallback((id) => {
    fetch(`http://localhost:3500/comments/${id}`)
      .then(res => res.json())
      .then(data => {
        setComment(data.comment)
        setNameId(id);
      });
  },[]);

  const sayName = (name) => {
    console.log(name);
  }
  
  const sayNameMemo = useCallback((name) => {
    console.log(name);
  },[]);

  //Fonksyion ayni ama yinede memo olan Grettings Components tekrar re-render yapiliyor
  //Bunun nedeni fonkisyonun bi reference tutmasi ve her re-render yapildiginda tekrar farki bi reference almasi
  //useCall back ile bu fonksiyonu cache lemeliyim ki tekrar tekrar calismasin...
  return (
    <div className="App">
        {nameList.length && nameList.map(name => <button  onClick={ () => fetchComment(name.id) }  key={ name.id }>{name.name}</button>)} 
        <h2>{comment || 'No Comments'}</h2>   
        <GreetingMemo name={comment} func={sayNameMemo}/>
        <button onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  );
}

export default App;


  //useCallback kullandiginda bu fonksiyon her bi re render da tekrar yaratilmayacak cache de sakli olacak
  //Eger ver eger nameId degisirse bu fonksiyon yeni nameId ile tekrar olusturulacak...

  // function fetchComment(id){
  //   fetch(`http://localhost:3500/comments/${id}`)
  //     .then(res => res.json())
  //     .then(data => setComment(data.comment));
  // }
