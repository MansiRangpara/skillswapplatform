import React, { useState } from 'react';
import { Search, BookOpen, Clock, Users, Play, Heart, Star, Award, TrendingUp } from 'lucide-react';

const StudentLandingPage = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'John Smith',
      category: 'Programming',
      level: 'Beginner',
      rating: 4.8,
      students: 15420,
      duration: '40 hours',
      price: '$89',
      originalPrice: '$129',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      isFavorited: false,
      isEnrolled: true,
      progress: 75
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Sarah Johnson',
      category: 'Design',
      level: 'Beginner',
      rating: 4.7,
      students: 12340,
      duration: '30 hours',
      price: '$99',
      originalPrice: '$149',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      isFavorited: true,
      isEnrolled: true,
      progress: 40
    },
    {
      id: 3,
      title: 'Data Science with Python',
      instructor: 'Mike Chen',
      category: 'Data Science',
      level: 'Intermediate',
      rating: 4.9,
      students: 9876,
      duration: '45 hours',
      price: '$149',
      originalPrice: '$199',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      isFavorited: false,
      isEnrolled: true,
      progress: 90
    },
    {
      id: 4,
      title: 'Mobile App Development',
      instructor: 'Lisa Wang',
      category: 'Programming',
      level: 'Intermediate',
      rating: 4.9,
      students: 11234,
      duration: '35 hours',
      price: '$119',
      originalPrice: '$169',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      isFavorited: false,
      isEnrolled: false,
      progress: 0
    }
  ];

  const categories = [
    { name: 'Programming', icon: '💻', courses: 150 },
    { name: 'Design', icon: '🎨', courses: 89 },
    { name: 'Business', icon: '💼', courses: 67 },
    { name: 'Data Science', icon: '📊', courses: 45 },
    { name: 'Marketing', icon: '📈', courses: 78 },
    { name: 'Photography', icon: '📸', courses: 34 }
  ];

  const achievements = [
    { icon: BookOpen, label: 'Courses Completed', value: '5' },
    { icon: Clock, label: 'Hours Learned', value: '48' },
    { icon: Award, label: 'Certificates', value: '3' },
    { icon: TrendingUp, label: 'Current Streak', value: '15 days' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  👋 Welcome back, Alex!
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Continue Your<br />
                  Learning <span className="text-yellow-500">Journey</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-md">
                  Pick up where you left off and keep building your skills with our comprehensive courses.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm"
                />
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onNavigate('courses')}
                  className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-medium"
                >
                  Continue Learning
                </button>
                <button
                  onClick={() => onNavigate('courses')}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Browse Courses
                </button>
              </div>
            </div>

            {/* Right Content - Student Dashboard Preview */}
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-8 overflow-hidden">
                {/* Dashboard illustration */}
                <div className="relative z-10">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-bold text-gray-900">My Progress</h3>
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-sm">AJ</span>
                      </div>
                    </div>
                    
                    {/* Progress Chart */}
                    <div className="mb-6">
                      <div className="flex items-center justify-center mb-4">
                        <div className="relative w-20 h-20">
                          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                            <circle cx="40" cy="40" r="30" fill="none" stroke="#e5e7eb" strokeWidth="6" />
                            <circle cx="40" cy="40" r="30" fill="none" stroke="#fbbf24" strokeWidth="6"
                              strokeDasharray={`${2 * Math.PI * 30}`}
                              strokeDashoffset={`${2 * Math.PI * 30 * (1 - 0.75)}`} />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold text-gray-900">75%</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-center text-sm text-gray-600">Overall Progress</p>
                    </div>
                    
                    {/* Course List */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-6 bg-blue-400 rounded"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded"></div>
                        </div>
                        <span className="text-xs text-gray-600">75%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-6 bg-green-400 rounded"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded"></div>
                        </div>
                        <span className="text-xs text-gray-600">40%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-6 bg-purple-400 rounded"></div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded"></div>
                        </div>
                        <span className="text-xs text-gray-600">90%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <div className="bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">5</span>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-900">Completed</div>
                        <div className="text-xs text-gray-600">Courses</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side achievement cards */}
              <div className="absolute -right-4 top-8">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                      <TrendingUp className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">15</div>
                    <div className="text-xs text-gray-600">Day Streak</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-16">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900">48h</div>
                    <div className="text-xs text-gray-600">Learned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-sm text-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Continue Learning Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Continue Learning</h2>
            <p className="text-gray-600">Pick up where you left off</p>
          </div>
          <button
            onClick={() => onNavigate('courses')}
            className="text-yellow-600 hover:text-yellow-700 font-medium"
          >
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.filter(course => course.isEnrolled).map((course) => (
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
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                    {course.progress}% Complete
                  </span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                  <Heart className={`w-4 h-4 ${course.isFavorited ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                </button>
              </div>
              <div className="p-6">
                <div className="text-xs text-yellow-600 font-medium mb-1">{course.category}</div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.students.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors font-medium">
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover new skills and expand your knowledge across various domains
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 cursor-pointer group border border-gray-100"
              onClick={() => onNavigate('courses')}
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.courses} courses</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentLandingPage;