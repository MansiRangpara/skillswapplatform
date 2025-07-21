import React, { useState } from 'react';
import { Search, Heart, Star, Clock, Users, BookOpen, Play, ShoppingCart, Filter, Tag, X, Plus, Edit } from 'lucide-react';

const Wishlist = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'programming', name: 'Programming' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'data-science', name: 'Data Science' },
  ];

  const wishlistItemsData = [
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
    },
    {
      id: 4,
      title: 'Full-Stack Bootcamp',
      type: 'bootcamp',
      instructor: 'Code Academy',
      category: 'programming',
      rating: 4.9,
      students: 1250,
      duration: '12 weeks',
      price: 2999,
      originalPrice: 3999,
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Intensive 12-week program to become a professional web developer.',
      level: 'Beginner to Professional',
      addedDate: '2024-01-10',
      onSale: true,
      saleEnds: '2024-02-15'
    },
    {
      id: 5,
      title: 'Digital Marketing Strategy',
      type: 'course',
      instructor: 'Marketing Pro',
      category: 'business',
      rating: 4.6,
      students: 7654,
      duration: '20 hours',
      price: 79,
      originalPrice: 99,
      thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Learn SEO, social media marketing, email campaigns, and analytics.',
      level: 'Beginner',
      addedDate: '2024-01-08',
      onSale: false
    }
  ];

  const [wishlistItems, setWishlistItems] = useState(wishlistItemsData);

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'course', name: 'Courses' },
    { id: 'bundle', name: 'Bundles' },
    { id: 'ebook', name: 'Ebooks' },
    { id: 'bootcamp', name: 'Bootcamps' },
  ];

  const filteredItems = wishlistItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const handleAddItem = (itemData) => {
    const newItem = {
      id: Date.now(),
      ...itemData,
      rating: 4.5,
      students: 0,
      addedDate: new Date().toISOString().split('T')[0],
      onSale: false,
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    };
    setWishlistItems([...wishlistItems, newItem]);
    setShowAddModal(false);
  };

  const handleEditItem = (itemData) => {
    setWishlistItems(wishlistItems.map(item => 
      item.id === editingItem.id ? { ...item, ...itemData } : item
    ));
    setEditingItem(null);
  };

  const removeFromWishlist = (id) => {
    if (window.confirm('Are you sure you want to remove this item from your wishlist?')) {
      setWishlistItems(wishlistItems.filter(item => item.id !== id));
    }
  };

  const addToCart = (id) => {
    const item = wishlistItems.find(item => item.id === id);
    if (item) {
      alert(`${item.title} has been added to your cart!`);
      removeFromWishlist(id);
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'course': return <BookOpen className="w-4 h-4" />;
      case 'bundle': return <BookOpen className="w-4 h-4" />;
      case 'ebook': return <BookOpen className="w-4 h-4" />;
      case 'bootcamp': return <Users className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'course': return 'bg-blue-100 text-blue-800';
      case 'bundle': return 'bg-purple-100 text-purple-800';
      case 'ebook': return 'bg-green-100 text-green-800';
      case 'bootcamp': return 'bg-orange-100 text-orange-800';
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

  const calculateSavings = (original, current) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Wishlist</h2>
          <p className="text-gray-600">Save courses and resources for later</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">{filteredItems.length} items</span>
          <button
            onClick={() => {
              wishlistItems.forEach(item => addToCart(item.id));
            }}
            className="flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add All to Cart</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Item</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search wishlist..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-2">
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
      </div>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
          >
            <div className="relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Remove from wishlist button */}
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
              
              {/* Edit button */}
              <button
                onClick={() => setEditingItem(item)}
                className="absolute top-3 right-12 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
              >
                <Edit className="w-4 h-4 text-gray-600" />
              </button>

              {/* Sale badge */}
              {item.onSale && (
                <div className="absolute top-3 left-3">
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Sale {calculateSavings(item.originalPrice, item.price)}% Off
                  </span>
                </div>
              )}

              {/* Type badge */}
              <div className="absolute bottom-3 left-3">
                <span className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                  {getTypeIcon(item.type)}
                  <span className="capitalize">{item.type}</span>
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">by {item.instructor}</p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{item.rating}</span>
                  <span className="text-sm text-gray-500">({item.students.toLocaleString()})</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {item.onSale && item.saleEnds && (
                <div className="mb-4 p-2 bg-red-50 rounded-lg">
                  <div className="text-xs text-red-600 font-medium">
                    Sale ends {formatDate(item.saleEnds)}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">${item.price}</span>
                  {item.originalPrice > item.price && (
                    <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                  )}
                </div>
                <span className="text-xs text-gray-500">
                  Added {formatDate(item.addedDate)}
                </span>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => addToCart(item.id)}
                  className="flex-1 bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors font-medium text-sm"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Heart className="w-4 h-4 fill-current text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600 mb-4">Save courses and resources you're interested in for later.</p>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Add to Wishlist
          </button>
        </div>
      )}

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add to Wishlist</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleAddItem({
                title: formData.get('title'),
                instructor: formData.get('instructor'),
                type: formData.get('type'),
                category: formData.get('category'),
                description: formData.get('description'),
                level: formData.get('level'),
                duration: formData.get('duration'),
                price: parseFloat(formData.get('price')) || 0,
                originalPrice: parseFloat(formData.get('originalPrice')) || 0
              });
            }}>
              <div className="space-y-4">
                <input
                  name="title"
                  type="text"
                  placeholder="Item Title"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  name="instructor"
                  type="text"
                  placeholder="Instructor/Author Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select
                    name="type"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select Type</option>
                    <option value="course">Course</option>
                    <option value="bundle">Bundle</option>
                    <option value="ebook">Ebook</option>
                    <option value="bootcamp">Bootcamp</option>
                  </select>
                  <select
                    name="category"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Category</option>
                    <option value="programming">Programming</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="data-science">Data Science</option>
                  </select>
                </div>
                <textarea
                  name="description"
                  placeholder="Description"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select
                    name="level"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                  <input
                    name="duration"
                    type="text"
                    placeholder="Duration"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="price"
                    type="number"
                    step="0.01"
                    placeholder="Current Price"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="originalPrice"
                    type="number"
                    step="0.01"
                    placeholder="Original Price"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Add to Wishlist
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Item Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Wishlist Item</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleEditItem({
                title: formData.get('title'),
                instructor: formData.get('instructor'),
                type: formData.get('type'),
                category: formData.get('category'),
                description: formData.get('description'),
                level: formData.get('level'),
                duration: formData.get('duration'),
                price: parseFloat(formData.get('price')) || editingItem.price,
                originalPrice: parseFloat(formData.get('originalPrice')) || editingItem.originalPrice
              });
            }}>
              <div className="space-y-4">
                <input
                  name="title"
                  type="text"
                  defaultValue={editingItem.title}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  name="instructor"
                  type="text"
                  defaultValue={editingItem.instructor}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select
                    name="type"
                    defaultValue={editingItem.type}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="course">Course</option>
                    <option value="bundle">Bundle</option>
                    <option value="ebook">Ebook</option>
                    <option value="bootcamp">Bootcamp</option>
                  </select>
                  <select
                    name="category"
                    defaultValue={editingItem.category}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="programming">Programming</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="data-science">Data Science</option>
                  </select>
                </div>
                <textarea
                  name="description"
                  defaultValue={editingItem.description}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select
                    name="level"
                    defaultValue={editingItem.level}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                  <input
                    name="duration"
                    type="text"
                    defaultValue={editingItem.duration}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="price"
                    type="number"
                    step="0.01"
                    defaultValue={editingItem.price}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="originalPrice"
                    type="number"
                    step="0.01"
                    defaultValue={editingItem.originalPrice}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;