import React, { useReducer } from 'react'

const UserForm = () => {
    const [state, dispatch] = useReducer((state, action) => (
        {...state,...action}
    ),
    {
        firstname: '',
        lastname: ''
    });


  return (
    <div>
      <br/>
      <label>
         Firstname:
        <input value={state.firstname} onChange={ (e) => dispatch({firstname: e.target.value}) }></input>
      </label>
      <label>
        LastName:
        <input value={state.lastname} onChange={ (e) => dispatch({ lastname: e.target.value }) }></input>
      </label>  
    </div>
  )
}

export default UserForm
