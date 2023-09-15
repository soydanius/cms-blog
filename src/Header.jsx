import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <Link to="/">
            <h1>
              Happy{" "}
              <img
                style={{ width: 30, height: 30 }}
                src="./logo.png"
                alt="Logo"
              />{" "}
              Homemade
            </h1>
          </Link>
        </div>
        <div className="header-right">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
