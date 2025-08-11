import React, { useState } from 'react';
import { 
  ChevronDown, 
  Bell, 
  Heart, 
  ShoppingCart, 
  User, 
  BookOpen, 
  Users, 
  MessageSquare, 
  ShoppingBag, 
  Award, 
  Settings, 
  LogOut, 
  Search, 
  Upload, 
  Camera,
  Save,
  Edit,
  Trash2,
  Plus,
  Eye,
  EyeOff
} from 'lucide-react';

const StudentProfile = ({ onDashboardClick, onBackToWebsite, showHeader = false }) => {
  // Profile state management
  const [profileData, setProfileData] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'student@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1995-06-15',
    country: 'United States',
    timezone: 'America/New_York',
    language: 'English',
    title: 'Passionate learner exploring web development and data science.',
    skills: 'JavaScript, React, Python, HTML/CSS, Git, Data Analysis',
    biography: `Meet Alex Johnson, a dedicated and enthusiastic learner with a passion for technology and continuous growth. Currently diving deep into web development and data science, Alex brings curiosity and determination to every learning opportunity. With a strong foundation in programming fundamentals and a keen interest in modern web technologies, Alex is committed to building practical skills that can make a real-world impact. Whether it's mastering new frameworks, understanding complex algorithms, or working on hands-on projects, Alex approaches each challenge with enthusiasm and a growth mindset.`,
    linkedinLink: 'https://linkedin.com/in/alexjohnson',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
  });

  // UI state management
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Password change state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Form validation state
  const [errors, setErrors] = useState({});

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

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!profileData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!profileData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!profileData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(profileData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (profileData.phone && !validatePhone(profileData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (profileData.linkedinLink && !profileData.linkedinLink.startsWith('https://')) {
      newErrors.linkedinLink = 'LinkedIn URL must start with https://';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // CRUD Operations
  const handleCreate = () => {
    // This would typically create a new profile entry
    console.log('Creating new profile entry');
  };

  const handleRead = () => {
    // Fetch profile data from API
    console.log('Reading profile data');
    // In a real app, this would fetch from an API
    // setProfileData(fetchedData);
  };

  const handleUpdate = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Updating profile:', profileData);
      
      // In a real app, this would be an API call:
      // const response = await fetch('/api/profile', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(profileData)
      // });
      
      setIsEditing(false);
      setSaveMessage('Profile updated successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setSaveMessage('Error updating profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Deleting profile');
      
      // In a real app, this would be an API call:
      // await fetch('/api/profile', { method: 'DELETE' });
      
      setShowDeleteConfirm(false);
      alert('Profile deleted successfully!');
      // Redirect to login or home page
    } catch (error) {
      console.error('Error deleting profile:', error);
      alert('Error deleting profile. Please try again.');
    }
  };

  const handlePasswordChange = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Changing password');
      
      // In a real app, this would be an API call:
      // await fetch('/api/change-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(passwordData)
      // });
      
      setShowPasswordChange(false);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      alert('Password changed successfully!');
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Error changing password. Please try again.');
    }
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // In a real app, you would upload to a server
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData({
          ...profileData,
          avatar: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setProfileData({
      ...profileData,
      [field]: value
    });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setErrors({});
    // Reset form data if needed
    handleRead();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - only show when not in dashboard */}
      {showHeader && (
        <>
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
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">5</span>
                    </div>
                    <div className="relative">
                      <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                    </div>
                    <div className="relative">
                      <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
                    </div>
                  </div>

                  {/* User Profile */}
                  <img
                    src={profileData.avatar}
                    alt="Alex Johnson"
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
        </>
      )}

      {/* Success Message */}
      {saveMessage && (
        <div className={`${showHeader ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4' : 'px-6 py-4'}`}>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {saveMessage}
          </div>
        </div>
      )}

      <div className={`space-y-6 ${showHeader ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8' : 'p-6'}`}>
            <div className="space-y-6">
              {/* Profile Photo Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={profileData.avatar}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      {isEditing && (
                        <label className="absolute bottom-0 right-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition-colors">
                          <Camera className="w-4 h-4 text-black" />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarUpload}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Profile photo</h3>
                      <p className="text-sm text-gray-600">Update your profile photo and personal details</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center space-x-2 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
                      >
                        <Edit size={16} />
                        <span>Edit Profile</span>
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={handleCancel}
                          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleUpdate}
                          disabled={isSaving}
                          className="flex items-center space-x-2 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50"
                        >
                          <Save size={16} />
                          <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Profile Info Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Profile info</h3>
                  {!isEditing && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setShowPasswordChange(true)}
                        className="flex items-center space-x-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                      >
                        <Settings size={14} />
                        <span>Change Password</span>
                      </button>
                      <button
                        onClick={() => setShowDeleteConfirm(true)}
                        className="flex items-center space-x-2 px-3 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors text-sm"
                      >
                        <Trash2 size={14} />
                        <span>Delete Profile</span>
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          value={profileData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          disabled={!isEditing}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                            isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                          } ${errors.firstName ? 'border-red-500' : ''}`}
                        />
                      </div>
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          value={profileData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          disabled={!isEditing}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                            isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                          } ${errors.lastName ? 'border-red-500' : ''}`}
                        />
                      </div>
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                          isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                        } ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                          isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                        } ${errors.phone ? 'border-red-500' : ''}`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={profileData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                          isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <select
                        value={profileData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                          isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Language
                      </label>
                      <select
                        value={profileData.language}
                        onChange={(e) => handleInputChange('language', e.target.value)}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                          isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Chinese">Chinese</option>
                      </select>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <textarea
                      value={profileData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      disabled={!isEditing}
                      rows={2}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none ${
                        isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                  </div>

                  {/* Skills */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your skills
                    </label>
                    <input
                      type="text"
                      value={profileData.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                        isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                      }`}
                    />
                  </div>

                  {/* Biography */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Biography
                    </label>
                    <div className={`border rounded-lg ${isEditing ? 'border-gray-300' : 'border-gray-200'}`}>
                      {isEditing && (
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
                      )}
                      <textarea
                        value={profileData.biography}
                        onChange={(e) => handleInputChange('biography', e.target.value)}
                        disabled={!isEditing}
                        rows={8}
                        className={`w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none ${
                          isEditing ? 'rounded-b-lg' : 'rounded-lg bg-gray-50'
                        }`}
                      />
                    </div>
                  </div>

                  {/* LinkedIn Link */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Add your LinkedIn link
                    </label>
                    <input
                      type="url"
                      value={profileData.linkedinLink}
                      onChange={(e) => handleInputChange('linkedinLink', e.target.value)}
                      disabled={!isEditing}
                      placeholder="https://linkedin.com/in/username"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
                        isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                      } ${errors.linkedinLink ? 'border-red-500' : ''}`}
                    />
                    {errors.linkedinLink && <p className="text-red-500 text-sm mt-1">{errors.linkedinLink}</p>}
                  </div>
                </div>
              </div>
            </div>
      </div>

      {/* Password Change Modal */}
      {showPasswordChange && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setShowPasswordChange(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordChange}
                className="flex-1 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-red-600 mb-4">Delete Profile</h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete your profile? This action cannot be undone and will permanently remove all your data.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;