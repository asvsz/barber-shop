import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        {/* Adicione outras rotas conforme necessário */}
        {/* <Route path="/outra-rota" element={<OutraRota />} /> */}
      </Routes>
      <App />
    </Router>
  </React.StrictMode>,
)
