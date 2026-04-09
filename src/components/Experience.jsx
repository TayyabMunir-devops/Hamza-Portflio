import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Senior Business Development Officer',
      company: 'MedSole RCM',
      period: 'Oct 2023 - Mar 2025',
      duration: '1.5+ years',
      description:
        'Led business development initiatives in healthcare revenue cycle management, focusing on client acquisition and long-term partnerships.',
      achievements: [
        'Generated 200+ qualified leads through targeted outreach and strategic networking',
        'Maintained a 95% follow-up success rate, improving client conversion rates',
        'Developed and executed sales strategies to expand presence in the healthcare market',
        'Built and maintained strong relationships with healthcare providers and key stakeholders',
        'Collaborated with operations team to align client requirements with service delivery',
      ],
    },
    {
      title: 'Sales Executive',
      company: 'Avorcm Services',
      period: 'Oct 2025 - Present',
      duration: '6+ months',
      description:
        'Driving sales growth and client engagement, managing leads, and expanding business opportunities across diverse sectors.',
      achievements: [
        'Actively managing inbound and outbound sales pipelines',
        'Converting prospects into long-term clients through effective communication',
        'Identifying new business opportunities in the RCM sector',
        'Maintaining strong client relationships to ensure retention and upselling',
      ],
    }, // ✅ FIXED: comma added here

    {
      title: 'Bachelor of Arts (BA)',
      company: 'Allama Iqbal University',
      period: '2022 - 2024',
      duration: 'Completed',
      description:
        'Comprehensive education in arts and professional development',
      achievements: [
        'Achieved 2.60 CGPA in academic coursework',
        'Developed foundational business and communication skills',
        'Gained knowledge in economics, business, and organizational management',
        'Prepared for professional career in business development',
      ],
    },
    {
      title: 'FSc (Pre-Medical)',
      company: 'TIPS Group of Colleges, Chiniot',
      period: '2020 - 2022',
      duration: 'Completed',
      description:
        'Science-based education with focus on healthcare sector understanding',
      achievements: [
        'Completed pre-medical coursework with 2nd Division result',
        'Gained foundational knowledge of medical field',
        'Developed analytical and problem-solving skills',
        'Built interest in healthcare industry opportunities',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
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
              Professional <span className="text-blue-600">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              2+ years of progressive experience in sales, business development,
              and healthcare industry
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-cyan-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    idx % 2 === 1
                      ? 'lg:grid-cols-2 lg:[&>*:first-child]:order-2'
                      : ''
                  }`}
                >
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 justify-center items-center">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg"
                    />
                  </div>

                  <motion.div
                    whileHover={{
                      y: -8,
                      boxShadow:
                        '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                    }}
                    className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg"
                  >
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Briefcase size={24} className="text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {exp.title}
                            </h3>
                            <p className="text-blue-600 font-semibold">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                        <span className="text-gray-400">•</span>
                        <span className="font-semibold text-blue-600">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 font-medium italic">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        Key Achievements:
                      </p>
                      {exp.achievements.map((achievement, aidx) => (
                        <div
                          key={aidx}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <div className="hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: 'Total Experience', value: '2+ Years', color: 'blue' },
              { label: 'Leads Generated', value: '200+', color: 'cyan' },
              { label: 'Success Rate', value: '95%+', color: 'green' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`p-8 bg-white rounded-xl border-2 border-${stat.color}-200 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <p className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>
                  {stat.value}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;