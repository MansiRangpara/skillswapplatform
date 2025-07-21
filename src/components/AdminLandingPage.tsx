import React, { useState } from 'react';
import { Search, Shield, Users, BookOpen, TrendingUp, Settings, BarChart3, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const AdminLandingPage = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const quickStats = [
    { icon: Users, label: 'Total Users', value: '2,847', change: '+12%', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { icon: BookOpen, label: 'Active Courses', value: '156', change: '+8%', color: 'text-green-600', bgColor: 'bg-green-50' },
    { icon: TrendingUp, label: 'Monthly Revenue', value: '$45,892', change: '+15%', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { icon: BarChart3, label: 'Platform Uptime', value: '99.9%', change: '+0.1%', color: 'text-orange-600', bgColor: 'bg-orange-50' }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'user',
      title: 'New instructor application',
      description: 'Sarah Wilson applied to become an instructor',
      time: '5 minutes ago',
      status: 'pending',
      icon: Users
    },
    {
      id: 2,
      type: 'course',
      title: 'Course published',
      description: 'Advanced React Development by Mathew Anderson',
      time: '1 hour ago',
      status: 'success',
      icon: BookOpen
    },
    {
      id: 3,
      type: 'system',
      title: 'System maintenance completed',
      description: 'Database optimization and security updates',
      time: '3 hours ago',
      status: 'success',
      icon: Settings
    },
    {
      id: 4,
      type: 'alert',
      title: 'High server load detected',
      description: 'Server response time increased by 15%',
      time: '6 hours ago',
      status: 'warning',
      icon: AlertTriangle
    }
  ];

  const pendingTasks = [
    { id: 1, title: 'Review 5 instructor applications', priority: 'high', dueDate: 'Today' },
    { id: 2, title: 'Approve 3 course submissions', priority: 'medium', dueDate: 'Tomorrow' },
    { id: 3, title: 'Update platform terms of service', priority: 'low', dueDate: 'This week' },
    { id: 4, title: 'Review user feedback reports', priority: 'medium', dueDate: 'This week' }
  ];

  const systemHealth = [
    { name: 'Database', status: 'healthy', uptime: '99.9%', color: 'text-green-600' },
    { name: 'API Services', status: 'healthy', uptime: '99.8%', color: 'text-green-600' },
    { name: 'File Storage', status: 'warning', uptime: '98.5%', color: 'text-yellow-600' },
    { name: 'CDN', status: 'healthy', uptime: '99.9%', color: 'text-green-600' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'pending': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  🛡️ Admin Dashboard
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Platform<br />
                  <span className="text-red-600">Management</span><br />
                  Center
                </h1>
                <p className="text-lg text-gray-600 max-w-md">
                  Monitor, manage, and optimize your Academy LMS platform with comprehensive administrative tools.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search users, courses, reports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
                />
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Open Dashboard
                </button>
                <button
                  onClick={() => onNavigate('users')}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Manage Users
                </button>
              </div>
            </div>

            {/* Right Content - Admin Dashboard Preview */}
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="relative bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 overflow-hidden">
                {/* Dashboard illustration */}
                <div className="relative z-10">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-bold text-gray-900">System Overview</h3>
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">2.8k</div>
                        <div className="text-xs text-blue-600">Users</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-green-600">156</div>
                        <div className="text-xs text-green-600">Courses</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">$45k</div>
                        <div className="text-xs text-purple-600">Revenue</div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-orange-600">99.9%</div>
                        <div className="text-xs text-orange-600">Uptime</div>
                      </div>
                    </div>
                    
                    {/* Activity List */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="text-xs text-gray-600">New user registered</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="text-xs text-gray-600">Course approved</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="text-xs text-gray-600">System alert</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-8 h-8 text-red-500" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <div className="bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-900">System Status</div>
                        <div className="text-xs text-gray-600">All systems operational</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side status cards */}
              <div className="absolute -right-4 top-8">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">5</div>
                    <div className="text-xs text-gray-600">Pending</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-16">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900">+15%</div>
                    <div className="text-xs text-gray-600">Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.bgColor} ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-green-600">{stat.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dashboard Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Activities</h2>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  View All →
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`p-2 rounded-full ${getStatusColor(activity.status)}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{activity.title}</h4>
                        <p className="text-sm text-gray-600 mb-1">{activity.description}</p>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pending Tasks */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Tasks</h3>
              <div className="space-y-3">
                {pendingTasks.map((task) => (
                  <div key={task.id} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">Due: {task.dueDate}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* System Health */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
              <div className="space-y-3">
                {systemHealth.map((system, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{system.name}</h4>
                      <p className="text-xs text-gray-600">Uptime: {system.uptime}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      system.status === 'healthy' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {system.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLandingPage;