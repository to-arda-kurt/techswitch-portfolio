import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
       <div className="Navbar">


        
         <ul>
            <li className="Navbar-Link"><NavLink className={({isActive}) => `${isActive ? "Navbar__link--active" : ""}`} to='/'>Home</NavLink></li>
            <li className="Navbar-Link"><NavLink className={({isActive}) => `${isActive ? "Navbar__link--active" : ""}`} to='/projects'>Projects</NavLink></li>
            <li className="Navbar-Link"><NavLink className={({isActive}) => `${isActive ? "Navbar__link--active" : ""}`}to='/contact'>Contact</NavLink></li>
        </ul>
       </div>
    )
}
export default Navbar;