import React from 'react'
import CommentList from './CommentList'

const commentsData = [
  {
    name: 'Yash Thakkar',
    text: 'My Name Is Yash Thakkar',
    replies: [

    ]
  },
  {
    name: 'Yash Thakkar',
    text: 'My Name Is Yash Thakkar',
    replies: [
      {
        name: 'Yash Thakkar',
        text: 'My Name Is Yash Thakkar',
        replies: [
    
        ]
      },
      {
        name: 'Yash Thakkar',
        text: 'My Name Is Yash Thakkar',
        replies: [
          {
            name: 'Yash Thakkar',
            text: 'My Name Is Yash Thakkar',
            replies: [
              {
                name: 'Yash Thakkar',
                text: 'My Name Is Yash Thakkar',
                replies: [
            
                ]
              },
            ]
          },
          {
            name: 'Yash Thakkar',
            text: 'My Name Is Yash Thakkar',
            replies: [
        
            ]
          },
        ]
      },
    ]
  },
  {
    name: 'Yash Thakkar',
    text: 'My Name Is Yash Thakkar',
    replies: [

    ]
  },
  {
    name: 'Yash Thakkar',
    text: 'My Name Is Yash Thakkar',
    replies: [

    ]
  },
 
  

]

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
       <h1 className='text-2xl font-bold'>Comments: </h1>
       <CommentList comments={commentsData}/>
     </div>
  )
}

export default CommentContainer