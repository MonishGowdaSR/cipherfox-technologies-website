
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logos/cipherfox-horizontal.png';

const internshipFormUrl = 'https://forms.gle/dopZNnyQh5S4BjBe6';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Featured Projects', path: '/projects' },
  { name: 'Internships', path: '/internships' },
  { name: 'Career & Project Support', path: '/career-support' },
  { name: 'Contact', path: '/contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getNavClass = (isActive) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-[#FE6700]'
        : 'text-[#A7ADB5] hover:text-[#FE6700]'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#252C35] bg-[#06090D]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

        {/* Company Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="CipherFox Technologies"
            className="h-24 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => getNavClass(isActive)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Internship CTA */}
        <a
          href={internshipFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-md bg-[#FE6700] px-5 py-3 text-sm font-semibold text-[#06090D] transition hover:bg-orange-500 lg:inline-flex"
        >
          Apply for Internship
        </a>

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
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => getNavClass(isActive)}
              >
                {item.name}
              </NavLink>
            ))}

            <a
              href={internshipFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-md bg-[#FE6700] px-5 py-3 text-center font-semibold text-[#06090D]"
            >
              Apply for Internship
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
