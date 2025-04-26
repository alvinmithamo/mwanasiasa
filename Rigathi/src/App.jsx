import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import About from './pages/About';
import Manifesto from './pages/Manifesto';
// import News from './pages/News';
// import Contact from './pages/Contact';
// import Donate from './pages/Donate';
import Membership from './pages/Membership';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/manifesto" element={<Manifesto />} />
          {/* <Route path="/news" element={<News />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/donate" element={<Donate />} /> */}
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;