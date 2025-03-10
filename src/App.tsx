import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './page/RegisterPage'
import LoginPage from './page/LoginPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
