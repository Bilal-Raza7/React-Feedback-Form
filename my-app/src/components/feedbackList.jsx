import React from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from "framer-motion"



function feedbackList({ feedback , handleDelete}) { 
    if(!feedback || feedback.length===0){
        return <p>No Feedback Yet!</p>
    }
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
         <FeedbackItem 
         key={item.id} 
         item={item} 
         handleDelete={handleDelete} />   
        ))}
    </div>
  )
}
// feedbackList.propTypes = {
//   feedback: propTypes.arrayOf(
//     propTypes.shape({
//       id:propTypes.number.isRequired,
//       text:propTypes.string.isRequired,
//     }
//   )
// }

export default feedbackList
