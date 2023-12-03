import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="navbar sticky-top-dark bg-primary" style={{ backgroundColor: "#0d6efd" }} data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link" style={{ textDecoration: "none" }}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
