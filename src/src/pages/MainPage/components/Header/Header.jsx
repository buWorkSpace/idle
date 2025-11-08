import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* 로고 */}
        <div className="logo">
          <img src="/logo.png" alt="Blind Rivet Logo" className="logo-icon" />
        <div className="logo-right">
          <h1 className="logo-title">
            <span className="logo-blind">Blind</span>
            <span className="logo-rivet">Rivet</span>
          </h1>
          <p className="logo-subtitle">AI assembly Services company</p>
        </div>
      </div>

        {/* 내비게이션 메뉴 */}
        <nav className="nav">
          <ul>
            <li className="active">Home</li>
            <li>About us</li>
            <li>Service</li>
            <li>Blog</li>
          </ul>
        </nav>

        {/* Contact 버튼 */}
        <button className="contact-btn">Contact</button>
      </div>
    </header>
  );
}

export default Header;

