import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  TrendingUp, 
  Play, 
  Users, 
  Award, 
  BarChart3, 
  DollarSign,
  User,
  Settings,
  Bell,
  Heart,
  ShoppingBag,
  MessageSquare,
  LogOut,
  ChevronRight,
  Search,
  Home
} from 'lucide-react';
import MyCourses from './student/MyCourses';
import CourseBundles from './student/CourseBundles';
import Bootcamp from './student/Bootcamp';
import MyTeams from './student/MyTeams';
import BookedTuition from './student/BookedTuition';
import MyEbooks from './student/MyEbooks';
import Wishlist from './student/Wishlist';
import Messages from './student/Messages';
import PayoutSettings from './student/PayoutSettings';
import PurchaseHistory from './student/PurchaseHistory';
import Badges from './student/Badges';
import StudentProfile from './StudentProfile';
import InstructorFollowings from './student/InstructorFollowings';
import Account from './student/Account';

interface StudentDashboardProps {
  onProfileClick: () => void;
  onBackToWebsite: () => void;
}

export default function StudentDashboard({ onProfileClick, onBackToWebsite }: StudentDashboardProps) {
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const navigationItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BookOpen, label: 'My courses' },
    { icon: Users, label: 'Course bundles' },
    { icon: BookOpen, label: 'Bootcamp' },
    { icon: Users, label: 'My teams' },
    { icon: BookOpen, label: 'Booked tuition' },
    { icon: BookOpen, label: 'My ebooks' },
    { icon: Heart, label: 'Wishlist' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: ShoppingBag, label: 'Payout settings' },
    { icon: ShoppingBag, label: 'Purchase history' },
    { icon: Award, label: 'Badges' },
    { icon: User, label: 'Profile' },
    { icon: Users, label: 'Instructor followings' },
    { icon: Settings, label: 'Account' },
  ];

  const statsCards = [
    {
      icon: BookOpen,
      value: '12',
      label: 'Courses Enrolled',
      color: 'text-yellow-600'
    },
    {
      icon: Clock,
      value: '48',
      label: 'Hours Learned',
      color: 'text-black'
    },
    {
      icon: Trophy,
      value: '5',
      label: 'Certificates',
      color: 'text-yellow-600'
    },
    {
      icon: TrendingUp,
      value: '15',
      label: 'Streak Days',
      color: 'text-black'
    }
  ];

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

  const renderContent = () => {
    switch (activeNavItem) {
      case 'My courses':
        return <MyCourses />;
      case 'Course bundles':
        return <CourseBundles />;
      case 'Bootcamp':
        return <Bootcamp />;
      case 'My teams':
        return <MyTeams />;
      case 'Booked tuition':
        return <BookedTuition />;
      case 'My ebooks':
        return <MyEbooks />;
      case 'Wishlist':
        return <Wishlist />;
      case 'Messages':
        return <Messages />;
      case 'Payout settings':
        return <PayoutSettings />;
      case 'Purchase history':
        return <PurchaseHistory />;
      case 'Badges':
        return <Badges />;
      case 'Profile':
        return <StudentProfile onDashboardClick={() => setActiveNavItem('Dashboard')} onBackToWebsite={onBackToWebsite} />;
      case 'Instructor followings':
        return <InstructorFollowings />;
      case 'Account':
        return <Account />;
      default:
        return (
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-6 text-black">
              <h2 className="text-2xl font-bold mb-2">Welcome back, Alex!</h2>
              <p className="text-black/80 mb-4">Ready to continue your learning journey? You're doing great!</p>
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Continue Learning
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsCards.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      </div>
                      <div className={`${stat.color === 'text-yellow-600' ? 'bg-yellow-400 text-black' : 'bg-black text-white'} p-3 rounded-lg`}>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Learning</h3>
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
                          <p className="text-xs text-gray-500 mt-1">Next: {course.nextLesson}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
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
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col overflow-hidden">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
              alt="Alex Johnson"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Alex Johnson</h3>
              <p className="text-sm text-gray-600">student@example.com</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-6 overflow-y-auto">
          <div className="px-4 mb-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">NAVIGATION</h4>
          </div>
          <nav className="space-y-1 px-3">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveNavItem(item.label)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                    item.active || activeNavItem === item.label
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </div>
                </button>
                );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Home className="w-6 h-6 text-yellow-600" />
              <h1 className="text-xl font-semibold text-gray-900">Student Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
              <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
              <button
                onClick={onBackToWebsite}
                className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
              >
                Back to Website
              </button>
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover cursor-pointer"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}