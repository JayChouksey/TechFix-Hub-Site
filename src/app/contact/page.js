'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      // Reset submission status after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us - TechFix Pro</title>
        <meta name="description" content="Contact TechFix Pro for laptop repairs, phone fixes, and affordable refurbished laptops. Get in touch with our expert team today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar - Same as in main page */}
      <Navbar/>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl">Get in touch with our expert team for all your tech repair needs. We're here to help!</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-50 rounded-xl p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center"
                >
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="laptop-repair">Laptop Repair</option>
                        <option value="phone-repair">Phone Repair</option>
                        <option value="camera-repair">Camera Repair</option>
                        <option value="buy-used-laptop">Buy Used Laptop</option>
                        <option value="tech-support">Tech Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Tell us about your issue or inquiry..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors w-full md:w-auto"
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info and Map */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-8 mb-12">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h3>
                      <p className="text-gray-600">Shop No. 23, Aakash Tower, 1st Road, Sriprastha, Nalasopara West, Palghar, Maharashtra - 401203</p>
                      <Link href="https://goo.gl/maps/YourMapLink" target="_blank" rel="noopener noreferrer">
                        <span className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block">
                          Get Directions →
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Number</h3>
                      <p className="text-gray-600">Main: +91 7620765998</p>
                      <p className="text-gray-600">Support: +91 7620757967</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">contact@techfixpro.com</p>
                      <p className="text-gray-600">support@techfixpro.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                      <FaClock size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4 mb-8">
                  <a
                    href="#"
                    className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-blue-400 hover:text-white transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-blue-800 hover:text-white transition-colors"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>

                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00101648459473!3d40.71066447933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a329a583827%3A0xc2f8c8ef89c129c!2sTech%20Repair%20Shop!5e0!3m2!1sen!2sus!4v1592501132177!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Our location"
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </motion.div>
            </div>
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Find answers to our most commonly asked questions.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'How long does a typical repair take?',
                answer: 'Most repairs are completed within 24-48 hours, depending on the complexity of the issue and parts availability. We always provide an estimated timeline when you drop off your device.'
              },
              {
                question: 'Do I need an appointment for repairs?',
                answer: 'No appointment is necessary for drop-offs. Simply visit our shop during our business hours, and our team will assist you. However, if you prefer a scheduled time, you can call ahead or use our online scheduling system.'
              },
              {
                question: 'What warranty do you offer on repairs?',
                answer: 'We provide a 90-day warranty on all repairs, covering both parts and labor. For certain specific repairs, extended warranty options are available. Our refurbished laptops come with a 6-month warranty.'
              },
              {
                question: 'Can I get a quote before committing to a repair?',
                answer: 'Absolutely! We provide free diagnostics and quotes before proceeding with any repairs. There is no obligation, and we will only move forward once you approve the estimated cost.'
              },
              {
                question: 'Do you offer emergency repair services?',
                answer: 'Yes, we offer emergency repair services for urgent cases. Please call our emergency line at +91 7620765998. Note that additional fees may apply for after-hours services.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-20px" }}
                className="mb-6 last:mb-0"
              >
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
            {/* <p className="text-lg text-gray-700 mb-6">Didn't find what you're looking for?</p>
            <Link href="/faq">
              <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                View All FAQs →
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Quick Response?</h2>
            <p className="text-xl mb-8">Call us now for immediate assistance with your tech issues!</p>
            <a href="tel:+15551234567" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors flex items-center"
              >
                <FaPhone className="mr-2" />
                +91 7620765998
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

    {/* Footer */}
    <Footer/>
    </div>
  );
}