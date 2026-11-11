
import { ArrowRight, Code2, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    title: 'Website Development',
    description:
      'We develop modern, responsive and user-friendly websites that help businesses establish and strengthen their online presence.',
    offerings: [
      'Business and corporate websites',
      'Responsive website development',
      'Landing pages and portfolio websites',
      'Website redesign and improvements',
    ],
  },
  {
    title: 'Custom Web Application Development',
    description:
      'We build web applications tailored to specific business requirements, workflows and operational needs.',
    offerings: [
      'Custom business applications',
      'Web-based management platforms',
      'Interactive dashboards',
      'User authentication and role-based access',
      'Application functionality and integration',
    ],
  },
  {
    title: 'E-commerce Development',
    description:
      'We develop e-commerce solutions that help businesses establish and manage their online selling operations.',
    offerings: [
      'E-commerce storefront development',
      'Product and category management',
      'Shopping cart functionality',
      'Order management features',
      'Payment gateway integration',
    ],
  },
  {
    title: 'Business Management Systems',
    description:
      'We develop digital systems that help businesses organize information, manage activities and streamline everyday operations.',
    offerings: [
      'Service management systems',
      'Task and project management applications',
      'Customer and operational management systems',
      'Administrative dashboards',
      'Workflow-based applications',
    ],
  },
  {
    title: 'Backend & Database Engineering',
    description:
      'We develop the server-side components and database structures that support reliable web applications and digital platforms.',
    offerings: [
      'Backend application development',
      'REST API development and integration',
      'Database design and implementation',
      'Authentication and authorization',
      'Data management and application connectivity',
    ],
  },
  {
    title: 'AI Application Development',
    description:
      'We integrate practical AI capabilities into software applications to support intelligent features and improve selected business workflows.',
    offerings: [
      'AI-powered web application features',
      'Large Language Model (LLM) API integration',
      'Intelligent information processing',
      'AI-assisted workflow automation',
      'Generative AI application features',
    ],
    note:
      'Our focus is on integrating existing AI models and services into useful applications, rather than developing foundation models from scratch.',
  },
  {
    title: 'Application Enhancement & Optimization',
    description:
      'We help improve existing applications by refining functionality, addressing technical issues and enhancing the overall application experience.',
    offerings: [
      'Existing application improvements',
      'Feature enhancement and integration',
      'User interface refinements',
      'Application performance improvements',
      'Backend and database enhancements',
    ],
  },
  {
    title: 'Project Consultation',
    description:
      'We help businesses evaluate software requirements and identify suitable approaches for developing digital solutions.',
    offerings: [
      'Initial requirement discussions',
      'Technical solution exploration',
      'Application functionality planning',
      'Project scope and feasibility discussions',
      'Technology and development approach guidance',
    ],
  },
];

const technologyStack = [
  {
    title: 'Frontend Development',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    title: 'Backend Development',
    technologies: ['Node.js', 'Express.js'],
  },
  {
    title: 'Database Technologies',
    technologies: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'AI Application Development',
    technologies: [
      'Python',
      'AI and LLM APIs',
      'Prompt Engineering',
      'Retrieval-Augmented Generation (RAG)',
    ],
  },
  {
    title: 'Development Tools',
    technologies: ['Git', 'GitHub', 'Visual Studio Code', 'Postman'],
  },
];

const developmentProcess = [
  {
    number: '01',
    title: 'Requirement Discussion',
    description:
      'We begin by understanding your business needs, project objectives, expected functionality and requirements.',
  },
  {
    number: '02',
    title: 'Planning',
    description:
      'We define the project scope, identify suitable technologies, establish priorities and plan the development approach.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description:
      'We translate the agreed requirements into a functional software solution through application design and development.',
  },
  {
    number: '04',
    title: 'Testing',
    description:
      'We evaluate application functionality, identify issues and refine the solution to improve reliability and usability.',
  },
  {
    number: '05',
    title: 'Delivery',
    description:
      'We deliver the completed solution along with relevant handover information.',
  },
];

const reasons = [
  {
    title: 'Requirement-Focused Development',
    description:
      'We approach each project by understanding its objectives and aligning the solution with actual business requirements.',
  },
  {
    title: 'Modern Technologies',
    description:
      'We work with contemporary web development technologies and tools to build practical digital solutions.',
  },
  {
    title: 'Practical Implementation',
    description:
      'Our focus is on functional applications that address real business needs.',
  },
  {
    title: 'Structured Development Process',
    description:
      'We follow defined development stages to maintain clarity throughout the project.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'We value refinement, maintainability and ongoing improvement in software development.',
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-[#F5F5F5] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 leading-8 text-[#A7ADB5]">{description}</p>
      )}
    </div>
  );
}

