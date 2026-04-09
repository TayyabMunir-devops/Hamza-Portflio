import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, FileCheck, DollarSign, AlertCircle, TrendingUp, Shield } from 'lucide-react';

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Code2,
      title: 'Lead Generation',
      description: 'Strategic lead identification and outreach with high-quality prospect targeting and qualification.',
      color: 'from-blue-500 to-blue-600',
      lightColor: 'bg-blue-50',
    },
    {
      icon: FileCheck,
      title: 'Client Relationship',
      description: 'Building and maintaining strong client relationships through effective communication and follow-ups.',
      color: 'from-cyan-500 to-cyan-600',
      lightColor: 'bg-cyan-50',
    },
    {
      icon: DollarSign,
      title: 'Deal Closing',
      description: 'Expert negotiation and closing strategies to convert leads into successful business deals.',
      color: 'from-green-500 to-green-600',
      lightColor: 'bg-green-50',
    },
    {
      icon: AlertCircle,
      title: 'Sales Strategy',
      description: 'Development and implementation of effective sales and marketing strategies for growth.',
      color: 'from-orange-500 to-orange-600',
      lightColor: 'bg-orange-50',
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'In-depth market research and competitor analysis to identify new business opportunities.',
      color: 'from-purple-500 to-purple-600',
      lightColor: 'bg-purple-50',
    },
    {
      icon: Shield,
      title: 'Healthcare Expertise',
      description: 'Specialized knowledge in healthcare industry sales and business development best practices.',
      color: 'from-red-500 to-red-600',
      lightColor: 'bg-red-50',
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
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
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
              Services & <span className="text-blue-600">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Comprehensive sales and business development solutions for healthcare organizations
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    y: -12,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                  }}
                  className="group relative p-8 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 ${service.lightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  {/* Content wrapper */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`mb-6 inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all duration-300">
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </div>
                  </div>

                  {/* Top border accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 p-8 bg-white rounded-xl border-2 border-blue-600"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Optimize Your Revenue Cycle?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact me to discuss how I can help improve your billing efficiency and reduce denials.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
