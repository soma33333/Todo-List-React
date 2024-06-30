import React, { useState } from 'react'
import List from './List'

export default function Form() {
 
    const [item ,setitem]=useState("")
       const  [todo,settodo]=useState([])

    const handlesubmit=(e)=>{
        e.preventDefault()
        settodo((currtodo)=>{
            return [...currtodo,{id:crypto.randomUUID(), title:item,completed:false}]
        })
        setitem("")
    }


     function deletetodo(id){
        settodo((cuurtodo)=>{
            return  cuurtodo.filter((to)=>to.id!==id)
        }
        
        )
    }

    function toggle(id,completed){
        settodo(curtodo=>{
            return curtodo.map(to=>{
                if(to.id===id){
                    return  {...to,completed}
                }
                return to
            })
        })
    }

  return (
    <div >
      <form onSubmit={handlesubmit}>
        <input type='text'value={item} onChange={(e)=>setitem(e.target.value)} />
        <button  type='submit'> Add item</button>
      </form>


<List todo={todo} toggle={toggle} deletetodo={deletetodo}/>
      
    </div>
  )
}
