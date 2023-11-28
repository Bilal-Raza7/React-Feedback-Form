import React from 'react'
import { useContext } from 'react';
import PropTypes from 'prop-types';
import FeedbackContext from '../Context/FeedbackContext';



 // Calculating avg rating
function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)

    let Average = feedback.reduce((acc,cur) => {
        return acc + cur.rating
    },0)/feedback.length;
    Average = Average.toFixed(1).replace(/[.,]0$/,'')

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating: {isNaN(Average) ? 0 : Average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = { 
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats
