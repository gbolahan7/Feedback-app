import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'

export default function FeedbackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value);
    }
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* rating select component to do*/}
        <div className='input-group'>
            <input onChange={handleTextChange} type="text" name="" placeholder='Write a review' value={text}/>
            <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  )
}
