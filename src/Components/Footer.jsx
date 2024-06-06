import './Footer.css';
import logoW from '../assets/logo-w.svg';
import soc1 from '../assets/social1.svg';
import soc2 from '../assets/social2.svg';
import soc3 from '../assets/social3.svg';


function Footer(){
  return (
    <footer>
        <div className="containerNav">
            <ul>
                <li><a href=""><img src={logoW} width={150} alt="" /></a></li>
            </ul>
            <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Use Cases</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <ul className='social'>
                <li><a href=""><img src={soc1} alt="" /></a><a href=""><img src={soc2} alt="" /></a><a href=""><img src={soc3} alt="" /></a></li>
            </ul>
        </div>
        <div className='contact'>
            <div className='address'>
                <h2>Contact us:</h2>
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p>Address: 1234 Main St <br /> Moonstone City, Stardust State 12345</p>
            </div>
            <div className='sub'>    
                <form>
                    <input type='email' placeholder='Enter your email' />
                    <button>Subscribe to news</button>
                </form>       
            </div>
            
        </div>
        <div className='copy'>
            <hr />
            <p>© 2024 Positivus. All Rights Reserved. <span><a href="">Privacy Policy</a></span> </p>
        </div>
    </footer>
  )
}

export default Footer;