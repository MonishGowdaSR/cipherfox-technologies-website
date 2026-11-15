
import {
  ArrowUpRight,
  UserRoundCheck,
  FileCheck,
  Workflow,
  BookOpen,
  GraduationCap,
  BriefcaseBusiness,
  RefreshCw,
  Mail,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Career Profile Development',
    description:
      'Build a professional presence across career and technical platforms.',
    icon: UserRoundCheck,
    points: [
      'LinkedIn profile creation and optimization.',
      'Naukri and other job portal profile setup and improvement.',
      'GitHub profile and repository organization.',
      'Guidance on networking, professional posting and profile management.',
      'Personal portfolio planning and development guidance.',
    ],
  },
  {
    number: '02',
    title: 'Resume Evaluation & Guidance',
    description:
      'Present your qualifications and experience effectively.',
    icon: FileCheck,
    points: [
      'Evaluation and review of existing resumes.',
      'Identification of missing information and improvement areas.',
      'Content, structure and presentation suggestions.',
      'Guidance on professional resume standards.',
    ],
    note: 'Resume creation from scratch is not included.',
  },
  {
    number: '03',
    title: 'Project Evaluation & Mentorship',
    description:
      'Plan better. Build independently. Develop with direction.',
    icon: Workflow,
    points: [
      'Evaluation of completed academic and personal projects.',
      'Problem statement formulation and project scope definition.',
      'Technology-stack recommendations.',
      'Structured project plans, timelines and milestones.',
      'Technical guidance and doubt clarification.',
    ],
    note:
      'Students independently implement their projects. We provide evaluation, planning and mentorship, not ready-made projects.',
  },
];

const faqs = [
  {
    question: 'Who can enrol in these services?',
    answer:
      'Students, graduates, pass-outs and working professionals from relevant academic and professional backgrounds can enrol. There is no restriction to a particular college or university.',
  },
  {
    question: 'Are these services paid?',
    answer:
      'Yes. All three services are paid. Applicable fee details are communicated during the enquiry process.',
  },
  {
    question: 'Can I select multiple services?',
    answer:
      'Yes. You can select one, two or all three services according to your requirements.',
  },
  {
    question: 'Do you create resumes from scratch?',
    answer:
      'No. We evaluate existing resumes and provide feedback, improvement suggestions and professional guidance.',
  },
  {
    question: 'Do you build projects for students?',
    answer:
      'No. Students develop their own projects with our planning, technical guidance and mentorship.',
  },
  {
    question: 'Are learning resources provided?',
    answer:
      'Yes. Relevant reference materials, resource books and PDF guides are provided to support learning and development.',
  },
  {
    question: 'Can professionals returning after a career break enrol?',
    answer:
      'Yes. Our services are also open to individuals seeking to update their professional presence and prepare for current industry expectations.',
  },
  {
    question: 'Does participation guarantee employment?',
    answer:
      'No. Participation does not guarantee employment, placement or interview selection. Outcomes depend on individual skills, preparation, practical abilities, interview performance and employer requirements.',
  },
];

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students',
    description:
      'B.E., B.Tech, BCA and other relevant academic backgrounds, from any year.',
  },
  {
    icon: UserRoundCheck,
    title: 'Graduates & Pass-outs',
    description:
      'Individuals preparing for their first professional opportunities.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Working Professionals',
    description:
      'Individuals looking to strengthen their professional profiles and project portfolios.',
  },
  {
    icon: RefreshCw,
    title: 'Career Returners',
    description:
      'Individuals returning after employment breaks who want to refresh their knowledge and prepare for current industry expectations.',
  },
];

