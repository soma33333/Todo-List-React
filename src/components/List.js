import React from 'react'

export default function List({todo  ,toggle,deletetodo}) {
    
  return(
    <>
    <ul>
        {todo.map((to)=>{
           return <li  key={to.id}>
            <input type='checkbox' checked={to.completed} onChange={(e)=>toggle(to.id,e.target.checked)}/>
              {to.title} 
            <button onClick={()=>deletetodo(to.id)}>delete</button>

           </li>
        })}
      </ul>
    
    </>
  )
}
