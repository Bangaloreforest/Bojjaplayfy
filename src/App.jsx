import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Mainsection from './components/mainsection/Mainsection'
import Footer from './components/footer/Footer'


function App() {
  
  return (
    <>
      <div className="mainContainer">
        <Navbar/>
        <div className="mainsectionContainer">
        <Sidebar/>
        <Mainsection/>
        </div>    
        <Footer/>
      </div>
    </>
  )
}

export default App
