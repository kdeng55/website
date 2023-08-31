import './App.css';
import About from './pages/About.js';
import NavBar from './components/NavBar.js';
import Projects from './pages/Projects.js';
import More from './pages/More.js';
import Skills from './pages/Skills.js';
import Home from './pages/Home.js';
import NusResearch from './pages/Nusresearch.js';
import CodingProjects from './pages/CodingProjects.js';
import {Route, Routes} from "react-router-dom";
import ScrollToTop from './ScrollTop.js';

function App() {
  return (
  <>
   
    <NavBar/>
    <div className="container>">
      <Routes>
      
        <Route path ="/" element={<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path ="projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/more" element = {<More/>} />
        <Route path="/Nusresearch" element = {<NusResearch/>} />
        <Route path="/CodingProjects" element = {<CodingProjects/>} />
      </Routes>
      <ScrollToTop/>
      </div>
     
     </>
  )
}

export default App;
