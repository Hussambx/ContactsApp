import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
       
        <Route
        path='/'
        element={<h1>Test</h1>}>


        </Route>
      </Routes>
      
      
      </BrowserRouter>
   <h1>Hi</h1>
    
    </div>
  )
}

export default App
