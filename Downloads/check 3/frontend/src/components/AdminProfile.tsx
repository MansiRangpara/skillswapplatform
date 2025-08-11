import React, { useState } from 'react';
import { ChevronDown, Bell, Shield, User, BookOpen, Users, MessageSquare, Settings, Search, Upload, Camera, Lock, Key, Globe } from 'lucide-react';

const AdminProfile = ({ onDashboardClick, onBackToWebsite }) => {
  const [firstName, setFirstName] = useState('System');
  const [lastName, setLastName] = useState('Administrator');
  const [title, setTitle] = useState('Platform Administrator managing the Academy LMS system.');
  const [department, setDepartment] = useState('System Administration');
  const [biography, setBiography] = useState(`System Administrator with extensive experience in managing educational platforms and learning management systems. Responsible for overseeing platform operations, user management, content moderation, and ensuring optimal performance and security. Dedicated to maintaining a seamless learning environment for both students and instructors while implementing best practices for system administration and user experience optimization.`);
  const [adminLevel, setAdminLevel] = useState('Super Admin');
  const [email] = useState('admin@example.com');

  const sidebarItems = [
    { icon: Users, label: 'User management', active: false },
    { icon: BookOpen, label: 'Course management', active: false },
    { icon: Settings, label: 'Website settings', active: false },
    { icon: Shield, label: 'Security settings', active: false },
    { icon: MessageSquare, label: 'Support tickets', active: false },
    { icon: Settings, label: 'System settings', active: false },
    { icon: User, label: 'Profile', active: true },
    { icon: Lock, label: 'Security & permissions', active: false },
    { icon: Globe, label: 'Platform settings', active: false },
  ];

  const permissions = [
    { name: 'User Management', description: 'Create, edit, delete users', enabled: true },
    { name: 'Course Management', description: 'Approve, edit, delete courses', enabled: true },
    { name: 'Financial Management', description: 'View revenue, manage payouts', enabled: true },
    { name: 'System Settings', description: 'Modify platform settings', enabled: true },
    { name: 'Content Moderation', description: 'Review and moderate content', enabled: true },
    { name: 'Analytics Access', description: 'View platform analytics', enabled: true },
    { name: 'Security Management', description: 'Manage security settings', enabled: true },
    { name: 'Backup Management', description: 'Create and restore backups', enabled: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold text-gray-900">academy</span>
                <span className="ml-2 text-sm bg-red-100 text-red-800 px-2 py-1 rounded-full">Admin</span>
              </div>
              
              <nav className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-1 text-gray-700 hover:text-red-600 cursor-pointer">
                  <span>Dashboard</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 text-gray-700 hover:text-red-600 cursor-pointer">
                  <span>Users</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <span className="text-gray-700 hover:text-red-600 cursor-pointer">Courses</span>
                <div className="flex items-center space-x-1 text-gray-700 hover:text-red-600 cursor-pointer">
                  <span>Settings</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 text-gray-700 hover:text-red-600 cursor-pointer">
                  <span>Reports</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
              <span className="text-gray-700 cursor-pointer">Admin Panel</span>
              
              {/* Notification icons */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">8</span>
                </div>
                <div className="relative">
                  <Shield className="w-5 h-5 text-gray-600 cursor-pointer" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                </div>
              </div>

              {/* Admin Profile */}
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button onClick={onBackToWebsite} className="hover:text-red-600">Admin Panel</button>
            <span>/</span>
            <span>Admin profile</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Admin profile</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">System Administrator</h3>
                <p className="text-sm text-gray-600">admin@example.com</p>
                <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                  Super Admin
                </span>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {sidebarItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={index}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        item.active
                          ? 'bg-red-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Profile Photo Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Admin profile</h3>
                      <p className="text-sm text-gray-600">Manage your administrator profile and system access</p>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    <Upload size={16} />
                    <span>Update Avatar</span>
                  </button>
                </div>
              </div>

              {/* Profile Info Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Administrator Information</h3>
                
                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Admin Level and Department */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Admin Level
                      </label>
                      <select
                        value={adminLevel}
                        onChange={(e) => setAdminLevel(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin">Admin</option>
                        <option value="Moderator">Moderator</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Department
                      </label>
                      <input
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <textarea
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Biography */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Biography
                    </label>
                    <textarea
                      value={biography}
                      onChange={(e) => setBiography(e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end">
                    <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>

              {/* Permissions Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Admin Permissions</h3>
                
                <div className="space-y-4">
                  {permissions.map((permission, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{permission.name}</h4>
                        <p className="text-sm text-gray-600">{permission.description}</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={permission.enabled}
                          readOnly
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <span className={`ml-2 text-sm ${permission.enabled ? 'text-green-600' : 'text-gray-500'}`}>
                          {permission.enabled ? 'Enabled' : 'Disabled'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Settings */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Security Settings</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Key className="w-5 h-5 text-gray-500" />
                      <div>
                        <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                        <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                      Enabled
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Lock className="w-5 h-5 text-gray-500" />
                      <div>
                        <h4 className="font-medium text-gray-900">Password</h4>
                        <p className="text-sm text-gray-600">Last changed 30 days ago</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Change Password
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-gray-500" />
                      <div>
                        <h4 className="font-medium text-gray-900">Login Sessions</h4>
                        <p className="text-sm text-gray-600">Manage your active login sessions</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      View Sessions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;