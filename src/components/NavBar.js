import { NavLink } from "react-router-dom"


const NavBar = () => {

    return(
        <div className="nav">
            <div>
                <NavLink to='/' exact> Home </NavLink>
                <NavLink to='/characters' exact> Characters </NavLink>
            </div>
        </div>
    )
}


export default NavBar;