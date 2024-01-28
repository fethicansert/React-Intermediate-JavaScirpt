import React from 'react'
import TodoList from './TodoList';
import { TodoData } from '../Data/TodoData';
import { useState } from 'react';
import Header from './Header';
import Counter from './Counter'

const Home = () => {
    const [todos, setTodos] = useState(TodoData);

    const addTodo = () => {
        const newTodo = {
            id:4,
            text:'Todo 4'
        };

        setTodos([newTodo,...todos]);
    }
    return (
        <main>
            <button onClick={addTodo}>Add Todo</button>
            <TodoList todos={todos} setTodos={setTodos}/>
            
        </main>
  )
}

export default Home





