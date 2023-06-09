import React,{useState} from 'react'

import { EditTodoForm } from './EditTodoForm';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm'

import {v4 as uuidv4} from 'uuid';
uuidv4();

export const TodoWrapper = () => {
    const [todos,setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id:uuidv4(), task:todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    // strickethrough: creoss somthing out by drawing a line thorugh it  
    const toggleComplete = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const editTodo = id => {
      setTodos(todos.map(todo=> todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }
    const editTask = (task,id) =>{
      setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id))
    }


  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>

        <TodoForm addTodo={addTodo}/>

        {/* Get each value set on todos */} 
        {todos.map((todo,index)=>(
          todo.isEditing ?(
            <EditTodoForm editTodo={editTask} task={todo}/>
          ) : (
            <Todo task={todo} id={index} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo}
            editTodo={editTodo}/>
          )
        ))}
    </div>
  )
}
