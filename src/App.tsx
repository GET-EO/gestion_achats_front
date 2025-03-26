import { Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header/index.tsx"
import Sidebar from "./components/Sidebar/index.tsx"
import Dashboard from "./page/dashboard/index.tsx"
import Users from "./page/user/index.tsx"
import Demandes from "./page/demande/index.tsx"
import Budget from "./page/budget/index.tsx"
import Materiel from "./page/materiel/index.tsx"

function App() {

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/demandes" element={<Demandes />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/materiel" element={<Materiel />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
