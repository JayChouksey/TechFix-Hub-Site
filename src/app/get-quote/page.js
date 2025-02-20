'use client';
import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaPaperPlane, FaTools, FaLaptop, FaMobile, FaCamera } from 'react-icons/fa';

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    deviceType: '',
    description: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log(formData);
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Get a Free Quote - TechFix Pro</title>
        <meta name="description" content="Request a free quote for laptop, phone, and camera repairs at TechFix Pro." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url("/repair-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get a Free Quote</h1>
            <p className="text-xl md:text-2xl mb-8">Fill out the form below to receive a no-obligation quote for your tech repair needs.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full text-green-600">
                    <FaPaperPlane size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Quote Request Received!</h2>
                  <p className="text-lg text-gray-600 mb-8">Thank you for submitting your request. One of our technicians will review your information and get back to you within 24 hours with a detailed quote.</p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Request Your Free Quote</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="serviceType" className="block text-gray-700 mb-2">Service Type *</label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          required
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select Service Type</option>
                          <option value="repair">Repair</option>
                          <option value="maintenance">Maintenance</option>
                          <option value="upgrade">Upgrade</option>
                          <option value="data-recovery">Data Recovery</option>
                          <option value="purchase">Purchase Used Device</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="deviceType" className="block text-gray-700 mb-2">Device Type *</label>
                        <select
                          id="deviceType"
                          name="deviceType"
                          required
                          value={formData.deviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select Device Type</option>
                          <option value="laptop">Laptop</option>
                          <option value="desktop">Desktop</option>
                          <option value="phone">Phone</option>
                          <option value="tablet">Tablet</option>
                          <option value="camera">Camera</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label htmlFor="description" className="block text-gray-700 mb-2">Description of Issue *</label>
                      <textarea
                        id="description"
                        name="description"
                        rows="5"
                        required
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Please describe the issue you're experiencing or the service you need..."
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        Submit Request
                      </motion.button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">What to Expect</h2>

              <div className="space-y-8">
                {[
                  {
                    title: 'Quick Response',
                    content: 'We aim to respond to all quote requests within 24 hours during business days.',
                    icon: <FaPaperPlane className="text-blue-600" size={28} />
                  },
                  {
                    title: 'Detailed Assessment',
                    content: 'Our technicians will provide an initial assessment based on your description.',
                    icon: <FaTools className="text-blue-600" size={28} />
                  },
                  {
                    title: 'Transparent Pricing',
                    content: 'We provide clear pricing with no hidden charges or surprise fees.',
                    icon: <FaLaptop className="text-blue-600" size={28} />
                  },
                  {
                    title: 'Expert Recommendations',
                    content: 'Get professional advice on the best solution for your specific issue.',
                    icon: <FaCamera className="text-blue-600" size={28} />
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    className="flex"
                  >
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="bg-blue-50 rounded-lg p-6 mt-10 border border-blue-100"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Need Immediate Assistance?</h3>
                <p className="text-blue-700 mb-4">For urgent requests or emergency repairs, please call our dedicated support line.</p>
                <div className="flex items-center">
                  <FaMobile className="text-blue-600 mr-3" size={24} />
                  <span className="text-xl font-semibold text-blue-800">(555) 987-6543</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Find answers to common questions about our quote and repair process.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: 'How long does it take to receive a quote?',
                  answer: 'We strive to respond to all quote requests within 24 hours during business days. For more complex repairs, we might need to see the device before providing an accurate estimate.'
                },
                {
                  question: 'Is there a fee for getting a quote?',
                  answer: 'No, all our quotes are completely free with no obligation. We believe in transparent pricing and want you to make an informed decision.'
                },
                {
                  question: 'What information do I need to provide for an accurate quote?',
                  answer: 'The more details you can provide about your device and the issue you are experiencing, the more accurate our initial quote will be. Device model, age, symptoms, and any relevant history are particularly helpful.'
                },
                {
                  question: 'Do you offer warranties on repairs?',
                  answer: 'Yes, all our repairs come with a warranty. The specific warranty period depends on the type of repair, ranging from 90 days to 1 year. This will be clearly stated in your quote.'
                },
                {
                  question: 'Can I bring my device in without a quote first?',
                  answer: 'Absolutely! While getting a quote online can save time, you are always welcome to bring your device directly to our shop for an in-person assessment and quote.'
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Devices Fixed?</h2>
            <p className="text-xl mb-8">Whether it's a minor issue or a major repair, our team is ready to help you get back up and running.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:5551234567"
                className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-block"
              >
                Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                onClick={() => document.documentElement.scrollTop = 0}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-blue-700 transition-colors inline-block"
              >
                Back to Top
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}