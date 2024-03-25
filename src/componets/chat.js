 


 import React, { useContext } from 'react'
 import Add from "../images/personadd.png"
 import More from "../images/more.png"
import Messages from './messages'
import Input from './input'
import { ChatContext } from '../context/chatcontext'
 
 const Chat = () => {
  const {data}=useContext(ChatContext)
   return (
     <div className='chat'>
        <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
            <img src={Add} />
            <img src={More} />
             
        </div>
       
        </div>
        <Messages/>
        <Input/>
     </div>
   )
 }
 
 export default Chat
 