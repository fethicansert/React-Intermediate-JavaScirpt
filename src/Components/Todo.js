import React from 'react'

const Todo = ({todo, setTodos}) => {

    const handleDelete = (id) => {
       setTodos(prevTodo => {
        return prevTodo.filter(todo => todo.id !== id );
       })
    }
    return (
        <li  className='todo'>
            {todo.text}
            <button onClick={() => handleDelete(todo.id) } className='delete-todo'>Delete</button>
        </li>
    );
}

export default Todo;
