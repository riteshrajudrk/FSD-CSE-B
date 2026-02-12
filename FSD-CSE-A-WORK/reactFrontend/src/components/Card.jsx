import React from 'react'

const Card = (props) => {
  return (
    <div id='card'>
      <div id='pic'><img src={props.img} alt="" /></div>
      <div id='title'>{props.title}</div>
    </div>
  )
}

export default Card
