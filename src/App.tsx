import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import People from './components/pages/people/People';
import Planets from './components/pages/planets/Planets';
import Ships from './components/pages/ships/Ships';
import PersonDetail from './components/pages/people/PersonDetail';
import PlanetDetail from './components/pages/planets/PlanetDetail';
import ShipDetail from './components/pages/ships/ShipDetail';
import Footer from './components/layouts/Footer';


function App() {

  return (
    <Router>
      <div className="app">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/ships" element={<Ships />} />
            <Route path="/people/:id" element={<PersonDetail />} />
            <Route path="/planets/:id" element={<PlanetDetail />} />
            <Route path="/ships/:id" element={<ShipDetail />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