function CareerSupport() {
  return (
    <main className="min-h-screen bg-[#06090D] text-[#F5F5F5]">

      
      {/* Hero and Service Overview */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">

          {/* Main Heading */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              Career Development Services
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Career & Project Support
              <span className="text-[#FE6700]">.</span>
            </h1>

            <h2 className="mt-5 text-xl font-semibold leading-relaxed sm:text-2xl">
              Build Your Profile. Strengthen Your Capabilities. Move Forward.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-[#A7ADB5]">
              Structured career guidance, professional profile development
              and project mentorship for students, graduates and professionals
              returning after career breaks.
            </p>
          </div>

          {/* Three Service Cards */}
          <div className="mt-14">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
                What We Offer
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Our Services
                <span className="text-[#FE6700]">.</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.number}
                    className="rounded-xl border border-[#252C35] bg-[#111820] p-6 transition hover:border-[#FE6700]/50"
                  >
                    <Icon className="mb-5 text-[#FE6700]" size={30} />

                    <p className="text-sm font-semibold text-[#FE6700]">
                      {service.number}
                    </p>

                    <h3 className="mt-2 text-xl font-bold leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#A7ADB5]">
                      {service.description}
                    </p>

                    <div className="mt-6">
                      <span className="inline-flex rounded-full border border-[#FE6700]/30 bg-[#FE6700]/10 px-3 py-1 text-xs font-semibold text-[#FE6700]">
                        Fee Applicable
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Single Registration Button */}
          <div className="mt-10 text-center">
            <a
              href="/contact?type=career-support"
              className="inline-flex items-center gap-3 rounded-lg bg-[#FE6700] px-8 py-4 font-semibold text-[#06090D] transition hover:bg-orange-500"
            >
              Register Your Interest
              <ArrowUpRight size={19} />
            </a>

            <p className="mt-3 text-sm text-[#A7ADB5]">
              Select one, two or all three services.
            </p>
          </div>

          {/* General Contact */}
          <div className="mt-8 text-center">
            <p className="text-[#A7ADB5]">
              Have questions about our services?
            </p>

            <a
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 font-semibold text-[#FE6700] transition hover:text-orange-400"
            >
              Contact Us
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </section>


      {/* Detailed Services */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              Service Details
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              How We Support You
              <span className="text-[#FE6700]">.</span>
            </h2>
          </div>

          <div className="space-y-12">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="grid gap-6 border-b border-[#252C35] pb-12 last:border-0 last:pb-0 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
                >
                  <div>
                    <Icon className="mb-4 text-[#FE6700]" size={30} />

                    <p className="text-sm font-semibold text-[#FE6700]">
                      {service.number}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#A7ADB5]">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {service.number === '03' && (
                      <h4 className="mb-4 font-semibold text-[#F5F5F5]">
                        What We Provide
                      </h4>
                    )}

                    <ul className="space-y-4">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 leading-7 text-[#A7ADB5]"
                        >
                          <CheckCircle2
                            className="mt-1 shrink-0 text-[#FE6700]"
                            size={18}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {service.note && (
                      <p className="mt-6 rounded-lg border border-[#FE6700]/20 bg-[#FE6700]/5 p-4 text-sm leading-7 text-[#A7ADB5]">
                        <span className="font-semibold text-[#FE6700]">
                          Important: 
                        </span>{' '}
                        {service.note}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentorship and Resources */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              Additional Support
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Mentorship & Learning Resources
              <span className="text-[#FE6700]">.</span>
            </h2>

            <p className="mt-5 leading-8 text-[#A7ADB5]">
              Guidance beyond the initial consultation. Access structured
              mentorship, relevant reference materials, resource books and
              PDF guides to support your learning and independent progress.
            </p>
          </div>

          <div className="rounded-xl border border-[#252C35] bg-[#111820] p-7">
            <BookOpen className="mb-5 text-[#FE6700]" size={34} />

            <h3 className="text-xl font-bold">
              Learn. Apply. Progress.
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                'Structured mentorship and guidance.',
                'Relevant reference materials and learning resources.',
                'Resource books and PDF documents.',
                'Practical suggestions to support independent progress.',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[#A7ADB5]"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[#FE6700]"
                    size={18}
                  />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              Who Can Benefit
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Guidance for Every Career Stage
              <span className="text-[#FE6700]">.</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <div
                  key={audience.title}
                  className="flex gap-4 rounded-xl border border-[#252C35] bg-[#111820] p-6"
                >
                  <Icon
                    className="mt-1 shrink-0 text-[#FE6700]"
                    size={27}
                  />

                  <div>
                    <h3 className="text-lg font-bold">
                      {audience.title}
                    </h3>

                    <p className="mt-2 leading-7 text-[#A7ADB5]">
                      {audience.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
              FAQs
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
              <span className="text-[#FE6700]">.</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-[#252C35] bg-[#111820] p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#F5F5F5]">
                  {faq.question}

                  <ChevronDown
                    className="shrink-0 text-[#FE6700] transition group-open:rotate-180"
                    size={20}
                  />
                </summary>

                <p className="mt-4 border-t border-[#252C35] pt-4 leading-7 text-[#A7ADB5]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-[#252C35] bg-[#0B1016] px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <h3 className="font-bold text-[#F5F5F5]">
            Important Disclaimer
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#A7ADB5]">
            Career & Project Support provides professional guidance,
            evaluation and mentorship. These services do not guarantee
            employment, job placement, interview selection or any specific
            career outcome. Results depend on individual skills, knowledge,
            practical abilities, preparation, interview performance and
            employer requirements.
          </p>
        </div>
      </section>

     
      
    </main>
  );
}

export default CareerSupport;
