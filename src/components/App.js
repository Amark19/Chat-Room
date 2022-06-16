import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContexts"

import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/chats" element={<Chats/>} />
            <Route path="/" element={<Login/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App