'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch, FaLaptop, FaApple, FaWindows, FaAngleDown } from 'react-icons/fa';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Dell XPS 13',
    image: '/laptop1.jpg',
    brand: 'Dell',
    category: 'Ultrabook',
    specs: 'Intel i5, 8GB RAM, 256GB SSD',
    price: 649,
    discount: 799,
    rating: 4.5,
    os: 'Windows',
    condition: 'Excellent'
  },
  {
    id: 2,
    name: 'MacBook Air',
    image: '/laptop2.jpg',
    brand: 'Apple',
    category: 'Ultrabook',
    specs: 'M1 Chip, 8GB RAM, 256GB SSD',
    price: 849,
    discount: 999,
    rating: 4.8,
    os: 'macOS',
    condition: 'Like New'
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    image: '/laptop3.jpg',
    brand: 'HP',
    category: 'Convertible',
    specs: 'Intel i7, 16GB RAM, 512GB SSD',
    price: 899,
    discount: 1099,
    rating: 4.6,
    os: 'Windows',
    condition: 'Excellent'
  },
  {
    id: 4,
    name: 'Lenovo ThinkPad X1',
    image: '/laptop4.jpg',
    brand: 'Lenovo',
    category: 'Business',
    specs: 'Intel i5, 16GB RAM, 512GB SSD',
    price: 749,
    discount: 899,
    rating: 4.4,
    os: 'Windows',
    condition: 'Very Good'
  },
  {
    id: 5,
    name: 'ASUS ZenBook 14',
    image: '/laptop5.jpg',
    brand: 'ASUS',
    category: 'Ultrabook',
    specs: 'AMD Ryzen 7, 16GB RAM, 1TB SSD',
    price: 799,
    discount: 949,
    rating: 4.3,
    os: 'Windows',
    condition: 'Good'
  },
  {
    id: 6,
    name: 'MacBook Pro 13',
    image: '/laptop6.jpg',
    brand: 'Apple',
    category: 'Professional',
    specs: 'M1 Pro Chip, 16GB RAM, 512GB SSD',
    price: 1249,
    discount: 1499,
    rating: 4.9,
    os: 'macOS',
    condition: 'Like New'
  },
  {
    id: 7,
    name: 'Microsoft Surface Laptop 4',
    image: '/laptop7.jpg',
    brand: 'Microsoft',
    category: 'Ultrabook',
    specs: 'Intel i7, 16GB RAM, 512GB SSD',
    price: 899,
    discount: 1099,
    rating: 4.6,
    os: 'Windows',
    condition: 'Excellent'
  },
  {
    id: 8,
    name: 'Dell Inspiron 15',
    image: '/laptop8.jpg',
    brand: 'Dell',
    category: 'All-purpose',
    specs: 'Intel i5, 8GB RAM, 1TB HDD',
    price: 549,
    discount: 699,
    rating: 4.1,
    os: 'Windows',
    condition: 'Good'
  },
];

