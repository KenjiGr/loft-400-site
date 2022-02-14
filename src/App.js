import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Prices from './pages/Prices'
import Services from './pages/Services'

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/prices' element={<Prices/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
    </div>
  );
}

export default App;
