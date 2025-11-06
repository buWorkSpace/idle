import "./Header.css";
import { LogOut } from "lucide-react";

function Header() {
  return (
    <header className="admin-header">
      <div className="logo">
        <span className="logo-icon">👕</span> Blind Rivet
      </div>

      <div className="header-right">
        <select className="lang">
          <option>한국어</option>
          <option>English</option>
        </select>
        <button className="logout">
          <LogOut size={14} />
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
