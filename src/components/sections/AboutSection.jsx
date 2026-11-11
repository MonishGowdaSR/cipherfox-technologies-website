
import { ArrowUpRight, Code2, GraduationCap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    icon: Code2,
    title: 'Software Solutions',
    description:
      'Developing websites, custom web applications and digital systems aligned with business requirements.',
  },
  {
    icon: GraduationCap,
    title: 'Practical Internships',
    description:
      'Providing structured learning resources, project experience and periodic technical mentorship.',
  },
  {
    icon: Target,
    title: 'Practical Approach',
    description:
      'Focusing on usability, reliability and solutions designed around real-world requirements.',
  },
];

function AboutSection() {
  return (
    <section className="border-t border-[#252C35] bg-[#0A0E13] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FE6700]">
            About CipherFox
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#F5F5F5] md:text-5xl">
            Technology. Innovation.
            <span className="block text-[#FE6700]">
              Digital Excellence.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#A7ADB5] md:text-lg">
            CipherFox Technologies is a software development and technology
            solutions company focused on building practical, reliable and
            scalable digital solutions. We work on websites, custom web
            applications, e-commerce platforms, business management systems
            and backend solutions.
          </p>

          <p className="mt-4 text-base leading-8 text-[#A7ADB5]">
            Alongside our software services, we provide structured internship
            opportunities that combine curated learning resources, exposure
            to evolving technologies, domain-specific project development
            and periodic technical mentorship.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-[#FE6700] transition hover:gap-3"
          >
            Discover More About Us
            <ArrowUpRight size={19} />
          </Link>
        </div>

        {/* Highlight Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-xl border border-[#252C35] bg-[#111820] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FE6700]/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#FE6700]/20 bg-[#FE6700]/10">
                  <Icon size={25} className="text-[#FE6700]" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#F5F5F5]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#A7ADB5]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
