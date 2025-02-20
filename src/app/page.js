'use client';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// Icons
import { FaCheck } from 'react-icons/fa';
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


export default function Home() {
  // Services data
  const services = [
    {
      icon: <Camera size={40} />,
      title: 'CCTV & Security Systems',
      description: 'Professional installation of CCTV cameras, access control systems, and comprehensive security solutions.'
    },
    {
      icon: <Computer size={40} />,
      title: 'Computer & Laptop Repair',
      description: 'Expert repair services for desktops, laptops, and all-in-one computers with quality assurance.'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Annual Maintenance Contract',
      description: 'Comprehensive AMC services for security systems, computers, and printers to ensure optimal performance.'
    },
    {
      icon: <Cog size={40} />,
      title: 'Smart Home Solutions',
      description: 'Installation of video door phones, smart locks, intercoms, and time & attendance systems.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Digital Security',
      description: 'Antivirus installation, virus removal, and data recovery services to protect your digital assets.'
    },
    {
      icon: <FileCode size={40} />,
      title: 'Software Installation',
      description: 'Professional installation of Windows, Mac OS, Linux, and other essential software.'
    },
    {
      icon: <Wifi size={40} />,
      title: 'Networking Solutions',
      description: 'Setup and configuration of Wi-Fi and LAN networks for seamless connectivity.'
    },
    {
      icon: <HardDrive size={40} />,
      title: 'Data Recovery',
      description: 'Professional data recovery services to retrieve your valuable information from damaged storage devices.'
    },
    {
      icon: <Clock size={40} />,
      title: 'Time & Attendance Systems',
      description: 'Implementation of modern time tracking and attendance management solutions.'
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>TechFix Pro - Laptop Repairs & Second-hand Deals</title>
        <meta name="description" content="Professional tech repair services and quality refurbished laptops at affordable prices." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url("/hero-bg.jpg")',
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Tech Repairs & Quality Refurbished Laptops</h1>
            <p className="text-xl md:text-2xl mb-8">Fast, reliable repairs for laptops, cameras, phones, and more. We also offer certified pre-owned laptops at unbeatable prices.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/services">
                <span className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
                  Explore Services
                </span>
              </Link>
              <Link href="/shop">
                <span className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-700 transition-colors">
                  Browse Shop
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaCheck size={24} className="cursor-pointer" onClick={() => {
              document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
            }} />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Expert Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions and maintenance services for businesses and individuals, backed by years of experience and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We stand out from the competition with our commitment to quality, fair pricing, and exceptional customer service.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/technician-img.webp"
                  alt="Technician repairing devices"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="space-y-6">
                {[
                  { title: 'Experienced Technicians', description: 'Our team has over 10 years of experience in repairing all kinds of tech devices.' },
                  { title: 'Quality Parts', description: 'We use only genuine or high-quality compatible parts for all repairs.' },
                  { title: 'Warranty Included', description: 'All our repairs and refurbished laptops come with a warranty for your peace of mind.' },
                  { title: 'Quick Turnaround', description: 'Most repairs are completed within 24-48 hours to minimize your downtime.' },
                  { title: 'Transparent Pricing', description: 'No hidden fees or surprises - we provide clear and honest pricing upfront.' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-20px" }}
                    className="flex items-start"
                  >
                    <div className="bg-blue-600 rounded-full p-2 text-white mr-4 mt-1 flex-shrink-0">
                      <FaCheck size={16} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Refurbished Laptops</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Browse our selection of quality refurbished laptops, all thoroughly tested and with warranty.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Dell XPS 13',
                image: '/laptop1.jpg',
                specs: 'Intel i5, 8GB RAM, 256GB SSD',
                price: '$649',
                discount: '$799',
              },
              {
                name: 'MacBook Air',
                image: '/laptop2.jpg',
                specs: 'M1 Chip, 8GB RAM, 256GB SSD',
                price: '$849',
                discount: '$999',
              },
              {
                name: 'HP Spectre x360',
                image: '/laptop3.jpg',
                specs: 'Intel i7, 16GB RAM, 512GB SSD',
                price: '$899',
                discount: '$1099',
              },
              {
                name: 'Lenovo ThinkPad X1',
                image: '/laptop4.jpg',
                specs: 'Intel i5, 16GB RAM, 512GB SSD',
                price: '$749',
                discount: '$899',
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    Sale!
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.specs}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-blue-600">{product.price}</span>
                      <span className="text-gray-500 text-sm line-through ml-2">{product.discount}</span>
                    </div>
                    <Link href={`/shop/product-${index + 1}`}>
                      <span className="text-blue-600 hover:text-blue-800 transition-colors">
                        View Details
                      </span>
                    </Link>
                  </div>
                </div>
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
            <Link href="/shop">
              <span className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                View All Products
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Having Tech Issues? We Can Help!</h2>
            <p className="text-xl mb-8">Get a free diagnostic and quote today. No obligation, no hidden fees.</p>
            <Link href="/contact">
              <span className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-block">
                Get Free Quote
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Visit Our Shop</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00101648459473!3d40.71066447933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a329a583827%3A0xc2f8c8ef89c129c!2sTech%20Repair%20Shop!5e0!3m2!1sen!2sus!4v1592501132177!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Our location"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-6 space-y-4">
                <p className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Shop No. 23, Aakash Tower, 1st Road, Sriprastha, Nalasopara West, Palghar, Maharashtra - 401203
                </p>
                <p className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 7620765998
                </p>
                <p className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  visionovaitsolutions@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Business Hours</h2>
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                <div className="space-y-6">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                      <span className="font-medium text-gray-800">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Repair Drop-offs</h3>
                  <p className="text-blue-700">For repair drop-offs, please visit during our regular business hours. No appointment necessary!</p>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Emergency Repairs</h3>
                  <p className="text-green-700">For urgent cases, call our emergency line at +91 7620765998. Additional fees may apply for after-hours service.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}