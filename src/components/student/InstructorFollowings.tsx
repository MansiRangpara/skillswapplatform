import React, { useState } from 'react';
import { Search, Star, Users, BookOpen, Heart, MessageSquare, Bell, Filter, UserPlus, UserMinus } from 'lucide-react';

const InstructorFollowings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTab, setSelectedTab] = useState('following');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'programming', name: 'Programming' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'data-science', name: 'Data Science' },
  ];

  const tabs = [
    { id: 'following', name: 'Following', count: 8 },
    { id: 'discover', name: 'Discover', count: null },
  ];

  const followingInstructors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Full-Stack Developer',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      category: 'programming',
      rating: 4.9,
      students: 25420,
      courses: 12,
      followers: 8930,
      bio: 'Passionate developer with 8+ years of experience in React, Node.js, and modern web technologies.',
      specialties: ['React', 'Node.js', 'JavaScript', 'TypeScript'],
      isFollowing: true,
      followedDate: '2024-01-15',
      latestCourse: 'Advanced React Patterns',
      newCourseAlert: true,
      verified: true
    },
    {
      id: 2,
      name: 'Dr. Mike Chen',
      title: 'Data Science Professor',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      category: 'data-science',
      rating: 4.8,
      students: 18340,
      courses: 8,
      followers: 12450,
      bio: 'PhD in Computer Science, specializing in machine learning and data visualization.',
      specialties: ['Python', 'Machine Learning', 'Data Analysis', 'Statistics'],
      isFollowing: true,
      followedDate: '2024-01-10',
      latestCourse: 'Deep Learning Fundamentals',
      newCourseAlert: false,
      verified: true
    },
    {
      id: 3,
      name: 'Lisa Wang',
      title: 'UI/UX Design Lead',
      avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      category: 'design',
      rating: 4.7,
      students: 15670,
      courses: 15,
      followers: 9820,
      bio: 'Award-winning designer with expertise in user research and interface design.',
      specialties: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      isFollowing: true,
      followedDate: '2024-01-08',
      latestCourse: 'Design Systems Mastery',
      newCourseAlert: true,
      verified: true
    },
    {
      id: 4,
      name: 'John Smith',
      title: 'Full-Stack Developer',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      category: 'programming',
      rating: 4.8,
      students: 22100,
      courses: 18,
      followers: 11230,
      bio: 'Experienced developer teaching practical web development skills.',
      specialties: ['HTML/CSS', 'JavaScript', 'React', 'Backend'],
      isFollowing: true,
      followedDate: '2024-01-05',
      latestCourse: 'Complete Web Development Bootcamp',
      newCourseAlert: false,
      verified: false
    }
  ];

  const discoverInstructors = [
    {
      id: 5,
      name: 'Dr. Emily Davis',
      title: 'Cybersecurity Expert',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      category: 'programming',
      rating: 4.9,
      students: 12890,
      courses: 6,
      followers: 7650,
      bio: 'Cybersecurity consultant and researcher with 15+ years of experience.',
      specialties: ['Ethical Hacking', 'Network Security', 'Penetration Testing'],
      isFollowing: false,
      verified: true,
      trending: true
    },
    {
      id: 6,
      name: 'Robert Wilson',
      title: 'Digital Marketing Strategist',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      category: 'business',
      rating: 4.6,
      students: 9870,
      courses: 10,
      followers: 5430,
      bio: 'Marketing expert helping businesses grow through digital strategies.',
      specialties: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      isFollowing: false,
      verified: false,
      trending: false
    },
    {
      id: 7,
      name: 'Maria Garcia',
      title: 'Blockchain Developer',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      category: 'programming',
      rating: 4.8,
      students: 8450,
      courses: 5,
      followers: 6780,
      bio: 'Blockchain architect building the future of decentralized applications.',
      specialties: ['Solidity', 'Web3', 'Smart Contracts', 'DeFi'],
      isFollowing: false,
      verified: true,
      trending: true
    }
  ];

  const getCurrentInstructors = () => {
    return selectedTab === 'following' ? followingInstructors : discoverInstructors;
  };

  const filteredInstructors = getCurrentInstructors().filter(instructor => {
    const matchesSearch = instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.specialties.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || instructor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFollow = (instructorId) => {
    // Handle follow/unfollow logic
    console.log('Toggle follow for instructor:', instructorId);
  };

  const sendMessage = (instructorId) => {
    // Handle send message logic
    console.log('Send message to instructor:', instructorId);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Instructor Followings</h2>
          <p className="text-gray-600">Stay updated with your favorite instructors</p>
        </div>
        <div className="text-sm text-gray-600">
          Following {followingInstructors.length} instructors
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                selectedTab === tab.id
                  ? 'border-yellow-400 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
              {tab.count !== null && (
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  selectedTab === tab.id ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search instructors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Instructors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInstructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {instructor.verified && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{instructor.name}</h3>
                  <p className="text-sm text-gray-600">{instructor.title}</p>
                </div>
              </div>
              
              {/* Badges */}
              <div className="flex flex-col items-end space-y-1">
                {instructor.trending && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                    Trending
                  </span>
                )}
                {instructor.newCourseAlert && selectedTab === 'following' && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    New Course
                  </span>
                )}
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{instructor.bio}</p>

            {/* Specialties */}
            <div className="flex flex-wrap gap-1 mb-4">
              {instructor.specialties.slice(0, 3).map((specialty, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                  {specialty}
                </span>
              ))}
              {instructor.specialties.length > 3 && (
                <span className="text-xs text-gray-500">+{instructor.specialties.length - 3} more</span>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4 text-center">
              <div>
                <div className="flex items-center justify-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{instructor.rating}</span>
                </div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
              <div>
                <div className="text-sm font-medium">{instructor.courses}</div>
                <div className="text-xs text-gray-500">Courses</div>
              </div>
              <div>
                <div className="text-sm font-medium">{instructor.students.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Students</div>
              </div>
            </div>

            {/* Latest Course (for following) */}
            {selectedTab === 'following' && instructor.latestCourse && (
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">Latest Course:</div>
                <div className="text-sm font-medium text-gray-900">{instructor.latestCourse}</div>
              </div>
            )}

            {/* Follow Date (for following) */}
            {selectedTab === 'following' && instructor.followedDate && (
              <div className="text-xs text-gray-500 mb-4">
                Following since {formatDate(instructor.followedDate)}
              </div>
            )}

            {/* Actions */}
            <div className="flex space-x-2">
              <button
                onClick={() => toggleFollow(instructor.id)}
                className={`flex-1 flex items-center justify-center space-x-1 py-2 rounded-lg transition-colors text-sm font-medium ${
                  instructor.isFollowing
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-yellow-400 text-black hover:bg-yellow-500'
                }`}
              >
                {instructor.isFollowing ? (
                  <>
                    <UserMinus className="w-4 h-4" />
                    <span>Unfollow</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    <span>Follow</span>
                  </>
                )}
              </button>
              
              <button
                onClick={() => sendMessage(instructor.id)}
                className="p-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
              
              {instructor.isFollowing && (
                <button className="p-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Bell className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredInstructors.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {selectedTab === 'following' ? 'No instructors followed' : 'No instructors found'}
          </h3>
          <p className="text-gray-600 mb-4">
            {selectedTab === 'following' 
              ? 'Start following instructors to stay updated with their latest courses.'
              : 'Try adjusting your search or category filter.'
            }
          </p>
          {selectedTab === 'following' && (
            <button 
              onClick={() => setSelectedTab('discover')}
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Discover Instructors
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default InstructorFollowings;