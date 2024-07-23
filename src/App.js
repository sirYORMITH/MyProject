import React from 'react'
import Navigation from './components/Navigation'
import './App.css'
import Hero from './Hero'
import Card from './Card'
import data from "./components/ibabs.json";
import Footer from './components/Footer/Footer'
import Users from './components/Users'
import Userinfo from './components/Userinfo'



function App() {
  return (
    <div>
    <Navigation/>
    <Hero/>
    <Users/>
    
    {/* <Userinfo/> */}
    <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-evenly"
      }}>
        {data.map((i) => (<Card key={i.id} {...i} />
        ))}
      </div>
        <Footer/>
    </div>
  )
}

export default App










