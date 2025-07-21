import React, { useState } from 'react';
import CourseManager from './instructor/CourseManager';
import SalesReport from './instructor/SalesReport';
import PayoutReport from './instructor/PayoutReport';
import PayoutSettings from './instructor/PayoutSettings';
import Bootcamp from './instructor/Bootcamp';
import TeamTraining from './instructor/TeamTraining';
import Ebook from './instructor/Ebook';
import TutorBooking from './instructor/TutorBooking';
import ZoomLiveSettings from './instructor/ZoomLiveSettings';
import Blog from './instructor/Blog';
import Support from './instructor/Support';
import BecomeAffiliate from './instructor/BecomeAffiliate';
import Message from './instructor/Message';
import ManageProfile from './instructor/ManageProfile';
import { 
  BarChart3, 
  BookOpen, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Settings,
  MessageSquare,
  Award,
  FileText,
  HelpCircle,
  User,
  ChevronRight,
  Bell,
  Search
} from 'lucide-react';

const InstructorDashboard = ({ onProfileClick, onBackToWebsite }) => {
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');

  const navigationItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: BookOpen, label: 'Course manager', hasSubmenu: true },
    { icon: BookOpen, label: 'Bootcamp', hasSubmenu: true },
    { icon: Users, label: 'Team training', hasSubmenu: true },
    { icon: BookOpen, label: 'Ebook', hasSubmenu: true },
    { icon: Calendar, label: 'Tutor booking', hasSubmenu: true },
    { icon: FileText, label: 'Sales report', hasSubmenu: true },
    { icon: DollarSign, label: 'Payout report', hasSubmenu: true },
    { icon: Settings, label: 'Payout settings', hasSubmenu: true },
    { icon: Settings, label: 'Zoom live settings', hasSubmenu: true },
    { icon: FileText, label: 'Blog', hasSubmenu: true },
    { icon: HelpCircle, label: 'Support', hasSubmenu: true },
    { icon: Award, label: 'Become an affiliate', hasSubmenu: true },
    { icon: MessageSquare, label: 'Message' },
    { icon: User, label: 'Manage profile' },
  ];

  const statsCards = [
    {
      icon: BookOpen,
      value: '12',
      label: 'Number of courses',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      value: '1.2k',
      label: 'Number of enrollment',
      color: 'text-green-600'
    },
    {
      icon: DollarSign,
      value: '$2772',
      label: 'Pending balance',
      color: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      value: '$255',
      label: 'Requested withdrawal amount',
      color: 'text-orange-600'
    }
  ];

  // Mock data for the revenue chart
  const chartData = [
    { month: 'January', value: 20 },
    { month: 'February', value: 35 },
    { month: 'March', value: 45 },
    { month: 'April', value: 60 },
    { month: 'May', value: 80 },
    { month: 'June', value: 100 },
    { month: 'July', value: 85 },
    { month: 'August', value: 70 },
    { month: 'September', value: 90 },
    { month: 'October', value: 75 },
    { month: 'November', value: 65 },
    { month: 'December', value: 55 }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col overflow-hidden">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
              alt="Mathew Anderson"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Mathew Anderson</h3>
              <p className="text-sm text-gray-600">instructor@example.com</p>
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
                  onClick={() => {
                    setActiveNavItem(item.label);
                    if (item.label === 'Manage profile') {
                      onProfileClick();
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                    item.active || activeNavItem === item.label
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </div>
                  {item.hasSubmenu && (
                    <ChevronRight size={14} className="text-gray-400" />
                  )}
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
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
              <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
              <button
                onClick={onBackToWebsite}
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                Back to Website
              </button>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover cursor-pointer"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {activeNavItem === 'Dashboard' && (
            <>
          {/* Revenue Chart Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">INSTRUCTOR REVENUE</h2>
            
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
                    <span className="text-xs text-gray-500 transform -rotate-45 origin-center">
                      {data.month.slice(0, 3)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
            </>
          )}

          {/* Add other navigation content here as needed */}
          {activeNavItem !== 'Dashboard' && activeNavItem !== 'Manage profile' && (
            <div>
              {activeNavItem === 'Course manager' && <CourseManager />}
              {activeNavItem === 'Bootcamp' && <Bootcamp />}
              {activeNavItem === 'Team training' && <TeamTraining />}
              {activeNavItem === 'Ebook' && <Ebook />}
              {activeNavItem === 'Tutor booking' && <TutorBooking />}
              {activeNavItem === 'Sales report' && <SalesReport />}
              {activeNavItem === 'Payout report' && <PayoutReport />}
              {activeNavItem === 'Payout settings' && <PayoutSettings />}
              {activeNavItem === 'Zoom live settings' && <ZoomLiveSettings />}
              {activeNavItem === 'Blog' && <Blog />}
              {activeNavItem === 'Support' && <Support />}
              {activeNavItem === 'Become an affiliate' && <BecomeAffiliate />}
              {activeNavItem === 'Message' && <Message />}
              {activeNavItem === 'Manage profile' && <ManageProfile />}
              {!['Course manager', 'Bootcamp', 'Team training', 'Ebook', 'Tutor booking', 'Sales report', 'Payout report', 'Payout settings', 'Zoom live settings', 'Blog', 'Support', 'Become an affiliate', 'Message', 'Manage profile'].includes(activeNavItem) && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">{activeNavItem}</h2>
                  <p className="text-gray-600">Content for {activeNavItem} will be implemented here.</p>
                </div>
              )}
            </div>
          )}
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Course Overview Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">COURSE OVERVIEW</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Circular Progress Chart */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-32 h-32 mb-6">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      strokeDashoffset={`${2 * Math.PI * 50 * (1 - 0.75)}`}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">75%</span>
                  </div>
                </div>
              </div>

              {/* Course Stats */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Active courses</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">4</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">Pending courses</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Support Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <HelpCircle size={20} />
          <span>Support</span>
        </button>
      </div>
    </div>
  );
};

export default InstructorDashboard;