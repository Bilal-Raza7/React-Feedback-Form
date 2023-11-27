import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext()
 export const FeedbackProvider = ({ children }) => {
 const [feedback, setFeedBack] = useState([
   {
      id: 1,
      text: 'this is a custom Feedback coming from context',
      rating: 10,
   },
 ])
 return <FeedbackContext.Provider value={{
   feedback,
 }}>
   {children}</FeedbackContext.Provider>
 }
 export default FeedbackContext