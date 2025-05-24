import { NavLink } from "react-router-dom";
import '../styles/navigation.css';

export const Navigation = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'underline' : '')}
            >
              Start
            </NavLink>
            {/* <Link to="/">Start</Link> */}
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? 'underline' : '')}
            >
              Meny
            </NavLink>
            {/* <Link to="/guests">Gäster</Link> */}
          </li>
                    <li>
            <NavLink
              to="/rsvp"
              className={({ isActive }) => (isActive ? 'underline' : '')}
            >
              RSVP
            </NavLink>
            {/* <Link to="/rsvp">RSVP</Link> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};
