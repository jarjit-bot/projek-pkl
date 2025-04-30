import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Award from './components/Award';
import Partner from './components/Partner';
import Career from './components/Career';
import Gallery from './components/Gallery';
import Team from './components/Team';
import News from './components/News';
import Footer from './components/Footer';

export default function App() {
  return(
    <div className="h-screen">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Award/>
      <Partner/>
      <Career/>
      <Gallery/>
      <Team/>
      <News/>
      <Footer/>
    </div>
  );
}