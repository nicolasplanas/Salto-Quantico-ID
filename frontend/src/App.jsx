import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Terms from "./pages/Terms"
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App