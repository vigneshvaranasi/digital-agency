import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Services from './Components/Services';

function App(){
  return (
    <div>
      {/* <Nav/> */}
      <Hero/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App;