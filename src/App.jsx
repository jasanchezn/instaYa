import { useState } from 'react'
import './App.css'
import { Inicio } from './components/Inicio.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Inicio />
    </div>
  )
}

export default App
