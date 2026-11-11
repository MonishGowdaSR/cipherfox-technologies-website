
import { useState } from 'react';
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  BarChart3,
  Database,
  BookOpen,
  Laptop,
  FolderGit2,
  Users,
  ClipboardCheck,
  Award,
  BriefcaseBusiness,
  ChevronDown,
} from 'lucide-react';

const programmes = [
  {
    number: '01',
    title: 'Full-Stack Software Developer — MERN Stack',
    icon: Code2,
    technologies: [
      'Programming Fundamentals',
      'Git & GitHub',
      'HTML, CSS and JavaScript',
      'React.js',
      'Node.js and Express.js',
      'MongoDB',
      'REST APIs',
    ],
    description:
      'Explore full-stack web application development using the MERN technology stack. Learn to build responsive user interfaces, develop backend services, integrate databases and connect application components to create functional web applications through practical project development.',
  },
  {
    number: '02',
    title: 'AI Application Engineer',
    icon: BrainCircuit,
    technologies: [
      'Programming Fundamentals',
      'Git & GitHub',
      'Python',
      'AI and LLM APIs',
      'Prompt Engineering',
      'Embeddings',
      'Retrieval-Augmented Generation (RAG)',
      'React.js and API Integration',
    ],
    description:
      'Explore the development of AI-powered applications by integrating existing AI models and services into software solutions. Gain exposure to Large Language Models, prompt engineering and RAG-based application workflows through practical AI application development.',
  },
  {
    number: '03',
    title: 'Data Analytics & Business Intelligence Associate',
    icon: BarChart3,
    technologies: [
      'Programming Fundamentals',
      'Git & GitHub',
      'Microsoft Excel',
      'SQL',
      'Python',
      'Pandas and NumPy',
      'Power BI',
    ],
    description:
      'Develop practical data analytics skills by working with data collection, cleaning, transformation, analysis and visualization. Explore how analytical tools and business intelligence platforms can help convert raw data into meaningful insights and reports.',
  },
  {
    number: '04',
    title: 'Backend Software Developer — API & Database Engineering',
    icon: Database,
    technologies: [
      'Programming Fundamentals',
      'Git & GitHub',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL / MySQL',
      'REST APIs',
      'Postman',
    ],
    description:
      'Focus on server-side application development, API engineering and database management. Learn to design backend components, develop REST APIs, manage application data and implement essential backend functionalities that support modern software applications.',
  },
];

const learningApproach = [
  {
    number: '01',
    title: 'Structured Learning Resources',
    icon: BookOpen,
    description:
      'Students receive curated learning materials and technical resources relevant to their selected internship domain.',
  },
  {
    number: '02',
    title: 'Modern Technology Exposure',
    icon: Laptop,
    description:
      'Explore evolving technologies, development tools and current technical concepts that complement academic learning.',
  },
  {
    number: '03',
    title: 'Practical Project Development',
    icon: FolderGit2,
    description:
      'Apply acquired knowledge through individual or team-based projects, depending on the programme and project requirements.',
  },
  {
    number: '04',
    title: 'Periodic Technical Mentorship',
    icon: Users,
    description:
      'Receive technical guidance, doubt clarification, progress discussions and project feedback through scheduled mentorship interactions.',
  },
  {
    number: '05',
    title: 'Project Review & Evaluation',
    icon: ClipboardCheck,
    description:
      'Project work is reviewed to assess implementation, technical understanding and overall development progress.',
  },
];

const careerSupport = [
  'Resume preparation and improvement',
  'LinkedIn profile development',
  'GitHub profile and project presentation',
  'Portfolio development',
  'Guidance on professional job portals',
];

const faqs = [
  {
    question: 'Who can apply for CipherFox internship programmes?',
    answer:
      'Students from universities across India and from different academic years can explore our internship opportunities.',
  },
  {
    question: 'Can I choose my preferred technology domain?',
    answer:
      'Yes. Applicants can select one internship programme based on their interests and preferred technology domain.',
  },
  {
    question: 'Are the internships classroom-based?',
    answer:
      'No. Our approach emphasizes structured self-learning, practical project development and periodic technical mentorship rather than daily classroom sessions.',
  },
  {
    question: 'Will I work on projects during the internship?',
    answer:
      'Yes. Practical project development is an important part of each programme. Projects may be individual or team-based, depending on the programme and project requirements.',
  },
  {
    question: 'What is the internship duration?',
    answer:
      'The standard duration is 16 weeks (4 months), with an extended 24-week (6-month) option.',
  },
  {
    question: 'Will I receive a certificate?',
    answer:
      'Students who successfully complete the internship and project evaluation receive an Internship Completion Certificate and Project Evaluation Report.',
  },
  {
    question: 'How can I apply?',
    answer:
      'You can submit your details through the internship application form. Further programme information will be communicated during the application process.',
  },
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

function Internships() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-[#06090D] text-[#F5F5F5]">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#252C35] px-5 py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#FE6700]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#FE6700]">
            Internship Programmes
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Learn. Build.
            <span className="block text-[#FE6700]">Develop.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-[#A7ADB5] sm:text-lg">
            At CipherFox Technologies, our internship programmes are designed
            to help aspiring technology professionals gain practical
            experience through structured learning resources, exposure to
            modern technologies and hands-on project development.
          </p>

          <p className="mx-auto mt-5 max-w-4xl leading-8 text-[#A7ADB5]">
            We focus on combining technical knowledge with practical
            implementation, enabling students to explore their chosen
            technology domain and develop skills through real-world
            project-oriented work.
          </p>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-[#A7ADB5]">
            Explore our internship programmes and choose the technology
            domain that aligns with your interests.
          </p>

          <a
            href="#programmes"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#FE6700] px-7 py-3.5 font-semibold text-white transition hover:bg-[#e85d00]"
          >
            Explore Programmes
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      {/* Internship Programmes */}
      <section id="programmes" className="scroll-mt-20 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Choose Your Domain"
            title="Our Internship Programmes"
            description="Explore structured technical learning pathways across different technology domains."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {programmes.map((programme) => {
              const Icon = programme.icon;

              return (
                <article
                  key={programme.number}
                  className="rounded-2xl border border-[#252C35] bg-[#111820] p-7 transition duration-300 hover:border-[#FE6700]/50 sm:p-8"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FE6700]/10 text-[#FE6700]">
                      <Icon size={24} />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-[#FE6700]">
                      {programme.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-[#F5F5F5] sm:text-2xl">
                    {programme.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#A7ADB5]">
                    {programme.description}
                  </p>

                  <div className="mt-7 border-t border-[#252C35] pt-6">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#F5F5F5]">
                      Technologies to Learn
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {programme.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[#252C35] bg-[#06090D] px-3 py-2 text-xs text-[#A7ADB5]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How We Learn"
            title="Our Internship Learning Approach"
            description="Our internship programmes follow a structured, self-learning and practical development approach."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {learningApproach.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="rounded-xl border border-[#252C35] bg-[#111820] p-6"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FE6700]/10 text-[#FE6700]">
                      <Icon size={22} />
                    </div>

                    <span className="text-sm font-bold text-[#FE6700]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#F5F5F5]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#A7ADB5]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programme Duration */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Programme Timeline"
            title="Programme Duration"
            description="Our internship programmes offer two duration options:"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#252C35] bg-[#111820] p-9 text-center transition hover:border-[#FE6700]/50">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#A7ADB5]">
                Standard Duration
              </p>

              <h3 className="mt-5 text-5xl font-bold text-[#FE6700]">
                16
                <span className="ml-2 text-2xl text-[#F5F5F5]">Weeks</span>
              </h3>

              <p className="mt-3 text-lg font-medium text-[#F5F5F5]">
                4 Months
              </p>
            </div>

            <div className="rounded-2xl border border-[#252C35] bg-[#111820] p-9 text-center transition hover:border-[#FE6700]/50">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#A7ADB5]">
                Extended Duration
              </p>

              <h3 className="mt-5 text-5xl font-bold text-[#FE6700]">
                24
                <span className="ml-2 text-2xl text-[#F5F5F5]">Weeks</span>
              </h3>

              <p className="mt-3 text-lg font-medium text-[#F5F5F5]">
                6 Months
              </p>
            </div>
          </div>

          <p className="mt-7 text-center text-sm leading-7 text-[#A7ADB5]">
            The programme duration and project scope are discussed during the
            application process.
          </p>
        </div>
      </section>

      {/* Mentorship and Project Development */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              Guided Development
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#F5F5F5] sm:text-4xl">
              Mentorship & Project Development
              <span className="text-[#FE6700]">.</span>
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-[#A7ADB5]">
            <p>
              We emphasize independent learning supported by periodic
              technical mentorship.
            </p>

            <p>
              Students work on their selected domain projects while receiving
              guidance to address technical challenges, improve implementation
              and understand development practices.
            </p>

            <p>
              Depending on the programme and project requirements, students
              may work individually or collaborate in teams.
            </p>
          </div>
        </div>
      </section>

      {/* Internship Completion */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Programme Outcomes"
            title="Internship Completion"
            description="Successful completion of the internship involves participation in the learning process, project development and project evaluation."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-5 rounded-2xl border border-[#252C35] bg-[#111820] p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FE6700]/10 text-[#FE6700]">
                <Award size={25} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#F5F5F5]">
                  Internship Completion Certificate
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#A7ADB5]">
                  Recognizes the student's successfully completed internship
                  programme.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl border border-[#252C35] bg-[#111820] p-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FE6700]/10 text-[#FE6700]">
                <ClipboardCheck size={25} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#F5F5F5]">
                  Project Evaluation Report
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#A7ADB5]">
                  Records the student's evaluated project performance and
                  development work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Development Support */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              Beyond Technical Skills
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#F5F5F5] sm:text-4xl">
              Career Development Support
              <span className="text-[#FE6700]">.</span>
            </h2>

            <p className="mt-5 leading-8 text-[#A7ADB5]">
              Alongside technical development, we encourage students to build
              a professional technology profile.
            </p>
          </div>

          <div className="space-y-3">
            {careerSupport.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-[#252C35] bg-[#111820] p-4"
              >
                <span className="text-sm font-bold text-[#FE6700]">
                  0{index + 1}
                </span>

                <p className="text-sm leading-6 text-[#F5F5F5]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Need More Information?"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our internship programmes."
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-[#252C35] bg-[#111820]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-semibold leading-7 text-[#F5F5F5]">
                      <span className="mr-3 text-[#FE6700]">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#FE6700] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#252C35] px-5 py-5 sm:px-6">
                      <p className="text-sm leading-7 text-[#A7ADB5]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-[#252C35] px-5 py-24 text-center sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FE6700]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
            Learn. Build. Develop.
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#F5F5F5] sm:text-4xl">
            Start Your Technology Journey with CipherFox
            <span className="text-[#FE6700]">.</span>
          </h2>

          <p className="mt-6 leading-8 text-[#A7ADB5]">
            Choose your preferred internship domain, explore modern
            technologies and develop practical skills through structured
            learning and project-based experience.
          </p>

          <a
            href="/contact?type=internship"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#FE6700] px-7 py-3.5 font-semibold text-white transition hover:bg-[#e85d00]"
          >
            Apply for Internship
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default Internships;
