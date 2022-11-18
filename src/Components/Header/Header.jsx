import "./Header.css";
import { NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="headerDesign">
      <h1 className="title">WikiFilms</h1>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "activelinkDesign" : "linkDesign"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/films"
        className={({ isActive }) =>
          isActive ? "activelinkDesign" : "linkDesign"
        }
      >
        Popular Films
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive ? "activelinkDesign" : "linkDesign"
        }
      >
        Search Films
      </NavLink>
    </div>
  );
};

export default Header;
