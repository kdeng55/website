import './App.css';
import NavBar from './components/NavBar.js';
import Projects from './pages/Projects.js';
import More from './pages/More.js';
import Skills from './pages/Skills.js';
import Home from './pages/Home.js'

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component= <Home />
      break
    case "/projects":
      Component = <Projects />
      break
    case "/skills":
      Component= <Skills />
      break
    case "/more":
      Component= <More />
      break
  }
  return (<>
    <NavBar/>
    {Component} </>

  )
}

export default App;
