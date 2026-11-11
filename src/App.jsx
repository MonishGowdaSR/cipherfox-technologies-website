
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Internships from './pages/Internships';
import Contact from './pages/Contact';

function Placeholder({ title }) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5">
      <h1 className="text-3xl font-bold text-[#F5F5F5]">
        {title}
        <span className="text-[#FE6700]">.</span>
      </h1>
    </main>
  );
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Placeholder title="404 - Page Not Found" />} />
      </Routes>
    </>
  );
}

export default App;
