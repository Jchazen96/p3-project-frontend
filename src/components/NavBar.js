import { NavLink } from "react-router-dom"


const NavBar = () => {

    return(
        <div className="nav">
            <div>
                <div className='nav-left'>
                <NavLink to='/' exact>Home</NavLink>
                </div>
                <div className='nav-right'>
                <NavLink to='/characters' exact> All Characters</NavLink>
                </div>
            </div>
        </div>
    )
}


export default NavBar;