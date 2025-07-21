import React, { useState } from 'react';
import { Search, Filter, Plus, Edit, Trash2, Eye, CheckCircle, XCircle, Star, Users, Clock, DollarSign } from 'lucide-react';

const CourseManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'programming', name: 'Programming' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'data-science', name: 'Data Science' },
  ];

  const statuses = [
    { id: 'all', name: 'All Status' },
    { id: 'published', name: 'Published' },
    { id: 'pending', name: 'Pending Review' },
    { id: 'draft', name: 'Draft' },
    { id: 'rejected', name: 'Rejected' },
    { id: 'suspended', name: 'Suspended' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'John Smith',
      category: 'programming',
      status: 'published',
      students: 15420,
      rating: 4.8,
      reviews: 2340,
      price: 89,
      revenue: 1372380,
      duration: '40 hours',
      lessons: 45,
      publishDate: '2023-12-15',
      lastUpdated: '2024-01-20',
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      title: 'Advanced React Development',
      instructor: 'Sarah Johnson',
      category: 'programming',
      status: 'pending',
      students: 0,
      rating: 0,
      reviews: 0,
      price: 129,
      revenue: 0,
      duration: '25 hours',
      lessons: 30,
      publishDate: null,
      lastUpdated: '2024-01-22',
      thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Mike Chen',
      category: 'design',
      status: 'published',
      students: 12340,
      rating: 4.7,
      reviews: 1890,
      price: 99,
      revenue: 1221660,
      duration: '30 hours',
      lessons: 35,
      publishDate: '2023-11-20',
      lastUpdated: '2024-01-18',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 4,
      title: 'Data Science with Python',
      instructor: 'Dr. Emily Davis',
      category: 'data-science',
      status: 'published',
      students: 9876,
      rating: 4.9,
      reviews: 1567,
      price: 149,
      revenue: 1471524,
      duration: '45 hours',
      lessons: 50,
      publishDate: '2023-10-10',
      lastUpdated: '2024-01-15',
      thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 5,
      title: 'Digital Marketing Strategy',
      instructor: 'Robert Wilson',
      category: 'business',
      status: 'suspended',
      students: 7654,
      rating: 4.6,
      reviews: 1234,
      price: 79,
      revenue: 604666,
      duration: '20 hours',
      lessons: 25,
      publishDate: '2023-09-15',
      lastUpdated: '2024-01-10',
      thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || course.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'suspended': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not published';
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Course Management</h2>
          <p className="text-gray-600">Manage and moderate platform courses</p>
        </div>
        <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Course</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-green-600">{courses.filter(c => c.status === 'published').length}</div>
          <div className="text-sm text-gray-600">Published</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-yellow-600">{courses.filter(c => c.status === 'pending').length}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-gray-600">{courses.filter(c => c.status === 'draft').length}</div>
          <div className="text-sm text-gray-600">Drafts</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-orange-600">{courses.filter(c => c.status === 'suspended').length}</div>
          <div className="text-sm text-gray-600">Suspended</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">{courses.reduce((sum, c) => sum + c.students, 0).toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Students</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            {statuses.map((status) => (
              <option key={status.id} value={status.id}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                  {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                  {course.category.replace('-', ' ')}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>{course.duration}</span>
                </div>
                {course.rating > 0 && (
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{course.rating} ({course.reviews})</span>
                  </div>
                )}
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4 text-gray-500" />
                  <span>${course.price}</span>
                </div>
              </div>

              {course.revenue > 0 && (
                <div className="mb-4 p-3 bg-green-50 rounded-lg">
                  <div className="text-sm font-medium text-green-900">Revenue Generated</div>
                  <div className="text-lg font-bold text-green-600">{formatCurrency(course.revenue)}</div>
                </div>
              )}

              <div className="text-xs text-gray-500 mb-4">
                <div>Published: {formatDate(course.publishDate)}</div>
                <div>Last updated: {formatDate(course.lastUpdated)}</div>
                <div>{course.lessons} lessons</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                {course.status === 'pending' && (
                  <div className="flex space-x-2">
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CourseManagement;