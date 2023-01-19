import { v4 as uuidv4} from 'uuid'
import Header from './Components/Header';
import { useState } from 'react'
import FeedbackData from './data/Feedbackdata';
import Feedbacklist from './Components/Feedbacklist';
import Feedbackstats from './Components/Feedbackstats';
import Feedbackform from './Components/Feedbackform';
function App() {

    const [Feedback, setFeedback] = useState(FeedbackData);
   
   
    const deleteHandler=(id)=>{
      if(window.confirm('Are You Sure?!')){
        
       setFeedback(Feedback.filter((item)=> item.id!==id)) 
      }
    }
    
    const addFeedback = (newFeedback)=>{
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...Feedback])
      console.log(Feedback)
    }

      
  return (
    <>
    <Header/>
    
    <div className='container'>
        <Feedbackform submit = {addFeedback}/>
        <Feedbackstats feedback={Feedback}/>
        <Feedbacklist key={Feedback.id}
                      feedback={Feedback}
                      deleteHandler={deleteHandler} 
                      />
    </div>
    
    </>
  );
}

export default App;
