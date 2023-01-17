import {FaTimes} from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card' 
function FeedbackItem({item,deleteHandler}) {
    

  return (
    <Card reverse = {false}>
        <div className='num-display'>{item.rating}</div>
        <button onClick={deleteHandler} className='close'>
          <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem