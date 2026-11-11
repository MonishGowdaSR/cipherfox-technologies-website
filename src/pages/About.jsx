
const technologyCapabilities = [
  {
    title: 'Frontend Development',
    technologies: 'HTML, CSS, JavaScript, React',
  },
  {
    title: 'Backend Development',
    technologies: 'Node.js, Express.js, Python',
  },
  {
    title: 'Database Technologies',
    technologies: 'MongoDB, MySQL, PostgreSQL',
  },
  {
    title: 'Data Analytics',
    technologies: 'Python, Pandas, NumPy, SQL, Power BI',
  },
  {
    title: 'AI Application Development',
    technologies: 'LLM Integrations, APIs, Prompt Engineering, RAG',
  },
  {
    title: 'Development Tools',
    technologies: 'Git, GitHub, VS Code, Postman',
  },
];

const coreValues = [
  {
    title: 'Innovation',
    description: 'Exploring better approaches to technology and problem-solving.',
  },
  {
    title: 'Quality',
    description: 'Focusing on reliable, maintainable and effective solutions.',
  },
  {
    title: 'Practical Learning',
    description: 'Connecting technical knowledge with hands-on development.',
  },
  {
    title: 'Continuous Improvement',
    description: 'Adapting to evolving technologies and industry practices.',
  },
  {
    title: 'Collaboration',
    description: 'Encouraging knowledge sharing and teamwork.',
  },
  {
    title: 'Integrity',
    description: 'Maintaining transparency and accountability in our work.',
  },
];

const services = [
  {
    title: 'Website Development',
    description:
      'Designing and developing responsive websites that establish a professional digital presence and provide accessible user experiences.',
  },
  {
    title: 'Custom Web Application Development',
    description:
      'Developing purpose-built web applications around specific business requirements, workflows and operational processes.',
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Creating online commerce platforms that support product presentation, customer interactions and digital transactions.',
  },
  {
    title: 'Business Management Systems',
    description:
      'Developing web-based applications that help businesses organize information, manage operations and improve workflow efficiency.',
  },
  {
    title: 'Backend & Database Engineering',
    description:
      'Building server-side application components, APIs and database systems that support application functionality, data management and integration.',
  },
  {
    title: 'Application Enhancement & Optimization',
    description:
      'Improving existing websites and applications through functionality enhancements, performance improvements, usability refinements and maintainability considerations.',
  },
  {
    title: 'Technical Consultation',
    description:
      'Understanding project requirements, discussing technical possibilities and identifying appropriate approaches for software development.',
  },
];

