import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </main>
      Vite APP
    </div>
  )
}

export default App
