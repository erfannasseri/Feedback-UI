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
        setFeedback(Feedback.filter((item)=>item.id !== id))
      }
    }
  return (
    <>
    <Header/>
    
    <div className='container'>
        <Feedbackform/>
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
