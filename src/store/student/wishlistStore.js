// Student Wishlist Store
// This file contains mock data and API functions for student wishlist management

// Mock data for student wishlist
export const wishlistMockData = {
  wishlistItems: [
    {
      id: 1,
      title: 'Advanced React Development',
      type: 'course',
      instructor: 'Sarah Johnson',
      category: 'programming',
      rating: 4.9,
      students: 8930,
      duration: '25 hours',
      price: 129,
      originalPrice: 179,
      thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Master React hooks, context API, Redux toolkit, and advanced patterns.',
      level: 'Advanced',
      addedDate: '2024-01-20',
      onSale: true,
      saleEnds: '2024-02-01'
    },
    {
      id: 2,
      title: 'Complete Design Bundle',
      type: 'bundle',
      instructor: 'Design Academy',
      category: 'design',
      rating: 4.8,
      students: 15420,
      duration: '80 hours',
      price: 199,
      originalPrice: 399,
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Complete UI/UX design workflow from research to prototyping.',
      level: 'Beginner to Advanced',
      addedDate: '2024-01-18',
      onSale: true,
      saleEnds: '2024-01-30',
      courses: 5
    },
    {
      id: 3,
      title: 'Machine Learning Handbook',
      type: 'ebook',
      instructor: 'Dr. Mike Chen',
      category: 'data-science',
      rating: 4.7,
      students: 3420,
      duration: '450 pages',
      price: 39,
      originalPrice: 59,
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Comprehensive guide to machine learning algorithms and implementations.',
      level: 'Intermediate',
      addedDate: '2024-01-15',
      onSale: false
    }
  ],

  wishlistStats: {
    totalItems: 5,
    totalValue: 567.00,
    potentialSavings: 234.00,
    itemsOnSale: 2,
    averageRating: 4.8
  }
};

// API Service Functions for Wishlist
export const wishlistAPI = {
  // Get wishlist items
  async getWishlistItems() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/wishlist').then(res => res.json());
    return Promise.resolve(wishlistMockData.wishlistItems);
  },

  // Add item to wishlist
  async addToWishlist(itemId, itemType) {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/wishlist', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ itemId, itemType })
    // }).then(res => res.json());
    console.log(`Adding ${itemType} ${itemId} to wishlist`);
    return Promise.resolve({ success: true });
  },

  // Remove item from wishlist
  async removeFromWishlist(itemId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/wishlist/${itemId}`, {
    //   method: 'DELETE'
    // }).then(res => res.json());
    console.log(`Removing item ${itemId} from wishlist`);
    return Promise.resolve({ success: true });
  },

  // Move all items to cart
  async moveAllToCart() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/wishlist/move-to-cart', {
    //   method: 'POST'
    // }).then(res => res.json());
    console.log('Moving all wishlist items to cart');
    return Promise.resolve({ success: true });
  },

  // Get wishlist statistics
  async getWishlistStats() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/wishlist/stats').then(res => res.json());
    return Promise.resolve(wishlistMockData.wishlistStats);
  },

  // Check if item is in wishlist
  async isInWishlist(itemId, itemType) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/wishlist/check?itemId=${itemId}&itemType=${itemType}`)
    //   .then(res => res.json());
    const isInWishlist = wishlistMockData.wishlistItems.some(item => 
      item.id === itemId && item.type === itemType
    );
    return Promise.resolve({ inWishlist: isInWishlist });
  }
};

// Utility functions for wishlist
export const wishlistUtils = {
  calculateSavings: (originalPrice, currentPrice) => {
    if (originalPrice <= currentPrice) return 0;
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  },

  getTotalValue: (items) => {
    return items.reduce((total, item) => total + item.price, 0);
  },

  getTotalSavings: (items) => {
    return items.reduce((total, item) => total + (item.originalPrice - item.price), 0);
  },

  getItemsOnSale: (items) => {
    return items.filter(item => item.onSale);
  },

  filterByCategory: (items, category) => {
    if (category === 'all') return items;
    return items.filter(item => item.category === category);
  },

  filterByType: (items, type) => {
    if (type === 'all') return items;
    return items.filter(item => item.type === type);
  },

  searchItems: (items, searchTerm) => {
    if (!searchTerm) return items;
    return items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  sortItems: (items, sortBy) => {
    switch (sortBy) {
      case 'date-added':
        return [...items].sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
      case 'price-low':
        return [...items].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...items].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...items].sort((a, b) => b.rating - a.rating);
      case 'popularity':
        return [...items].sort((a, b) => b.students - a.students);
      default:
        return items;
    }
  },

  formatDate: (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }
};

export default {
  data: wishlistMockData,
  api: wishlistAPI,
  utils: wishlistUtils
};