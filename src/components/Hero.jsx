import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const handleDownloadCV = () => {
    // Create a sample CV download link
    const cvContent = `MEDICAL BILLING SPECIALIST - PROFESSIONAL RESUME

NAME: [Your Name]
TITLE: Medical Billing Specialist
EMAIL: your.email@example.com
PHONE: (555) 123-4567

PROFESSIONAL SUMMARY
Results-driven Medical Billing Specialist with expertise in accurate claim submission, denial management, and payment posting. HIPAA-compliant professional with proven ability to increase revenue cycle efficiency and reduce claim denials.

CORE COMPETENCIES
• Medical Coding (ICD-10, CPT)
• Insurance Claim Submission
• Payment Posting & Reconciliation
• Denial Management & Appeals
• Revenue Cycle Optimization
• Healthcare Compliance

EXPERIENCE
Medical Billing Specialist | [Hospital/Clinic] | 2020-Present
• Managed billing for 500+ patient accounts
• Reduced claim denials by 25% through improved accuracy
• Processed 1000+ claims monthly with 99% accuracy rate

Medical Coding Specialist | [Healthcare Provider] | 2018-2020
• Coded medical records using ICD-10 and CPT
• Ensured HIPAA compliance in all operations

CERTIFICATIONS
• Certified Professional Coder (CPC)
• HIPAA Certification
• Medical Billing & Coding Certification

TECHNICAL SKILLS
• Kareo Billing Software
• AdvancedMD
• Epic EMR
• Microsoft Excel (Advanced)
• Insurance Knowledge (All Major Carriers)`;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cvContent));
    element.setAttribute('download', 'Medical_Billing_CV.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name */}
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
              Muhammad Hamza
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Raza</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-2">
            <p className="text-2xl sm:text-3xl font-semibold text-blue-600">Business Development Officer</p>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              Target-Driven Sales Professional with <span className="font-semibold text-blue-600">Lead Generation & Healthcare Expertise</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Sales Professional with 3 year of experience in lead generation, client handling, and closing deals. Target-driven, persuasive, and skilled in building customer relationships, follow-ups, and achieving sales goals in the healthcare industry.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(0, 102, 204, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <Download size={20} />
              Download CV
            </motion.button>

            <motion.button
              onClick={scrollToNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 mt-16"
          >
            {[
              { label: 'Years Experience', value: '2+' },
              { label: 'Leads Generated', value: '200+' },
              { label: 'Success Rate', value: '95%' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={scrollToNext}
            className="p-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
