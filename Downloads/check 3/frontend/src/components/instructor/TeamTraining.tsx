import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Users, Building, Calendar, DollarSign, Clock, Star } from 'lucide-react';

const TeamTraining = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const statuses = [
    { id: 'all', name: 'All Programs' },
    { id: 'active', name: 'Active' },
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'completed', name: 'Completed' },
    { id: 'proposal', name: 'Proposal' },
  ];

  const teamPrograms = [
    {
      id: 1,
      title: 'Corporate React Training',
      company: 'TechCorp Inc.',
      description: 'Custom React training program for development team',
      status: 'active',
      participants: 15,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      totalHours: 40,
      pricePerParticipant: 500,
      totalRevenue: 7500,
      sessions: 8,
      completedSessions: 5,
      rating: 4.8,
      contactPerson: 'John Manager',
      contactEmail: 'john@techcorp.com'
    },
    {
      id: 2,
      title: 'Data Science Workshop Series',
      company: 'Analytics Solutions',
      description: 'Comprehensive data science training for analysts',
      status: 'upcoming',
      participants: 12,
      startDate: '2024-02-01',
      endDate: '2024-03-01',
      totalHours: 32,
      pricePerParticipant: 600,
      totalRevenue: 7200,
      sessions: 8,
      completedSessions: 0,
      rating: 0,
      contactPerson: 'Sarah Director',
      contactEmail: 'sarah@analytics.com'
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      company: 'Design Studio Pro',
      description: 'Design thinking and prototyping workshop',
      status: 'proposal',
      participants: 8,
      startDate: '2024-03-15',
      endDate: '2024-04-15',
      totalHours: 24,
      pricePerParticipant: 450,
      totalRevenue: 3600,
      sessions: 6,
      completedSessions: 0,
      rating: 0,
      contactPerson: 'Mike Creative',
      contactEmail: 'mike@designstudio.com'
    }
  ];

  const filteredPrograms = teamPrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || program.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'proposal': return 'bg-yellow-100 text-yellow-800';
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

  const totalRevenue = teamPrograms.reduce((sum, program) => sum + program.totalRevenue, 0);
  const totalParticipants = teamPrograms.reduce((sum, program) => sum + program.participants, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Team Training</h2>
          <p className="text-gray-600">Manage corporate training programs and workshops</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Program</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
              <Building className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{teamPrograms.length}</div>
          <div className="text-sm text-gray-600">Training Programs</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-50 text-green-600">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalParticipants}</div>
          <div className="text-sm text-gray-600">Total Participants</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(totalRevenue)}</div>
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
            placeholder="Search programs or companies..."
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

      {/* Programs List */}
      <div className="space-y-6">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Program Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{program.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(program.status)}`}>
                    {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <Building className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-gray-700">{program.company}</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Contact:</span> {program.contactPerson}
                  </div>
                  <div>
                    <span className="font-medium">Email:</span> {program.contactEmail}
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span> {formatDate(program.startDate)} - {formatDate(program.endDate)}
                  </div>
                  <div>
                    <span className="font-medium">Total Hours:</span> {program.totalHours}h
                  </div>
                </div>
              </div>

              {/* Progress & Stats */}
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600">Participants</div>
                  <div className="font-medium">{program.participants}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600">Sessions Progress</div>
                  <div className="font-medium">{program.completedSessions}/{program.sessions}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(program.completedSessions / program.sessions) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {program.rating > 0 && (
                  <div>
                    <div className="text-sm text-gray-600">Rating</div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{program.rating}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Revenue & Actions */}
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600">Revenue</div>
                  <div className="text-lg font-bold text-green-600">{formatCurrency(program.totalRevenue)}</div>
                  <div className="text-sm text-gray-500">{formatCurrency(program.pricePerParticipant)} per participant</div>
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

      {filteredPrograms.length === 0 && (
        <div className="text-center py-12">
          <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No training programs found</h3>
          <p className="text-gray-600 mb-4">Create your first corporate training program.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create Program
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamTraining;