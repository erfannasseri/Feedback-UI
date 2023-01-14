import React from 'react'
import Feedbackitem from './Feedbackitem.jsx'

function Feedbacklist({feedback}) {
   if (!feedback || feedback.length===0){
    return <p>No Feedback Yet</p>
   }
   else
  return (
    <div>
      {feedback.map((item)=>{
            return (
                <div>
                    <Feedbackitem key={item.id} rating = {item.rating}  text = {item.text} />
                </div>
            )
      })}
    </div>
  )
}

export default Feedbacklist