import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

        

    const HandleTextChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text.trim().length<=9){
            setBtnDisabled(true)
            setMessage("Message must have atleast 10 character")
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
    

  return (
    <Card>
        <form>
            <h2>Share Your Valueable Feedback With Us</h2>
            <RatingSelect select={setRating} selected={rating} />
            <div className="input-group">
                
                <input onChange={HandleTextChange} type='text' placeholder='write a review' value={text}></input>
                <Button  type='submit' isDisable={btnDisabled} />
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
