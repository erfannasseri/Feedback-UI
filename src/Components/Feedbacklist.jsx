import React from 'react'
import Feedbackitem from './Feedbackitem.jsx'
import { motion , AnimatePresence } from 'framer-motion'

const Feedbacklist=({feedback , deleteHandler})=> {


   if (!feedback || feedback.length===0){
    return <p>No Feedback Yet</p>
   }
   else
      return (
          <div className='feedback-list'>
            <AnimatePresence>
              {feedback.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                >
                  <Feedbackitem key={item.id} item={item} deleteHandler ={()=>deleteHandler(item.id)}/>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
      )
}

export default Feedbacklist