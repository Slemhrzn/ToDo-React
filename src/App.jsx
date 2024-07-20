import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //storing place or database
  const [todos, setToDos] = useState([
    {
      id:1,
      name:"First task"
    }
    
  ])

  //for taking data from form 
  const [data,setData] = useState({
    id:"",
    name:""
  })

 function handleSubmit(e){
    e.preventDefault();
    setToDos([...todos,data])

 }


  console.log(todos)

  return (
   <>
   <h1>To do apps</h1>
   <form onSubmit={handleSubmit}>
    <input onChange={(e)=>setData({...data,id:e.target.value})}  type="text" placeholder='ENter id' />
    <input onChange={(e)=>setData({...data,name:e.target.value})} type="text" placeholder='Task name' />
    <button>Add</button>
   </form>
   
    <div></div>
    <div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
 {
  todos.map((todo)=>(
    <tr>
        <td>{todo.id}</td>
        <td>{todo.name}</td>
        <td>Delete</td>
        <td>Edit</td>
    </tr>
  ))
 }

    
  </tbody>
</table>
    </div>
   </>
  )
}

export default App
