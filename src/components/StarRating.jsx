import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({rating = 4}) => {
  return (
    <>
      {Array(5).fill().map((_, index)=> (
        <img src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="star-icons" />
      ))}
    </>
  )
}

export default StarRating
