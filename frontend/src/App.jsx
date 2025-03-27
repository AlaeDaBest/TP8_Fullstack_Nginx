import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersList from './Components/UsersList'
import { Routes,Route } from 'react-router-dom'
import AddUser from './Components/AddUser'
import UserDetails from './Components/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<UsersList/>} />
      <Route path='/add' element={<AddUser/>} />
      <Route path='/:id' element={<UserDetails/>} />
    </Routes>
  )
}

export default App
