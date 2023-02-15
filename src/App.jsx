import React from 'react'
import Form from "./Component/From";
import Allform from './Component/Allform';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/allform" element={<Allform />} />
      {/* <Route path="/register" element={<Register/>} />
      <Route path="/cart" element={<Cart/>} /> */}
    </Routes>
  </>
  )
}

export default App