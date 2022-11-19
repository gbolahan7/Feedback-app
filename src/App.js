import { useState } from 'react'
import React from 'react'
// import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'

export default function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete?'))
     setFeedback(feedback.filter((item) => item.id !== id))
    }
  return (
    <div>
      <Header/>
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} deleteHandler={deleteFeedback}/>
    </div>
  )
}

