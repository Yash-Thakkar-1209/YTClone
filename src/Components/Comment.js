import React from 'react'

const Comment = ({data}) => {
  return (
    <div className='flex shadow-lg bg-gray-200 p-2 rounded-lg  my-2 '>
         <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU" alt="" />

         <div className='px-3'>
            <p className='font-bold'>{data.name}</p>
            <p>{data.text} </p>
         </div>

    </div>
  )
}

export default Comment