import Header from './Components/Header';
import Feedbacklist from './Components/Feedbacklist';
import Feedbackstats from './Components/Feedbackstats';
import Feedbackform from './Components/Feedbackform';
import AboutPage from './Components/Pages/AboutPage';
import AboutIcon from './Components/AboutIcon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FeedbackProvider } from './Components/FeedbackContext';

function App() {

  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header/>
        <div className='container'>
          <Routes>
            <Route path='/Feedback-UI' element= {
              <>
                      <Feedbackform />
                      <Feedbackstats/>
                      <Feedbacklist />
                      <AboutIcon/>              
              </>
            } />       

            <Route path="/about" element={<AboutPage/>} />
          </Routes>
        </div>
      
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
