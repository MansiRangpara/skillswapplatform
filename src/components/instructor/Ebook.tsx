import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, BookOpen, Download, Star, DollarSign, Calendar, Users } from 'lucide-react';

const Ebook = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const statuses = [
    { id: 'all', name: 'All Ebooks' },
    { id: 'published', name: 'Published' },
    { id: 'draft', name: 'Draft' },
    { id: 'review', name: 'Under Review' },
  ];

  const ebooks = [
    {
      id: 1,
      title: 'Complete Guide to Modern JavaScript',
      description: 'Comprehensive guide covering ES6+, async programming, and advanced concepts',
      status: 'published',
      pages: 450,
      price: 29.99,
      sales: 1250,
      revenue: 37487.50,
      rating: 4.8,
      reviews: 340,
      publishDate: '2023-12-15',
      lastUpdated: '2024-01-20',
      cover: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop',
      category: 'Programming',
      formats: ['PDF', 'EPUB', 'MOBI'],
      downloads: 1890
    },
    {
      id: 2,
      title: 'React Patterns and Best Practices',
      description: 'Advanced React patterns, hooks, and performance optimization techniques',
      status: 'published',
      pages: 320,
      price: 24.99,
      sales: 890,
      revenue: 22241.10,
      rating: 4.9,
      reviews: 180,
      publishDate: '2023-11-20',
      lastUpdated: '2024-01-15',
      cover: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop',
      category: 'Programming',
      formats: ['PDF', 'EPUB'],
      downloads: 1120
    },
    {
      id: 3,
      title: 'Data Structures and Algorithms',
      description: 'Essential algorithms and data structures for technical interviews',
      status: 'draft',
      pages: 280,
      price: 34.99,
      sales: 0,
      revenue: 0,
      rating: 0,
      reviews: 0,
      publishDate: null,
      lastUpdated: '2024-01-22',
      cover: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=200&h=300&fit=crop',
      category: 'Programming',
      formats: ['PDF'],
      downloads: 0
    }
  ];

  const filteredEbooks = ebooks.filter(ebook => {
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || ebook.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'review': return 'bg-blue-100 text-blue-800';
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
    }).format(amount);
  };

  const totalRevenue = ebooks.reduce((sum, ebook) => sum + ebook.revenue, 0);
  const totalSales = ebooks.reduce((sum, ebook) => sum + ebook.sales, 0);
  const publishedEbooks = ebooks.filter(ebook => ebook.status === 'published').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Ebook Management</h2>
          <p className="text-gray-600">Create and manage your digital publications</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Ebook</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{publishedEbooks}</div>
          <div className="text-sm text-gray-600">Published Ebooks</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-50 text-green-600">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalSales}</div>
          <div className="text-sm text-gray-600">Total Sales</div>
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
              <Download className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{ebooks.reduce((sum, e) => sum + e.downloads, 0)}</div>
          <div className="text-sm text-gray-600">Total Downloads</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search ebooks..."
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

      {/* Ebooks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredEbooks.map((ebook) => (
          <div
            key={ebook.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={ebook.cover}
                alt={ebook.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ebook.status)}`}>
                  {ebook.status.charAt(0).toUpperCase() + ebook.status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{ebook.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{ebook.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-600">Pages:</span>
                  <span className="font-medium ml-1">{ebook.pages}</span>
                </div>
                <div>
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium ml-1">{formatCurrency(ebook.price)}</span>
                </div>
                {ebook.status === 'published' && (
                  <>
                    <div>
                      <span className="text-gray-600">Sales:</span>
                      <span className="font-medium ml-1">{ebook.sales}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Revenue:</span>
                      <span className="font-medium ml-1 text-green-600">{formatCurrency(ebook.revenue)}</span>
                    </div>
                  </>
                )}
              </div>

              {ebook.rating > 0 && (
                <div className="flex items-center space-x-1 mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{ebook.rating}</span>
                  <span className="text-sm text-gray-500">({ebook.reviews} reviews)</span>
                </div>
              )}

              <div className="flex flex-wrap gap-1 mb-4">
                {ebook.formats.map((format, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {format}
                  </span>
                ))}
              </div>

              <div className="text-xs text-gray-500 mb-4">
                <div>Published: {formatDate(ebook.publishDate)}</div>
                <div>Updated: {formatDate(ebook.lastUpdated)}</div>
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
                {ebook.status === 'published' && (
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEbooks.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No ebooks found</h3>
          <p className="text-gray-600 mb-4">Create your first ebook to get started.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create Ebook
          </button>
        </div>
      )}
    </div>
  );
};

export default Ebook;