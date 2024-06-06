import './Nav.css';
import logo from '../assets/Logo.svg';

function Nav() {    
    return (
        <nav className="container" >
            <ul>
                <li><a href=""><img src={logo} alt="" /></a></li>
            </ul>
            <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Use Cases</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
                <li><a className='bdrbtn' href="#">Request a quote</a></li>
            </ul>
        </nav>
    )
}

export default Nav;