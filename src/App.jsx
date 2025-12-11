
import './App.css'
import { Routes, Route, Link } from 'react-router'
import States from './Components/States/States'

function Home() {
  return (
    <>
      <h1>
        My geodata site
      </h1>
      <Link to="/States" >
        View States
      </Link>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/States' element={<States />} />
    </Routes>
  )

}

export default App
