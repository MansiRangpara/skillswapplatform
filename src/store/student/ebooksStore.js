// Student Ebooks Store
// This file contains mock data and API functions for student ebooks management

// Mock data for student ebooks
export const ebooksMockData = {
  purchasedEbooks: [
    {
      id: 1,
      title: 'Complete Guide to Modern JavaScript',
      author: 'John Smith',
      category: 'programming',
      rating: 4.8,
      reviews: 1250,
      pages: 450,
      language: 'English',
      publishDate: '2023-12-15',
      purchaseDate: '2024-01-10',
      price: 29.99,
      cover: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Master modern JavaScript with ES6+, async programming, and advanced concepts.',
      progress: 65,
      lastRead: '2024-01-22',
      bookmarked: true,
      downloadable: true,
      formats: ['PDF', 'EPUB', 'MOBI']
    },
    {
      id: 2,
      title: 'UI/UX Design Principles',
      author: 'Sarah Johnson',
      category: 'design',
      rating: 4.9,
      reviews: 890,
      pages: 320,
      language: 'English',
      publishDate: '2023-11-20',
      purchaseDate: '2024-01-08',
      price: 24.99,
      cover: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Learn design thinking, user research, and creating beautiful interfaces.',
      progress: 40,
      lastRead: '2024-01-20',
      bookmarked: false,
      downloadable: true,
      formats: ['PDF', 'EPUB']
    },
    {
      id: 3,
      title: 'Data Science with Python',
      author: 'Dr. Mike Chen',
      category: 'data-science',
      rating: 4.7,
      reviews: 650,
      pages: 520,
      language: 'English',
      publishDate: '2023-10-10',
      purchaseDate: '2024-01-05',
      price: 34.99,
      cover: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Comprehensive guide to data analysis, visualization, and machine learning.',
      progress: 80,
      lastRead: '2024-01-23',
      bookmarked: true,
      downloadable: true,
      formats: ['PDF', 'EPUB', 'MOBI']
    }
  ],

  wishlistEbooks: [
    {
      id: 5,
      title: 'Advanced React Patterns',
      author: 'Emily Davis',
      category: 'programming',
      rating: 4.9,
      reviews: 780,
      pages: 380,
      language: 'English',
      publishDate: '2024-01-01',
      price: 32.99,
      cover: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Deep dive into advanced React patterns, hooks, and performance optimization.',
      onSale: true,
      salePrice: 24.99
    },
    {
      id: 6,
      title: 'Machine Learning Fundamentals',
      author: 'Dr. Robert Wilson',
      category: 'data-science',
      rating: 4.8,
      reviews: 920,
      pages: 480,
      language: 'English',
      publishDate: '2023-12-20',
      price: 39.99,
      cover: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Learn ML algorithms, neural networks, and practical implementations.',
      onSale: false
    }
  ],

  browseEbooks: [
    {
      id: 7,
      title: 'Cybersecurity Essentials',
      author: 'Alex Thompson',
      category: 'programming',
      rating: 4.7,
      reviews: 560,
      pages: 350,
      language: 'English',
      publishDate: '2024-01-15',
      price: 27.99,
      cover: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Essential cybersecurity concepts, threat analysis, and protection strategies.',
      bestseller: true
    },
    {
      id: 8,
      title: 'Blockchain Development',
      author: 'Maria Garcia',
      category: 'programming',
      rating: 4.6,
      reviews: 340,
      pages: 420,
      language: 'English',
      publishDate: '2024-01-10',
      price: 35.99,
      cover: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Build decentralized applications with Ethereum, Solidity, and Web3.',
      newRelease: true
    }
  ],

  ebookStats: {
    totalPurchased: 8,
    totalPages: 2450,
    averageRating: 4.8,
    totalSpent: 189.95,
    readingTime: 45, // hours
    completedBooks: 3
  }
};

