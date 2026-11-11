
import {
  Code2,
  BrainCircuit,
  ChartNoAxesCombined,
  Database,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const programmes = [
  {
    icon: Code2,
    title: 'Full-Stack Software Developer',
    subtitle: 'MERN Stack Specialization',
    description:
      'Explore full-stack web development by building interactive user interfaces, server-side applications and database-driven solutions.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    icon: BrainCircuit,
    title: 'AI Application Engineer',
    subtitle: 'AI-Powered Application Development',
    description:
      'Explore AI application development through LLM integrations, intelligent features and practical AI-powered web applications.',
    technologies: ['Python', 'React', 'AI APIs', 'LLMs', 'Prompt Engineering', 'RAG'],
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Data Analytics & Business Intelligence Associate',
    subtitle: 'Data Analysis & Visualization',
    description:
      'Develop practical data analysis skills by working with datasets, extracting insights and creating meaningful visual reports.',
    technologies: ['Excel', 'SQL', 'Python', 'Pandas', 'NumPy', 'Power BI'],
  },
  {
    icon: Database,
    title: 'Backend Software Developer',
    subtitle: 'API & Database Engineering',
    description:
      'Explore server-side development, REST API engineering, database design and the foundations of reliable backend systems.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'REST APIs', 'Postman'],
  },
];

function InternshipSection() {
  return (
    <section className="border-t border-[#252C35] bg-[#0A0E13] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FE6700]">
              Internship Opportunities
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#F5F5F5] md:text-5xl">
              Learn. Build.
              <span className="block text-[#FE6700]">
                Develop Your Skills.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#A7ADB5]">
              Explore technology-focused internship programmes designed
              around structured learning resources, practical project
              development and periodic technical mentorship.
            </p>
          </div>

          <Link
            to="/internships"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#FE6700] transition hover:gap-3"
          >
            View All Programmes
            <ArrowUpRight size={19} />
          </Link>
        </div>

        {/* Programme Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {programmes.map((programme) => {
            const Icon = programme.icon;

            return (
              <article
                key={programme.title}
                className="group rounded-xl border border-[#252C35] bg-[#111820] p-7 transition duration-300 hover:border-[#FE6700]/50 hover:shadow-[0_0_25px_rgba(254,103,0,0.05)] md:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#FE6700]/20 bg-[#FE6700]/10">
                    <Icon size={25} className="text-[#FE6700]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold leading-7 text-[#F5F5F5]">
                      {programme.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#FE6700]">
                      {programme.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-[#A7ADB5]">
                  {programme.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F5]">
                    Technologies Covered
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {programme.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-[#252C35] bg-[#06090D] px-3 py-2 text-xs text-[#A7ADB5]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/internships"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#FE6700] transition hover:gap-3"
                >
                  Explore Programme
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-xl border border-[#FE6700]/20 bg-[#111820] p-7 md:flex-row md:items-center md:p-9">
          <div>
            <h3 className="text-xl font-bold text-[#F5F5F5] md:text-2xl">
              Ready to begin your learning journey?
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#A7ADB5]">
              Choose a technology domain and explore the internship programme.
            </p>
          </div>

          <Link
            to="/internships"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#FE6700] px-6 py-3 font-semibold text-[#06090D] transition hover:bg-orange-500"
          >
            Explore Internships
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default InternshipSection;
