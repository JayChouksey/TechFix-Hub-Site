'use client';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Component for animating sections into view
const AnimatedSection = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: delay }}
        >
            {children}
        </motion.div>
    );
};

// Team member card component with hover effects
const TeamMemberCard = ({ name, role, image }) => {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">{name}</h3>
                        <p className="text-sm">{role}</p>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-gray-600">{role}</p>
                <div className="mt-3 flex space-x-2">
                    <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

// Milestone component with hover effect
const Milestone = ({ year, title, description }) => {
    return (
        <motion.div
            className="relative pl-8 pb-8 border-l-2 border-blue-500"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
        >
            <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-blue-500" />
            <span className="inline-block mb-2 py-1 px-2 bg-blue-100 text-blue-800 text-sm font-medium rounded">{year}</span>
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

// Main About page component
export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>About Us | TechFix Pro</title>
                <meta name="description" content="Learn about TechFix Pro, our mission, team, and journey" />
            </Head>
            <Navbar />

            {/* Hero section */}
            <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About TechFix Pro</h1>
            <p className="text-xl md:text-2xl">Your trusted partner for all tech repair needs since 2010. We're passionate about extending the life of your devices through quality repairs and refurbishment.</p>
          </motion.div>
        </div>
      </section>

            {/* Mission section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-700 mb-8">
                                At TechFix Pro, we believe that technology should last longer. Our mission is to reduce e-waste by providing high-quality repairs and refurbished options, making technology more accessible and sustainable for everyone.
                            </p>
                            <div className="flex flex-wrap justify-center gap-8 mt-12">
                                <motion.div
                                    className="flex flex-col items-center p-6 max-w-xs"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                                            <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.5 2.5a1 1 0 001.414-1.414L10.5 8.5V5a1 1 0 00-1-1z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Quality Repairs</h3>
                                    <p className="text-gray-600 text-center">We use only genuine parts and provide a warranty on all our repair services.</p>
                                </motion.div>

                                <motion.div
                                    className="flex flex-col items-center p-6 max-w-xs"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Environmental Commitment</h3>
                                    <p className="text-gray-600 text-center">We're committed to reducing e-waste through repairs, refurbishment, and proper recycling.</p>
                                </motion.div>

                                <motion.div
                                    className="flex flex-col items-center p-6 max-w-xs"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Customer Education</h3>
                                    <p className="text-gray-600 text-center">We believe in empowering our customers with knowledge to make informed decisions about their tech.</p>
                                </motion.div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Team section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection delay={0.1}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                                Our team consists of certified technicians with years of experience in repairing and refurbishing all types of devices.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <AnimatedSection delay={0.2}>
                            <TeamMemberCard
                                name="John Smith"
                                role="Founder & CEO"
                                image="/team/john-smith.jpg"
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <TeamMemberCard
                                name="Sarah Johnson"
                                role="Head Technician"
                                image="/team/sarah-johnson.jpg"
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={0.4}>
                            <TeamMemberCard
                                name="Michael Wong"
                                role="Refurbishment Specialist"
                                image="/team/michael-wong.jpg"
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={0.5}>
                            <TeamMemberCard
                                name="Emily Rivera"
                                role="Customer Service Manager"
                                image="/team/emily-rivera.jpg"
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Our Story / Timeline section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection delay={0.1}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                                From a small repair shop to a trusted name in tech repair and refurbishment.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="max-w-3xl mx-auto">
                        <AnimatedSection delay={0.2}>
                            <Milestone
                                year="2010"
                                title="The Beginning"
                                description="TechFix Pro started as a small laptop repair shop in downtown New York, founded by John Smith with just two employees."
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <Milestone
                                year="2013"
                                title="Expansion to Phone Repairs"
                                description="We expanded our services to include smartphone repairs, becoming one of the first shops in the area to offer certified repairs for major brands."
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={0.4}>
                            <Milestone
                                year="2016"
                                title="Refurbished Tech Program"
                                description="We launched our certified refurbished laptops program, focusing on providing quality used tech at affordable prices."
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={0.5}>
                            <Milestone
                                year="2019"
                                title="New Headquarters"
                                description="We moved to our current location, a state-of-the-art facility allowing us to service more customers and expand our refurbishment operations."
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={0.6}>
                            <Milestone
                                year="2023"
                                title="E-Waste Initiative"
                                description="We launched our comprehensive e-waste reduction program, partnering with local schools and businesses to properly recycle electronic waste."
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Testimonials section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection delay={0.1}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                                Don't just take our word for it - hear from our satisfied customers.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatedSection delay={0.2}>
                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-md"
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <span className="text-blue-600 font-bold text-xl">JD</span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold">James Davis</h4>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700">
                                    "They saved my MacBook Pro that another shop said was beyond repair. Not only did they fix it, but they also improved its performance. Highly recommended!"
                                </p>
                            </motion.div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-md"
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                                        <span className="text-purple-600 font-bold text-xl">RL</span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold">Rebecca Lee</h4>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700">
                                    "I bought a refurbished laptop for my daughter's online classes, and I couldn't be happier. It works perfectly, looks brand new, and was half the price of a new one. Great service!"
                                </p>
                            </motion.div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.4}>
                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-md"
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <span className="text-green-600 font-bold text-xl">TM</span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold">Thomas Martinez</h4>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700">
                                    "Quick, professional, and affordable. My iPhone screen was replaced in under an hour, and they even gave me tips on how to protect it better. This is now my go-to repair shop."
                                </p>
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">Ready to Get Your Device Fixed?</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Schedule a repair, get a quote, or visit our shop today!
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <motion.a
                                    href="/contact"
                                    className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md font-semibold text-lg transition-colors hover:bg-gray-100"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Us
                                </motion.a>
                                <motion.a
                                    href="/services"
                                    className="inline-block px-6 py-3 bg-transparent border-2 border-white text-white rounded-md font-semibold text-lg transition-colors hover:bg-white/10"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Our Services
                                </motion.a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
}