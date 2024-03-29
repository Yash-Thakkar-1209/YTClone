import React from 'react'
import Buttons from './Buttons'

const ButtonList = () => {

const list = ["All", "Live", "Gaming", "Songs","Live", "Soccer", "Cricket", "Cooking"];

  return (
     <div className='flex'>
      {list.map((item, index) => (
        <Buttons key={index} name={item} />
      ))}
    </div>
  )
}

export default ButtonList