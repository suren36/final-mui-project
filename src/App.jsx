import { useState } from 'react'

import './App.css'
import { Header } from './Layout/Header'
import { AllRoutes } from './routes/AllRoutes'
import { Footer } from './Layout/Footer'
import { Button, Container, Typography } from "@mui/material";


function App() {
  return (
    <div className="App">

      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
