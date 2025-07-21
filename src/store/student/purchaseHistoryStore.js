// Student Purchase History Store
// This file contains mock data and API functions for student purchase history

// Mock data for student purchase history
export const purchaseHistoryMockData = {
  purchases: [
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
      downloadable: true,
      refundable: false
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
      refundable: true,
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
      refundable: false,
      pages: 450
    }
  ],

  purchaseStats: {
    totalSpent: 567.99,
    totalSaved: 234.00,
    totalPurchases: 8,
    averageOrderValue: 70.99,
    refundRate: 2.5,
    favoriteCategory: 'Programming'
  },

  paymentMethods: [
    {
      id: 1,
      type: 'card',
      name: 'Visa ****1234',
      isDefault: true,
      expiryDate: '12/25'
    },
    {
      id: 2,
      type: 'paypal',
      name: 'PayPal',
      isDefault: false,
      email: 'student@example.com'
    }
  ]
};

// API Service Functions for Purchase History
export const purchaseHistoryAPI = {
  // Get purchase history
  async getPurchaseHistory(page = 1, limit = 20, filters = {}) {
    // TODO: Replace with actual API call
    // const queryParams = new URLSearchParams({
    //   page: page.toString(),
    //   limit: limit.toString(),
    //   ...filters
    // });
    // return await fetch(`/api/student/purchases?${queryParams}`).then(res => res.json());
    return Promise.resolve({
      purchases: purchaseHistoryMockData.purchases,
      totalCount: purchaseHistoryMockData.purchases.length,
      currentPage: page,
      totalPages: 1
    });
  },

  // Get purchase details
  async getPurchaseDetails(purchaseId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/purchases/${purchaseId}`).then(res => res.json());
    const purchase = purchaseHistoryMockData.purchases.find(p => p.id === purchaseId);
    return Promise.resolve(purchase);
  },

  // Download invoice
  async downloadInvoice(purchaseId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/purchases/${purchaseId}/invoice`)
    //   .then(res => res.blob());
    console.log(`Downloading invoice for purchase ${purchaseId}`);
    return Promise.resolve(new Blob(['Mock invoice content'], { type: 'application/pdf' }));
  },

  // Request refund
  async requestRefund(purchaseId, reason) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/purchases/${purchaseId}/refund`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ reason })
    // }).then(res => res.json());
    console.log(`Requesting refund for purchase ${purchaseId}:`, reason);
    return Promise.resolve({ success: true, refundId: 'REF-001' });
  },

  // Get purchase statistics
  async getPurchaseStats() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/purchases/stats').then(res => res.json());
    return Promise.resolve(purchaseHistoryMockData.purchaseStats);
  },

  // Get payment methods
  async getPaymentMethods() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/payment-methods').then(res => res.json());
    return Promise.resolve(purchaseHistoryMockData.paymentMethods);
  },

  // Download purchased content
  async downloadContent(purchaseId, format = 'pdf') {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/purchases/${purchaseId}/download?format=${format}`)
    //   .then(res => res.blob());
    console.log(`Downloading content for purchase ${purchaseId} in ${format} format`);
    return Promise.resolve(new Blob(['Mock content'], { type: 'application/pdf' }));
  }
};

// Utility functions for purchase history
export const purchaseHistoryUtils = {
  calculateSavings: (originalAmount, amount) => {
    if (originalAmount <= amount) return 0;
    return Math.round(((originalAmount - amount) / originalAmount) * 100);
  },

  getTotalSpent: (purchases) => {
    return purchases.reduce((total, purchase) => total + purchase.amount, 0);
  },

  getTotalSaved: (purchases) => {
    return purchases.reduce((total, purchase) => 
      total + (purchase.originalAmount - purchase.amount), 0);
  },

  filterByStatus: (purchases, status) => {
    if (status === 'all') return purchases;
    return purchases.filter(purchase => purchase.status === status);
  },

  filterByType: (purchases, type) => {
    if (type === 'all') return purchases;
    return purchases.filter(purchase => purchase.type === type);
  },

  searchPurchases: (purchases, searchTerm) => {
    if (!searchTerm) return purchases;
    return purchases.filter(purchase =>
      purchase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  sortPurchases: (purchases, sortBy) => {
    switch (sortBy) {
      case 'date-desc':
        return [...purchases].sort((a, b) => new Date(b.purchaseDate) - new Date(a.purchaseDate));
      case 'date-asc':
        return [...purchases].sort((a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate));
      case 'amount-desc':
        return [...purchases].sort((a, b) => b.amount - a.amount);
      case 'amount-asc':
        return [...purchases].sort((a, b) => a.amount - b.amount);
      case 'title':
        return [...purchases].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return purchases;
    }
  },

  getStatusColor: (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'refunded': return 'bg-red-100 text-red-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  },

  getTypeIcon: (type) => {
    switch (type) {
      case 'course': return '📚';
      case 'bundle': return '📦';
      case 'ebook': return '📖';
      case 'bootcamp': return '🎓';
      case 'tuition': return '👨‍🏫';
      default: return '📚';
    }
  },

  formatDate: (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  },

  formatCurrency: (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  },

  isRefundable: (purchase) => {
    if (!purchase.refundable) return false;
    
    const purchaseDate = new Date(purchase.purchaseDate);
    const now = new Date();
    const daysSincePurchase = Math.floor((now - purchaseDate) / (1000 * 60 * 60 * 24));
    
    // Allow refunds within 30 days
    return daysSincePurchase <= 30;
  }
};

export default {
  data: purchaseHistoryMockData,
  api: purchaseHistoryAPI,
  utils: purchaseHistoryUtils
};