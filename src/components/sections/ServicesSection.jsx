
import {
  Globe,
  AppWindow,
  ShoppingCart,
  BriefcaseBusiness,
  Database,
  Sparkles,
  Gauge,
  MessageSquareText,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Responsive, modern websites designed to establish your digital presence and communicate your business effectively.',
  },
  {
    icon: AppWindow,
    title: 'Custom Web Applications',
    description:
      'Purpose-built web applications designed around your business requirements, workflows and operational needs.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description:
      'Online shopping platforms with product catalogues, cart functionality, order management and payment integration.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business Management Systems',
    description:
      'Digital systems that help organize business operations, manage information and streamline everyday workflows.',
  },
  {
    icon: Database,
    title: 'Backend & Database Engineering',
    description:
      'Server-side development, REST APIs, database design and integration to support reliable web applications.',
  },
  {
    icon: Sparkles,
    title: 'AI Application Development',
    description:
      'Practical AI-powered application features using AI APIs, large language models and intelligent workflows.',
  },
  {
    icon: Gauge,
    title: 'Application Enhancement & Optimization',
    description:
      'Improving existing applications through feature enhancements, interface refinement and performance improvements.',
  },
  {
    icon: MessageSquareText,
    title: 'Project Consultation',
    description:
      'Technical discussions to understand project requirements, explore suitable approaches and plan development.',
  },
];

function ServicesSection() {
  return (
    <section className="border-t border-[#252C35] bg-[#06090D] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FE6700]">
              What We Do
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#F5F5F5] md:text-5xl">
              Technology Services for
              <span className="block text-[#FE6700]">
                Business Growth.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#A7ADB5]">
              We develop practical digital solutions for startups, small
              businesses and local businesses, focusing on functionality,
              usability and business requirements.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#FE6700] transition hover:gap-3"
          >
            Explore All Services
            <ArrowUpRight size={19} />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-xl border border-[#252C35] bg-[#111820] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FE6700]/50 hover:shadow-[0_0_25px_rgba(254,103,0,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#FE6700]/20 bg-[#FE6700]/10 transition group-hover:bg-[#FE6700]/15">
                  <Icon size={24} className="text-[#FE6700]" />
                </div>

                <h3 className="mt-6 text-lg font-bold leading-7 text-[#F5F5F5]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#A7ADB5]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-xl border border-[#FE6700]/20 bg-[#111820] p-7 md:flex-row md:items-center md:p-9">
          <div>
            <h3 className="text-xl font-bold text-[#F5F5F5] md:text-2xl">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#A7ADB5]">
              Let's discuss your requirements and explore a suitable solution.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#FE6700] px-6 py-3 font-semibold text-[#06090D] transition hover:bg-orange-500"
          >
            Contact Our Team
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
