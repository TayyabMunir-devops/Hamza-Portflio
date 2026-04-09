import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, link: 'mailto:hamzaraza1718@gmail.com', label: 'Email' },
    { icon: Phone, link: 'tel:+923178501718', label: 'Phone' },
    { icon: Linkedin, link: 'https://linkedin.com/in/muhammadhamzaraza', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-b border-gray-700"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                MH
              </div>
              <span className="font-bold text-white text-lg">Muhammad Hamza</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Business Development Officer specializing in healthcare sales and lead generation. Committed to driving growth and building lasting business relationships in the healthcare industry.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-white mb-4 text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                'Lead Generation',
                'Business Development',
                'Sales Strategy',
                'Client Management',
                'Healthcare Sales',
              ].map((service, idx) => (
                <li key={idx} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm text-center md:text-left"
          >
            © {currentYear} Medical Billing Specialist. All rights reserved.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="text-gray-400 text-sm flex items-center gap-1 mt-4 md:mt-0"
          >
            Made with
            <Heart size={16} className="text-red-500 animate-pulse" />
            for healthcare excellence
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-xs mt-4 md:mt-0"
          >
            Portfolio designed for healthcare sales professionals
          </motion.p>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
