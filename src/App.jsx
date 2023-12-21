import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events"
import Execom from "./components/Execom"
import Gallery from "./components/Gallery";
import Footer from "./components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  return (<div><Hero />
    <About />
    <Events />
    <Execom />
    <Gallery />
    <Footer /></div>);
}
AOS.init();
export default App;