import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    console.log('--> value', value);
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    console.log('edit 111', edit)
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }
  console.log('After 2', todos)
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' :
      'todo-row'} key={index}>
      <div key={todo.id} onClick={() => {
       // console.log('before', todos);
        completeTodo(todo.id)
      }}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon' />
      </div>
    </div>
  ))
}

export default Todo