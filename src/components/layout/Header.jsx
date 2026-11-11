
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logos/cipherfox-horizontal.png';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Internships', path: '/internships' },
  { name: 'Contact', path: '/contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#252C35] bg-[#06090D]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Company Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="CipherFox Technologies"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-[#A7ADB5] transition hover:text-[#FE6700]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Internship CTA */}
        <Link
          to="/internships"
          className="hidden rounded-md bg-[#FE6700] px-5 py-3 text-sm font-semibold text-[#06090D] transition hover:bg-orange-500 lg:inline-flex"
        >
          Apply for Internship
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#F5F5F5] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[#252C35] bg-[#06090D] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#A7ADB5] hover:text-[#FE6700]"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/internships"
              onClick={() => setMenuOpen(false)}
              className="rounded-md bg-[#FE6700] px-5 py-3 text-center font-semibold text-[#06090D]"
            >
              Apply for Internship
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
