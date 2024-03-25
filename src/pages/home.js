 import React from 'react'
import Sidebar from '../componets/sidebar'
import Chat from '../componets/chat'
 
 const Home = () => {
   return (
     <div className='home'>
        <div className='container'>
         <Sidebar/>
         <Chat/>
        </div>
  
     </div>
   )
 }
 
 export default Home
 