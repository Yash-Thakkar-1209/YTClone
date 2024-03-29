import React from 'react'

const VideoCard = ({info}) => {
   
 
  
  
 
        
    return (
  
        <div className='p-2 m-2 w-72 shadow-lg'>
          <img className='rounded-lg' src={info?.snippet?.thumbnails?.high?.url} alt="" />
          <ul>
            <li className='font-bold py-2'>{info?.snippet?.title}</li>
            <li>{info?.snippet?.channelTitle}</li>
            <li>{info?.statistics.viewCount} Views</li>
          </ul>
        </div>
      )
};



export default VideoCard