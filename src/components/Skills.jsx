import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Sales & Business Development',
      skills: [
        { name: 'Lead Generation', percentage: 95 },
        { name: 'Deal Closing', percentage: 92 },
        { name: 'Sales Strategy', percentage: 90 },
        { name: 'Client Handling', percentage: 94 },
      ],
    },
    {
      title: 'Communication Skills',
      skills: [
        { name: 'Client Communication', percentage: 93 },
        { name: 'Follow-ups Management', percentage: 92 },
        { name: 'Negotiation', percentage: 88 },
        { name: 'Presentation Skills', percentage: 85 },
      ],
    },
    {
      title: 'Healthcare Industry',
      skills: [
        { name: 'Healthcare Sales', percentage: 90 },
        { name: 'Medical Industry Knowledge', percentage: 85 },
        { name: 'Business Development', percentage: 89 },
        { name: 'Market Research', percentage: 87 },
      ],
    },
    {
      title: 'Technical & Tools',
      skills: [
        { name: 'CRM Systems', percentage: 88 },
        { name: 'Email Marketing', percentage: 85 },
        { name: 'Data Analysis', percentage: 82 },
        { name: 'Microsoft Office', percentage: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const ProgressBar = ({ name, percentage }) => {
    return (
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-700">{name}</span>
          <span className="text-sm font-semibold text-blue-600">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: `${percentage}%` } : { width: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
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
              Skills & <span className="text-blue-600">Proficiencies</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Expert-level skills across sales, business development, and healthcare industry expertise
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></span>
                  {category.title}
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill, sidx) => (
                    <ProgressBar key={sidx} name={skill.name} percentage={skill.percentage} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: 'Certifications', value: '2+', color: 'blue' },
              { label: 'Years Experience', value: '2+', color: 'cyan' },
              { label: 'Languages', value: '2', color: 'green' },
              { label: 'Lead Generation', value: '200+', color: 'purple' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className={`p-6 bg-white rounded-xl border-2 border-${stat.color}-200 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <p className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Note */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg"
          >
            <p className="text-gray-700 font-medium">
              💡 <span className="font-semibold text-blue-600">Commitment to Excellence:</span> I continuously pursue professional development, stay updated with latest market trends, sales methodologies, and healthcare industry innovations to deliver exceptional results.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
