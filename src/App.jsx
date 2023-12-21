import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { About, Contact, Home, Projects } from './pages';

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />

         
        </Routes>
      </Router>
    </main>
  );
};

export default App;
