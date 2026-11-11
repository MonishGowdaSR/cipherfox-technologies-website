
import {
  ArrowUpRight,
  Mail,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  MapPin,
  Globe,
  MessageCircle,
} from 'lucide-react';

const companyEmail = 'cipherfoxtechnologies@gmail.com';

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

function Contact() {
  return (
    <main className="min-h-screen bg-[#06090D] text-[#F5F5F5]">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#252C35] px-5 py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#FE6700]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#FE6700]">
            Contact Us
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Let's Connect with
            <span className="block text-[#FE6700]">
              CipherFox Technologies
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#A7ADB5] sm:text-lg">
            Whether you are looking for software development services or
            exploring internship opportunities, we welcome you to connect
            with us.
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-[#A7ADB5]">
            Choose the appropriate enquiry channel below, and our team will
            get back to you.
          </p>
        </div>
      </section>

      {/* Enquiry Channels */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Get in Touch"
            title="How Can We Help You?"
            description="Choose the appropriate contact channel for your requirements."
          />

          <div className="grid gap-7 md:grid-cols-2">

            {/* Business Enquiries */}
            <article className="flex flex-col rounded-2xl border border-[#252C35] bg-[#111820] p-8 transition duration-300 hover:border-[#FE6700]/50 sm:p-9">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FE6700]/10 text-[#FE6700]">
                <BriefcaseBusiness size={27} />
              </div>

              <h3 className="text-2xl font-bold text-[#F5F5F5]">
                Business Enquiries
              </h3>

              <p className="mt-5 leading-8 text-[#A7ADB5]">
                Have a business requirement, software project or application
                idea?
              </p>

              <p className="mt-3 leading-8 text-[#A7ADB5]">
                Connect with CipherFox Technologies to discuss your
                requirements and explore suitable technology solutions.
              </p>

              <div className="mt-8 border-t border-[#252C35] pt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#A7ADB5]">
                  Contact Email
                </p>

                <a
                  href={`mailto:${companyEmail}?subject=Business%20Enquiry%20-%20CipherFox%20Technologies`}
                  className="inline-flex items-center gap-2 break-all text-sm font-medium text-[#FE6700] transition hover:text-[#ff8a3d]"
                >
                  <Mail size={17} className="shrink-0" />
                  {companyEmail}
                </a>
              </div>

              <a
                href={`mailto:${companyEmail}?subject=Business%20Enquiry%20-%20CipherFox%20Technologies`}
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-[#FE6700] px-6 py-3.5 font-semibold text-white transition hover:bg-[#e85d00]"
              >
                Contact Our Team
                <ArrowUpRight size={19} />
              </a>
            </article>

            {/* Student & Internship Enquiries */}
            <article className="flex flex-col rounded-2xl border border-[#252C35] bg-[#111820] p-8 transition duration-300 hover:border-[#FE6700]/50 sm:p-9">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FE6700]/10 text-[#FE6700]">
                <GraduationCap size={28} />
              </div>

              <h3 className="text-2xl font-bold text-[#F5F5F5]">
                Student & Internship Enquiries
              </h3>

              <p className="mt-5 leading-8 text-[#A7ADB5]">
                Interested in joining one of our internship programmes?
              </p>

              <p className="mt-3 leading-8 text-[#A7ADB5]">
                Explore our internship opportunities and submit your
                application through the student application form. You can
                also contact us directly for programme-related questions.
              </p>

              <div className="mt-8 border-t border-[#252C35] pt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#A7ADB5]">
                  Email
                </p>

                <a
                  href={`mailto:${companyEmail}?subject=Internship%20Enquiry%20-%20CipherFox%20Technologies`}
                  className="inline-flex items-center gap-2 break-all text-sm font-medium text-[#FE6700] transition hover:text-[#ff8a3d]"
                >
                  <Mail size={17} className="shrink-0" />
                  {companyEmail}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/internships"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#FE6700] px-5 py-3.5 text-sm font-semibold text-[#FE6700] transition hover:bg-[#FE6700]/10"
                >
                  Explore Internships
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href={`mailto:${companyEmail}?subject=Internship%20Enquiry%20-%20CipherFox%20Technologies`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FE6700] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e85d00]"
                >
                  Apply for Internship
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <p className="mt-5 text-xs leading-6 text-[#A7ADB5]">
                Student application form: Link to be added during website
                development.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* Official Platforms */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Our Online Presence"
            title="Connect With Us"
            description="Follow CipherFox Technologies and explore our development activities through our official platforms."
          />

          <div className="grid gap-5 sm:grid-cols-2">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/cipherfox-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-[#252C35] bg-[#111820] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FE6700]/50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FE6700]/10 text-[#FE6700]">
                <BriefcaseBusiness size={25} />
              </div>

              <h3 className="text-lg font-bold text-[#F5F5F5]">
                LinkedIn
              </h3>

              <p className="mt-2 text-sm text-[#A7ADB5]">
                CipherFox Technologies — Company Page
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#FE6700]">
                Visit LinkedIn Page
                <ArrowUpRight size={17} />
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/CipherFox-Technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-[#252C35] bg-[#111820] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FE6700]/50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FE6700]/10 text-[#FE6700]">
                <Code2 size={25} />
              </div>

              <h3 className="text-lg font-bold text-[#F5F5F5]">
                GitHub
              </h3>

              <p className="mt-2 text-sm text-[#A7ADB5]">
                CipherFox Technologies — Organization
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#FE6700]">
                Visit GitHub Organization
                <ArrowUpRight size={17} />
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Where We Operate"
            title="Our Location"
            description="CipherFox Technologies operates through an online and remote working model."
          />

          <div className="rounded-2xl border border-[#252C35] bg-[#111820] p-8 sm:p-10">
            <div className="grid gap-8 sm:grid-cols-2">

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FE6700]/10 text-[#FE6700]">
                  <MapPin size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#F5F5F5]">
                    CipherFox Technologies
                  </h3>

                  <p className="mt-3 leading-7 text-[#A7ADB5]">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FE6700]/10 text-[#FE6700]">
                  <Globe size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#F5F5F5]">
                    Operating Model
                  </h3>

                  <p className="mt-3 leading-7 text-[#A7ADB5]">
                    Online / Remote
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Have a Question */}
      <section className="border-y border-[#252C35] bg-[#0B1016] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FE6700]/10 text-[#FE6700]">
            <MessageCircle size={27} />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#FE6700]">
            We're Here to Help
          </p>

          <h2 className="text-3xl font-bold text-[#F5F5F5] sm:text-4xl">
            Have a Question?
            <span className="text-[#FE6700]">.</span>
          </h2>

          <p className="mt-6 leading-8 text-[#A7ADB5]">
            For business-related requirements, project discussions or
            internship enquiries, reach us through our company email.
          </p>

          <a
            href={`mailto:${companyEmail}`}
            className="mt-7 inline-flex items-center gap-3 rounded-lg border border-[#FE6700]/50 bg-[#FE6700]/5 px-6 py-4 font-semibold text-[#FE6700] transition hover:bg-[#FE6700]/10"
          >
            <Mail size={19} />
            {companyEmail}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer Identity */}
      <section className="px-5 py-10 text-center">
        <p className="text-sm font-semibold tracking-wide text-[#A7ADB5]">
          CipherFox Technologies
          <span className="mx-2 text-[#FE6700]">|</span>
          <span className="text-[#F5F5F5]">CODE. BUILD. SCALE.</span>
        </p>
      </section>

    </main>
  );
}

export default Contact;
