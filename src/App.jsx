
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './Components/Home/Home'
import States from './Components/States/States'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/States' element={<States />} />
    </Routes>
  )

}

export default App
