# Customization Guide 🎨

This guide will help you customize the portfolio website to match your personal information and professional background.

## 1. Hero Section (Hero.jsx)

### Update Personal Information
```jsx
// Line ~25 - Main Heading
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
  Medical Billing
  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Specialist</span>
</h1>

// Change to your name or specialty
<h1>John Doe</h1>
```

### Update Tagline
```jsx
// Line ~30 - Tagline
<p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
  Accurate, Efficient, and <span className="font-semibold text-blue-600">HIPAA-Compliant</span> Billing Services
</p>

// Customize to your approach
<p>Your unique value proposition here</p>
```

### Update Statistics
```jsx
// Line ~45-57 - Stats Section
const stats = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Claims Processed', value: '10K+' },
  { label: 'Success Rate', value: '99%' },
];

// Update with your actual numbers
const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Happy Clients', value: '20+' },
  { label: 'Accuracy Rate', value: '98.5%' },
];
```

## 2. About Section (About.jsx)

### Update Professional Summary
```jsx
// Line ~50 - First paragraph
<p className="text-lg text-gray-700 leading-relaxed">
  With over 8 years of dedicated experience in medical billing...
</p>

// Replace with your summary
<p>I bring [X] years of experience in medical billing...</p>
```

### Update Certifications
```jsx
// Line ~60 - Certifications List
<div className="space-y-3 mt-8">
  <div className="flex items-center gap-3">
    <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
    <span className="text-gray-700 font-medium">Certified Professional Coder (CPC)</span>
  </div>
  // ... more certifications
</div>

// Update with your actual certifications
<span>Your Certification Name (Date)</span>
```

### Update Skills Grid
```jsx
// Line ~85 - Skills array
const skills = [
  { category: 'Coding', items: ['ICD-10', 'CPT', 'HCPCS'] },
  { category: 'Software', items: ['Kareo', 'AdvancedMD', 'Epic EMR'] },
  // ...
];

// Customize to your expertise
const skills = [
  { category: 'Your Category', items: ['Skill 1', 'Skill 2', 'Skill 3'] },
  // ...
];
```

## 3. Services Section (Services.jsx)

### Update Service Offerings
```jsx
// Line ~15-43 - Services array
const services = [
  {
    icon: Code2,
    title: 'Medical Coding',
    description: 'Expert coding using ICD-10...',
    color: 'from-blue-500 to-blue-600',
    lightColor: 'bg-blue-50',
  },
  // ... more services
];

// Update with your services
const services = [
  {
    icon: YourIcon,
    title: 'Your Service Name',
    description: 'Your service description...',
    color: 'from-your-color-500 to-your-color-600',
    lightColor: 'bg-your-color-50',
  },
];
```

## 4. Skills Section (Skills.jsx)

### Update Skill Proficiencies
```jsx
// Line ~10-30 - Skill categories and percentages
const skillCategories = [
  {
    title: 'Medical Coding & Compliance',
    skills: [
      { name: 'ICD-10 Coding', percentage: 98 },
      { name: 'CPT Coding', percentage: 97 },
      // ...
    ],
  },
];

// Update percentages to reflect your actual proficiency
// Use realistic numbers - 95-99% for expert, 80-90% for proficient, etc.
```

## 5. Experience Section (Experience.jsx)

### Update Work History
```jsx
// Line ~12-55 - Experiences array
const experiences = [
  {
    title: 'Senior Medical Billing Specialist',
    company: 'Metropolitan Healthcare Center',
    period: 'Jan 2022 - Present',
    duration: '2+ years',
    description: 'Leading billing operations...',
    achievements: [
      'Managed billing for 1000+ patient accounts...',
      // ...
    ],
  },
  // ... more positions
];

// Replace with your actual experience
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Month Year - Month Year',
    duration: 'X years',
    description: 'Brief role description...',
    achievements: [
      'Your achievement 1',
      'Your achievement 2',
      // ...
    ],
  },
];
```

### Tips for Achievements
- Use numbers and metrics where possible
- Focus on impact and results
- Include problems you solved
- Highlight efficiency improvements

## 6. Certifications Section (Certifications.jsx)

### Update Professional Credentials
```jsx
// Line ~10-45 - Certifications array
const certifications = [
  {
    title: 'Certified Professional Coder (CPC)',
    issuer: 'AAPC (American Academy of Professional Coders)',
    date: 'Issued: Jan 2020 | Expires: Dec 2026',
    description: 'Recognized credential certifying expertise...',
    color: 'from-blue-500 to-blue-600',
    badge: '🏆',
  },
  // ... more certifications
];

// Update with your actual certifications
```

