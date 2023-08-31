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
import SoloTravel from './pages/SoloTravel.js'

function App() {
  return (
  <>
   
    <NavBar/>
    <div className="container>">
      <Routes>
      
        <Route path ="/website" element={<Home/>} />
        <Route path="/website/about" element = {<About/>} />
        <Route path ="/website/projects" element={<Projects/>} />
        <Route path="/website/skills" element={<Skills/>} />
        <Route path="/website/more" element = {<More/>} />
        <Route path="/website/Nusresearch" element = {<NusResearch/>} />
        <Route path="/website/SoloTravel" element={<SoloTravel/>} />
        <Route path="/website/CodingProjects" element = {<CodingProjects/>} />
      </Routes>
      <ScrollToTop/>
      </div>
     
     </>
  )
}

export default App;
