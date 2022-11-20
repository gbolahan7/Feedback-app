import React from 'react'
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';



export default function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)

  //calc ratings average
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating},0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '') //will make sure it is one decimal place but remove 0 when it is in dec places
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}


// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// }