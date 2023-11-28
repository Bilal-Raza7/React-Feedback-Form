
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from './components/FeedbackStats'
import AboutLink from './components/AboutLink'
import About from './Pages/AboutPage'
import { FeedbackProvider } from './Context/FeedbackContext'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App(){

   

    
    return(
         <FeedbackProvider>
         <Router>
         <Header/>
         <div className="container">
            <Routes>
                <Route exact path='/' element={
                    <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList/>
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