## 7. Contact Section (Contact.jsx)

### Update Contact Information
```jsx
// Line ~25-43 - Contact methods array
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@medicalbilling.com',
    link: 'mailto:contact@medicalbilling.com',
    color: 'from-blue-500 to-blue-600',
  },
  // ... more contact methods
];

// Update with your contact details
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
    color: 'from-blue-500 to-blue-600',
  },
];
```

### Update Availability Section
```jsx
// Line ~150-165 - Availability list
<li className="flex items-center gap-2">
  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
  Consulting & Process Improvement
</li>
// ... more items

// Update to your actual availability
```

## 8. Navigation (Navigation.jsx)

### Update Navigation Links
```jsx
// Line ~10-16 - Navigation items
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  // ... more items
];

// Add or remove sections as needed
// Make sure the href matches your section IDs
```

## 9. Footer (Footer.jsx)

### Update Social Links
```jsx
// Line ~9-14 - Social links array
const socialLinks = [
  { icon: Mail, link: 'mailto:contact@medicalbilling.com', label: 'Email' },
  { icon: Phone, link: 'tel:+15551234567', label: 'Phone' },
  { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, link: 'https://github.com', label: 'GitHub' },
];

// Update with your actual social profiles
```

### Update Footer Links
```jsx
// Line ~15-21 - Footer links array
const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

// Add your actual links
```

## 10. Color Customization

Edit `tailwind.config.js` to change the entire color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0066CC',      // Main blue - change this
      secondary: '#00A8E8',    // Cyan - change this
      accent: '#00D9FF',       // Light cyan - change this
      dark: '#1a2332',         // Dark background
      light: '#F5F7FA',        // Light background
    }
  }
}
```

### Common Color Palettes

**Green (Healthcare/Growth)**
```javascript
primary: '#10B981',
secondary: '#34D399',
accent: '#6EE7B7',
```

**Purple (Professional)**
```javascript
primary: '#8B5CF6',
secondary: '#A78BFA',
accent: '#DDD6FE',
```

**Teal (Tech-Savvy)**
```javascript
primary: '#14B8A6',
secondary: '#2DD4BF',
accent: '#99F6E4',
```

## 11. Typography Customization

Edit `tailwind.config.js` to change fonts:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font Name', 'sans-serif'],
      serif: ['Your Font Name', 'serif'],
      mono: ['Your Font Name', 'monospace'],
    }
  }
}
```

Add Google Fonts in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

## 12. Adding New Sections

### Create a New Component
Create `src/components/YourNewSection.jsx`:

```jsx
import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';

const YourNewSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="your-section" className="py-20 bg-white">
      <motion.div ref={ref}>
        {/* Your content here */}
      </motion.div>
    </section>
  );
};

export default YourNewSection;
```

### Import in App.jsx
```jsx
import YourNewSection from './components/YourNewSection';

function App() {
  return (
    <div>
      {/* ... other sections */}
      <YourNewSection />
    </div>
  );
}
```

## 13. Contact Form Integration

### Option 1: EmailJS (Free)
1. Sign up at emailjs.com
2. Install: `npm install @emailjs/browser`
3. Update Contact.jsx with your credentials

### Option 2: Formspree (Free)
1. Go to formspree.io
2. Update form action with your endpoint

### Option 3: Firebase
1. Set up Firebase project
2. Add Firestore database
3. Deploy Cloud Functions for email

## 14. SEO Optimization

Update `index.html` meta tags:
```html
<meta name="description" content="Your professional summary" />
<meta name="keywords" content="medical billing, healthcare, coding" />
<meta property="og:title" content="Your Name - Medical Billing" />
<meta property="og:description" content="Your professional summary" />
```

## 15. Performance Tips

1. **Optimize Images** - Use WebP format
2. **Lazy Loading** - Images load on scroll
3. **Code Splitting** - Vite does this automatically
4. **Minification** - Enabled by default in production build
5. **Caching** - Configure in deployment platform

## Checklist Before Launch

- [ ] Updated all personal information
- [ ] Reviewed and updated all sections
- [ ] Changed colors to match your preference
- [ ] Updated contact information
- [ ] Added LinkedIn/social profiles
- [ ] Tested on mobile and desktop
- [ ] Checked for spelling/grammar
- [ ] Updated meta tags for SEO
- [ ] Tested form functionality
- [ ] Optimized any images
- [ ] Set up analytics (optional)
- [ ] Deployed to live URL

---

Need help? Check out these resources:
- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Vite: https://vitejs.dev/
