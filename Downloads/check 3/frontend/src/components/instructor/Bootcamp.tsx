import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Users, Calendar, Clock, DollarSign, Star, Award } from 'lucide-react';

const Bootcamp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const statuses = [
    { id: 'all', name: 'All Bootcamps' },
    { id: 'active', name: 'Active' },
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'completed', name: 'Completed' },
    { id: 'draft', name: 'Draft' },
  ];

  const bootcamps = [
    {
      id: 1,
      title: 'Full-Stack Web Development Intensive',
      description: 'Comprehensive 12-week program covering frontend and backend development',
      status: 'active',
      students: 25,
      maxStudents: 30,
      startDate: '2024-01-15',
      endDate: '2024-04-08',
      price: 2999,
      revenue: 74975,
      duration: '12 weeks',
      schedule: 'Mon-Fri, 9AM-5PM',
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 4.8,
      completionRate: 85
    },
    {
      id: 2,
      title: 'Data Science Bootcamp',
      description: 'Learn Python, machine learning, and data analysis in 16 weeks',
      status: 'upcoming',
      students: 18,
      maxStudents: 25,
      startDate: '2024-03-01',
      endDate: '2024-06-21',
      price: 3499,
      revenue: 62982,
      duration: '16 weeks',
      schedule: 'Tue/Thu 6PM-10PM, Sat 9AM-5PM',
      thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 0,
      completionRate: 0
    },
    {
      id: 3,
      title: 'UI/UX Design Intensive',
      description: 'Master design thinking and user experience in 10 weeks',
      status: 'draft',
      students: 0,
      maxStudents: 20,
      startDate: '2024-04-15',
      endDate: '2024-06-24',
      price: 2499,
      revenue: 0,
      duration: '10 weeks',
      schedule: 'Mon/Wed/Fri 7PM-10PM',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      rating: 0,
      completionRate: 0
    }
  ];

  const filteredBootcamps = bootcamps.filter(bootcamp => {
    const matchesSearch = bootcamp.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || bootcamp.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
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
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Bootcamp Management</h2>
          <p className="text-gray-600">Create and manage intensive training programs</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Bootcamp</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
              <Award className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{bootcamps.length}</div>
          <div className="text-sm text-gray-600">Total Bootcamps</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-50 text-green-600">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{bootcamps.reduce((sum, b) => sum + b.students, 0)}</div>
          <div className="text-sm text-gray-600">Total Students</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(bootcamps.reduce((sum, b) => sum + b.revenue, 0))}</div>
          <div className="text-sm text-gray-600">Total Revenue</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-yellow-50 text-yellow-600">
              <Star className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">4.8</div>
          <div className="text-sm text-gray-600">Average Rating</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search bootcamps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {statuses.map((status) => (
            <option key={status.id} value={status.id}>
              {status.name}
            </option>
          ))}
        </select>
      </div>

      {/* Bootcamps List */}
      <div className="space-y-6">
        {filteredBootcamps.map((bootcamp) => (
          <div
            key={bootcamp.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Bootcamp Info */}
              <div className="lg:col-span-2">
                <div className="flex items-start space-x-4">
                  <img
                    src={bootcamp.thumbnail}
                    alt={bootcamp.title}
                    className="w-20 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{bootcamp.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(bootcamp.status)}`}>
                        {bootcamp.status.charAt(0).toUpperCase() + bootcamp.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{bootcamp.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(bootcamp.startDate)} - {formatDate(bootcamp.endDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{bootcamp.schedule}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">Students</div>
                  <div className="font-medium">{bootcamp.students}/{bootcamp.maxStudents}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(bootcamp.students / bootcamp.maxStudents) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600">Revenue</div>
                  <div className="font-medium text-green-600">{formatCurrency(bootcamp.revenue)}</div>
                </div>
                
                {bootcamp.rating > 0 && (
                  <div>
                    <div className="text-sm text-gray-600">Rating</div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{bootcamp.rating}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <div className="text-right mb-2">
                  <div className="text-lg font-bold text-gray-900">{formatCurrency(bootcamp.price)}</div>
                  <div className="text-sm text-gray-500">{bootcamp.duration}</div>
                </div>
                
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
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBootcamps.length === 0 && (
        <div className="text-center py-12">
          <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No bootcamps found</h3>
          <p className="text-gray-600 mb-4">Create your first bootcamp to get started.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create Bootcamp
          </button>
        </div>
      )}
    </div>
  );
};

export default Bootcamp;