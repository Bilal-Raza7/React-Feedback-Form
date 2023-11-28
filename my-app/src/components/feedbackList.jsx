import React from 'react'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../Context/FeedbackContext'
// import { motion, AnimatePresence } from "framer-motion"



function FeedbackList() { 
  const { feedback } = useContext(FeedbackContext)
  // const { handleDelete } = useContext(FeedbackContext)

    if(!feedback || feedback.length===0){
        return <p>No Feedback Yet!</p>
    }
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
         <FeedbackItem 
         key={item.id} 
         item={item} 
          />   
        ))}
    </div>
  )
}


export default FeedbackList
