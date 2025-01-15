import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/Home';
import CodePortfolio from './pages/CodePortfolio';
import ArtPortfolio from './pages/ArtPortfolio';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/code-portfolio' element={<CodePortfolio />}></Route>
          <Route path='/art-portfolio' element={<ArtPortfolio />}></Route>
          <Route path='/about-me' element={<AboutMe />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
