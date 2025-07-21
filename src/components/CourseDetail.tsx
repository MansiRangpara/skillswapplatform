import React, { useState } from 'react';
import { ArrowLeft, Play, Lock, Check, Clock, Users, Star, BookOpen, Award, Download } from 'lucide-react';

const CourseDetail = ({ course, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const lessons = [
    { id: 1, title: 'Introduction to the Course', duration: '5 min', completed: true, free: true },
    { id: 2, title: 'Setting Up Your Environment', duration: '15 min', completed: true, free: false },
    { id: 3, title: 'HTML Fundamentals', duration: '25 min', completed: true, free: false },
    { id: 4, title: 'CSS Styling Basics', duration: '30 min', completed: false, free: false },
    { id: 5, title: 'JavaScript Introduction', duration: '35 min', completed: false, free: false },
    { id: 6, title: 'DOM Manipulation', duration: '40 min', completed: false, free: false },
    { id: 7, title: 'React Fundamentals', duration: '45 min', completed: false, free: false },
    { id: 8, title: 'State Management', duration: '50 min', completed: false, free: false },
  ];

  const instructor = {
    name: course.instructor,
    bio: 'Senior Full Stack Developer with 8+ years of experience. Passionate about teaching and helping students succeed.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    courses: 12,
    students: 45000,
    rating: 4.8
  };

  const reviews = [
    {
      id: 1,
      name: 'Alex Johnson',
      rating: 5,
      comment: 'Excellent course! The instructor explains everything clearly and the projects are very practical.',
      avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      rating: 4,
      comment: 'Great content and well-structured lessons. Would definitely recommend to beginners.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      id: 3,
      name: 'Mike Chen',
      rating: 5,
      comment: 'This course helped me land my first developer job. Thank you!',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    }
  ];

  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Course Details</h1>
      </div>

      {/* Course Hero */}
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h2>
            <p className="text-gray-600 mb-6">{course.description}</p>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-medium">{course.rating}</span>
                <span className="text-gray-500">({course.students.toLocaleString()} students)</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500">
                <BookOpen className="w-5 h-5" />
                <span>{totalLessons} lessons</span>
              </div>
            </div>

            {course.enrolled && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Your Progress</span>
                  <span className="text-sm font-medium text-gray-900">{Math.round(progressPercentage)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {completedLessons} of {totalLessons} lessons completed
                </p>
              </div>
            )}

            <div className="flex items-center space-x-4">
              <button className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                course.enrolled 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-500' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}>
                {course.enrolled ? 'Continue Learning' : `Enroll Now - ${course.price}`}
              </button>
              {course.enrolled && (
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="w-5 h-5 inline mr-2" />
                  Download Resources
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Play className="w-8 h-8 text-black ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-100">
          <nav className="flex space-x-8 px-6">
            {['overview', 'lessons', 'instructor', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-yellow-600 border-b-2 border-yellow-400'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What you'll learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Build responsive websites from scratch',
                    'Master HTML, CSS, and JavaScript',
                    'Learn modern React development',
                    'Understand backend development with Node.js',
                    'Deploy applications to production',
                    'Work with databases and APIs'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Basic computer literacy</li>
                  <li>• No prior programming experience required</li>
                  <li>• A computer with internet access</li>
                  <li>• Willingness to learn and practice</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'lessons' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Content</h3>
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    lesson.completed 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      lesson.completed 
                        ? 'bg-green-500 text-white' 
                        : lesson.free 
                        ? 'bg-yellow-400 text-black' 
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {lesson.completed ? (
                        <Check size={20} />
                      ) : lesson.free ? (
                        <Play size={20} />
                      ) : (
                        <Lock size={20} />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                      <p className="text-sm text-gray-600">{lesson.duration}</p>
                    </div>
                  </div>
                  {lesson.free && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                      Free
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'instructor' && (
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{instructor.name}</h3>
                  <p className="text-gray-600 mb-4">{instructor.bio}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{instructor.rating}</div>
                      <div className="text-sm text-gray-600">Instructor Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{instructor.students.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{instructor.courses}</div>
                      <div className="text-sm text-gray-600">Courses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Student Reviews</h3>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-gray-500">({course.students.toLocaleString()} reviews)</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium text-gray-900">{review.name}</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;