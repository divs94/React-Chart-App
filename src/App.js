import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Charts from './Charts';
import Home from './Home';


export default function App() {
  return (
    <>
    <Router>
   <Routes>
   <Route path='/' element={<Home/>} />
    <Route path='/chart' element={<Charts/>} />
   </Routes>
    </Router>
    </>
  )
}
