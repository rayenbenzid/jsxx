import React from 'react'

const NewOne = ({el}) => {
  return (
    <div className='card'>
      <img src={el.image} alt="" />
      <h2>{el.name}</h2>
      <h2>{el.prix}</h2>
    </div>
  )
}

export default NewOne