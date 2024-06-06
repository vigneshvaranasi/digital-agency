import './Hero.css';
import mic from '../assets/mic.svg';
import comp1 from '../assets/amazon.svg';
import comp2 from '../assets/dribbble.svg';
import comp3 from '../assets/hubspot.svg';
import comp4 from '../assets/notion.svg';
import comp5 from '../assets/netflix.svg';
import comp6 from '../assets/zoom.svg';


function Hero() {
    return (
        <section className="hero-sec">
            <div className='hero-left'>
                <h1>Navigating the digital landscape for success</h1>
                <img src={mic} alt="" />
                <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <a href="">Book a consultation</a>
            </div>
            <div className='hero-right'>
                <img src={mic} alt="" />
            </div>
            <div className='companies'>
                <img src={comp1} alt="" />
                <img src={comp2} alt="" />
                <img src={comp3} alt="" />
                <img src={comp4} alt="" />
                <img src={comp5} alt="" />
                <img src={comp6} alt="" />
            </div>

        </section>
    )
}

export default Hero;