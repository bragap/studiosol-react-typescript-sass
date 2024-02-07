// react router dom
import { BrowserRouter } from 'react-router-dom';

// styles
import "./styles/components/App.scss";

// components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BottomNavigation from './components/BottomNavigation';
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {

  return <>
    <BrowserRouter>
      <section id="app-section" >
        <Navbar />
        <AnimatedRoutes />
      </section>
      <BottomNavigation />
      <Footer />
    </BrowserRouter>
  </>
}

export default App
