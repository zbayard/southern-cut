import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/Header.js';
import AboutUs from './components/About Us/AboutUs.js';
import Services from './components/SC Services/Services.js';

const App = ()=>{
  
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Services/>
    </div>
  );
};
export default App;
