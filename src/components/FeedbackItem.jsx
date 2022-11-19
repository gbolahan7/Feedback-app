import React, {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'


export default function FeedbackItem({item, deleteHandler}) {
// const clickHandler = () => {

// }
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button type="" className='close' onClick={() => deleteHandler(item.id)}>
        <FaTimes color='purple'/>
      </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}


FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}