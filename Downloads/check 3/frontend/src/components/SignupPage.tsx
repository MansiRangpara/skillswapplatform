import React, { useState } from 'react';
import axios from 'axios';
import { ChevronDown, Menu, X, User, Lock, Eye, EyeOff, Mail } from 'lucide-react';

const SignupPage = ({ onSignup, onLogin, onHome }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [applyAsInstructor, setApplyAsInstructor] = useState(false);

  const navigation = [
    { name: 'Home', href: '#', hasDropdown: true },
    { name: 'Courses', href: '#', hasDropdown: true },
    { name: 'Course bundle', href: '#' },
    { name: 'Ebook', href: '#', hasDropdown: true },
    { name: 'More', href: '#', hasDropdown: true },
  ];

  const handleSubmit = async (e) => {
  e.preventDefault();
  const role = applyAsInstructor ? 'instructor' : 'student';

  try {
    const response = await axios.post('http://localhost:5000/api/instructors/register', {
      name: `${firstName} ${lastName}`,
      email,
      password
    });

    console.log('Signup success:', response.data);
    onSignup(role);
  } catch (error) {
    console.error('Signup error:', error);
  }
};

  const handleInstructorToggle = (checked) => {
    setApplyAsInstructor(checked);
    if (checked) {
      setFirstName('Mathew');
      setLastName('Anderson');
      setEmail('instructor@example.com');
      setPassword('instructor123');
    } else {
      setFirstName('Alex');
      setLastName('Johnson');
      setEmail('student@example.com');
      setPassword('student123');
    }
  };

 


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={onHome} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">academy</span>
            </button>

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
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
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
                  <button className="block w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-center">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="relative">
            <div className="relative bg-pink-100 rounded-full w-96 h-96 mx-auto flex items-center justify-center">
              {/* Illustration elements */}
              <div className="absolute top-8 left-8">
                <div className="bg-white rounded-2xl p-3 shadow-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Person illustration */}
              <div className="relative z-10">
                <div className="w-32 h-32 bg-blue-400 rounded-full flex items-center justify-center mb-4">
                  <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Login form mockup */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <div className="w-20 h-3 bg-gray-200 rounded"></div>
                      <div className="w-16 h-2 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-32 h-6 bg-gray-100 rounded-lg"></div>
                    <div className="w-32 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-20 h-6 bg-purple-500 rounded text-white text-xs flex items-center justify-center font-medium">
                      LOGIN
                    </div>
                  </div>
                </div>
              </div>

              {/* Security badge */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <div className="w-16 h-20 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Lock className="w-8 h-8 text-black" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="max-w-md w-full mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Sign up!</h2>
                <p className="mt-2 text-gray-600">
                  Explore, learn, and grow with us. enjoy a seamless and enriching educational journey. lets begin!
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your valid password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="instructor"
                    name="instructor"
                    type="checkbox"
                    checked={applyAsInstructor}
                    onChange={(e) => handleInstructorToggle(e.target.checked)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="instructor" className="ml-2 block text-sm text-gray-700">
                    Apply to become an instructor
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Sign up
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already you have an account?{' '}
                    <button
                      type="button"
                      onClick={onLogin}
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Log in
                    </button>
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;