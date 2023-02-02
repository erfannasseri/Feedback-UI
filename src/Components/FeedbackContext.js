import { createContext , useState ,useEffect } from "react";
import { v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{
    
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setfeedback] = useState([])

    useEffect(() => {
      fetchFeedback()
    }, []);

    const fetchFeedback = async()=>{
      const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
      const data = await response.json()
      setfeedback(data)
      setIsLoading(false)
    }



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
             isLoading,
             }}> 
        {children}
     </FeedbackContext.Provider>
)}

export default FeedbackContext;