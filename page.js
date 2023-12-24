"use client"
import React, { useState } from 'react'

const page = () => {
  const[title, setTitle] = useState("")
  const[desc, setDesc] = useState("")
  const[mainTask, setMainTask] = useState([])
  const submit = (e)=>{
    e.preventDefault()//preventing to reload the page after adding the task
    setMainTask([...mainTask, {title,desc}])
    setTitle("")
    setDesc("")
    console.log(mainTask)
  }
  const deleteText = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }
  
  let render = <h2>No Task Available</h2>
 if(mainTask.length>0){
  render = mainTask.map((t,i)=>{
    return (
      <li key={i}/*setting the id for task */ className='flex items-center justify-between mb-5'>
      <div className='flex items-center justify-between w-2/3'>{/*data add on*/}
        <h5 className='text-xl font-semibold'>{t.title}</h5>
        <h6 className='text-lg font-medium'>{t.desc}</h6>    
      </div>
      <button onClick={()=>{ {/*setting delete task inside the function so that it does not call automatically  */}
        deleteText(i)
      }}
      className='bg-red-500 font-bold text-white px-4 py-2 rounded-md'>Delete Task</button>
      </li>
   
    ) 
  })
 }
  return (
    <>
      <h1 className='bg-blue-600 text-white font-bold p-5 text-center text-3xl'>
      Bikram's Todo list
      </h1>

      <form onSubmit={submit}>
        <input
        type='text'
        className='border-blue-600 text-xl border-4 rounded-md m-8 px-4 py-2'
        placeholder='Enter You Task'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value) //this is making the react understand what user is writting or 2way binding
        }}
        
        
        />
        <input
        type='text'
        className='border-blue-600 text-xl border-4 rounded-md m-8 px-4 py-2'
        placeholder='Describe Your Task'
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
        
        />
        <button className='bg-green-500 text-white px-4 py-3 text-xl font-semibold rounded-lg'>
          Add Task
        </button>
      </form>
      <hr/>
      {/* showing the task */}
      <div className='p-8 bg-blue-200'>
        <ul>
        {render} {/*task printout*/}
        </ul>
      </div>
      
    </>
  )
}


export default page