// API Service Functions for Ebooks
export const ebooksAPI = {
  // Get purchased ebooks
  async getPurchasedEbooks() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/ebooks/purchased').then(res => res.json());
    return Promise.resolve(ebooksMockData.purchasedEbooks);
  },

  // Get wishlist ebooks
  async getWishlistEbooks() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/ebooks/wishlist').then(res => res.json());
    return Promise.resolve(ebooksMockData.wishlistEbooks);
  },

  // Get browse ebooks
  async getBrowseEbooks(filters = {}) {
    // TODO: Replace with actual API call
    // const queryParams = new URLSearchParams(filters);
    // return await fetch(`/api/student/ebooks/browse?${queryParams}`).then(res => res.json());
    return Promise.resolve(ebooksMockData.browseEbooks);
  },

  // Get ebook details
  async getEbookDetails(ebookId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/ebooks/${ebookId}`).then(res => res.json());
    const allEbooks = [
      ...ebooksMockData.purchasedEbooks,
      ...ebooksMockData.wishlistEbooks,
      ...ebooksMockData.browseEbooks
    ];
    const ebook = allEbooks.find(e => e.id === ebookId);
    return Promise.resolve(ebook);
  },

  // Update reading progress
  async updateReadingProgress(ebookId, progress) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/ebooks/${ebookId}/progress`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ progress })
    // }).then(res => res.json());
    console.log(`Updating ebook ${ebookId} progress to ${progress}%`);
    return Promise.resolve({ success: true });
  },

  // Download ebook
  async downloadEbook(ebookId, format = 'PDF') {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/ebooks/${ebookId}/download?format=${format}`)
    //   .then(res => res.blob());
    console.log(`Downloading ebook ${ebookId} in ${format} format`);
    return Promise.resolve(new Blob(['Mock ebook content'], { type: 'application/pdf' }));
  },

  // Add to wishlist
  async addToWishlist(ebookId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/ebooks/${ebookId}/wishlist`, {
    //   method: 'POST'
    // }).then(res => res.json());
    console.log(`Adding ebook ${ebookId} to wishlist`);
    return Promise.resolve({ success: true });
  },

  // Remove from wishlist
  async removeFromWishlist(ebookId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/ebooks/${ebookId}/wishlist`, {
    //   method: 'DELETE'
    // }).then(res => res.json());
    console.log(`Removing ebook ${ebookId} from wishlist`);
    return Promise.resolve({ success: true });
  },

  // Purchase ebook
  async purchaseEbook(ebookId, paymentMethodId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/ebooks/${ebookId}/purchase`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ paymentMethodId })
    // }).then(res => res.json());
    console.log(`Purchasing ebook ${ebookId} with payment method ${paymentMethodId}`);
    return Promise.resolve({ success: true, transactionId: 'TXN-' + Date.now() });
  },

  // Get ebook statistics
  async getEbookStats() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/ebooks/stats').then(res => res.json());
    return Promise.resolve(ebooksMockData.ebookStats);
  },

  // Add bookmark
  async addBookmark(ebookId, page, note = '') {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/ebooks/${ebookId}/bookmarks`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ page, note })
    // }).then(res => res.json());
    console.log(`Adding bookmark for ebook ${ebookId} at page ${page}`);
    return Promise.resolve({ success: true });
  }
};

// Utility functions for ebooks
export const ebooksUtils = {
  filterByCategory: (ebooks, category) => {
    if (category === 'all') return ebooks;
    return ebooks.filter(ebook => ebook.category === category);
  },

  searchEbooks: (ebooks, searchTerm) => {
    if (!searchTerm) return ebooks;
    return ebooks.filter(ebook =>
      ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ebook.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ebook.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  sortEbooks: (ebooks, sortBy) => {
    switch (sortBy) {
      case 'title':
        return [...ebooks].sort((a, b) => a.title.localeCompare(b.title));
      case 'author':
        return [...ebooks].sort((a, b) => a.author.localeCompare(b.author));
      case 'rating':
        return [...ebooks].sort((a, b) => b.rating - a.rating);
      case 'price-low':
        return [...ebooks].sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
      case 'price-high':
        return [...ebooks].sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
      case 'publish-date':
        return [...ebooks].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
      case 'pages':
        return [...ebooks].sort((a, b) => b.pages - a.pages);
      default:
        return ebooks;
    }
  },

  calculateReadingTime: (pages, wordsPerPage = 250, readingSpeed = 200) => {
    const totalWords = pages * wordsPerPage;
    const minutes = Math.round(totalWords / readingSpeed);
    
    if (minutes < 60) return `${minutes} min`;
    
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (remainingMinutes === 0) return `${hours}h`;
    return `${hours}h ${remainingMinutes}m`;
  },

  formatFileSize: (sizeInMB) => {
    if (sizeInMB < 1) return `${Math.round(sizeInMB * 1024)} KB`;
    return `${sizeInMB.toFixed(1)} MB`;
  },

  getProgressColor: (progress) => {
    if (progress === 0) return 'bg-gray-200';
    if (progress < 25) return 'bg-red-400';
    if (progress < 50) return 'bg-yellow-400';
    if (progress < 75) return 'bg-blue-400';
    if (progress < 100) return 'bg-green-400';
    return 'bg-green-500';
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

  calculateSavings: (originalPrice, salePrice) => {
    if (!salePrice || salePrice >= originalPrice) return 0;
    return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
  }
};

export default {
  data: ebooksMockData,
  api: ebooksAPI,
  utils: ebooksUtils
};