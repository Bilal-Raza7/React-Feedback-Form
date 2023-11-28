import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";


const FeedbackContext = createContext()

 export const FeedbackProvider = ({ children }) => {
 const [feedback, setFeedback] = useState([
   {
      id: 1,
      text: 'this is a custom Feedback coming from context 1',
      rating: 10,
   },
   {
    id: 2,
    text: 'this is a custom Feedback coming from context 2',
    rating: 9,
 },
 {
  id: 3,
  text: 'this is a custom Feedback coming from context 3',
  rating: 7,
},
 ])

 const [feedbackEdit, setFeedbackEdit] = useState({
  item: {},
  edit: false
 })
 
 // add feedback
 const addFeedback = (newFeedback) => {
  newFeedback.id = uuidv4()
  setFeedback([newFeedback, ...feedback])
}


// delete feedback
 const deleteFeedback = (id) => {
  if(window.confirm("Are you sure, You want to delete?")){
      setFeedback(feedback.filter((item) => item.id !== id))
  }
}
 
// set Item to be updated
const editFeedback = (item) => {
  setFeedbackEdit({
    item,
    edit: true
  })
}

// update feedback
const updateFeedback = (id, updItem) =>{
  setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem}: item))
  )
}

 return <FeedbackContext.Provider value={ {feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback} }> { children } </FeedbackContext.Provider>
 }



 export default FeedbackContext