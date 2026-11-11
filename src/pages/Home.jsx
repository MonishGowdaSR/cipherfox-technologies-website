
import { ArrowRight, Code2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import InternshipSection from '../components/sections/InternshipSection';
import FeaturedProject from '../components/sections/FeaturedProject';

function Home() {
  return (
    <main className="min-h-screen bg-[#06090D] text-[#F5F5F5]">

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">

        {/* Background Effects */}
        <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-[#FE6700]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#FE6700]/5 blur-[120px]" />

        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">

          {/* Hero Content */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#FE6700]/30 bg-[#FE6700]/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#FE6700]" />
              <span className="text-xs font-semibold tracking-wider text-[#FE6700]">
                SOFTWARE DEVELOPMENT & TECHNOLOGY SOLUTIONS
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight md:text-5xl lg:text-[3.5rem]">
              Building Digital Solutions.
              <span className="mt-2 block text-[#FE6700]">
                Creating Opportunities.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#A7ADB5] md:text-lg">
              We engineer modern software solutions that help businesses
              innovate, operate efficiently and grow in an evolving digital
              landscape. Through our technology services and structured
              internship programmes, we bring software development and
              practical technology experience together.
            </p>

            {/* Hero Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-md bg-[#FE6700] px-6 py-4 font-semibold text-[#06090D] transition duration-300 hover:bg-orange-500"
              >
                Explore Our Services
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                to="/internships"
                className="inline-flex items-center gap-2 rounded-md border border-[#A7ADB5]/40 px-6 py-4 font-semibold text-[#F5F5F5] transition duration-300 hover:border-[#FE6700] hover:text-[#FE6700]"
              >
                Explore Internships
                <ArrowRight size={18} />
              </Link>
            </div>

            <p className="mt-8 text-sm tracking-[0.3em] text-[#A7ADB5]">
              CODE <span className="text-[#FE6700]">.</span> BUILD{' '}
              <span className="text-[#FE6700]">.</span> SCALE
            </p>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full border border-[#FE6700]/20 md:h-96 md:w-96" />
            <div className="absolute h-60 w-60 rounded-full border border-[#A7ADB5]/10 md:h-80 md:w-80" />

            <div className="relative grid w-full grid-cols-2 gap-4 p-8">
              <div className="rounded-xl border border-[#FE6700]/30 bg-[#111820]/90 p-6 shadow-[0_0_35px_rgba(254,103,0,0.08)]">
                <Code2 size={34} className="text-[#FE6700]" />
                <h3 className="mt-5 font-bold">Software Development</h3>
                <p className="mt-2 text-sm leading-6 text-[#A7ADB5]">
                  Practical digital solutions for businesses.
                </p>
              </div>

              <div className="mt-16 rounded-xl border border-[#252C35] bg-[#111820]/90 p-6">
                <GraduationCap size={34} className="text-[#FE6700]" />
                <h3 className="mt-5 font-bold">Internship Programmes</h3>
                <p className="mt-2 text-sm leading-6 text-[#A7ADB5]">
                  Structured learning and project experience.
                </p>
              </div>

              <div className="col-span-2 rounded-xl border border-[#252C35] bg-[#111820]/90 p-5 text-center">
                <span className="text-sm font-semibold tracking-[0.25em] text-[#A7ADB5]">
                  INNOVATION <span className="text-[#FE6700]">•</span> TECHNOLOGY{' '}
                  <span className="text-[#FE6700]">•</span> DEVELOPMENT
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Homepage Sections */}
      <AboutSection />
      <ServicesSection />
      <InternshipSection />
      <FeaturedProject />

    </main>
  );
}

export default Home;
