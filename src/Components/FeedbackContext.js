import { createContext , useState } from "react";
import { v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{

    const [feedback, setfeedback] = useState([{
        id:1,
        text:'this is a feedback from context 1',
        rating:'5'
    },
    {
      id:2,
      text:'this is a feedback from context 2',
      rating:'3'
  },
  {
    id:3,
    text:'this is a feedback from context 3',
    rating:'4'
    }])


    const [EditFeedback, setEditFeedback] = useState({
      item:{},
      edit: false
    });

    const EditFeedbackHandler =(item)=>{
      setEditFeedback({
        item,
        edit:true
      })
    }

    const deleteFeedback=(id)=>{
        if(window.confirm('Are You Sure?!')){
          
         setfeedback(feedback.filter((item)=> item.id!==id)) 
        }
      }

    const addFeedback = (newFeedback)=>{
         newFeedback.id = uuidv4()
         setfeedback([newFeedback, ...feedback])
      }  

    const updateFeedback =(id,uptItem)=>{
      setfeedback(feedback.map((item)=>(item.id === id)?{...item,...uptItem}:item))
      setEditFeedback({
        edit:false
      })
    }

     return ( <FeedbackContext.Provider value={{
             feedback ,
             deleteFeedback ,
             addFeedback ,
             EditFeedbackHandler ,
             EditFeedback,
             updateFeedback,
             }}> 
        {children}
     </FeedbackContext.Provider>
)}

export default FeedbackContext;