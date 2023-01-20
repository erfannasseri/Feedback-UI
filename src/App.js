import { v4 as uuidv4} from 'uuid'
import Header from './Components/Header';
import { useState } from 'react'
import FeedbackData from './data/Feedbackdata';
import Feedbacklist from './Components/Feedbacklist';
import Feedbackstats from './Components/Feedbackstats';
import Feedbackform from './Components/Feedbackform';
import AboutPage from './Components/Pages/AboutPage';
import AboutIcon from './Components/AboutIcon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
    <BrowserRouter>
    <Header/>
    <div className='container'>
    <Routes>
      <Route path='/Feedback-UI' element= {
        <>
                <Feedbackform submit = {addFeedback}/>
                <Feedbackstats feedback={Feedback}/>
                <Feedbacklist key={Feedback.id} feedback={Feedback} deleteHandler={deleteHandler} />
                <AboutIcon/>              
        </>
      } />       

      <Route path="/about" element={<AboutPage/>} />
    </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
