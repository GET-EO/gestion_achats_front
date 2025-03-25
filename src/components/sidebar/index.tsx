import { LogOut } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Side bar</h2>
      <nav className="sidebar-nav">
        {/* <ul>
          <li>
            <NavLink to="/dashboard" className="sidebar-link">
              <Home size={20} /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/utilisateurs" className="sidebar-link">
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
        </ul> */}
      </nav>
      <button className="sidebar-logout">
        <LogOut size={20} /> Déconnexion
      </button>
    </aside>
  );
}
export default Sidebar
