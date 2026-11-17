
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#06090D] px-5 py-16 text-[#F5F5F5]">
      <div className="mx-auto max-w-4xl">

        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#FE6700]">
            Legal
          </p>

          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="text-sm text-[#A7ADB5]">
            Effective Date: 16 November 2026
          </p>
        </div>

        <div className="space-y-8 leading-7 text-[#A7ADB5]">

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#F5F5F5]">
              1. Introduction
            </h2>
            <p>
              CipherFox Technologies ("we", "our", or "us") respects
              your privacy and is committed to handling your personal
              information responsibly. This Privacy Policy explains
              how we collect, use, store and manage information when
              you visit our website, register for our internship
              programmes or use our career and project support services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#F5F5F5]">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              Depending on the service you use and the information
              you choose to provide, we may collect:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Personal and contact information, such as name, email address and phone number.</li>
              <li>Academic information, such as college, university, degree, department and semester.</li>
              <li>Programme selections, preferences and registration details.</li>
              <li>Professional profile links, skills and project-related information.</li>
              <li>Documents or other information voluntarily submitted through our forms.</li>
              <li>Payment confirmation details or transaction references where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#F5F5F5]">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">
              We use the information you provide for legitimate
              business and service-related purposes, including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Processing registrations and enquiries.</li>
              <li>Communicating programme details and service updates.</li>
              <li>Evaluating eligibility and understanding participant requirements.</li>
              <li>Delivering internship, career development and project support services.</li>
              <li>Maintaining registration, payment and service records.</li>
              <li>Improving our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#F5F5F5]">
              4. Forms and Third-Party Services
            </h2>
            <p>
              We may use third-party platforms, including Google Forms
              and related Google services, to collect and manage
              registration information. Payments may be processed
              through third-party payment applications or providers.
              Your use of those services may also be subject to their
              respective privacy policies and terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#F5F5F5]">
              5. Sharing of Information
            </h2>
            <p>
              We do not sell your personal information. Information
              may be accessed by authorised persons responsible for
              operating our services or shared with relevant service
              providers when necessary to process registrations,
              payments or deliver services. We may also disclose
              information where required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#F5F5F5]">
              6. Data Storage and Retention
            </h2>
            <p>
              We retain personal information only for as long as
              reasonably necessary for registration, service delivery,
              record-keeping, legal compliance and legitimate
              operational purposes. Information may be stored using
              third-party platforms used to operate our services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#F5F5F5]">
              7. Your Privacy Rights
            </h2>
            <p>
              You may contact us to request access to, correction of
              or deletion of personal information you have provided,
              subject to applicable legal and record-keeping
              requirements. We may need to verify your identity
              before responding to such requests.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#F5F5F5]">
              8. Data Security
            </h2>
            <p>
              We take reasonable measures to protect information
              handled through our operations. However, no method of
              electronic storage or transmission can be guaranteed
              to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#F5F5F5]">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy when our services,
              practices or applicable legal requirements change.
              Updated versions will be published on this page with
              a revised effective date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#F5F5F5]">
              10. Contact Us
            </h2>
            <p>
              For privacy-related questions, requests or concerns,
              please contact us through our website's Contact page.
            </p>
            <Link
              to="/contact"
              className="mt-3 inline-block font-semibold text-[#FE6700] hover:text-orange-400"
            >
              Contact CipherFox Technologies →
            </Link>
          </section>

        </div>

        <div className="mt-12 border-t border-[#252C35] pt-6">
          <Link
            to="/"
            className="text-sm font-medium text-[#FE6700] hover:text-orange-400"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}

export default PrivacyPolicy;
