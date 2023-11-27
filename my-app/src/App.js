import { v4 as uuidv4 } from 'uuid'
import Header from "./components/Header"
import FeedbackList from "./components/feedbackList"
import FeedbackData from "./data/feedbackData"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from './components/FeedbackStats'
import AboutLink from './components/AboutLink'
import About from './Pages/AboutPage'
import { FeedbackProvider } from './Context/FeedbackContext'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from "react"
function App(){
    const [feedback,setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure, You want to delete?")){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return(
         <FeedbackProvider>
         <Router>
         <Header/>
         <div className="container">
            <Routes>
                <Route exact path='/' element={
                    <>
                    <FeedbackForm handleAdd={addFeedback}/>
                    <FeedbackStats feedback={feedback} />
                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                    <AboutLink />
                    </>
                }></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
         </div>
         </Router>
         {/* <Router>
         <Routes>
         <Route path="/about" element={<About/>} />
         </Routes>
         </Router> */}
         </FeedbackProvider>
    )
}
export default App