import React from 'react'

const ReviewForm = props => {
  return (
    <label>{props.label}
      <input
        type='text'
        name={props.name}
        value={props.content}
        onChange={props.handlerFunction}
      />
    </label>
  )
}

export default ReviewForm;
