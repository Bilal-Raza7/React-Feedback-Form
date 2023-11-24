import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItem({ item , handleDelete}) {
   
  return (
    <>
      <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
        
        {/* <button>Click Here</button> */}
      </Card>
      
    </>
  )
}

export default FeedbackItem