// Filter options
const filterOptions = {
  brands: ['All', 'Apple', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Microsoft'],
  categories: ['All', 'Ultrabook', 'Convertible', 'Business', 'Professional', 'All-purpose'],
  priceRanges: ['All', 'Under $600', '$600-$800', '$800-$1000', 'Over $1000'],
  conditions: ['All', 'Like New', 'Excellent', 'Very Good', 'Good'],
  os: ['All', 'Windows', 'macOS']
};

export default function Shop() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilters, setActiveFilters] = useState({
    brand: 'All',
    category: 'All',
    priceRange: 'All',
    condition: 'All',
    os: 'All'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    applyFilters();
  }, [activeFilters, searchTerm, sortBy]);

  const applyFilters = () => {
    let result = [...products];

    // Apply search term
    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.specs.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply brand filter
    if (activeFilters.brand !== 'All') {
      result = result.filter((product) => product.brand === activeFilters.brand);
    }

    // Apply category filter
    if (activeFilters.category !== 'All') {
      result = result.filter((product) => product.category === activeFilters.category);
    }

    // Apply price range filter
    if (activeFilters.priceRange !== 'All') {
      switch (activeFilters.priceRange) {
        case 'Under $600':
          result = result.filter((product) => product.price < 600);
          break;
        case '$600-$800':
          result = result.filter((product) => product.price >= 600 && product.price <= 800);
          break;
        case '$800-$1000':
          result = result.filter((product) => product.price > 800 && product.price <= 1000);
          break;
        case 'Over $1000':
          result = result.filter((product) => product.price > 1000);
          break;
        default:
          break;
      }
    }

    // Apply condition filter
    if (activeFilters.condition !== 'All') {
      result = result.filter((product) => product.condition === activeFilters.condition);
    }

    // Apply OS filter
    if (activeFilters.os !== 'All') {
      result = result.filter((product) => product.os === activeFilters.os);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'featured' - already in the preferred order
        break;
    }

    setFilteredProducts(result);
  };

  const resetFilters = () => {
    setActiveFilters({
      brand: 'All',
      category: 'All',
      priceRange: 'All',
      condition: 'All',
      os: 'All'
    });
    setSearchTerm('');
    setSortBy('featured');
  };

  const updateFilter = (filterType, value) => {
    setActiveFilters({
      ...activeFilters,
      [filterType]: value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Shop - TechFix Pro</title>
        <meta name="description" content="Browse our selection of quality refurbished laptops at TechFix Pro." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative h-80 flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url("/shop-bg.jpg")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Refurbished Laptops</h1>
            <p className="text-xl mb-8">Browse our selection of certified pre-owned laptops, all with warranty and at great prices.</p>
            <div className="max-w-xl mx-auto">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search for laptops, brands, or specifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-full py-3 px-6 pl-12 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <FaSearch className="absolute left-4 text-white text-opacity-70" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Shop Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters for larger screens */}
            <motion.div
              className="hidden lg:block w-64 flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                  <button
                    onClick={resetFilters}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Reset
                  </button>
                </div>

                {/* Brands Filter */}
                <div className="mb-8">
                  <h3 className="text-md font-medium mb-3 text-gray-700">Brand</h3>
                  <div className="space-y-2">
                    {filterOptions.brands.map((brand) => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="radio"
                          name="brand"
                          checked={activeFilters.brand === brand}
                          onChange={() => updateFilter('brand', brand)}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-600">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* OS Filter */}
                <div className="mb-8">
                  <h3 className="text-md font-medium mb-3 text-gray-700">Operating System</h3>
                  <div className="space-y-2">
                    {filterOptions.os.map((os) => (
                      <label key={os} className="flex items-center">
                        <input
                          type="radio"
                          name="os"
                          checked={activeFilters.os === os}
                          onChange={() => updateFilter('os', os)}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-600">
                          {os === 'All' ? os : (
                            <span className="flex items-center">
                              {os === 'Windows' ? <FaWindows className="mr-1" size={14} /> : <FaApple className="mr-1" size={14} />}
                              {os}
                            </span>
                          )}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Categories Filter */}
                <div className="mb-8">
                  <h3 className="text-md font-medium mb-3 text-gray-700">Category</h3>
                  <div className="space-y-2">
                    {filterOptions.categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={activeFilters.category === category}
                          onChange={() => updateFilter('category', category)}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-600">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-8">
                  <h3 className="text-md font-medium mb-3 text-gray-700">Price Range</h3>
                  <div className="space-y-2">
                    {filterOptions.priceRanges.map((range) => (
                      <label key={range} className="flex items-center">
                        <input
                          type="radio"
                          name="priceRange"
                          checked={activeFilters.priceRange === range}
                          onChange={() => updateFilter('priceRange', range)}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-600">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Condition Filter */}
                <div className="mb-4">
                  <h3 className="text-md font-medium mb-3 text-gray-700">Condition</h3>
                  <div className="space-y-2">
                    {filterOptions.conditions.map((condition) => (
                      <label key={condition} className="flex items-center">
                        <input
                          type="radio"
                          name="condition"
                          checked={activeFilters.condition === condition}
                          onChange={() => updateFilter('condition', condition)}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2 text-gray-600">{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main content */}
            <div className="flex-1">
              {/* Mobile filter button */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full flex items-center justify-center gap-2 bg-white rounded-lg shadow-sm p-3 font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <FaFilter />
                  Filters
                  <FaAngleDown className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mobile filters panel */}
                {isFilterOpen && (
                  <motion.div
                    className="bg-white rounded-lg shadow-md mt-2 p-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Mobile filter content similar to desktop but more compact */}
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                      <button
                        onClick={resetFilters}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Reset All
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Brand filter */}
                      <div className="mb-4">
                        <h3 className="text-sm font-medium mb-2 text-gray-700">Brand</h3>
                        <select
                          value={activeFilters.brand}
                          onChange={(e) => updateFilter('brand', e.target.value)}
                          className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                        >
                          {filterOptions.brands.map((brand) => (
                            <option key={brand} value={brand}>{brand}</option>
                          ))}
                        </select>
                      </div>

                      {/* OS filter */}
                      <div className="mb-4">
                        <h3 className="text-sm font-medium mb-2 text-gray-700">OS</h3>
                        <select
                          value={activeFilters.os}
                          onChange={(e) => updateFilter('os', e.target.value)}
                          className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                        >
                          {filterOptions.os.map((os) => (
                            <option key={os} value={os}>{os}</option>
                          ))}
                        </select>
                      </div>

                      {/* Category filter */}
                      <div className="mb-4">
                        <h3 className="text-sm font-medium mb-2 text-gray-700">Category</h3>
                        <select
                          value={activeFilters.category}
                          onChange={(e) => updateFilter('category', e.target.value)}
                          className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                        >
                          {filterOptions.categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>

                      {/* Price range filter */}
                      <div className="mb-4">
                        <h3 className="text-sm font-medium mb-2 text-gray-700">Price Range</h3>
                        <select
                          value={activeFilters.priceRange}
                          onChange={(e) => updateFilter('priceRange', e.target.value)}
                          className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                        >
                          {filterOptions.priceRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>

                      {/* Condition filter */}
                      <div className="mb-4 col-span-2">
                        <h3 className="text-sm font-medium mb-2 text-gray-700">Condition</h3>
                        <select
                          value={activeFilters.condition}
                          onChange={(e) => updateFilter('condition', e.target.value)}
                          className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                        >
                          {filterOptions.conditions.map((condition) => (
                            <option key={condition} value={condition}>{condition}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sort and result count */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
              >
                <p className="text-gray-600 mb-4 sm:mb-0">
                  Showing <span className="font-semibold">{filteredProducts.length}</span> products
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-md py-1.5 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </motion.div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.discount > product.price && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                            Sale!
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity p-3">
                          <div className="text-white text-xs">
                            <p className="font-medium">{product.condition} Condition</p>
                            <p className="flex items-center gap-1 mt-1">
                              {product.os === 'Windows' ? <FaWindows size={12} /> : <FaApple size={12} />}
                              {product.os}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{product.specs}</p>
                        <div className="flex justify-between items-end">
                          <div>
                            <span className="text-xl font-bold text-blue-600">${product.price}</span>
                            {product.discount > product.price && (
                              <span className="text-gray-500 text-sm line-through ml-2">${product.discount}</span>
                            )}
                            <div className="flex items-center mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                                      }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-gray-500 text-xs ml-1">({product.rating})</span>
                            </div>
                          </div>
                          <Link href={`/shop/product-${product.id}`}>
                            <span className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                              View Details
                            </span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-sm p-8 text-center"
                >
                  <FaLaptop className="mx-auto text-gray-400 text-5xl mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-6">We couldn't find any laptops matching your current filters.</p>
                  <button
                    onClick={resetFilters}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-blue-600 py-12 mt-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Need help finding the right laptop?</h2>
              <p className="text-blue-100">Let our experts help you choose the perfect refurbished laptop for your needs.</p>
            </div>
            <Link href="/contact">
              <span className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-block">
                Get Expert Advice
              </span>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}