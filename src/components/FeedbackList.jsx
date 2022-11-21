import React from 'react'
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';


export default function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)
    // console.log(feedback)
    if(!isLoading && (!feedback || feedback.length ===0)) {
        return <p>No feedback </p>
    }


    return isLoading ? <Spinner/> : (
      <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
          key={item.id}
          initial={{opacity:0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}>
          <FeedbackItem key={item.id} item={item}/>
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
