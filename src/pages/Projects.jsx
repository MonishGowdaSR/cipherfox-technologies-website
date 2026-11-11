
import { useState } from 'react';
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Vehicle Service Management screenshots
import adminDashboard from '../assets/images/vehicle-service-management/admin-dashboard.png';
import analyticsDashboard from '../assets/images/vehicle-service-management/analytics-dashboard.png';
import authentication from '../assets/images/vehicle-service-management/authentication.png';
import bookingStatus from '../assets/images/vehicle-service-management/booking-status.png';
import customerDashboard from '../assets/images/vehicle-service-management/customer-dashboard.png';
import paymentManagement from '../assets/images/vehicle-service-management/payment-management.png';
import serviceBooking from '../assets/images/vehicle-service-management/service-booking.png';
import vehicleManagement from '../assets/images/vehicle-service-management/vehicle-management.png';
import vehicleTracking from '../assets/images/vehicle-service-management/vehicle-tracking.png';

const screenshots = [
  { src: adminDashboard, title: 'Admin Dashboard' },
  { src: analyticsDashboard, title: 'Analytics Dashboard' },
  { src: authentication, title: 'Authentication' },
  { src: bookingStatus, title: 'Booking Status' },
  { src: customerDashboard, title: 'Customer Dashboard' },
  { src: paymentManagement, title: 'Payment Management' },
  { src: serviceBooking, title: 'Service Booking' },
  { src: vehicleManagement, title: 'Vehicle Management' },
  { src: vehicleTracking, title: 'Vehicle Tracking' },
];

const otherProjects = [
  {
    number: '02',
    title: 'Task and Project Management System',
    description:
      'A software application focused on organizing tasks and managing project activities through a centralized digital platform.',
    link: 'https://github.com/MonishGowdaSR/Task-and-Project-Management-System',
  },
  {
    number: '03',
    title: 'Resume Screening AI Agent',
    description:
      'An AI-oriented application designed to assist with resume screening and candidate information analysis.',
    link: 'https://github.com/MonishGowdaSR/resume-screening-ai-agent',
  },
  {
    number: '04',
    title: 'Stock Market Analysis using Python',
    description:
      'A Python-based project focused on exploring stock market data and performing data analysis to identify trends and insights.',
    link: 'https://github.com/MonishGowdaSR/stock-market-analysis-python',
  },
];

