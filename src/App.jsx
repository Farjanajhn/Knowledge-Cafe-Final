 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Questions from './components/Questions/Questions'

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Questions></Questions>
 
  <ToastContainer></ToastContainer>
       
    </div>
  )
}

export default App
