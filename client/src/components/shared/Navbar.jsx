import { NavLink } from "react-router-dom";

const Navbar = ({ links }) => {
  return (
    <nav className="nav">
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