function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-xl border border-[#252C35] bg-[#111820] p-6 transition duration-300 hover:border-[#FE6700]/50">
      <div className="mb-5 flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FE6700]/10 text-sm font-bold text-[#FE6700]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <Code2 size={20} className="text-[#FE6700]" />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-[#F5F5F5]">
        {service.title}
      </h3>

      <p className="text-sm leading-7 text-[#A7ADB5]">
        {service.description}
      </p>

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="mt-6 flex w-full items-center justify-between border-t border-[#252C35] pt-4 text-sm font-semibold text-[#FE6700] transition hover:text-[#ff812b]"
      >
        <span>{expanded ? 'Hide Offerings' : 'What We Offer'}</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {expanded && (
        <ul className="mt-4 space-y-3">
          {service.offerings.map((offering) => (
            <li
              key={offering}
              className="flex gap-3 text-sm leading-6 text-[#A7ADB5]"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FE6700]" />
              {offering}
            </li>
          ))}
        </ul>
      )}

      {expanded && service.note && (
        <p className="mt-5 rounded-lg border border-[#FE6700]/20 bg-[#FE6700]/5 p-4 text-xs leading-6 text-[#A7ADB5]">
          {service.note}
        </p>
      )}
    </article>
  );
}

function Services() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06090D] text-[#F5F5F5]">
      {/* Hero */}
      <section className="relative border-b border-[#252C35] px-5 py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FE6700]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#FE6700]">
            Technology Services
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Building Digital Solutions
            <span className="block text-[#FE6700]">
              for Business Growth
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#A7ADB5] sm:text-lg">
            CipherFox Technologies provides software development and
            technology solutions to help startups, small businesses and
            local businesses strengthen their digital presence, streamline
            operations and turn ideas into functional applications.
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#A7ADB5]">
            From business websites to custom web applications and backend
            systems, we focus on developing practical, reliable and scalable
            solutions aligned with business requirements.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#FE6700] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#ff812b]"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Services"
            title="Software Solutions for Business Requirements"
            description="We offer a range of software development services to support business requirements, digital transformation and application development."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#A7ADB5]">
            Select "What We Offer" on a service card to explore its offerings.
          </p>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Technology Stack"
            title="Modern Technologies. Practical Solutions."
            description="We use modern development technologies and tools to build and maintain software applications."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologyStack.map((category) => (
              <article
                key={category.title}
                className="rounded-xl border border-[#252C35] bg-[#111820] p-6"
              >
                <h3 className="mb-5 text-lg font-semibold text-[#FE6700]">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-[#252C35] bg-[#06090D] px-3 py-2 text-xs text-[#A7ADB5]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Development Process"
            title="From Requirements to Delivery"
            description="We follow a structured five-stage development process to understand requirements, build solutions and deliver functional applications."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {developmentProcess.map((step) => (
              <article
                key={step.number}
                className="rounded-xl border border-[#252C35] bg-[#111820] p-6"
              >
                <p className="mb-5 text-3xl font-bold text-[#FE6700]">
                  {step.number}
                </p>
                <h3 className="mb-3 text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-[#A7ADB5]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose CipherFox Technologies?"
            title="A Practical Approach to Software Development"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="rounded-xl border border-[#252C35] bg-[#111820] p-6"
              >
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#FE6700]/10 text-sm font-bold text-[#FE6700]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-3 text-lg font-semibold">
                  {reason.title}
                </h3>
                <p className="text-sm leading-7 text-[#A7ADB5]">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-[#FE6700]/30 bg-[#111820] px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#FE6700]/10 blur-[100px]" />

          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              Let's Connect
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Let's Discuss Your Next Digital Solution
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#A7ADB5]">
              Have a business idea, application requirement or an existing
              system that needs improvement? Get in touch with CipherFox
              Technologies to discuss your project requirements and explore
              a suitable development approach.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#A7ADB5]">
              Project scope, requirements and pricing are discussed
              individually. Contact us to request a project quotation.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#FE6700] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#ff812b]"
            >
              Contact Our Team
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
