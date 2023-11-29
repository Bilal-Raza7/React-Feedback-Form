import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext()

 export const FeedbackProvider = ({ children }) => {
 const [feedback, setFeedback] = useState([])

 const [feedbackEdit, setFeedbackEdit] = useState({
  item: {},
  edit: false
 })

 useEffect(() => {
  fetchFeedback()
 },[])

 // fechting data from server

 const fetchFeedback = async () => {
  const response = await fetch(
    `/feedback`
    ) 
  const data = await response.json()

  setFeedback(data)
 } 


 
 // add feedback the server

 const addFeedback = async  (newFeedback ) => {
  const response = await fetch('/feedback',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    }, 
    body:JSON.stringify( newFeedback)
  })
  const data = await response.json()
  setFeedback([data, ...feedback])
}


// delete feedback
 const deleteFeedback = async (id) => {
  await fetch(`/feedback/${id}`, {method:"DELETE"})

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
const updateFeedback = async (id, updItem) =>{
  const response = await fetch(`/feedback/${id}`,{
    method:'PUT',
    headers:{
      'Contet-Type':"application/json"
    },
    body: JSON.stringify(updItem)
  })
  const data = response.json()
  setFeedback(feedback.map((item) => (item.id === id ? data: item))
  )
}

 return <FeedbackContext.Provider value={ 
  {feedback,
   feedbackEdit,
    deleteFeedback,
     addFeedback,
      editFeedback,
       updateFeedback} }>
   { children } </FeedbackContext.Provider>
 }



 export default FeedbackContext