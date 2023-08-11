
import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Maps from './components/Maps'
import Alert from './components/Alert'

function App() {

  const [position, setPosition] = useState([])
  const [details, setDetails] = useState({
    ip:'',
    location: '',
    timezone: '',
    isp:''
  })
  const [alert, setAlert] = useState({
    message:'',
    showAlert:false
  })


  return (
    <>
      <Header logo='Maps' setPosition={setPosition} setDetails={setDetails} setAlert={setAlert} />

      {  position.length !== 0 &&  <Maps position={position} details={details}/> }
    
      <Alert alert={alert}/>

    </> 
  )
}

export default App
