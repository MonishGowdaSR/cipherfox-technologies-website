
import { useState } from 'react';
import { ArrowUpRight, Code, ChevronLeft, ChevronRight } from 'lucide-react';

import adminDashboard from '../../assets/images/vehicle-service-management/admin-dashboard.png';
import analyticsDashboard from '../../assets/images/vehicle-service-management/analytics-dashboard.png';
import authentication from '../../assets/images/vehicle-service-management/authentication.png';
import bookingStatus from '../../assets/images/vehicle-service-management/booking-status.png';
import customerDashboard from '../../assets/images/vehicle-service-management/customer-dashboard.png';
import paymentManagement from '../../assets/images/vehicle-service-management/payment-management.png';
import serviceBooking from '../../assets/images/vehicle-service-management/service-booking.png';
import vehicleManagement from '../../assets/images/vehicle-service-management/vehicle-management.png';
import vehicleTracking from '../../assets/images/vehicle-service-management/vehicle-tracking.png';

const screenshots = [
  { image: adminDashboard, title: 'Admin Dashboard' },
  { image: analyticsDashboard, title: 'Analytics Dashboard' },
  { image: authentication, title: 'User Authentication' },
  { image: bookingStatus, title: 'Booking Status' },
  { image: customerDashboard, title: 'Customer Dashboard' },
  { image: paymentManagement, title: 'Payment Management' },
  { image: serviceBooking, title: 'Service Booking' },
  { image: vehicleManagement, title: 'Vehicle Management' },
  { image: vehicleTracking, title: 'Vehicle Tracking' },
];

export default function FeaturedProject() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section id="projects" className="bg-[#080B10] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6500]">
            Featured Project
          </span>

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Turning Ideas Into <span className="text-[#FF6500]">Solutions.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#A7ADB5]">
            Explore a practical software solution developed to simplify
            vehicle servicing, booking management and customer operations.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Project information */}
          <div>
            <div className="mb-5 inline-flex rounded-full border border-[#FF6500]/30 bg-[#FF6500]/10 px-4 py-2 text-sm font-medium text-[#FF6500]">
              MERN Stack Application
            </div>

            <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Vehicle Service Management System
            </h3>

            <p className="mt-6 leading-8 text-[#A7ADB5]">
              A web-based platform designed to manage vehicle registration,
              service bookings, payment processing and service tracking
              through dedicated customer and administrator interfaces.
            </p>

            <h4 className="mb-4 mt-8 font-semibold text-white">
              Key Features
            </h4>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'User Authentication',
                'Vehicle Management',
                'Service Booking',
                'Booking Tracking',
                'Payment Integration',
                'Invoice Management',
                'Admin Dashboard',
                'Analytics Dashboard',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-[#A7ADB5]">
                  <span className="h-2 w-2 rounded-full bg-[#FF6500]" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="mb-3 font-semibold text-white">
                Technology Stack
              </h4>

              <div className="flex flex-wrap gap-2">
                {['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Razorpay'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-[#111820] px-3 py-2 text-xs text-[#C4CBD3]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://github.com/MonishGowdaSR/VehicleServiceManagement"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#FF6500] px-6 py-3 font-semibold text-black transition hover:bg-[#E85D00]"
            >
              <Code size={19} />
              View on GitHub
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Screenshot gallery */}
          <div className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111820]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span className="text-sm font-medium text-white">
                  Project Preview
                </span>
                <span className="text-xs text-[#A7ADB5]">
                  {activeIndex + 1} / {screenshots.length}
                </span>
              </div>

              <div className="relative flex aspect-video items-center justify-center bg-[#05080C]">
                <img
                  src={screenshots[activeIndex].image}
                  alt={screenshots[activeIndex].title}
                  className="h-full w-full object-contain"
                />

                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous screenshot"
                  className="absolute left-3 rounded-full border border-white/20 bg-black/70 p-2 text-white transition hover:bg-[#FF6500] hover:text-black"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next screenshot"
                  className="absolute right-3 rounded-full border border-white/20 bg-black/70 p-2 text-white transition hover:bg-[#FF6500] hover:text-black"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              <div className="px-5 py-4">
                <p className="mb-4 text-sm font-medium text-white">
                  {screenshots[activeIndex].title}
                </p>

                <div className="flex gap-3 overflow-x-auto pb-2">
                  {screenshots.map((screenshot, index) => (
                    <button
                      key={screenshot.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View ${screenshot.title}`}
                      aria-pressed={activeIndex === index}
                      className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition ${
                        activeIndex === index
                          ? 'border-[#FF6500]'
                          : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={screenshot.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
