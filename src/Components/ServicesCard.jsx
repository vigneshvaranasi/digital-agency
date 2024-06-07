import './Services.css';

function ServicesCard({ item }) {
  return (
    <div className='services-card' style={{ backgroundColor: item.style?.backgroundColor }}>
      <div className='services-card-head'>
        <h2
          className='head1'
          style={{
            backgroundColor: item.style?.tbg
          }}
        >
          {item.firstHead}
        </h2>
        <br />
        <h2
          className='head2'
          style={{
            backgroundColor: item.style?.tbg
          }}
        >
          {item.secondHead}
        </h2>
      <div className='learn' >
        <img src={item.more} alt="" />
        <p style={{
          color: item.style?.color
        }}>Learn More</p>
      </div>
      </div>
      <div className='right-img'>
        <img src={item.image} alt="" />
      </div>
    </div>
  );
}

export default ServicesCard;
