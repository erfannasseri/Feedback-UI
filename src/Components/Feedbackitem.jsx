import React from 'react'
function FeedbackItem(props) {
    

  return (
    <div className='card'>
        <div className='num-display'>{props.rating}</div>
        <div className='text-display'>{props.text}</div>
        
    </div>
  )
}

export default FeedbackItem