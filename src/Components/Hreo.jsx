import './Hero.css';
import mic from '../assets/mic.svg';

function Hero() {
    return (
        <section className="hero-sec">
            <div className='hero-left'>
                <h1>Navigating the digital landscape for success</h1>
                <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                <a href="">Book a consultation</a>
            </div>
            <div className='hero-right'>
                <img src={mic} alt="" />
            </div>

        </section>
    )
}

export default Hero;