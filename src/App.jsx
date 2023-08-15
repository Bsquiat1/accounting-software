import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <h1 className="text-3xl font-bold underline text-blue-700">
    Hello world!
  </h1>
  <button class="btn">Button</button>
  <CounterComponent/>
  </>
    
  )
}

export default App
