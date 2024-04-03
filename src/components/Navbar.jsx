import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <div>
      <nav>
        <img className="bola" src="../src/assets/img/egg.png" alt="pokebola" />
        <NavLink className={setActiveClass} to="/">
          {" "}
          Home{" "}
        </NavLink>

        <NavLink className={setActiveClass} to="/Pokemon">
          {" "}
          Pokemons{" "}
        </NavLink>
      </nav>
    </div>
  );
};
export default Navbar;
