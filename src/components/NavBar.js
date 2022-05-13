import { NavLink } from "react-router-dom"


const NavBar = () => {

    return(
        <div className="nav">
            <div>
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/characters' exact> All Characters</NavLink>
                <NavLink to='/new-character' exact>New Character Form</NavLink>
                <NavLink to='/networks' exact>Networks</NavLink>
            </div>
        </div>
    )
}


export default NavBar;