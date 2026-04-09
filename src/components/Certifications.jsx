import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, BadgeCheck } from 'lucide-react';

const Certifications = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const certifications = [
    {
      title: 'Bachelor of Arts (BA)',
      issuer: 'Allama Iqbal University',
      date: 'Completed: 2024 | CGPA: 2.60',
      description: 'Comprehensive business and arts education providing foundation for professional development',
      color: 'from-blue-500 to-blue-600',
      badge: '🎓',
    },
    {
      title: 'FSc Pre-Medical',
      issuer: 'TIPS Group of Colleges, Chiniot',
      date: 'Completed: 2022 | Division: 2nd',
      description: 'Science-based education with focus on healthcare sector understanding and preparation',
      color: 'from-cyan-500 to-cyan-600',
      badge: '🔬',
    },
    {
      title: 'Sales Professional Certification',
      issuer: 'Professional Development',
      date: 'Ongoing | Active',
      description: 'Continuous training in sales strategies, lead generation, and client relationship management',
      color: 'from-green-500 to-green-600',
      badge: '💼',
    },
    {
      title: 'Business Development Expertise',
      issuer: 'MedSole RCM',
      date: 'Since: June 2024 | Ongoing',
      description: 'Hands-on experience in healthcare business development and industry-specific sales strategies',
      color: 'from-purple-500 to-purple-600',
      badge: '📈',
    },
    {
      title: 'Healthcare Industry Knowledge',
      issuer: 'Professional Experience',
      date: 'Active',
      description: 'In-depth understanding of healthcare sector, RCM industry, and provider relationships',
      color: 'from-orange-500 to-orange-600',
      badge: '🏥',
    },
    {
      title: 'Language Proficiency',
      issuer: 'Professional Skills',
      date: 'Fluent',
      description: 'Bilingual fluency in English and Urdu enabling effective communication with diverse clients',
      color: 'from-red-500 to-red-600',
      badge: '🗣️',
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
    <section id="certifications" className="py-20 bg-white relative overflow-hidden">
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
              Education & <span className="text-blue-600">Credentials</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Educational background and professional development in business and healthcare sales
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                }}
                className="group relative p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 rounded-full -mr-16 -mt-16 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with icon and badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${cert.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Award size={28} />
                      </div>
                      <div className="text-4xl">{cert.badge}</div>
                    </div>
                    <BadgeCheck className="text-green-500 flex-shrink-0" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-blue-600 font-semibold mb-3">{cert.issuer}</p>

                  {/* Date with icon */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Verification link */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center gap-2 group/link">
                      <span>Verify Credential</span>
                      <span className="group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>

                {/* Top border accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: 'Education Level', value: 'BA', icon: '🎓' },
              { label: 'Languages', value: '2', icon: '🗣️' },
              { label: 'Professional Growth', value: 'Active', icon: '📈' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white rounded-xl border-2 border-blue-200 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-3xl font-bold text-blue-600 mb-2">{item.value}</p>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Development */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-600"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Professional Growth</h3>
            <p className="text-gray-700 mb-4">
              Committed to continuous professional development through:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Advanced sales methodology training
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Healthcare industry knowledge updates
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Business development strategy courses
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Professional networking events
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
