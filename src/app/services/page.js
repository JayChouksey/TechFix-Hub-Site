'use client';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

// Icons
import { FaTools, FaCheck, FaSearch, FaRegClock } from 'react-icons/fa';
import { 
  Camera,
  Computer,
  Shield,
  Wifi,
  HardDrive,
  Wrench,
  FileCode,
  Clock,
  Cog
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Service categories for filters
  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'security', label: 'Security', services: ['cctv-security', 'digital-security'] },
    { id: 'computers', label: 'Computers', services: ['computer-repair', 'software-installation', 'data-recovery'] },
    { id: 'networking', label: 'Networking', services: ['networking', 'smart-home'] },
    { id: 'maintenance', label: 'Maintenance', services: ['maintenance-contract', 'time-attendance'] }
  ];

  // Service data
  const services = [
    {
      id: 'cctv-security',
      icon: <Camera size={40} />,
      title: 'CCTV & Security Systems',
      description: 'Professional installation of CCTV cameras, access control systems, and comprehensive security solutions.',
      longDescription: 'We provide end-to-end security solutions including CCTV camera installation, access control systems, surveillance setup, and security monitoring. Our systems come with remote viewing capabilities, motion detection, and 24/7 recording options. We work with top brands and provide full training on system usage.',
      price: 'Starting at $299',
      timeframe: '2-3 business days',
      image: '/cctv-security.jpg'
    },
    {
      id: 'computer-repair',
      icon: <Computer size={40} />,
      title: 'Computer & Laptop Repair',
      description: 'Expert repair services for desktops, laptops, and all-in-one computers with quality assurance.',
      longDescription: 'Our certified technicians handle all types of computer repairs including hardware replacement, software troubleshooting, virus removal, and performance optimization. We service all major brands and provide warranty on parts and labor. Most repairs are completed within 24-48 hours.',
      price: 'Starting at $49',
      timeframe: '1-2 business days',
      image: '/computer-repair.jpg'
    },
    {
      id: 'maintenance-contract',
      icon: <Wrench size={40} />,
      title: 'Annual Maintenance Contract',
      description: 'Comprehensive AMC services for security systems, computers, and printers to ensure optimal performance.',
      longDescription: 'Our Annual Maintenance Contracts provide regular maintenance, priority support, and preventive care for your technology infrastructure. Includes quarterly checkups, software updates, hardware cleaning, and discounted repair services. Ideal for businesses and home offices.',
      price: 'Starting at $299/year',
      timeframe: 'Quarterly visits',
      image: '/maintenance.jpg'
    },
    {
      id: 'smart-home',
      icon: <Cog size={40} />,
      title: 'Smart Home Solutions',
      description: 'Installation of video door phones, smart locks, intercoms, and time & attendance systems.',
      longDescription: 'Transform your home with our smart home integration services. We install and configure video doorbells, smart locks, automated lighting, climate control systems, and home security solutions. All our installations come with user training and setup support.',
      price: 'Starting at $199',
      timeframe: '1-3 business days',
      image: '/smart-home.jpg'
    },
    {
      id: 'digital-security',
      icon: <Shield size={40} />,
      title: 'Digital Security',
      description: 'Antivirus installation, virus removal, and data recovery services to protect your digital assets.',
      longDescription: 'Protect your digital life with our comprehensive security solutions. We provide antivirus installation, malware removal, firewall setup, data encryption, and regular security audits. We use industry-leading security software and best practices to keep your data safe.',
      price: 'Starting at $79',
      timeframe: 'Same day service',
      image: '/digital-security.jpg'
    },
    {
      id: 'software-installation',
      icon: <FileCode size={40} />,
      title: 'Software Installation',
      description: 'Professional installation of Windows, Mac OS, Linux, and other essential software.',
      longDescription: 'Our software installation services cover operating systems, productivity suites, specialized applications, and custom software solutions. We ensure proper configuration, updates, and licensing compliance. All installations include basic training and documentation.',
      price: 'Starting at $59',
      timeframe: '2-4 hours',
      image: '/software.jpg'
    },
    {
      id: 'networking',
      icon: <Wifi size={40} />,
      title: 'Networking Solutions',
      description: 'Setup and configuration of Wi-Fi and LAN networks for seamless connectivity.',
      longDescription: 'Complete networking solutions including Wi-Fi setup, LAN configuration, network security, and troubleshooting. We optimize network performance, set up secure access points, and ensure reliable connectivity throughout your space. Ideal for both home and business environments.',
      price: 'Starting at $149',
      timeframe: '1-2 business days',
      image: '/networking.jpg'
    },
    {
      id: 'data-recovery',
      icon: <HardDrive size={40} />,
      title: 'Data Recovery',
      description: 'Professional data recovery services to retrieve your valuable information from damaged storage devices.',
      longDescription: 'Our data recovery experts can retrieve lost data from hard drives, SSDs, USB drives, and other storage devices. We handle cases of accidental deletion, drive failure, corruption, and physical damage. All recovery attempts are performed in a clean room environment.',
      price: 'Starting at $99',
      timeframe: '2-5 business days',
      image: '/data-recovery.jpg'
    },
    {
      id: 'time-attendance',
      icon: <Clock size={40} />,
      title: 'Time & Attendance Systems',
      description: 'Implementation of modern time tracking and attendance management solutions.',
      longDescription: 'Complete time and attendance solutions for businesses of all sizes. We provide biometric systems, card readers, mobile solutions, and cloud-based tracking systems. Includes installation, software setup, user training, and ongoing support.',
      price: 'Starting at $399',
      timeframe: '2-3 business days',
      image: '/time-attendance.jpg'
    }
  ];

  const handleCategorySelect = (categoryId) => {
    setActiveTab(categoryId);
    setIsFilterOpen(false);
  };

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => {
        const category = categories.find(cat => cat.services?.includes(service.id));
        return category?.id === activeTab || service.id === activeTab;
      });

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Our Services - TechFix Pro</title>
        <meta name="description" content="Professional tech repair services including laptop repairs, phone repairs, camera repairs and quality refurbished laptops at affordable prices." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url("/services-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8">Expert repairs and maintenance to keep your tech working perfectly.</p>
          </motion.div>
        </div>
      </section>

      {/* Mobile Filter Dropdown */}
      <section className="py-6 bg-white md:hidden">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center justify-between"
          >
            <span>Filter Services</span>
            <ChevronDown className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isFilterOpen && (
            <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`w-full px-6 py-3 text-left border-b last:border-b-0 ${
                    activeTab === category.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Desktop Filter Tabs */}
      <section className="hidden md:block py-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full transition-colors ${
                  activeTab === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2 h-64 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="md:col-span-3 p-8">
                    <div className="flex items-center mb-4">
                      <div className="text-blue-600 mr-4">{service.icon}</div>
                      <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 mb-6">{service.longDescription}</p>
                    <div className="flex flex-col md:flex-row md:items-center mb-6 space-y-4 md:space-y-0 md:space-x-8">
                      <div className="flex items-center">
                        <FaCheck className="text-green-500 mr-2" />
                        <span className="text-gray-700 font-medium">{service.price}</span>
                      </div>
                      <div className="flex items-center">
                        <FaRegClock className="text-blue-500 mr-2" />
                        <span className="text-gray-700">{service.timeframe}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={`/services/${service.id}`}>
                        <span className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-center block">
                          Learn More
                        </span>
                      </Link>
                      <Link href="/get-quote">
                        <span className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-center block">
                          Get Quote
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Repair Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We've streamlined our repair process to make it quick and hassle-free for you.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaSearch size={32} />, 
                title: 'Diagnose', 
                description: 'We thoroughly inspect your device to identify all issues. Our diagnostic fee is waived when you proceed with repairs.',
                step: '01'
              },
              { 
                icon: <FaTools size={32} />, 
                title: 'Repair', 
                description: 'Our expert technicians fix your device using quality parts and following best practices to ensure lasting repairs.',
                step: '02'
              },
              { 
                icon: <FaCheck size={32} />, 
                title: 'Quality Check', 
                description: 'Every repaired device undergoes rigorous testing to ensure everything works perfectly before return.',
                step: '03'
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="text-blue-600 mb-6 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Got questions? We've got answers to the most common questions about our services.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { 
                question: 'How long do repairs typically take?', 
                answer: 'Most repairs are completed within 1-3 business days, depending on the type of repair and parts availability. Some simple repairs like screen replacements for common phone models can be done the same day.' 
              },
              { 
                question: 'Do you offer a warranty on repairs?', 
                answer: 'Yes, all our repairs come with a 90-day warranty covering parts and labor. Our refurbished laptops come with a 6-month warranty.' 
              },
              { 
                question: 'What brands do you repair?', 
                answer: 'We repair most major brands including Apple, Samsung, Dell, HP, Lenovo, ASUS, Sony, Canon, Nikon, and many more. If you don\'t see your brand listed, please contact us to check.' 
              },
              { 
                question: 'Do I need to make an appointment?', 
                answer: 'Walk-ins are welcome for diagnostics and simple repairs. For complex repairs or tech support services, we recommend scheduling an appointment to ensure we can accommodate you promptly.' 
              },
              { 
                question: 'How do I know if my device is worth repairing?', 
                answer: 'During our diagnostic process, we\'ll provide an honest assessment of your device and repair costs. If we believe a repair isn\'t cost-effective, we\'ll let you know and can recommend replacement options from our refurbished inventory.' 
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mt-12"
          >
            <p className="text-gray-700 mb-6">Don't see your question? Contact us directly for more information.</p>
            <Link href="/contact">
              <span className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors inline-block">
                Contact Us
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hear from our satisfied customers about their experience with our services.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Photographer',
                image: '/testimonial1.jpg',
                quote: 'They fixed my DSLR camera when other shops said it couldn\'t be repaired. Fantastic service and reasonable prices!',
              },
              {
                name: 'Michael Chen',
                role: 'College Student',
                image: '/testimonial2.jpg',
                quote: 'Bought a refurbished laptop for my studies. It\'s been running perfectly for over a year now. Great value for money!',
              },
              {
                name: 'Jennifer Smith',
                role: 'Graphic Designer',
                image: '/testimonial3.jpg',
                quote: 'Quick laptop repair when I needed it most. They saved all my work files and upgraded my RAM while at it. Highly recommend!',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{`"${testimonial.quote}"`}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mt-12"
          >
            {/* <Link href="/testimonials">
              <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Read More Testimonials →
              </span>
            </Link> */}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Fix Your Tech?</h2>
            <p className="text-xl mb-8">Get a free diagnostic and quote today. No obligation, no hidden fees.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/get-quote">
                <span className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-block">
                  Get Free Quote
                </span>
              </Link>
              <Link href="/contact">
                <span className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-700 transition-colors inline-block">
                  Contact Us
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}