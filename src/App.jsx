import './App.css'
import About from './components/About/About'
import Counter from './components/Counter/Counter'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Location from './components/location/Location'
import Navbar from './components/Navbar/Navbar'
import OurTheme from './components/OurTheme/OurTheme'
import Register from './components/Register/Register'
import CoreTeam from './components/Team/CoreTeam'
import MainTeam from './components/Team/MainTeam'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className="app">
        <Counter />
        <About />
      </div>
      <Register />
      <div className="app">
        <OurTheme />
        <MainTeam />
        <CoreTeam />
        <Location />
        <Footer />
      </div>
    </>
  )
}

export default App
