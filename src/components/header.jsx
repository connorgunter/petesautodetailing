import "../css/header.css"
function Header() {
  return (
<header>
      <nav className="nav">
        <div className="links">
          <a href="#about">
            <div className="nav-link">About</div>
          </a>
          <a href="#book">
            <div className="nav-link">Book an Appointment</div>
          </a>
          <a href="#reviews">
            <div className="nav-link">Reviews</div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
