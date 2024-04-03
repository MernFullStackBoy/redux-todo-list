import React from 'react'
import TodoForm from './components/TodoForm/TodoForm'
import TodoCart from './components/TodoCart/TodoCart'
import { useSelector } from 'react-redux'

function App() {

  const { todos } = useSelector(store => store.todo)

  return (
    <div className=' max-w-[450px] p-[20px] w-[100%] h-auto shadow mx-auto mt-[20px] rounded-[20px] '>
      <TodoForm />
      <br />
      {todos?.map(todo => (
        <TodoCart key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default App