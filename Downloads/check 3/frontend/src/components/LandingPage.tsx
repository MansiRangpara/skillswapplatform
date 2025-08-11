import React, { useState } from 'react';
import { Search, Play, Users, Brain, CheckCircle, ChevronDown, Menu, X, ChevronLeft, ChevronRight, Star, Heart, ArrowRight, Plus, Minus, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const LandingPage = ({ onLogin, onSignup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentCourseSlide, setCurrentCourseSlide] = useState(0);
  const [currentLatestSlide, setCurrentLatestSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [likedCourses, setLikedCourses] = useState(new Set());

  const navigation = [
    { name: 'Home', href: '#', hasDropdown: true },
    { name: 'Courses', href: '#', hasDropdown: true },
    { name: 'Course bundle', href: '#' },
    { name: 'Ebook', href: '#', hasDropdown: true },
    { name: 'More', href: '#', hasDropdown: true },
  ];

  const topCourses = [
    {
      id: 1,
      title: 'WordPress Theme Development with Bootstrap',
      level: 'Intermediate',
      rating: 4,
      reviews: 2,
      price: 10,
      originalPrice: 19.99,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Adobe Illustrator CC - Essentials Training Course',
      level: 'Advanced',
      rating: 5,
      reviews: 1,
      price: 12,
      originalPrice: 18.99,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Complete Guitar Lessons System',
      level: 'Beginner',
      rating: 0,
      reviews: 0,
      price: 12,
      originalPrice: 149.99,
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Complete Blender Creator: Learn 3D Modelling',
      level: 'Intermediate',
      rating: 4,
      reviews: 1,
      price: 0,
      originalPrice: null,
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const latestCourses = [
    {
      id: 1,
      title: 'The Data Science Course: Complete Data Science',
      level: 'Advanced',
      rating: 0,
      reviews: 0,
      price: 0,
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'DESIGN RULES: Principles + Practices for Great UI...',
      level: 'Beginner',
      rating: 0,
      reviews: 0,
      price: 99,
      originalPrice: 150,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'The Complete Python Bootcamp From Zero to Hero',
      level: 'Beginner',
      rating: 4,
      reviews: 1,
      price: 0,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'How to shoot cinematic tech videos like Apple',
      level: 'Beginner',
      rating: 0,
      reviews: 0,
      price: 524,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const faqData = [
    {
      question: 'What is Academy LMS?',
      answer: 'Academy LMS is a comprehensive learning management system that offers thousands of courses across various topics. We provide high-quality education at affordable prices with expert instructors.'
    },
    {
      question: 'How do I enroll in a course?',
      answer: 'Simply browse our course catalog, select the course you want, and click "Enroll now". You can pay securely and start learning immediately after enrollment.'
    },
    {
      question: 'Are there any free courses available?',
      answer: 'Yes! We offer many free courses across different categories. Look for courses marked as "Free" in our course listings.'
    },
    {
      question: 'Can I get a certificate after completing a course?',
      answer: 'Yes, you will receive a certificate of completion for each course you finish. Our certificates are recognized and can be shared on your professional profiles.'
    },
    {
      question: 'What if I need help during my course?',
      answer: 'Our expert instructors and support team are always available to help. You can ask questions in the course discussion forums or contact our support team directly.'
    }
  ];

  const toggleLike = (courseId) => {
    const newLiked = new Set(likedCourses);
    if (newLiked.has(courseId)) {
      newLiked.delete(courseId);
    } else {
      newLiked.add(courseId);
    }
    setLikedCourses(newLiked);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const CourseCard = ({ course, onLike }) => (
    <div className="flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative group">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
          {course.level}
        </div>
        <button
          onClick={() => onLike(course.id)}
          className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <Heart
            className={`w-4 h-4 ${likedCourses.has(course.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`}
          />
        </button>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-purple-600 transition-colors cursor-pointer">
          {course.title}
        </h3>
        <div className="flex items-center mb-4">
          <div className="flex">
            {renderStars(course.rating)}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {course.rating} ({course.reviews} Reviews)
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {course.price === 0 ? (
              <span className="text-2xl font-bold text-green-600">Free</span>
            ) : (
              <>
                <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                {course.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ${course.originalPrice}
                  </span>
                )}
              </>
            )}
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors transform hover:scale-105">
            Enroll now
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">academy</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors">
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              </div>
              <button
                onClick={onLogin}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Login
              </button>
              <button
                onClick={onSignup}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Join Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="border-t border-gray-200 pt-4 px-4 space-y-2">
                  <button
                    onClick={onLogin}
                    className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={onSignup}
                    className="block w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-center"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Start Learning<br />
                  From Best <span className="text-purple-600">Platform</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-md">
                  Study any topic, anytime. explore thousands of courses for the lowest price ever!
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="What do you want to learn"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700"
                />
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2000+</div>
                    <div className="text-purple-600 font-medium">Online Courses</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                  alt="Student with graduation cap"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-white rounded-full p-4 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mt-2">
                  <div className="text-xs text-gray-600">CERTIFICATION</div>
                  <div className="text-xs text-gray-600">GUARANTEE</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                      alt="Student"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                      alt="Student"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                      alt="Student"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-bold text-black">+</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">25k+</div>
                    <div className="text-sm text-gray-600">Happy Students</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">AI Powered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-100 to-transparent"></div>
      </section>

      {/* Top Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These are the most popular courses among listen courses learners worldwide
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentCourseSlide(Math.max(0, currentCourseSlide - 1))}
                  disabled={currentCourseSlide === 0}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentCourseSlide(Math.min(topCourses.length - 1, currentCourseSlide + 1))}
                  disabled={currentCourseSlide >= topCourses.length - 1}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
              {topCourses.map((course) => (
                <CourseCard key={course.id} course={course} onLike={toggleLike} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These are the most popular courses among listen courses learners worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* HTML & CSS */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">HTML & CSS</h3>
                  <p className="text-gray-600 text-sm">3 Courses</p>
                </div>
              </div>
            </div>

            {/* Color Theory */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <span className="text-pink-600 text-xl">🎨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Color Theory</h3>
                  <p className="text-gray-600 text-sm">2 Courses</p>
                </div>
              </div>
            </div>

            {/* Bootstrap */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 text-xl font-bold">B</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Bootstrap</h3>
                  <p className="text-gray-600 text-sm">2 Courses</p>
                </div>
              </div>
            </div>

            {/* WordPress Theme */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <span className="text-green-600 text-xl">W</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WordPress Theme</h3>
                  <p className="text-gray-600 text-sm">1 Courses</p>
                </div>
              </div>
            </div>

            {/* Adobe Illustrator */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 text-xl font-bold">Ai</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Adobe Illustrator</h3>
                  <p className="text-gray-600 text-sm">1 Courses</p>
                </div>
              </div>
            </div>

            {/* Drawing */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <span className="text-pink-600 text-xl">✏️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Drawing</h3>
                  <p className="text-gray-600 text-sm">1 Courses</p>
                </div>
              </div>
            </div>

            {/* Blender */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                  <span className="text-yellow-600 text-xl">🔧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Blender</h3>
                  <p className="text-gray-600 text-sm">1 Courses</p>
                </div>
              </div>
            </div>

            {/* Sewing */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <span className="text-orange-600 text-xl">🧵</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sewing</h3>
                  <p className="text-gray-600 text-sm">1 Courses</p>
                </div>
              </div>
            </div>

            {/* Motion Graphics */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <span className="text-red-600 text-xl">🎬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Motion Graphics</h3>
                  <p className="text-gray-600 text-sm">1 Courses</p>
                </div>
              </div>
            </div>

            {/* Lighting Design */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-600 text-xl">💡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Lighting Design</h3>
                  <p className="text-gray-600 text-sm">1 Courses</p>
                </div>
              </div>
            </div>

            {/* Photoshop */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <span className="text-green-600 text-xl font-bold">Ps</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Photoshop</h3>
                  <p className="text-gray-600 text-sm">1 Courses</p>
                </div>
              </div>
            </div>

            {/* Mobile App Design */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                  <span className="text-yellow-600 text-xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Mobile App Design</h3>
                  <p className="text-gray-600 text-sm">1 Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Upcoming Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore our upcoming courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover a world of learning opportunities through our upcoming courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Drawing */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Drawing"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300">
                <div className="bg-white px-4 py-2 rounded-lg">
                  <span className="font-semibold text-gray-900">Drawing</span>
                </div>
              </div>
            </div>

            {/* Blender */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Blender"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300">
                <div className="bg-white px-4 py-2 rounded-lg">
                  <span className="font-semibold text-gray-900">Blender</span>
                </div>
              </div>
            </div>

            {/* Music Theory */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Music Theory"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300">
                <div className="bg-white px-4 py-2 rounded-lg">
                  <span className="font-semibold text-gray-900">Music Theory</span>
                </div>
              </div>
            </div>

            {/* After Effects */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="After Effects"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300">
                <div className="bg-white px-4 py-2 rounded-lg">
                  <span className="font-semibold text-gray-900">After Effects</span>
                </div>
              </div>
            </div>

            {/* Mastering Yoga */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Mastering Yoga"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300">
                <div className="bg-white px-4 py-2 rounded-lg">
                  <span className="font-semibold text-gray-900">Mastering Yoga</span>
                </div>
              </div>
            </div>

            {/* Video & Film */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Video & Film"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300">
                <div className="bg-white px-4 py-2 rounded-lg">
                  <span className="font-semibold text-gray-900">Video & Film</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 Latest Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top 10 Latest courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These are the most latest courses among listen courses learners worldwide
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentLatestSlide(Math.max(0, currentLatestSlide - 1))}
                  disabled={currentLatestSlide === 0}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentLatestSlide(Math.min(latestCourses.length - 1, currentLatestSlide + 1))}
                  disabled={currentLatestSlide >= latestCourses.length - 1}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
              {latestCourses.map((course) => (
                <CourseCard key={course.id} course={course} onLike={toggleLike} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Latest Blogs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit our latest blogs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our valuable articles to get more information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Blog 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                  alt="AI-Based learning"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Education
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg group-hover:text-purple-600 transition-colors">
                  AI-Based learning is the future of Corporate Training
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  The corporate world is slowly stepping into the dimension of Artificial Intelligence...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                      alt="John Doe"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">John Doe</p>
                      <p className="text-xs text-gray-500">Wed, 22 Dec 2021</p>
                    </div>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                  alt="Balance your priorities"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Lifestyle
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg group-hover:text-purple-600 transition-colors">
                  Balance your priorities in life and enjoy a beautiful life
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Living a productive and meaningful life is a balancing act. With the pressures of...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                      alt="John Doe"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">John Doe</p>
                      <p className="text-xs text-gray-500">Wed, 22 Dec 2021</p>
                    </div>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                  alt="Parent Power"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Education
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg group-hover:text-purple-600 transition-colors">
                  Parent Power: Will We Choose Pitchforks or Partnerships?
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  After two tumultuous years of intermittent school closures, parents and caregivers...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                      alt="John Doe"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">John Doe</p>
                      <p className="text-xs text-gray-500">Wed, 22 Dec 2021</p>
                    </div>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banners */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Join Now Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Join now to start learning</h3>
                <p className="text-purple-100 mb-6 underline cursor-pointer hover:text-white transition-colors">
                  Learn from our quality instructors!
                </p>
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Student"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                />
              </div>
            </div>

            {/* Become Instructor Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Become a new instructor</h3>
                <p className="text-purple-100 mb-6 underline cursor-pointer hover:text-white transition-colors">
                  Teach thousands of students and earn
                </p>
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Instructor"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our platform and courses
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expert Instructor Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our expert instructor</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              They efficiently serve large number of students on our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Instructor 1 */}
            <div className="bg-green-500 rounded-xl p-8 text-center hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Instructor"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white/20 group-hover:border-white/40 transition-all duration-300"
              />
              <h3 className="text-white font-semibold text-lg">Sarah Johnson</h3>
              <p className="text-green-100 text-sm">UI/UX Designer</p>
            </div>

            {/* Instructor 2 */}
            <div className="bg-yellow-400 rounded-xl p-8 text-center hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Instructor"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-black/10 group-hover:border-black/20 transition-all duration-300"
              />
              <h3 className="text-black font-semibold text-lg">Mike Chen</h3>
              <p className="text-gray-800 text-sm">Full Stack Developer</p>
            </div>

            {/* Instructor 3 */}
            <div className="bg-blue-500 rounded-xl p-8 text-center hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Instructor"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white/20 group-hover:border-white/40 transition-all duration-300"
              />
              <h3 className="text-white font-semibold text-lg">Emily Davis</h3>
              <p className="text-blue-100 text-sm">Data Scientist</p>
            </div>

            {/* Instructor 4 */}
            <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Instructor"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white/20 group-hover:border-white/40 transition-all duration-300"
              />
              <h3 className="text-white font-semibold text-lg">John Smith</h3>
              <p className="text-gray-300 text-sm">Marketing Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold">academy</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering learners worldwide with high-quality education and expert instruction. 
                Join thousands of students on their learning journey.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instructors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Science</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketing</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400 text-sm">info@academy.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400 text-sm">123 Learning St, Education City</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm">
                © 2024 Academy LMS. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;