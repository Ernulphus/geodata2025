
import './App.css'
import { Routes, Route } from 'react-router'
import States from './Components/States/States'

import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/States' element={<States />} />
      </Routes>
    </>
  )

}

export default App