const SectionHeading = ({ eyebrow, title, description }) => (
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

function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06090D] text-[#F5F5F5]">
      {/* Page Hero */}
      <section className="relative border-b border-[#252C35] px-5 py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FE6700]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#FE6700]">
            About CipherFox Technologies
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Technology. Innovation.
            <span className="block text-[#FE6700]">
              Digital Excellence.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#A7ADB5] sm:text-lg">
            CipherFox Technologies is a modern software development and
            technology solutions company focused on creating practical,
            reliable and scalable digital solutions.
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#A7ADB5]">
            We combine software engineering, modern technologies and
            solution-oriented development practices to address evolving
            business requirements. Alongside our technology services, we
            provide structured internship opportunities that encourage
            practical development, technical exploration and continuous
            learning.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              Who We Are
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              A Technology-Driven Approach to Digital Development
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-[#A7ADB5]">
            <p>
              At CipherFox Technologies, we focus on transforming ideas and
              requirements into functional digital solutions.
            </p>
            <p>
              We approach software development with an emphasis on usability,
              reliability, maintainability and practical implementation.
              By working with modern development technologies and tools, we
              aim to create solutions that address specific requirements
              and support business objectives.
            </p>
            <p>
              Our interests extend beyond conventional software development.
              We also recognize the importance of practical technical exposure
              and provide structured internship opportunities for students
              looking to strengthen their development capabilities.
            </p>
            <p>
              We bring these complementary activities together under one
              technology-focused organization.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Software Development & Technology Solutions"
            description="Software development is a core focus of CipherFox Technologies. We work across different areas of digital development to help businesses establish, improve and expand their technology capabilities."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-xl border border-[#252C35] bg-[#111820] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FE6700]/60"
              >
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#FE6700]/10 text-sm font-bold text-[#FE6700]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-3 text-lg font-semibold text-[#F5F5F5]">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-[#A7ADB5]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Capabilities */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Technology Capabilities"
            title="Engineering with Modern Technologies"
            description="We work with a range of technologies and development tools across frontend development, backend engineering, databases and data-driven applications. We select technologies based on project requirements, application objectives and development considerations."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologyCapabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#252C35] bg-[#111820] p-6"
              >
                <h3 className="mb-3 font-semibold text-[#FE6700]">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-[#A7ADB5]">
                  {item.technologies}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Internship & Professional Development */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              Internship & Professional Development
            </p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Creating Opportunities for Practical Technology Experience
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-[#A7ADB5]">
            <p>
              CipherFox Technologies also provides structured internship
              opportunities for students and aspiring technology professionals.
            </p>
            <p>
              Our internship programmes focus on domain-specific technical
              development through organized learning resources, exposure to
              current technologies, practical project work and periodic
              technical mentorship.
            </p>
            <p>
              Students can explore specialized development pathways in
              full-stack software development, AI application engineering,
              data analytics and backend engineering.
            </p>
            <p>
              Our approach encourages independent learning, practical
              implementation, technical problem-solving and continuous
              improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#252C35] bg-[#111820] p-8 sm:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              Our Vision
            </p>
            <h2 className="mb-5 text-2xl font-bold">
              Building Towards the Future
            </h2>
            <p className="leading-8 text-[#A7ADB5]">
              To evolve into a recognized technology company delivering
              impactful software solutions and developing innovative digital
              products and technology platforms.
            </p>
            <p className="mt-4 leading-8 text-[#A7ADB5]">
              We aspire to build solutions that address emerging business and
              industry needs, continuously expand our engineering capabilities
              and contribute to the development of future-ready technology talent.
            </p>
          </article>

          <article className="rounded-2xl border border-[#252C35] bg-[#111820] p-8 sm:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              Our Mission
            </p>
            <h2 className="mb-5 text-2xl font-bold">
              Turning Requirements into Practical Solutions
            </h2>
            <p className="leading-8 text-[#A7ADB5]">
              Our mission is to develop reliable and effective software
              solutions that address practical business challenges while
              creating opportunities for aspiring technology professionals
              to develop industry-relevant skills through structured learning,
              hands-on projects and technical mentorship.
            </p>
          </article>
        </div>

        <div className="mx-auto mt-8 max-w-7xl rounded-2xl border border-[#252C35] bg-[#111820] p-8 sm:p-10">
          <h3 className="mb-6 text-xl font-bold">We Strive To</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Deliver quality-driven software solutions using modern technologies.',
              'Understand business requirements and translate them into practical digital products.',
              'Provide students with opportunities to apply academic knowledge through project-based experience.',
              'Encourage continuous learning, technical problem-solving and collaboration.',
              'Build a foundation for future innovation, product development and technology platforms.',
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FE6700]" />
                <p className="leading-7 text-[#A7ADB5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Core Values"
            title="The Principles Behind Our Work"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <article
                key={value.title}
                className="rounded-xl border border-[#252C35] bg-[#111820] p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-[#FE6700]">
                  {value.title}
                </h3>
                <p className="text-sm leading-7 text-[#A7ADB5]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Approach"
            title="Understand. Develop. Improve."
            description="We follow a unified approach across our technology development and professional development activities."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Understand',
                description:
                  'We begin by understanding requirements, identifying objectives and evaluating the challenges that need to be addressed.',
              },
              {
                number: '02',
                title: 'Develop',
                description:
                  'We focus on practical implementation through appropriate technologies, structured development practices and hands-on technical work.',
              },
              {
                number: '03',
                title: 'Improve',
                description:
                  'We value feedback, continuous learning, refinement and improvement throughout the development process.',
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-xl border border-[#252C35] bg-[#111820] p-7"
              >
                <p className="mb-5 text-3xl font-bold text-[#FE6700]">
                  {step.number}
                </p>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-7 text-[#A7ADB5]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center leading-8 text-[#A7ADB5]">
            This approach guides how we work on software solutions and how we
            encourage students to develop their technical capabilities.
          </p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Advancing Technology Through Quality and Innovation"
            description="At CipherFox Technologies, we are committed to the principles that guide our work and development."
          />

          <div className="space-y-4">
            {[
              ['Innovation', 'Exploring modern technologies and effective approaches to development.'],
              ['Technology Excellence', 'Emphasizing sound engineering practices, reliability and continuous technical improvement.'],
              ['Customer Satisfaction', 'Understanding requirements and working towards solutions that address client expectations.'],
              ['Continuous Development', 'Expanding technical capabilities and adapting to evolving technology requirements.'],
              ['Practical Value', 'Focusing on meaningful outcomes through software development and technical knowledge.'],
            ].map(([title, description]) => (
              <div
                key={title}
                className="flex flex-col gap-2 rounded-lg border border-[#252C35] bg-[#111820] p-5 sm:flex-row sm:gap-6"
              >
                <h3 className="min-w-48 font-semibold text-[#FE6700]">
                  {title}
                </h3>
                <p className="text-sm leading-7 text-[#A7ADB5]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center leading-8 text-[#A7ADB5]">
            We believe that sustainable technology development requires a
            commitment to quality, innovation and continuous improvement.
          </p>
        </div>
      </section>

      {/* Company Information */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Company Information"
            title="CipherFox Technologies"
          />

          <div className="overflow-hidden rounded-xl border border-[#252C35] bg-[#111820]">
            {[
              ['Company Name', 'CipherFox Technologies'],
              ['Industry', 'IT Services and Software Development'],
              ['Business Registration', 'Registered under the Udyam MSME framework'],
              ['Location', 'Bengaluru, Karnataka, India'],
              ['Operating Model', 'Online / Remote'],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`grid gap-2 px-6 py-5 sm:grid-cols-2 ${
                  index !== 4 ? 'border-b border-[#252C35]' : ''
                }`}
              >
                <p className="text-sm font-medium text-[#A7ADB5]">{label}</p>
                <p className="text-sm font-semibold text-[#F5F5F5]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="px-5 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-[#FE6700]/30 bg-[#111820] px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#FE6700]/10 blur-[100px]" />

          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              Let's Connect
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Have an Idea to Develop or Looking for Practical Experience?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#A7ADB5]">
              Whether you are a business looking for digital solutions or a
              student exploring technology development opportunities,
              CipherFox Technologies welcomes you to connect with us.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/services"
                className="rounded-lg bg-[#FE6700] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#ff812b]"
              >
                Explore Our Services
              </a>
              <a
                href="/internships"
                className="rounded-lg border border-[#FE6700] px-7 py-3.5 text-sm font-semibold text-[#FE6700] transition hover:bg-[#FE6700]/10"
              >
                Explore Internship Opportunities
              </a>
              <a
                href="/contact"
                className="rounded-lg border border-[#252C35] px-7 py-3.5 text-sm font-semibold text-[#F5F5F5] transition hover:border-[#A7ADB5]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
