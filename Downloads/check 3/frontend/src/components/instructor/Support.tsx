import React, { useState } from 'react';
import { Search, Plus, MessageSquare, Clock, CheckCircle, AlertCircle, User, Calendar, Tag } from 'lucide-react';

const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const statuses = [
    { id: 'all', name: 'All Tickets' },
    { id: 'open', name: 'Open' },
    { id: 'in-progress', name: 'In Progress' },
    { id: 'resolved', name: 'Resolved' },
    { id: 'closed', name: 'Closed' },
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'technical', name: 'Technical Issue' },
    { id: 'billing', name: 'Billing' },
    { id: 'course', name: 'Course Content' },
    { id: 'platform', name: 'Platform' },
    { id: 'other', name: 'Other' },
  ];

  const supportTickets = [
    {
      id: 1,
      title: 'Video upload failing for course module',
      description: 'Unable to upload video files larger than 500MB to course module 3',
      status: 'open',
      category: 'technical',
      priority: 'high',
      createdDate: '2024-01-22',
      lastUpdated: '2024-01-23',
      assignedTo: 'Technical Support',
      responses: 2,
      studentName: 'Alex Johnson',
      studentEmail: 'alex@example.com'
    },
    {
      id: 2,
      title: 'Payout not received for December',
      description: 'Expected payout for December earnings has not been processed',
      status: 'in-progress',
      category: 'billing',
      priority: 'medium',
      createdDate: '2024-01-20',
      lastUpdated: '2024-01-22',
      assignedTo: 'Billing Team',
      responses: 4,
      studentName: 'Sarah Wilson',
      studentEmail: 'sarah@example.com'
    },
    {
      id: 3,
      title: 'Course analytics not updating',
      description: 'Student enrollment and completion statistics are not reflecting recent activity',
      status: 'resolved',
      category: 'platform',
      priority: 'low',
      createdDate: '2024-01-18',
      lastUpdated: '2024-01-21',
      assignedTo: 'Platform Team',
      responses: 3,
      studentName: 'Mike Chen',
      studentEmail: 'mike@example.com'
    },
    {
      id: 4,
      title: 'Request for course content review',
      description: 'Need assistance with updating course materials to meet new guidelines',
      status: 'open',
      category: 'course',
      priority: 'medium',
      createdDate: '2024-01-21',
      lastUpdated: '2024-01-21',
      assignedTo: 'Content Team',
      responses: 1,
      studentName: 'Emily Davis',
      studentEmail: 'emily@example.com'
    }
  ];

  const filteredTickets = supportTickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || ticket.status === selectedStatus;
    const matchesCategory = selectedCategory === 'all' || ticket.category === selectedCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'open': return <AlertCircle className="w-4 h-4 text-red-600" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'resolved': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'closed': return <CheckCircle className="w-4 h-4 text-gray-600" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const openTickets = supportTickets.filter(ticket => ticket.status === 'open').length;
  const inProgressTickets = supportTickets.filter(ticket => ticket.status === 'in-progress').length;
  const resolvedTickets = supportTickets.filter(ticket => ticket.status === 'resolved').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Support Center</h2>
          <p className="text-gray-600">Manage your support tickets and get help</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Ticket</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-red-50 text-red-600">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{openTickets}</div>
          <div className="text-sm text-gray-600">Open Tickets</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-yellow-50 text-yellow-600">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{inProgressTickets}</div>
          <div className="text-sm text-gray-600">In Progress</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-50 text-green-600">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{resolvedTickets}</div>
          <div className="text-sm text-gray-600">Resolved</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{supportTickets.reduce((sum, ticket) => sum + ticket.responses, 0)}</div>
          <div className="text-sm text-gray-600">Total Responses</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search tickets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-2">
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
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Support Tickets List */}
      <div className="space-y-4">
        {filteredTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Ticket Info */}
              <div className="lg:col-span-2">
                <div className="flex items-start space-x-3 mb-3">
                  {getStatusIcon(ticket.status)}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{ticket.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Ticket #{ticket.id}</span>
                      <span>•</span>
                      <span>{ticket.responses} responses</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status and Details */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                    {ticket.status.replace('-', ' ').charAt(0).toUpperCase() + ticket.status.replace('-', ' ').slice(1)}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                </div>
                
                <div className="space-y-1 text-sm">
                  <div className="flex items-center space-x-2">
                    <Tag className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-600 capitalize">{ticket.category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-600">{ticket.assignedTo}</span>
                  </div>
                </div>
              </div>

              {/* Dates and Student */}
              <div className="space-y-3">
                <div className="space-y-1 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-600">Created: {formatDate(ticket.createdDate)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-600">Updated: {formatDate(ticket.lastUpdated)}</span>
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Student:</div>
                  <div className="text-sm font-medium text-gray-900">{ticket.studentName}</div>
                  <div className="text-xs text-gray-600">{ticket.studentEmail}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTickets.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No support tickets found</h3>
          <p className="text-gray-600 mb-4">
            {supportTickets.length === 0 
              ? "You don't have any support tickets yet."
              : "Try adjusting your search or filter criteria."
            }
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create Support Ticket
          </button>
        </div>
      )}

      {/* Quick Help Section */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Help</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Course Creation</h4>
            <p className="text-sm text-gray-600 mb-3">Learn how to create and publish courses</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View Guide →
            </button>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Payment Issues</h4>
            <p className="text-sm text-gray-600 mb-3">Resolve payout and billing problems</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Get Help →
            </button>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Technical Support</h4>
            <p className="text-sm text-gray-600 mb-3">Platform and technical assistance</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Contact Support →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;