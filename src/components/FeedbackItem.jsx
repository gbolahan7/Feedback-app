import React, {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import {FaTimes} from 'react-icons/fa'
import {FaEdit} from 'react-icons/fa'



export default function FeedbackItem({item}) {
  const{deleteFeedback, editFeedback} = useContext(FeedbackContext)
// const clickHandler = () => {

// }
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button type="" className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple'/>
      </button>
      <button type="" className='edit' onClick={() => editFeedback(item)}>
      <FaEdit color='purple'/>
      </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}


FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}