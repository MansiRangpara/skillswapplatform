import React, { useState } from 'react';
import { ChevronDown, Bell, Heart, ShoppingCart, User, BookOpen, Users, MessageSquare, ShoppingBag, Award, Settings, LogOut, Search, Upload, Camera } from 'lucide-react';

const InstructorProfile = ({ onDashboardClick, onBackToWebsite }) => {
  const [firstName, setFirstName] = useState('Mathew');
  const [lastName, setLastName] = useState('Anderson');
  const [title, setTitle] = useState('Meet Mathew, an innovative and passionate developer.');
  const [skills, setSkills] = useState('JavaScript, React, Node.js, Python, Web Development, UI/UX Design');
  const [biography, setBiography] = useState(`Meet Mathew Anderson, an innovative and passionate developer who navigates the ever-evolving landscape of technology with finesse. With a keen eye for detail and a creative approach to problem-solving, Mathew Anderson crafts elegant solutions to complex challenges. Whether it's coding in various languages, designing intuitive user interfaces, or delving into the intricacies of software architecture, Mathew Anderson is a versatile developer committed to staying at the forefront of technological advancements. With a blend of expertise and a perpetual thirst for learning, Mathew Anderson brings a dynamic perspective to the world of development, turning ideas into functional and innovative solutions.`);
  const [twitterLink, setTwitterLink] = useState('https://twitter.com/mathewanderson');
  const [email] = useState('instructor@example.com');

  const sidebarItems = [
    { icon: BookOpen, label: 'My courses', active: false },
    { icon: Users, label: 'Course bundles', active: false },
    { icon: BookOpen, label: 'Bootcamp', active: false },
    { icon: Users, label: 'My teams', active: false },
    { icon: BookOpen, label: 'Booked tuition', active: false },
    { icon: BookOpen, label: 'My ebooks', active: false },
    { icon: Heart, label: 'Wishlist', active: false },
    { icon: MessageSquare, label: 'Messages', active: false },
    { icon: ShoppingBag, label: 'Payout settings', active: false },
    { icon: ShoppingBag, label: 'Purchase history', active: false },
    { icon: Award, label: 'Badges', active: false },
    { icon: User, label: 'Profile', active: true },
    { icon: Users, label: 'Instructor followings', active: false },
    { icon: Settings, label: 'Account', active: false },
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
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold text-gray-900">academy</span>
              </div>
              
              <nav className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 cursor-pointer">
                  <span>Home</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 cursor-pointer">
                  <span>Courses</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <span className="text-gray-700 hover:text-purple-600 cursor-pointer">Course bundle</span>
                <div className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 cursor-pointer">
                  <span>Ebook</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 cursor-pointer">
                  <span>More</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
              <span className="text-gray-700 cursor-pointer">My course</span>
              
              {/* Notification icons */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Heart className="w-5 h-5 text-gray-600 cursor-pointer" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                </div>
                <div className="relative">
                  <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
                </div>
                <div className="relative">
                  <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">1</span>
                </div>
              </div>

              {/* User Profile */}
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                alt="Mathew Anderson"
                className="w-8 h-8 rounded-full object-cover cursor-pointer"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button onClick={onBackToWebsite} className="hover:text-purple-600">Home</button>
            <span>/</span>
            <span>User profile</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">User profile</h1>
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
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                    alt="Mathew Anderson"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">Mathew Anderson</h3>
                <p className="text-sm text-gray-600">instructor@example.com</p>
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
                          ? 'bg-purple-600 text-white'
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
                      <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Profile photo</h3>
                      <p className="text-sm text-gray-600">Update your profile photo and personal details</p>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Upload size={16} />
                    <span>Upload photo</span>
                  </button>
                </div>
              </div>

              {/* Profile Info Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Profile info</h3>
                
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Skills */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your skills
                    </label>
                    <input
                      type="text"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  {/* Biography */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Biography
                    </label>
                    <div className="border border-gray-300 rounded-lg">
                      {/* Toolbar */}
                      <div className="flex items-center space-x-2 px-3 py-2 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                        <button className="p-1 hover:bg-gray-200 rounded text-sm font-bold">B</button>
                        <button className="p-1 hover:bg-gray-200 rounded text-sm italic">I</button>
                        <button className="p-1 hover:bg-gray-200 rounded text-sm underline">U</button>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <button className="p-1 hover:bg-gray-200 rounded text-sm">A</button>
                        <button className="p-1 hover:bg-gray-200 rounded text-sm">≡</button>
                        <button className="p-1 hover:bg-gray-200 rounded text-sm">≣</button>
                        <button className="p-1 hover:bg-gray-200 rounded text-sm">≡</button>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <button className="p-1 hover:bg-gray-200 rounded text-sm">🔗</button>
                        <button className="p-1 hover:bg-gray-200 rounded text-sm">📷</button>
                        <button className="p-1 hover:bg-gray-200 rounded text-sm">⚙️</button>
                      </div>
                      <textarea
                        value={biography}
                        onChange={(e) => setBiography(e.target.value)}
                        rows={8}
                        className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none rounded-b-lg"
                      />
                    </div>
                  </div>

                  {/* Twitter Link */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Add your twitter link
                    </label>
                    <input
                      type="url"
                      value={twitterLink}
                      onChange={(e) => setTwitterLink(e.target.value)}
                      placeholder="https://twitter.com/username"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end">
                    <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                      Save Changes
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

export default InstructorProfile;