'use client';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Icons
import { FaLaptop, FaCamera, FaTools, FaHeadset, FaMobile, FaShoppingCart, FaCheck, FaSearch, FaRegClock } from 'react-icons/fa';

export default function Services() {

  const [activeTab, setActiveTab] = useState('all');

  // Service data
  const services = [
    { 
      id: 'laptop-repair',
      icon: <FaLaptop size={40} />, 
      title: 'Laptop Repair', 
      description: 'From screen replacements to motherboard fixes, we handle all laptop issues with precision.',
      longDescription: 'Our expert technicians can repair all brands of laptops including Apple, Dell, HP, Lenovo, ASUS, and more. We specialize in screen replacements, keyboard repairs, battery replacements, water damage recovery, data recovery, and hardware upgrades. All our laptop repairs come with a 90-day warranty.',
      price: 'Starting at $49',
      timeframe: '1-3 business days',
      image: '/laptop-repair.jpg'
    },
    { 
      id: 'phone-repair',
      icon: <FaMobile size={40} />, 
      title: 'Phone Repair', 
      description: 'Cracked screens, battery issues, water damage - we fix it all for most phone brands.',
      longDescription: 'We repair all major smartphone brands including iPhone, Samsung, Google Pixel, and more. Our services include screen replacements, battery replacements, charging port repairs, camera fixes, and water damage restoration. Most repairs are completed same-day, and we only use high-quality replacement parts.',
      price: 'Starting at $29',
      timeframe: 'Same day service available',
      image: '/phone-repair.jpg'
    },
    { 
      id: 'camera-repair',
      icon: <FaCamera size={40} />, 
      title: 'Camera Repair', 
      description: 'Trust our experts to repair your precious cameras and lenses with care.',
      longDescription: 'Our camera repair specialists handle DSLR, mirrorless, and professional video cameras from brands like Canon, Nikon, Sony, Fujifilm, and more. Services include lens calibration, sensor cleaning, shutter mechanism repairs, viewfinder fixes, and general servicing. All camera equipment is handled with extreme care in our dust-free environment.',
      price: 'Starting at $59',
      timeframe: '3-5 business days',
      image: '/camera-repair.jpg'
    },
    { 
      id: 'maintenance',
      icon: <FaTools size={40} />, 
      title: 'General Maintenance', 
      description: 'Regular maintenance to keep your devices running smoothly for longer.',
      longDescription: 'Preventative maintenance can extend the life of your devices and prevent costly repairs. Our maintenance services include deep cleaning, thermal paste application, fan replacement, software optimization, virus removal, and system updates. We recommend annual maintenance for optimal performance.',
      price: 'Starting at $39',
      timeframe: '1-2 business days',
      image: '/maintenance.jpg'
    },
    { 
      id: 'used-laptops',
      icon: <FaShoppingCart size={40} />, 
      title: 'Used Laptops', 
      description: 'Quality refurbished laptops with warranty at affordable prices.',
      longDescription: 'All our refurbished laptops undergo a rigorous 21-point inspection process. We replace worn components, upgrade where necessary, and ensure each laptop meets our high-quality standards. Every laptop comes with a clean operating system install, necessary drivers, and a 6-month warranty. We carry a wide range of brands and specifications to meet any budget.',
      price: 'Starting at $299',
      timeframe: 'Ready for immediate pickup',
      image: '/used-laptops.jpg'
    },
    { 
      id: 'tech-support',
      icon: <FaHeadset size={40} />, 
      title: 'Tech Support', 
      description: 'Professional technical support for all your software and hardware issues.',
      longDescription: 'Our tech support team can assist with software installations, system configurations, network setup, cloud services, data migration, and general troubleshooting. We offer both one-time support services and ongoing maintenance plans for homes and small businesses. Remote support options are also available.',
      price: 'Starting at $25/hr',
      timeframe: 'By appointment',
      image: '/tech-support.jpg'
    },
  ];

  const filteredServices = activeTab === 'all' ? services : services.filter(service => service.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Our Services - TechFix Pro</title>
        <meta name="description" content="Professional tech repair services including laptop repairs, phone repairs, camera repairs and quality refurbished laptops at affordable prices." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar/>

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

      {/* Service Filter Tabs */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex overflow-x-auto md:justify-center pb-2 -mx-4 px-4 md:px-0"
          >
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 mx-1 rounded-full transition-colors whitespace-nowrap ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              All Services
            </button>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 mx-1 rounded-full transition-colors whitespace-nowrap ${activeTab === service.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {service.title}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
            <Link href="/testimonials">
              <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Read More Testimonials →
              </span>
            </Link>
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