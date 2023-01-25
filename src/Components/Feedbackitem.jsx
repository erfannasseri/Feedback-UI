import {FaTimes} from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card' 
import FeedbackContext from './FeedbackContext';
import { useContext } from 'react';

function FeedbackItem({item}) {
  
  const {deleteFeedback} = useContext(FeedbackContext); 

  return (
    <Card reverse = {false} >
        <div className='num-display'>{item.rating} </div>
        <button onClick={()=>deleteFeedback(item.id)} className='close'>
          <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem