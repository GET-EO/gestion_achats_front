import { LogOut, Users, FileText, DollarSign, Home } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import '../../styles/component/sidebar.css';

const Sidebar = () => {

  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">Side bar</h1>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/dashboard" className="sidebar-link">
              <Home size={20}/> Dashboard
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/users" className="sidebar-link">
              <Users size={20} /> Gestion Utilisateurs
            </NavLink>
          </li>
          <li>
            <NavLink to="/demandes" className="sidebar-link">
              <FileText size={20} /> Gestion Demandes
            </NavLink>
          </li>
          <li>
            <NavLink to="/budget" className="sidebar-link">
              <DollarSign size={20} /> Gestion Budget
            </NavLink>
          </li>
          <li>
            <NavLink to="/materiel" className="sidebar-link">
              <DollarSign size={20} /> Gestion materiel
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="sidebar-logout">
        <LogOut size={20} /> Déconnexion
      </button>
    </aside>
  );
}
export default Sidebar
