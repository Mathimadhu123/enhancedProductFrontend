import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import MyNavbar from './components/Navbar';
import BasicExample from './components/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
       <BasicExample />
       <LandingPage />
    </>
  )
}

export default App
