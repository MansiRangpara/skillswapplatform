import React, { useState } from 'react';
import { Search, Star, Clock, Users, BookOpen, Play, Heart, Package, Tag, Plus, Edit, Trash2, Eye } from 'lucide-react';

const CourseBundles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingBundle, setEditingBundle] = useState(null);
  const [bundles, setBundles] = useState([
    {
      id: 1,
      title: 'Complete Web Developer Bundle',
      description: 'Master full-stack web development with this comprehensive bundle',
      category: 'programming',
      courses: [
        'HTML & CSS Fundamentals',
        'JavaScript Mastery',
        'React Development',
        'Node.js Backend',
        'Database Design'
      ],
      totalCourses: 5,
      totalHours: 120,
      level: 'Beginner to Advanced',
      rating: 4.8,
      students: 25420,
      originalPrice: 499,
      bundlePrice: 199,
      savings: 300,
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      enrolled: false,
      featured: true
    },
    {
      id: 2,
      title: 'UI/UX Design Mastery Bundle',
      description: 'Complete design workflow from research to prototyping',
      category: 'design',
      courses: [
        'Design Fundamentals',
        'User Research Methods',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems'
      ],
      totalCourses: 5,
      totalHours: 80,
      level: 'Beginner to Intermediate',
      rating: 4.7,
      students: 18340,
      originalPrice: 399,
      bundlePrice: 149,
      savings: 250,
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      enrolled: true,
      featured: false
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Bundles' },
    { id: 'programming', name: 'Programming' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'data', name: 'Data Science' },
  ];

  const filteredBundles = bundles.filter(bundle => {
    const matchesSearch = bundle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bundle.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || bundle.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddBundle = (bundleData) => {
    const newBundle = {
      id: Date.now(),
      ...bundleData,
      enrolled: false,
      featured: false,
      rating: 4.5,
      students: 0,
      savings: bundleData.originalPrice - bundleData.bundlePrice,
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    };
    setBundles([...bundles, newBundle]);
    setShowAddModal(false);
  };

  const handleEditBundle = (bundleData) => {
    setBundles(bundles.map(bundle => 
      bundle.id === editingBundle.id ? { 
        ...bundle, 
        ...bundleData,
        savings: bundleData.originalPrice - bundleData.bundlePrice
      } : bundle
    ));
    setEditingBundle(null);
  };

  const handleDeleteBundle = (bundleId) => {
    if (window.confirm('Are you sure you want to delete this bundle?')) {
      setBundles(bundles.filter(bundle => bundle.id !== bundleId));
    }
  };

  const toggleEnrollment = (bundleId) => {
    setBundles(bundles.map(bundle => 
      bundle.id === bundleId ? { ...bundle, enrolled: !bundle.enrolled } : bundle
    ));
  };

  const calculateSavingsPercentage = (original, bundle) => {
    return Math.round(((original - bundle) / original) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Course Bundles</h2>
          <p className="text-gray-600">Save money with our curated course collections</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            {filteredBundles.length} bundles available
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Create Bundle</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search bundles..."
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

      {/* Bundles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredBundles.map((bundle) => (
          <div
            key={bundle.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
          >
            <div className="relative">
              <img
                src={bundle.thumbnail}
                alt={bundle.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {bundle.featured && (
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}
              {bundle.enrolled && (
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Enrolled
                  </span>
                </div>
              )}
              <div className="absolute top-4 right-4 flex space-x-1">
                <button
                  onClick={() => setEditingBundle(bundle)}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
                >
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => handleDeleteBundle(bundle.id)}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                  Save {calculateSavingsPercentage(bundle.originalPrice, bundle.bundlePrice)}%
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                <Package className="w-4 h-4 text-yellow-600" />
                <span className="text-sm text-yellow-600 font-medium capitalize">{bundle.category}</span>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">{bundle.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{bundle.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{bundle.rating}</span>
                  <span className="text-sm text-gray-500">({bundle.students.toLocaleString()})</span>
                </div>
                <div className="text-sm text-gray-500">{bundle.level}</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{bundle.totalCourses} courses</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{bundle.totalHours} hours</span>
                </div>
              </div>

              {/* Course List */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Included Courses:</h4>
                <ul className="space-y-1">
                  {bundle.courses.slice(0, 3).map((course, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      <span>{course}</span>
                    </li>
                  ))}
                  {bundle.courses.length > 3 && (
                    <li className="text-sm text-gray-500">
                      +{bundle.courses.length - 3} more courses
                    </li>
                  )}
                </ul>
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">${bundle.bundlePrice}</span>
                    <span className="text-lg text-gray-500 line-through">${bundle.originalPrice}</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Save ${bundle.savings}
                  </div>
                </div>
                <button
                  onClick={() => toggleEnrollment(bundle.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    bundle.enrolled 
                      ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                      : 'bg-yellow-400 text-black hover:bg-yellow-500'
                  }`}
                >
                  {bundle.enrolled ? 'Access Bundle' : 'Enroll Now'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBundles.length === 0 && (
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No bundles found</h3>
          <p className="text-gray-600">Try adjusting your search or category filter.</p>
        </div>
      )}

      {/* Add Bundle Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Bundle</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const courses = formData.get('courses').split('\n').filter(c => c.trim());
              handleAddBundle({
                title: formData.get('title'),
                description: formData.get('description'),
                category: formData.get('category'),
                courses: courses,
                totalCourses: courses.length,
                totalHours: parseInt(formData.get('totalHours')) || 0,
                level: formData.get('level'),
                originalPrice: parseFloat(formData.get('originalPrice')) || 0,
                bundlePrice: parseFloat(formData.get('bundlePrice')) || 0
              });
            }}>
              <div className="space-y-4">
                <input
                  name="title"
                  type="text"
                  placeholder="Bundle Title"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <textarea
                  name="description"
                  placeholder="Bundle Description"
                  rows={3}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
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
                  <option value="data">Data Science</option>
                </select>
                <textarea
                  name="courses"
                  placeholder="Course List (one per line)"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="totalHours"
                    type="number"
                    placeholder="Total Hours"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <select
                    name="level"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Beginner to Advanced">Beginner to Advanced</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="originalPrice"
                    type="number"
                    step="0.01"
                    placeholder="Original Price"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="bundlePrice"
                    type="number"
                    step="0.01"
                    placeholder="Bundle Price"
                    required
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
                  Create Bundle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Bundle Modal */}
      {editingBundle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Bundle</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const courses = formData.get('courses').split('\n').filter(c => c.trim());
              handleEditBundle({
                title: formData.get('title'),
                description: formData.get('description'),
                category: formData.get('category'),
                courses: courses,
                totalCourses: courses.length,
                totalHours: parseInt(formData.get('totalHours')) || editingBundle.totalHours,
                level: formData.get('level'),
                originalPrice: parseFloat(formData.get('originalPrice')) || editingBundle.originalPrice,
                bundlePrice: parseFloat(formData.get('bundlePrice')) || editingBundle.bundlePrice
              });
            }}>
              <div className="space-y-4">
                <input
                  name="title"
                  type="text"
                  defaultValue={editingBundle.title}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <textarea
                  name="description"
                  defaultValue={editingBundle.description}
                  rows={3}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <select
                  name="category"
                  defaultValue={editingBundle.category}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                  <option value="data">Data Science</option>
                </select>
                <textarea
                  name="courses"
                  defaultValue={editingBundle.courses.join('\n')}
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="totalHours"
                    type="number"
                    defaultValue={editingBundle.totalHours}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <select
                    name="level"
                    defaultValue={editingBundle.level}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Beginner to Advanced">Beginner to Advanced</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="originalPrice"
                    type="number"
                    step="0.01"
                    defaultValue={editingBundle.originalPrice}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="bundlePrice"
                    type="number"
                    step="0.01"
                    defaultValue={editingBundle.bundlePrice}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setEditingBundle(null)}
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

export default CourseBundles;