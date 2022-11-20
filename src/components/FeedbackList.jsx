import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion';


export default function FeedbackList({feedback, deleteHandler}) {
    // console.log(feedback)
    if(!feedback || feedback.length ===0) {
        return <p>No feedback </p>
    }
    return (
      <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
          key={item.id}
          initial={{opacity:0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}>
          <FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler}/>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
      
    )
  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler}/>
  //     ))}
  //   </div>
  // )
}


FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}