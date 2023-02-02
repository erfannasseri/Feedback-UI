import { createContext , useState ,useEffect } from "react";
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

    const deleteFeedback= async(id)=>{
        if(window.confirm('Are You Sure?!')){
        await fetch(`http://localhost:5000/feedback/${id}`, {
          method:"DELETE"
        })  
         setfeedback(feedback.filter((item)=> item.id!==id)) 
        }
      }

    const addFeedback = async (newFeedback)=>{
         const response = await fetch(`http://localhost:5000/feedback`,{
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newFeedback)
         })
         const data = await response.json()
         setfeedback([data, ...feedback])
      }  

    const updateFeedback =async(id,uptItem)=>{
      const response = await fetch(`http://localhost:5000/feedback/${id}`,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(uptItem)
      })
      const data = await response.json()
      setfeedback(feedback.map((item)=>(item.id === id)?{...item,...data}:item))
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