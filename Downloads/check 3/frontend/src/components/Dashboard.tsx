import React from 'react';
import { BookOpen, Clock, Trophy, TrendingUp, Play, Users, Award, BarChart3, DollarSign } from 'lucide-react';

const Dashboard = ({ userRole = 'student' }) => {
  // Student stats
  const stats = [
    { name: 'Courses Enrolled', value: '12', icon: BookOpen, color: 'bg-yellow-400' },
    { name: 'Hours Learned', value: '48', icon: Clock, color: 'bg-black' },
    { name: 'Certificates', value: '5', icon: Trophy, color: 'bg-yellow-400' },
    { name: 'Streak Days', value: '15', icon: TrendingUp, color: 'bg-black' },
  ];

  // Instructor stats
  const instructorStats = [
    { name: 'Number of courses', value: '12', icon: BookOpen, color: 'bg-blue-600' },
    { name: 'Number of enrollment', value: '1.2k', icon: Users, color: 'bg-green-600' },
    { name: 'Pending balance', value: '$2772', icon: DollarSign, color: 'bg-purple-600' },
    { name: 'Requested withdrawal', value: '$255', icon: TrendingUp, color: 'bg-orange-600' },
  ];

  const currentStats = userRole === 'instructor' ? instructorStats : stats;

  const recentCourses = [
    {
      id: 1,
      title: 'Advanced React Development',
      progress: 75,
      nextLesson: 'State Management with Redux',
      instructor: 'John Smith',
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      progress: 40,
      nextLesson: 'Color Theory and Psychology',
      instructor: 'Sarah Johnson',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Data Science with Python',
      progress: 90,
      nextLesson: 'Machine Learning Basics',
      instructor: 'Mike Chen',
      thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const achievements = [
    { name: 'First Course Complete', icon: Award, earned: true },
    { name: 'Week Streak', icon: TrendingUp, earned: true },
    { name: 'Quiz Master', icon: Trophy, earned: false },
    { name: 'Community Helper', icon: Users, earned: false },
  ];

  // Mock data for instructor revenue chart
  const chartData = [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 35 },
    { month: 'Mar', value: 45 },
    { month: 'Apr', value: 60 },
    { month: 'May', value: 80 },
    { month: 'Jun', value: 100 },
    { month: 'Jul', value: 85 },
    { month: 'Aug', value: 70 },
    { month: 'Sep', value: 90 },
    { month: 'Oct', value: 75 },
    { month: 'Nov', value: 65 },
    { month: 'Dec', value: 55 }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 text-black">
        <h2 className="text-2xl font-bold mb-2">
          Welcome back, {userRole === 'instructor' ? 'Mathew!' : 'Alex!'}
        </h2>
        <p className="text-black/80 mb-4">
          {userRole === 'instructor' 
            ? 'Ready to inspire and teach? Your students are waiting!' 
            : 'Ready to continue your learning journey? You\'re doing great!'
          }
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
          {userRole === 'instructor' ? 'Manage Courses' : 'Continue Learning'}
        </button>
      </div>

      {/* Instructor Revenue Chart */}
      {userRole === 'instructor' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">INSTRUCTOR REVENUE</h3>
          
          {/* Chart */}
          <div className="relative h-64 mb-8">
            <div className="absolute inset-0 flex items-end justify-between px-4">
              {chartData.map((data, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                  <div className="relative w-full max-w-8 h-48 flex items-end">
                    <div
                      className="w-full bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-lg transition-all duration-500"
                      style={{
                        height: `${(data.value / maxValue) * 100}%`,
                        minHeight: '4px'
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} text-white p-3 rounded-lg`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Courses */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {userRole === 'instructor' ? 'My Courses' : 'Continue Learning'}
            </h3>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                  <div className="relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{course.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{course.progress}%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {userRole === 'instructor' ? `${course.progress}% completed by students` : `Next: ${course.nextLesson}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {userRole === 'instructor' ? 'Course Overview' : 'Achievements'}
          </h3>
          
          {userRole === 'instructor' ? (
            <div className="space-y-6">
              {/* Circular Progress Chart */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-24 h-24 mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - 0.75)}`}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">75%</span>
                  </div>
                </div>
              </div>

              {/* Course Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Active courses</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">4</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Pending courses</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">0</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
          <div className="space-y-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${achievement.earned ? 'bg-yellow-50' : 'bg-gray-50'}`}>
                  <div className={`p-2 rounded-lg ${achievement.earned ? 'bg-yellow-400 text-black' : 'bg-gray-300 text-gray-600'}`}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${achievement.earned ? 'text-gray-900' : 'text-gray-600'}`}>
                      {achievement.name}
                    </p>
                    {achievement.earned && (
                      <p className="text-xs text-yellow-600">Earned!</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;