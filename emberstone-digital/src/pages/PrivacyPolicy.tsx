import { motion } from 'framer-motion'
import { companyInfo } from '@/data/company'

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'Personal identification information (name, email address, phone number) when you contact us or submit a form.',
      'Usage data such as IP address, browser type, pages visited, and time spent on our website.',
      'Cookies and similar tracking technologies to improve your browsing experience.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'To respond to your inquiries and provide the services you request.',
      'To send periodic emails regarding your project or other products and services.',
      'To improve our website and services based on your feedback and usage patterns.',
      'To comply with applicable laws and regulations.',
    ],
  },
  {
    title: 'Information Sharing',
    content: [
      'We do not sell, trade, or rent your personal information to third parties.',
      'We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.',
      'We may disclose information when required by law or to protect our rights and safety.',
    ],
  },
  {
    title: 'Cookies',
    content: [
      'Our website uses cookies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences.',
      'You can choose to disable cookies through your browser settings. Note that some features of our website may not function properly without cookies.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      'However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'You have the right to access, correct, or delete your personal information that we hold.',
      'You may opt out of receiving marketing communications from us at any time.',
      'To exercise these rights, please contact us using the information provided below.',
    ],
  },
  {
    title: 'Third-Party Links',
    content: [
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.',
      'We encourage you to review this policy periodically.',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="bg-[#1a365d] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
            <p className="text-blue-200">Effective Date: January 1, 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 text-gray-600 leading-relaxed"
          >
            {companyInfo.name} ("we," "our," or "us") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our services.
          </motion.p>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              >
                <h2 className="mb-4 text-xl font-semibold text-[#1a365d]">
                  {index + 1}. {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-600 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 rounded-lg bg-blue-50 p-6"
          >
            <h2 className="mb-3 text-xl font-semibold text-[#1a365d]">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a
                href={`mailto:${companyInfo.email}`}
                className="font-medium text-blue-600 hover:underline"
              >
                {companyInfo.email}
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
