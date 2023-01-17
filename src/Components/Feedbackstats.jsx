import React from 'react'



function Feedbackstats({feedback}) {
    let Avrage =
        feedback.reduce((acc,cur)=>{
            return acc+cur.rating
        },0)/feedback.length

        Avrage = Avrage.toFixed(1).replace(/[.,]0$/,'')
    
  return (
    <div className="feedback-stats">
        <h3>Reviews : {feedback.length}</h3>
        <h3>Rating Avrage : {Avrage}</h3>
    </div>
  )
}

export default Feedbackstats