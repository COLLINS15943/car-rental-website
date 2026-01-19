const Header = () => {
  return (
    <header>
      <div className="headcont">
        <h1 className="brand">Car Rental</h1>
        <nav className="nav">
          <ul className="nav-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Vehicle Models</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/our-team">Our Team</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <ul className="nav-right">
            <li>
              <a href="/sign-in">Sign in</a>
            </li>
            <li>
              <a className="register-button" href="/register">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