const developmentAreas = [
  'Full-Stack Web Application Development',
  'Backend & Database Engineering',
  'AI Application Development',
  'Data Analytics and Visualization',
  'Software Development and Integration',
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-[#F5F5F5] sm:text-4xl">
        {title}
        <span className="text-[#FE6700]">.</span>
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-[#A7ADB5]">{description}</p>
      )}
    </div>
  );
}

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const showPrevious = () => {
    setSelectedImage((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSelectedImage((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className="min-h-screen bg-[#06090D] text-[#F5F5F5]">

      {/* Page Introduction */}
      <section className="relative overflow-hidden border-b border-[#252C35] px-5 py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#FE6700]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#FE6700]">
            Our Work
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Turning Ideas into
            <span className="block text-[#FE6700]">
              Digital Solutions
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#A7ADB5] sm:text-lg">
            At CipherFox Technologies, we focus on building practical software
            applications that demonstrate our development capabilities,
            technical knowledge and problem-solving approach.
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-[#A7ADB5]">
            Explore our projects across web application development, project
            management, artificial intelligence and data analytics.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured Project"
            title="Vehicle Service Management System"
            description="A Complete Vehicle Service Management Platform"
          />

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <div className="overflow-hidden rounded-2xl border border-[#252C35] bg-[#111820]">
                <img
                  src={adminDashboard}
                  alt="Vehicle Service Management System admin dashboard"
                  className="h-auto w-full object-cover"
                />
                <div className="border-t border-[#252C35] px-5 py-4">
                  <p className="text-sm font-medium text-[#A7ADB5]">
                    Vehicle Service Management System
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#FE6700]/30 bg-[#FE6700]/5 px-3 py-1.5 text-xs font-medium text-[#F5F5F5]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#F5F5F5]">
                Project Overview
              </h3>

              <p className="mt-4 leading-8 text-[#A7ADB5]">
                The Vehicle Service Management System is a web-based
                application designed to simplify vehicle servicing operations
                through digital service booking, vehicle management and
                administrative tools.
              </p>

              <h4 className="mb-4 mt-8 text-lg font-semibold text-[#F5F5F5]">
                Key Features
              </h4>

              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  'User authentication and account management',
                  'Vehicle registration and management',
                  'Online service booking and tracking',
                  'Service management dashboard',
                  'Payment gateway integration',
                  'Invoice generation',
                  'Administrative dashboard',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#A7ADB5]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FE6700]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <h4 className="mb-3 mt-8 text-lg font-semibold text-[#F5F5F5]">
                Technology Stack
              </h4>

              <p className="leading-7 text-[#A7ADB5]">
                React.js, Vite, Node.js, Express.js, MongoDB, Tailwind CSS,
                JWT, Razorpay, Cloudinary and Leaflet.
              </p>

              <a
                href="https://github.com/MonishGowdaSR/VehicleServiceManagement/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#FE6700] px-6 py-3.5 font-semibold text-white transition hover:bg-[#e85d00]"
              >
                View GitHub Repository
                <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Demonstration Gallery */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Project Demonstration"
            title="Explore the Application"
            description="View the application screenshots and interface demonstrations to explore its functionality."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((screenshot, index) => (
              <button
                type="button"
                key={screenshot.title}
                onClick={() => setSelectedImage(index)}
                className="group overflow-hidden rounded-xl border border-[#252C35] bg-[#111820] text-left transition hover:-translate-y-1 hover:border-[#FE6700]/60"
              >
                <div className="aspect-video overflow-hidden bg-[#06090D]">
                  <img
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-4">
                  <span className="text-sm font-medium text-[#F5F5F5]">
                    {screenshot.title}
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-[#FE6700] opacity-70 transition group-hover:opacity-100"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Other Projects"
            description="Explore more projects developed by CipherFox Technologies."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <article
                key={project.number}
                className="flex flex-col rounded-2xl border border-[#252C35] bg-[#111820] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FE6700]/50"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FE6700]/10 text-[#FE6700]">
                  <Code2 size={23} />
                </div>

                <p className="mb-3 text-xs font-semibold tracking-widest text-[#FE6700]">
                  PROJECT {project.number}
                </p>

                <h3 className="text-xl font-bold leading-snug text-[#F5F5F5]">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[#A7ADB5]">
                  {project.description}
                </p>

                <p className="mt-6 border-t border-[#252C35] pt-5 text-sm text-[#A7ADB5]">
                  <span className="font-semibold text-[#F5F5F5]">
                    Technology:
                  </span>{' '}
                  Refer to the GitHub repository.
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FE6700] transition hover:text-[#ff8a3d]"
                >
                  Explore Repository
                  <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Development Focus */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our Capabilities"
            title="Our Development Focus"
            description="Our projects reflect our interest and development capabilities across:"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {developmentAreas.map((area, index) => (
              <div
                key={area}
                className="flex items-center gap-4 rounded-xl border border-[#252C35] bg-[#111820] p-5"
              >
                <span className="text-sm font-bold text-[#FE6700]">
                  0{index + 1}
                </span>
                <p className="text-sm font-medium leading-6 text-[#F5F5F5]">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-5 py-24 text-center sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FE6700]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
            Let's Build Something
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Have a Project Idea?
            <span className="text-[#FE6700]">.</span>
          </h2>

          <p className="mt-6 leading-8 text-[#A7ADB5]">
            Looking to develop a website, custom application or business
            management solution?
          </p>

          <p className="mt-3 leading-7 text-[#A7ADB5]">
            Connect with CipherFox Technologies to discuss your requirements.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#FE6700] px-7 py-3.5 font-semibold text-white transition hover:bg-[#e85d00]"
          >
            Contact Our Team
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      {/* Project Screenshot Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full bg-[#111820] p-3 text-white transition hover:bg-[#FE6700]"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 rounded-full bg-[#111820] p-3 text-white transition hover:bg-[#FE6700] sm:left-8"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={screenshots[selectedImage].src}
              alt={screenshots[selectedImage].title}
              className="max-h-[78vh] w-full rounded-lg object-contain"
            />
            <p className="mt-5 text-center text-sm font-medium text-[#F5F5F5]">
              {screenshots[selectedImage].title}
              <span className="ml-3 text-[#A7ADB5]">
                {selectedImage + 1} / {screenshots.length}
              </span>
            </p>
          </div>

          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 rounded-full bg-[#111820] p-3 text-white transition hover:bg-[#FE6700] sm:right-8"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

    </main>
  );
}

export default Projects;
