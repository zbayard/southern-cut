import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/Header.js';
import AboutUs from './components/About Us/AboutUs.js';
import Services from './components/SC Services/Services.js';
import Contact from './components/Contact/Contact.js';

const App = ()=>{

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Services/>
      <Contact/>
    </div>
  );
};
export default App;
