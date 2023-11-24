import React from 'react'
import FeedbackItem from './FeedbackItem'



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

export default feedbackList
