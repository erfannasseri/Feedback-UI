import Header from './Components/Header';
import { useState } from 'react'
import FeedbackData from './data/Feedbackdata';
import Feedbacklist from './Components/Feedbacklist';

function App() {

    const [Feedback, setFeedback] = useState(FeedbackData);
   
  return (
    <>
    <Header/>
    <div className='container'>
        <Feedbacklist feedback={Feedback}/>
    </div>
    </>
  );
}

export default App;
