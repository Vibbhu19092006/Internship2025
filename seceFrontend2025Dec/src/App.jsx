import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/functionalComponent/Navbar.jsx'
import Props from './components/functionalComponent/Props.jsx'
import "./css/App.css"
import Home from './components/functionalComponent/Home.jsx'
import ClassComponent from './components/ClassComponent/ClassComponent.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/functionalComponent/About.jsx'
import LearningReact from './components/functionalComponent/LearningReact.jsx'
import Contact from './components/functionalComponent/Contact.jsx'
function App() {
  
  return (
    <header>
      <main>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/learn-react" element={<LearningReact/>}/>
         <Route path="/contact" element={<Contact/>}/>

          Home
        
      </Routes>
      </BrowserRouter>
      </main>
      
    </header>


  )


}

export default App
