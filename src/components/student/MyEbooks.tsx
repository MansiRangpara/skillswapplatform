import React, { useState } from 'react';
import { Search, BookOpen, Download, Star, Clock, Eye, Filter, Tag, Plus, Edit, Trash2 } from 'lucide-react';

const MyEbooks = () => {
  const purchasedEbooks = [
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
    },
    {
      id: 4,
      title: 'Digital Marketing Mastery',
      author: 'Lisa Wang',
      category: 'business',
      rating: 4.6,
      reviews: 420,
      pages: 280,
      language: 'English',
      publishDate: '2023-09-15',
      purchaseDate: '2024-01-03',
      price: 19.99,
      cover: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      description: 'Master SEO, social media, content marketing, and analytics.',
      progress: 100,
      lastRead: '2024-01-15',
      bookmarked: false,
      downloadable: true,
      formats: ['PDF', 'EPUB']
    }
  ];

  const wishlistEbooks = [
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
  ];

  const browseEbooks = [
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
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTab, setSelectedTab] = useState('purchased');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingEbook, setEditingEbook] = useState(null);
  const [ebooks, setEbooks] = useState({
    purchased: purchasedEbooks,
    wishlist: wishlistEbooks,
    browse: browseEbooks
  });

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'programming', name: 'Programming' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'data-science', name: 'Data Science' },
  ];

  const tabs = [
    { id: 'purchased', name: 'My Library', count: 8 },
    { id: 'wishlist', name: 'Wishlist', count: 5 },
    { id: 'browse', name: 'Browse', count: null },
  ];

  const getCurrentEbooks = () => {
    switch (selectedTab) {
      case 'purchased': return ebooks.purchased;
      case 'wishlist': return ebooks.wishlist;
      case 'browse': return ebooks.browse;
      default: return ebooks.purchased;
    }
  };

  const filteredEbooks = getCurrentEbooks().filter(ebook => {
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || ebook.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddEbook = (ebookData) => {
    const newEbook = {
      id: Date.now(),
      ...ebookData,
      rating: 4.5,
      reviews: 0,
      publishDate: new Date().toISOString().split('T')[0],
      cover: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
    };
    
    if (selectedTab === 'purchased') {
      newEbook.progress = 0;
      newEbook.lastRead = new Date().toISOString().split('T')[0];
      newEbook.bookmarked = false;
      newEbook.downloadable = true;
      newEbook.formats = ['PDF', 'EPUB'];
      newEbook.purchaseDate = new Date().toISOString().split('T')[0];
    }
    
    setEbooks({
      ...ebooks,
      [selectedTab]: [...ebooks[selectedTab], newEbook]
    });
    setShowAddModal(false);
  };

  const handleEditEbook = (ebookData) => {
    setEbooks({
      ...ebooks,
      [selectedTab]: ebooks[selectedTab].map(ebook => 
        ebook.id === editingEbook.id ? { ...ebook, ...ebookData } : ebook
      )
    });
    setEditingEbook(null);
  };

  const handleDeleteEbook = (ebookId) => {
    if (window.confirm('Are you sure you want to remove this ebook?')) {
      setEbooks({
        ...ebooks,
        [selectedTab]: ebooks[selectedTab].filter(ebook => ebook.id !== ebookId)
      });
    }
  };

  const moveToWishlist = (ebookId) => {
    const ebook = ebooks.browse.find(e => e.id === ebookId);
    if (ebook) {
      setEbooks({
        ...ebooks,
        browse: ebooks.browse.filter(e => e.id !== ebookId),
        wishlist: [...ebooks.wishlist, ebook]
      });
    }
  };

  const purchaseEbook = (ebookId) => {
    const ebook = ebooks.wishlist.find(e => e.id === ebookId) || ebooks.browse.find(e => e.id === ebookId);
    if (ebook) {
      const purchasedEbook = {
        ...ebook,
        progress: 0,
        lastRead: new Date().toISOString().split('T')[0],
        bookmarked: false,
        downloadable: true,
        formats: ['PDF', 'EPUB'],
        purchaseDate: new Date().toISOString().split('T')[0]
      };
      
      setEbooks({
        ...ebooks,
        wishlist: ebooks.wishlist.filter(e => e.id !== ebookId),
        browse: ebooks.browse.filter(e => e.id !== ebookId),
        purchased: [...ebooks.purchased, purchasedEbook]
      });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Ebooks</h2>
          <p className="text-gray-600">Your digital library and reading progress</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            {filteredEbooks.length} ebooks
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Ebook</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                selectedTab === tab.id
                  ? 'border-yellow-400 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
              {tab.count !== null && (
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  selectedTab === tab.id ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
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
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
        
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

      {/* Ebooks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredEbooks.map((ebook) => (
          <div
            key={ebook.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className="relative">
              <img
                src={ebook.cover}
                alt={ebook.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 space-y-1">
                {ebook.bestseller && (
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Bestseller
                  </span>
                )}
                {ebook.newRelease && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    New
                  </span>
                )}
                {ebook.onSale && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Sale
                  </span>
                )}
              </div>

              {/* Category */}
              <div className="absolute top-3 right-3">
                <div className="flex space-x-1">
                  <button
                    onClick={() => setEditingEbook(ebook)}
                    className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Edit className="w-3 h-3 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleDeleteEbook(ebook.id)}
                    className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
                  >
                    <Trash2 className="w-3 h-3 text-red-600" />
                  </button>
                </div>
              </div>

              {/* Progress bar for purchased books */}
              {selectedTab === 'purchased' && ebook.progress !== undefined && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                  <div className="flex items-center justify-between text-white text-xs mb-1">
                    <span>{ebook.progress}% Complete</span>
                    <Eye className="w-3 h-3" />
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-1">
                    <div 
                      className="bg-yellow-400 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${ebook.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{ebook.title}</h3>
              <p className="text-sm text-gray-600 mb-2">by {ebook.author}</p>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{ebook.description}</p>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{ebook.rating}</span>
                  <span className="text-sm text-gray-500">({ebook.reviews})</span>
                </div>
                <div className="text-sm text-gray-500">{ebook.pages} pages</div>
              </div>

              {selectedTab === 'purchased' && (
                <div className="space-y-2 mb-3">
                  <div className="text-xs text-gray-500">
                    Last read: {formatDate(ebook.lastRead)}
                  </div>
                  {ebook.formats && (
                    <div className="flex flex-wrap gap-1">
                      {ebook.formats.map((format, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {format}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {ebook.onSale ? (
                    <>
                      <span className="text-lg font-bold text-gray-900">${ebook.salePrice}</span>
                      <span className="text-sm text-gray-500 line-through">${ebook.price}</span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-gray-900">${ebook.price}</span>
                  )}
                </div>
                
                {selectedTab === 'purchased' && (
                  <div className="flex space-x-1">
                    <button className="p-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    {ebook.downloadable && (
                      <button className="p-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}

                {selectedTab === 'wishlist' && (
                  <button
                    onClick={() => purchaseEbook(ebook.id)}
                    className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-medium"
                  >
                    Buy Now
                  </button>
                )}

                {selectedTab === 'browse' && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => moveToWishlist(ebook.id)}
                      className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      Wishlist
                    </button>
                    <button
                      onClick={() => purchaseEbook(ebook.id)}
                      className="flex-1 bg-yellow-400 text-black px-3 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-medium"
                    >
                      Buy Now
                    </button>
                  </div>
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
          <p className="text-gray-600 mb-4">
            {selectedTab === 'purchased' 
              ? "You haven't purchased any ebooks yet."
              : selectedTab === 'wishlist'
              ? "Your wishlist is empty."
              : "No ebooks match your search criteria."
            }
          </p>
          {selectedTab !== 'browse' && (
            <button 
              onClick={() => setSelectedTab('browse')}
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Browse Ebooks
            </button>
          )}
        </div>
      )}

      {/* Add Ebook Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Ebook</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleAddEbook({
                title: formData.get('title'),
                author: formData.get('author'),
                category: formData.get('category'),
                pages: parseInt(formData.get('pages')) || 200,
                language: formData.get('language'),
                price: parseFloat(formData.get('price')) || 0,
                description: formData.get('description')
              });
            }}>
              <div className="space-y-4">
                <input
                  name="title"
                  type="text"
                  placeholder="Ebook Title"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  name="author"
                  type="text"
                  placeholder="Author Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <select
                  name="category"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select Category</option>
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                  <option value="data-science">Data Science</option>
                </select>
                <textarea
                  name="description"
                  placeholder="Ebook Description"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="pages"
                    type="number"
                    placeholder="Number of Pages"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <select
                    name="language"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                  </select>
                </div>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  placeholder="Price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
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
                  Add Ebook
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Ebook Modal */}
      {editingEbook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Ebook</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleEditEbook({
                title: formData.get('title'),
                author: formData.get('author'),
                category: formData.get('category'),
                pages: parseInt(formData.get('pages')) || editingEbook.pages,
                language: formData.get('language'),
                price: parseFloat(formData.get('price')) || editingEbook.price,
                description: formData.get('description'),
                progress: selectedTab === 'purchased' ? parseInt(formData.get('progress')) || editingEbook.progress : undefined
              });
            }}>
              <div className="space-y-4">
                <input
                  name="title"
                  type="text"
                  defaultValue={editingEbook.title}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  name="author"
                  type="text"
                  defaultValue={editingEbook.author}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <select
                  name="category"
                  defaultValue={editingEbook.category}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                  <option value="data-science">Data Science</option>
                </select>
                <textarea
                  name="description"
                  defaultValue={editingEbook.description}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="pages"
                    type="number"
                    defaultValue={editingEbook.pages}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <select
                    name="language"
                    defaultValue={editingEbook.language}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="price"
                    type="number"
                    step="0.01"
                    defaultValue={editingEbook.price}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {selectedTab === 'purchased' && (
                    <input
                      name="progress"
                      type="number"
                      min="0"
                      max="100"
                      defaultValue={editingEbook.progress}
                      placeholder="Progress %"
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  )}
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setEditingEbook(null)}
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

export default MyEbooks;