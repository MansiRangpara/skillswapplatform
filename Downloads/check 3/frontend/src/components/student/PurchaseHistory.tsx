import React, { useState } from 'react';
import { Search, Filter, Download, Star, Calendar, CreditCard, RefreshCw, Eye, FileText } from 'lucide-react';

const PurchaseHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filters = [
    { id: 'all', name: 'All Purchases' },
    { id: 'completed', name: 'Completed' },
    { id: 'pending', name: 'Pending' },
    { id: 'refunded', name: 'Refunded' },
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'course', name: 'Courses' },
    { id: 'bundle', name: 'Bundles' },
    { id: 'ebook', name: 'Ebooks' },
    { id: 'bootcamp', name: 'Bootcamps' },
    { id: 'tuition', name: 'Tuition' },
  ];

  const purchases = [
    {
      id: 1,
      type: 'course',
      title: 'Complete Web Development Bootcamp',
      instructor: 'John Smith',
      purchaseDate: '2024-01-10',
      amount: 89.00,
      originalAmount: 129.00,
      status: 'completed',
      paymentMethod: 'Visa ****1234',
      transactionId: 'TXN-WEB-001',
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 4.8,
      progress: 75,
      certificate: true,
      downloadable: true
    },
    {
      id: 2,
      type: 'bundle',
      title: 'UI/UX Design Master Bundle',
      instructor: 'Design Academy',
      purchaseDate: '2024-01-08',
      amount: 149.00,
      originalAmount: 299.00,
      status: 'completed',
      paymentMethod: 'PayPal',
      transactionId: 'TXN-DES-002',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 4.7,
      progress: 40,
      certificate: false,
      downloadable: true,
      courses: 5
    },
    {
      id: 3,
      type: 'ebook',
      title: 'Data Science with Python',
      instructor: 'Dr. Mike Chen',
      purchaseDate: '2024-01-05',
      amount: 34.99,
      originalAmount: 49.99,
      status: 'completed',
      paymentMethod: 'Visa ****1234',
      transactionId: 'TXN-EBK-003',
      thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 4.9,
      progress: 80,
      certificate: false,
      downloadable: true,
      pages: 450
    },
    {
      id: 4,
      type: 'tuition',
      title: 'Advanced JavaScript Concepts',
      instructor: 'Sarah Johnson',
      purchaseDate: '2024-01-03',
      amount: 75.00,
      originalAmount: 75.00,
      status: 'completed',
      paymentMethod: 'Mastercard ****5678',
      transactionId: 'TXN-TUT-004',
      thumbnail: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: 5.0,
      progress: 100,
      certificate: false,
      downloadable: false,
      duration: '90 minutes',
      sessionDate: '2024-01-25'
    },
    {
      id: 5,
      type: 'bootcamp',
      title: 'Full-Stack Development Intensive',
      instructor: 'Code Academy',
      purchaseDate: '2023-12-20',
      amount: 2999.00,
      originalAmount: 3999.00,
      status: 'pending',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN-BCM-005',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: null,
      progress: 0,
      certificate: false,
      downloadable: false,
      startDate: '2024-02-15',
      duration: '12 weeks'
    },
    {
      id: 6,
      type: 'course',
      title: 'Digital Marketing Strategy',
      instructor: 'Marketing Pro',
      purchaseDate: '2023-12-15',
      amount: 79.00,
      originalAmount: 99.00,
      status: 'refunded',
      paymentMethod: 'Visa ****1234',
      transactionId: 'TXN-MKT-006',
      thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      rating: null,
      progress: 0,
      certificate: false,
      downloadable: false,
      refundDate: '2023-12-18',
      refundReason: 'Course not as expected'
    }
  ];

  const filteredPurchases = purchases.filter(purchase => {
    const matchesSearch = purchase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         purchase.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || purchase.status === selectedFilter;
    const matchesType = selectedType === 'all' || purchase.type === selectedType;
    return matchesSearch && matchesFilter && matchesType;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'refunded': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'course': return '📚';
      case 'bundle': return '📦';
      case 'ebook': return '📖';
      case 'bootcamp': return '🎓';
      case 'tuition': return '👨‍🏫';
      default: return '📚';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const calculateSavings = (original, current) => {
    if (original === current) return 0;
    return Math.round(((original - current) / original) * 100);
  };

  const totalSpent = purchases
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);

  const totalSaved = purchases
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + (p.originalAmount - p.amount), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Purchase History</h2>
          <p className="text-gray-600">Track your learning investments and downloads</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-gray-600">Total Spent</div>
            <div className="text-xl font-bold text-gray-900">${totalSpent.toFixed(2)}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Total Saved</div>
            <div className="text-xl font-bold text-green-600">${totalSaved.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">{purchases.filter(p => p.type === 'course').length}</div>
          <div className="text-sm text-gray-600">Courses</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-purple-600">{purchases.filter(p => p.type === 'bundle').length}</div>
          <div className="text-sm text-gray-600">Bundles</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-green-600">{purchases.filter(p => p.type === 'ebook').length}</div>
          <div className="text-sm text-gray-600">Ebooks</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-2xl font-bold text-orange-600">{purchases.filter(p => p.certificate).length}</div>
          <div className="text-sm text-gray-600">Certificates</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search purchases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          >
            {filters.map((filter) => (
              <option key={filter.id} value={filter.id}>
                {filter.name}
              </option>
            ))}
          </select>
          
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          >
            {types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Purchase List */}
      <div className="space-y-4">
        {filteredPurchases.map((purchase) => (
          <div
            key={purchase.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Product Info */}
              <div className="lg:col-span-2">
                <div className="flex items-start space-x-4">
                  <img
                    src={purchase.thumbnail}
                    alt={purchase.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-lg">{getTypeIcon(purchase.type)}</span>
                      <h3 className="font-semibold text-gray-900">{purchase.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">by {purchase.instructor}</p>
                    
                    {purchase.rating && (
                      <div className="flex items-center space-x-1 mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{purchase.rating}</span>
                      </div>
                    )}

                    {purchase.progress > 0 && (
                      <div className="mb-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-600">Progress</span>
                          <span className="text-xs text-gray-900">{purchase.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-yellow-400 h-1.5 rounded-full"
                            style={{ width: `${purchase.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                      {purchase.courses && <span>• {purchase.courses} courses</span>}
                      {purchase.pages && <span>• {purchase.pages} pages</span>}
                      {purchase.duration && <span>• {purchase.duration}</span>}
                      {purchase.startDate && <span>• Starts {formatDate(purchase.startDate)}</span>}
                      {purchase.sessionDate && <span>• Session on {formatDate(purchase.sessionDate)}</span>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Purchase Details */}
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">Purchase Date</div>
                  <div className="font-medium">{formatDate(purchase.purchaseDate)}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600">Payment Method</div>
                  <div className="font-medium">{purchase.paymentMethod}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600">Transaction ID</div>
                  <div className="font-mono text-sm">{purchase.transactionId}</div>
                </div>

                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(purchase.status)}`}>
                    {purchase.status.charAt(0).toUpperCase() + purchase.status.slice(1)}
                  </span>
                </div>

                {purchase.status === 'refunded' && (
                  <div className="text-xs text-red-600">
                    Refunded on {formatDate(purchase.refundDate)}<br />
                    Reason: {purchase.refundReason}
                  </div>
                )}
              </div>

              {/* Price and Actions */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">${purchase.amount.toFixed(2)}</span>
                    {purchase.originalAmount > purchase.amount && (
                      <span className="text-sm text-gray-500 line-through">${purchase.originalAmount.toFixed(2)}</span>
                    )}
                  </div>
                  {purchase.originalAmount > purchase.amount && (
                    <div className="text-sm text-green-600">
                      Saved {calculateSavings(purchase.originalAmount, purchase.amount)}% (${(purchase.originalAmount - purchase.amount).toFixed(2)})
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  {purchase.status === 'completed' && (
                    <button className="w-full flex items-center justify-center space-x-2 bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm">
                      <Eye className="w-4 h-4" />
                      <span>Access</span>
                    </button>
                  )}

                  {purchase.downloadable && purchase.status === 'completed' && (
                    <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  )}

                  {purchase.certificate && (
                    <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      <FileText className="w-4 h-4" />
                      <span>Certificate</span>
                    </button>
                  )}

                  <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    <Download className="w-4 h-4" />
                    <span>Invoice</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPurchases.length === 0 && (
        <div className="text-center py-12">
          <CreditCard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No purchases found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default PurchaseHistory;