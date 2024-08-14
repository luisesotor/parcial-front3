import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import List from './components/List/List'

function App() {
  const [datos, setDatos] = useState([])

  const [show, setShow] = useState(false)


  return (
    <div className='App'>
      <h1>Cuentanos un poco de ti</h1>
      <Form datos={datos} setDatos={setDatos} setShow={setShow} />
      {show ? <List datos={datos} /> : null}



    </div>
  )
}

export default App
