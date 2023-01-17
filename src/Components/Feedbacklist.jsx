import React from 'react'
import Feedbackitem from './Feedbackitem.jsx'

function Feedbacklist({feedback , deleteHandler}) {


   if (!feedback || feedback.length===0){
    return <p>No Feedback Yet</p>
   }
   else
  return (
    <div>
      {feedback.map((item)=>{
            return (
                <div>
                    <Feedbackitem key={item.id} 
                                  item = {item}
                                  deleteHandler = {()=>deleteHandler(item.id)} />
                </div>
            )
      })}
    </div>
  )
}

export default Feedbacklist