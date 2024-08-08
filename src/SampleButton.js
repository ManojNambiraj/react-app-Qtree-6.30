import React from 'react'

function SampleButton(props) {
    
  return (
    <div>
      <button>{props.userName} {props.number}</button>
    </div>
  )
}

export default SampleButton
