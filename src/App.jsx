import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./Component/Header"
import Main2 from "./Component/Main2"
import Newevnt from "./Component/Newevnt"
import Portfolio from './Component/Portfolio'
import Form from './Component/Form'
import Addmap from './Component/Addmap'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Main2/>
    <Newevnt/>
    <Portfolio/>
    <Form/>
  <Addmap/>
  <Footer/>
   </>
  )
}

export default App
