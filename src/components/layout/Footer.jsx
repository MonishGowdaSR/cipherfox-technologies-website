
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';

import logo from '../../assets/logos/cipherfox-horizontal.png';

const internshipFormUrl =
  'https://forms.gle/dopZNnyQh5S4BjBe6';

const careerSupportFormUrl =
  'https://forms.gle/dq55WabutCavwpve8';

const companyEmail = 'cipherfoxtechnologies@gmail.com';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/CipherFox-Technologies',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/144124061/',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/cipherfoxtechnologies/',
    icon: 'instagram',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@cipherfoxtechnologies',
    icon: 'youtube',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61596306946125',
    icon: 'facebook',
  },
];

function SocialIcon({ name }) {
  const commonProps = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true,
  };

  switch (name) {
    case 'github':
      return (
        <svg {...commonProps}>
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.55.23 2.7.11 2.98.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      );

    case 'linkedin':
      return (
        <svg {...commonProps}>
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.6H4.96V9.04h2.97v9.56ZM6.44 7.73a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.6 10.87h-2.96v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.78V9.04h2.84v1.31h.04c.4-.75 1.36-1.55 2.8-1.55 3 0 3.58 1.98 3.58 4.56v5.24Z" />
        </svg>
      );

    case 'instagram':
      return (
        <svg {...commonProps}>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
        </svg>
      );

    case 'youtube':
      return (
        <svg {...commonProps}>
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
        </svg>
      );

    case 'facebook':
      return (
        <svg {...commonProps}>
          <path d="M13.5 22v-9.2h3.1l.47-3.6H13.5V6.9c0-1.04.29-1.75 1.8-1.75h1.92V1.93A25 25 0 0 0 14.42 1c-2.77 0-4.67 1.69-4.67 4.79V9.2H6.62v3.6h3.13V22h3.75Z" />
        </svg>
      );

    default:
      return null;
  }
}

function Footer() {
  return (
    <footer className="border-t border-[#252C35] bg-[#06090D] text-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company Information */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="CipherFox Technologies"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-3 text-sm font-semibold tracking-wider text-[#FE6700]">
              CODE. BUILD. SCALE.
            </p>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[#A7ADB5]">
              Building digital solutions and empowering students
              through practical technology learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-[#A7ADB5]">
              <li><Link className="transition hover:text-[#FE6700]" to="/">Home</Link></li>
              <li><Link className="transition hover:text-[#FE6700]" to="/about">About Us</Link></li>
              <li><Link className="transition hover:text-[#FE6700]" to="/services">Services</Link></li>
              <li><Link className="transition hover:text-[#FE6700]" to="/projects">Featured Projects</Link></li>
              <li><Link className="transition hover:text-[#FE6700]" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="mb-5 text-base font-semibold">
              Programmes
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/internships"
                  className="text-[#A7ADB5] transition hover:text-[#FE6700]"
                >
                  Internships
                </Link>
              </li>

              <li>
                <Link
                  to="/career-support"
                  className="text-[#A7ADB5] transition hover:text-[#FE6700]"
                >
                  Career & Project Support
                </Link>
              </li>

              <li>
                <a
                  href={internshipFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#FE6700] hover:text-orange-400"
                >
                  Apply for Internship <ArrowUpRight size={14} />
                </a>
              </li>

              <li>
                <a
                  href={careerSupportFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#FE6700] hover:text-orange-400"
                >
                  Register Your Interest <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal and Contact */}
          <div>
            <h3 className="mb-5 text-base font-semibold">
              Legal
            </h3>

            <ul className="space-y-3 text-sm text-[#A7ADB5]">
              <li>
                <Link
                  to="/privacy-policy"
                  className="transition hover:text-[#FE6700]"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-and-conditions"
                  className="transition hover:text-[#FE6700]"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <h3 className="mb-4 mt-8 text-base font-semibold">
              Get in Touch
            </h3>

            <a
              href={`mailto:${companyEmail}`}
              className="inline-flex items-center gap-2 break-all text-sm text-[#A7ADB5] transition hover:text-[#FE6700]"
            >
              <Mail size={16} />
              {companyEmail}
            </a>

            <Link
              to="/contact"
              className="mt-3 block text-sm font-medium text-[#FE6700] hover:text-orange-400"
            >
              Contact Us →
            </Link>
          </div>

        </div>

        {/* Social Media */}
        <div className="mt-12 border-t border-[#252C35] pt-8">
          <h3 className="mb-5 text-sm font-semibold">
            Follow Us
          </h3>

          <div className="flex flex-wrap items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit CipherFox Technologies on ${social.name}`}
                title={social.name}
                className="text-[#A7ADB5] transition duration-200 hover:-translate-y-1 hover:text-[#FE6700]"
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-[#252C35] pt-6 text-center">
          <p className="text-xs text-[#A7ADB5]">
            © {new Date().getFullYear()} CipherFox Technologies.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
