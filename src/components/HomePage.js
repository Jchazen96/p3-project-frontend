import { NavLink } from "react-router-dom"
import '../App.css';

const HomePage = ({setNetwork}) => {


    return(

        <div>
            <div className='home-img'>
            <NavLink to='/nickelodeon' exact><img src='https://assets.turbologo.com/blog/en/2021/11/15080205/Nickelodeon-1.png' onClick={()=>{setNetwork(1)}}/></NavLink>
            <NavLink to='/cartoon-network' exact><img src='https://1000logos.net/wp-content/uploads/2016/10/Cartoon-Network-Logo-1992.png' onClick={()=>{setNetwork(2)}}/></NavLink>
            </div>
        </div>
    )
}

export default HomePage;


