import React, { memo, useReducer } from 'react'

const Form = memo(({ handleSubmit }) => {
    console.log("Form Created");
    const [state, dispatch] = useReducer((state, action) => {
        return {...state,...action}
    },{
        username:'',
        password:''
    })
  
    return (
        <form>
            <input type='text' value={state.username} onChange={(e) => dispatch({username: e.target.value})} placeholder='Username' required></input>
            <input type='password' value={state.password} onChange={(e) => dispatch({password: e.target.value})} placeholder='Password' required></input>
            <button onClick={handleSubmit}> Submit</button>
            <button type='button' onClick={() => {dispatch({username:"Nameszzz"})}}>Button</button>
        </form>
    )
});

export default Form
