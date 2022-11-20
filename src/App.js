import { useState } from 'react'
import React from 'react'
// import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {v4 as uuidv4} from 'uuid'

export default function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete?'))
     setFeedback(feedback.filter((item) => item.id !== id))
    }

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback])
    }
  return (
    <>
      <Header/>
        <div className='container'>
          <FeedbackForm addHandler = {addFeedback}/>
          <FeedbackStats feedback={feedback}/>
          <FeedbackList feedback={feedback} deleteHandler={deleteFeedback}/>
        </div>
    </>
  )
}

