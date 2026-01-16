import { Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<h1 style={{ color: "white" }}>LOGIN</h1>} />
      <Route path="/register" element={<h1 style={{ color: "white" }}>REGISTER</h1>} />
    </Routes>
  )
}

export default App
