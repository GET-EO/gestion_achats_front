import { Menu, Bell, User } from 'lucide-react';
import '../../styles/component/header.css';

const Header = () => {

  return (
    <header className="header">
      {/* <button className="menu-button">
        <Menu size={24} />
      </button> */}
      <h1 className="header-title">header</h1>
      <div className="header-icons">
        <button className="icon-button">
          <Bell size={24} />
          <span className="badge">3</span>
        </button>
        <button className="icon-button">
          <User size={24} /> Seth
        </button>
      </div>
    </header>
  );
}

export default Header
