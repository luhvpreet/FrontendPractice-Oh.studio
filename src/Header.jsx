import "./styles/header.css";

import { Link, NavLink, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/FrontendPractice-oh.studio/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/FrontendPractice-oh.studio/profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/FrontendPractice-oh.studio/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </header>
    </>
  );
}
