import React, { useState } from 'react';
import { Search, GraduationCap, BookOpen, Clock, Users, Play, Heart } from 'lucide-react';

const InstructorLandingPage = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const topCourses = [
    {
      id: 1,
      title: 'Web Design Fundamentals',
      category: 'Design',
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      isFavorited: false
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      category: 'Programming',
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      isFavorited: true
    },
    {
      id: 3,
      title: 'Data Science Basics',
      category: 'Data Science',
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      isFavorited: false
    },
    {
      id: 4,
      title: 'Mobile App Development',
      category: 'Programming',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      isFavorited: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
                />
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2000+</div>
                    <div className="text-sm text-gray-600">Online Courses</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative">
              {/* Main illustration background */}
              <div className="relative bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl p-8 overflow-hidden">
                {/* Student figure */}
                <div className="relative z-10 flex justify-center">
                  <div className="w-64 h-80 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-2xl flex items-end justify-center relative overflow-hidden">
                    {/* Student illustration */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mb-4">
                        <GraduationCap className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>
                    
                    {/* Books */}
                    <div className="absolute bottom-8 right-4">
                      <div className="w-8 h-12 bg-teal-400 rounded-sm transform rotate-12"></div>
                      <div className="w-8 h-12 bg-blue-400 rounded-sm transform -rotate-6 -ml-2"></div>
                    </div>
                    
                    {/* Pointing finger */}
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                      <div className="w-8 h-2 bg-pink-300 rounded-full transform rotate-45"></div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 right-8">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <div className="bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-900">Expert Instruction</div>
                        <div className="text-xs text-gray-600">Find the right course for you</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side stats */}
              <div className="absolute -right-4 top-8">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-xs font-bold text-white">+</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">25k+</div>
                    <div className="text-xs text-gray-600">Happy Students</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-16">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-purple-600 font-bold">AI</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">AI Powered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-sm">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Instruction</h3>
              <p className="text-sm text-gray-600">Find the right course for you</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-sm">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">16 Online courses</h3>
              <p className="text-sm text-gray-600">Explore a variety of fresh topics</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-sm">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lifetime access</h3>
              <p className="text-sm text-gray-600">Learn on your schedule</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Top courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These are the most popular courses among listen courses learners worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group cursor-pointer"
              onClick={() => onNavigate('courses')}
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                  <Heart className={`w-4 h-4 ${course.isFavorited ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                </button>
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-purple-600 font-medium mb-1">{course.category}</div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('courses')}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorLandingPage;