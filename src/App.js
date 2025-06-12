import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Top from "./top/top"
import About from './about/about';
import Portfolio from './portfolio/portfolio';
import Katalog from './katalog/katalog';
import Combination from './packs/combination';
import Location from './location/location';
import Rp from './rp/rp';
import Bottom from './bottom/bottom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Top />
        </div>

        <Routes>
          <Route path="main" element={<About />} />
          <Route path="about" element={<About />} />
        </Routes>

        <Routes>
          <Route path="main" element={<Portfolio />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>

        <Routes>
          <Route path="main" element={<Katalog />} />
          <Route path="katalog" element={<Katalog />} />
        </Routes>

        <Routes>
          <Route path="main" element={<Combination />} />
          <Route path="katalog" element={<Combination />} />
        </Routes>

        <Routes>
          <Route path="main" element={<Location />} />
        </Routes>
        
        <div className='rp'>
          <Routes>
            <Route path="main" element={<Rp />} />
            <Route path="about" element={<Rp />} />
          </Routes>
        </div>


        {/* <div>
          <About />
        </div>
        <div className='portf'>
          <Portfolio />
        </div>
        <div className='katalog'>
          <Katalog />
        </div>
        <div className='comb'>
          <Combination />
        </div>
        <div className='loca'>
          <Location />
        </div>
        <div className='rp'>
          <Rp />
        </div> */}
        <div>
          <Bottom />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;