import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import SingleCountry from './pages/SingleCountry'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  exact path='/' element={<Home />}/>
        <Route  path='/country/:id' element={<SingleCountry />}/>
        <Route  path='*' element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App
