import {FaTimes , FaEdit} from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card' 
import FeedbackContext from './FeedbackContext';
import { useContext } from 'react';

function FeedbackItem({item}) {
  
  const {deleteFeedback,EditFeedbackHandler} = useContext(FeedbackContext); 

  return (
    <Card reverse = {false} >
        <div className='num-display'>{item.rating} </div>
        
        <button onClick={()=>deleteFeedback(item.id)} className='close'>
          <FaTimes color='purple'/>
        </button>
       
        <button onClick={()=> EditFeedbackHandler(item)} className='edit'>
          <FaEdit color='purple'/>
        </button>
        
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem