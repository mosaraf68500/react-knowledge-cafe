import { useState } from 'react'

import './App.css'
import Header from './components/header'
import Blogs from './components/blogs'
import Bookmarks from './components/bookmarks'

function App() {
 

  return (
    <>
     
      <Header></Header>
   
   <div className='flex w-11/12 mx-auto'>
   <Blogs></Blogs>
   <Bookmarks></Bookmarks>
   </div>
      
    </>
  )
}

export default App
