import Header from "./components/Header"
import FeedbackList from "./components/feedbackList"
import FeedbackData from "./data/feedbackData"
import FeedbackStats from './components/FeedbackStats'
import { useState } from "react"
function App(){
    const [feedback,setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure, You want to delete?")){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return(
         <>
         <Header/>
         <div className="container">
            <FeedbackStats feedback={feedback} />
         <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
         </div>
         </>
    )
}
export default App