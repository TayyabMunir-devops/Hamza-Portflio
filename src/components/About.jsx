import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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

  const skills = [
    { category: 'Sales', items: ['Lead Generation', 'Sales Strategy', 'Deal Closing'] },
    { category: 'Communication', items: ['Client Handling', 'Follow-ups', 'Negotiation'] },
    { category: 'Tools', items: ['CRM Systems', 'Email Marketing', 'Data Analysis'] },
    { category: 'Expertise', items: ['Healthcare Sales', 'B2B Engagement', 'Team Collaboration'] },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
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
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Sales Professional with 2 year of experience in lead generation, client handling, and closing deals. I'm target-driven, persuasive, and skilled in building customer relationships, follow-ups, and achieving sales goals in the healthcare sector.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                 Working experience as a Senior Business Development Officer at MedSole RCM, I'm eager to continue growing in the healthcare field and contribute my skills to a dynamic and supportive team. I specialize in identifying opportunities, nurturing leads, and converting them into lasting business relationships.
              </p>

              <div className="space-y-3 mt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">Lead Generation & Follow-ups</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">Sales & Marketing Strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">Client Relationship Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">Team Collaboration</span>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mt-10 pt-6 border-t border-gray-200">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-blue-50 rounded-lg"
                >
                  <p className="text-2xl font-bold text-blue-600">2+</p>
                  <p className="text-gray-600 text-sm">Years of Experience</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-cyan-50 rounded-lg"
                >
                  <p className="text-2xl font-bold text-cyan-600">200+</p>
                  <p className="text-gray-600 text-sm">Leads Generated</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Skills Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {skills.map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-4 text-blue-600">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, sidx) => (
                      <li
                        key={sidx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
