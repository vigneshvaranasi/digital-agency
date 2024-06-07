import './Services.css';
import ServicesCard from './ServicesCard';
import GreenArrowBlackbg from '../assets/GreenArrowB.svg';
import BlackArrowW from '../assets/BlackArrowW.svg';
import s1 from '../assets/Services/s1.svg';
import s2 from '../assets/Services/s2.png';
import s3 from '../assets/Services/s3.png';
import s4 from '../assets/Services/s4.png';
import s5 from '../assets/Services/s5.png';
import s6 from '../assets/Services/s6.png';


function Services() {

    let services = [
        {
            firstHead: "Search engine",
            secondHead: "Optimization",
            more: GreenArrowBlackbg,
            style: { backgroundColor: '#F3F3F3', tbg: '#B9FF66' },
            image: s1,
        },
        {
            firstHead: "Pay-Per-Click",
            secondHead: "advertising",
            more: GreenArrowBlackbg,
            style: { backgroundColor: '#B9FF66', tbg: "#fff" },
            image: s2,
        },
        {
            firstHead: "Social Media",
            secondHead: "Marketing",
            more: BlackArrowW,
            style: { backgroundColor: '#191A23', tbg: '#fff', color: '#fff' },
            image: s3,
        },
        {
            firstHead: "Email",
            secondHead: "Marketing",
            more: GreenArrowBlackbg,
            style: { backgroundColor: '#F3F3F3', tbg: '#B9FF66' },
            image: s4,
        },
        {
            firstHead: "Content",
            secondHead: "Creation",
            more: GreenArrowBlackbg,
            style: { backgroundColor: '#B9FF66', tbg: "#fff" },
            image: s5,
        },
        {
            firstHead: "Analytics and",
            secondHead: "Tracking",
            more: BlackArrowW,
            style: { backgroundColor: '#191A23', tbg: '#B9FF66', color: '#fff' },
            image: s6,
        }
    ]
    return (
        <>
            <div className='services-intro'>
                <h1 className='services-heading'>Services</h1>
                <p className='services-content'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
            </div>
            <div className='services-container'>
                {
                    services.map((item, index) => {
                        return <ServicesCard item={item} key={index} />
                        })
                        }
            </div>
        </>
    )
}

export default Services;