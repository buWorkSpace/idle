import "./Header.css";
import logo from "../../../../assets/logo.png";
import koreaFlag from "../../../../assets/korea-flag.png";
import { ChevronDown, LogOut } from "lucide-react";

function Header() {
  return (
    <header className="admin-header">
      <div className="logo">
        <img src={logo} alt="Blind Rivet Logo" className="logo-icon" />
        <div className="logo-text">
          <span className="brand-name">
            <span>Blind</span> <span>Rivet</span>
          </span>
          <p className="brand-subtext">AI assembly Services company</p>
        </div>
      </div>

      <div className="header-right">
        <div className="lang">
          <img src={koreaFlag} alt="Korean Flag" className="flag-icon" />
          <ChevronDown size={16} color="#777" />
        </div>
        <div className="admin-dropdown">
          <span className="admin-name">관리자</span>
          <ChevronDown size={16} color="#777" />
        </div>
        <button className="logout">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
