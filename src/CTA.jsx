import './CTA.css';
import ctaimg from './assets/cta.svg'

function CTA() {
    return (
        <div className='cta-container'>
            <div className='cta-left'>
                <h1>Let's make things happen</h1>
                <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <a href="">Get your free proposal</a>
            </div>
            <div className='cta-right'>
                <img src={ctaimg} width={350} alt="" />
            </div>
        </div>
    )
}

export default CTA;