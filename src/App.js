import './App.css';
import NavBar from './components/NavBar.js';
import Projects from './pages/Projects.js';
import More from './pages/More.js';
import Skills from './pages/Skills.js';
import Home from './pages/Home.js'
import {Route, Routes} from "react-router-dom"

function App() {
  return (
  <>
    <NavBar/>
    <div className="container>">
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/more" element = {<More/>} />
      </Routes>
      </div>
     </>
  )
}

export default App;
