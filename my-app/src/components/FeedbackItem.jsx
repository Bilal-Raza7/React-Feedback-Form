import React from 'react'
import { useContext } from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackItem({ item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
   
  return (
    <>
      <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
        
        {/* <button>Click Here</button> */}
      </Card>
      
    </>
  )
}

export default FeedbackItem
