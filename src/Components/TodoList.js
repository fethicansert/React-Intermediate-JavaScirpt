import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos}) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => <Todo key={todo.id} todo={todo} setTodos={setTodos}/>)}
    </ul>
  )
}

export default TodoList
