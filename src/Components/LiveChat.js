import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import { generateRandomName, makerandomMessage } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();

    const [liveMessage, setLiveMessage] = useState("");

    const chatMessage = useSelector((store) => store.chat.messages);

    useEffect(() => {
    
        const i = setInterval(() => {
            //Api Polling
           
            dispatch( 
                addMessage(
                    { name: generateRandomName(), 
                    message: makerandomMessage(30) + " 🚀"})
            );

        }, 1000);

       
    
        return () => clearInterval(i);
    
     }, []);


  return (
    <>
     <div className=' w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessage.map((c, index) => <ChatMessage key={index} name={c.name} message={c.message}/>)}
    </div>

    <form 
         className='w-full p-2 ml-2 border border-black'
         onSubmit={(e) => {
         e.preventDefault();
        dispatch(addMessage({name: "Yash Thakkar", message: liveMessage,
        }));
        setLiveMessage("");
         }}>
        <input className='w-96 px-2' type="text"  value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)}/>
        <button className='px-2 mx-2 bg-green-200 rounded-md' >Send</button>
    </form>
    </>
   
  )
}

export default LiveChat