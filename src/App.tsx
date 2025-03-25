import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Header from "./components/Header.tsx/index.tsx"
import Sidebar from "./components/Sidebar/index.tsx"
import Dashboard from "./page/dashboard/index.tsx"
import Users from "./page/user/index.tsx"
import Demandes from "./page/demande/index.tsx"

function App() {
  const location = useLocation();
  console.log("📌 Route active :", location.pathname);

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
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
