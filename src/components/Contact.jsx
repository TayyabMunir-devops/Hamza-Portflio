import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hamzaraza1718@gmail.com',
      link: 'mailto:hamzaraza1718@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0317-8501718',
      link: 'tel:+923178501718',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@muhammadhamzaraza',
      link: 'https://linkedin.com',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ghouri Town, Islamabad',
      link: '#',
      color: 'from-green-500 to-green-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Connect With <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Ready to discuss business development opportunities and healthcare sales strategies. Let's connect!
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={idx}
                  href={method.link}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                  }}
                  className="group relative p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 text-center cursor-pointer"
                >
                  <div className={`p-4 bg-gradient-to-br ${method.color} rounded-lg text-white mx-auto w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{method.label}</h3>
                  <p className="text-gray-600 text-sm break-all hover:text-blue-600 transition-colors duration-300">
                    {method.value}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <CheckCircle size={64} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  {/* Subject Input */}
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white"
                      placeholder="Inquiry about services"
                    />
                  </motion.div>

                  {/* Message Input */}
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors duration-300 bg-gray-50 hover:bg-white resize-none"
                      placeholder="Tell me about your billing needs..."
                    ></textarea>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Info Card 1 */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time</h3>
                <p className="text-gray-700 leading-relaxed">
                  I typically respond to inquiries within 24 hours during business days. For urgent matters, please call the phone number listed above for immediate assistance.
                </p>
              </div>

              {/* Info Card 2 */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Availability</h3>
                <p className="text-gray-700 mb-4">
                  Open to opportunities in:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Sales & Business Development Positions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Healthcare Industry Roles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Lead Generation & Account Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Remote & On-site Opportunities
                  </li>
                </ul>
              </div>

              {/* Info Card 3 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Let's Collaborate</h3>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're looking to hire, need sales consulting, or want to discuss healthcare industry opportunities, I'm always happy to connect with professionals and explore mutual growth opportunities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Footer CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center p-8 bg-white rounded-xl border-2 border-blue-600"
          >
            <p className="text-gray-700 mb-4">
              Looking to download my complete profile and CV?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const cvContent = `MUHAMMAD HAMZA RAZA
Business Development Officer

CONTACT INFORMATION
═══════════════════════════════════════════════════════════
Phone: 0317-8501718
Email: hamzaraza1718@gmail.com
Location: Ghouri Town, Islamabad, Pakistan
LinkedIn: Muhammad Hamza Raza

PROFESSIONAL SUMMARY
═══════════════════════════════════════════════════════════
Sales Professional with 3 years of experience in lead generation, client handling, and closing deals. Target-driven, persuasive, and skilled in building customer relationships, follow-ups, and achieving sales goals in the healthcare industry.

Currently working as Senior Business Development Officer at MedSole RCM, eager to continue growing in the healthcare field and contribute skills to a dynamic and supportive team.

CORE COMPETENCIES
═══════════════════════════════════════════════════════════
• Lead Generation & Follow-ups
• Sales & Marketing Strategies
• Client Relationship Management
• Deal Closing & Negotiation
• Healthcare Industry Knowledge
• Team Collaboration
• Business Development

PROFESSIONAL EXPERIENCE
═══════════════════════════════════════════════════════════
SENIOR BUSINESS DEVELOPMENT OFFICER
MedSole RCM (June 2024 - Present)
• Generate 200+ qualified leads through strategic outreach
• Maintain 95% follow-up success rate with consistent client engagement
• Develop and implement sales strategies for healthcare market expansion
• Build strong relationships with healthcare providers and stakeholders

EDUCATION
═══════════════════════════════════════════════════════════
Bachelor of Arts (BA)
Allama Iqbal University (2022-2024)
CGPA: 2.60
Division: 2nd Division

FSc (Pre-Medical)
TIPS Group of Colleges, Chiniot (2020-2022)
Division: 2nd Division

SKILLS
═══════════════════════════════════════════════════════════
Sales & Business Development:
  • Lead Generation: 95%
  • Deal Closing: 92%
  • Sales Strategy: 90%
  • Client Handling: 94%

Communication:
  • Client Communication: 93%
  • Follow-ups Management: 92%
  • Negotiation: 88%

Healthcare Industry:
  • Healthcare Sales: 90%
  • Medical Industry Knowledge: 85%
  • Business Development: 89%

Technical:
  • CRM Systems: 88%
  • Email Marketing: 85%
  • Data Analysis: 82%

LANGUAGES
═══════════════════════════════════════════════════════════
• English (Fluent)
• Urdu (Native)

KEY ACHIEVEMENTS
═══════════════════════════════════════════════════════════
✓ Generated 200+ qualified leads in first 7 months
✓ Achieved 95% success rate in client follow-ups
✓ Developed effective sales strategies for market expansion
✓ Built strong healthcare provider relationships
✓ Demonstrated target-driven sales approach

PROFESSIONAL OBJECTIVES
═══════════════════════════════════════════════════════════
Seeking opportunities to leverage sales expertise in healthcare business development, with goals to:
• Drive revenue growth through effective lead generation
• Expand market presence for healthcare organizations
• Build long-term client relationships and partnerships
• Contribute to team success in dynamic healthcare environment`;

                const element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cvContent));
                element.setAttribute('download', 'Muhammad_Hamza_Raza_CV.txt');
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Download My Complete CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
