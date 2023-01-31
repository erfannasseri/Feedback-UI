import React from 'react'
import { useContext } from 'react'
import FeedbackContext from './FeedbackContext';


function Feedbackstats() {

  const {feedback} = useContext(FeedbackContext);


  return (
    <div className="feedback-stats">
        <h4>Reviews : {feedback.length}</h4>
    </div>
  )
}

export default Feedbackstats