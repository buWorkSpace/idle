import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* 로고 */}
        <div className="logo">
          <img src="/logo.svg" alt="Blind Rivet Logo" className="logo-icon" />
          <span className="logo-text">
            <strong>Blind</strong> Rivet
          </span>
          <p className="logo-sub">AI assembly Services company</p>
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

