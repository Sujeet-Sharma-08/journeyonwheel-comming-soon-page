import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Toaster } from 'react-hot-toast'
function App() {
 

  return (
    <div className='bg-[#006b77]'>
      <Navbar/>
      <Home/>
      <Toaster />
    </div>
  )
}

export default App
