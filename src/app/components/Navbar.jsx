import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Icons
import { BiMenu } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            {/* <Image src="/logo.png" alt="TechFix Pro Logo" width={50} height={50} /> */}
            <h1 className={`ml-2 font-bold text-2xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>TechFix Pro</h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'Services', 'Shop', 'About', 'Contact'].map((item) => (
            <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
              <span className={`hover:text-blue-500 font-medium transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                {item}
              </span>
            </Link>
          ))}

          <Link href="/get-quote">
            <span className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Get Quote
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isMenuOpen ? <IoMdClose size={24} /> : <BiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['Home', 'Services', 'Shop', 'About', 'Contact'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`}>
                  <span className="block py-2 text-gray-800 hover:text-blue-500 font-medium transition-colors">
                    {item}
                  </span>
                </Link>
              ))}
              <Link href="/get-quote">
                <span className="block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-center">
                  Get Quote
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}