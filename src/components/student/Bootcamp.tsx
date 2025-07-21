import React, { useState } from 'react';
import { Search, Star, Clock, Users, BookOpen, Play, Heart, Calendar, Award, Target, Plus, Edit, Trash2, Eye } from 'lucide-react';

const Bootcamp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingBootcamp, setEditingBootcamp] = useState(null);
  const [bootcamps, setBootcamps] = useState([
    {
      id: 1,
      title: 'Full-Stack Web Development Bootcamp',
      description: 'Intensive 12-week program to become a professional web developer',
      type: 'full-time',
      duration: '12 weeks',
      schedule: 'Mon-Fri, 9AM-5PM',
      startDate: '2024-02-15',
      endDate: '2024-05-10',
      level: 'Beginner to Professional',
      rating: 4.9,
      graduates: 1250,
      price: 8999,
      originalPrice: 12999,
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      enrolled: false,
      features: [
        'Live instructor-led sessions',
        'Real-world projects',
        'Career placement assistance',
        'Mentorship program',
        'Industry certifications'
      ],
      curriculum: [
        'HTML, CSS, JavaScript Fundamentals',
        'React & Modern Frontend',
        'Node.js & Backend Development',
        'Database Design & Management',
        'DevOps & Deployment',
        'Final Capstone Project'
      ],
      jobPlacementRate: 92,
      averageSalary: 75000
    },
    {
      id: 2,
      title: 'Data Science & AI Bootcamp',
      description: 'Comprehensive program covering data science, machine learning, and AI',
      type: 'part-time',
      duration: '24 weeks',
      schedule: 'Tue/Thu 7PM-10PM, Sat 9AM-1PM',
      startDate: '2024-03-01',
      endDate: '2024-08-24',
      level: 'Intermediate to Advanced',
      rating: 4.8,
      graduates: 890,
      price: 6999,
      originalPrice: 9999,
      thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      enrolled: true,
      features: [
        'Flexible evening schedule',
        'Industry expert instructors',
        'Hands-on projects',
        'Portfolio development',
        'Job placement support'
      ],
      curriculum: [
        'Python for Data Science',
        'Statistics & Probability',
        'Data Visualization',
        'Machine Learning Algorithms',
        'Deep Learning & Neural Networks',
        'AI Ethics & Applications'
      ],
      jobPlacementRate: 88,
      averageSalary: 85000
    }
  ]);

  const types = [
    { id: 'all', name: 'All Bootcamps' },
    { id: 'full-time', name: 'Full-time' },
    { id: 'part-time', name: 'Part-time' },
    { id: 'self-paced', name: 'Self-paced' },
  ];

  const filteredBootcamps = bootcamps.filter(bootcamp => {
    const matchesSearch = bootcamp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bootcamp.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || bootcamp.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleAddBootcamp = (bootcampData) => {
    const newBootcamp = {
      id: Date.now(),
      ...bootcampData,
      enrolled: false,
      rating: 4.5,
      graduates: 0,
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: bootcampData.features.split('\n').filter(f => f.trim()),
      curriculum: bootcampData.curriculum.split('\n').filter(c => c.trim())
    };
    setBootcamps([...bootcamps, newBootcamp]);
    setShowAddModal(false);
  };

  const handleEditBootcamp = (bootcampData) => {
    setBootcamps(bootcamps.map(bootcamp => 
      bootcamp.id === editingBootcamp.id ? { 
        ...bootcamp, 
        ...bootcampData,
        features: bootcampData.features.split('\n').filter(f => f.trim()),
        curriculum: bootcampData.curriculum.split('\n').filter(c => c.trim())
      } : bootcamp
    ));
    setEditingBootcamp(null);
  };

  const handleDeleteBootcamp = (bootcampId) => {
    if (window.confirm('Are you sure you want to delete this bootcamp?')) {
      setBootcamps(bootcamps.filter(bootcamp => bootcamp.id !== bootcampId));
    }
  };

  const toggleEnrollment = (bootcampId) => {
    setBootcamps(bootcamps.map(bootcamp => 
      bootcamp.id === bootcampId ? { ...bootcamp, enrolled: !bootcamp.enrolled } : bootcamp
    ));
  };

  const formatDate = (dateString) => {
    if (dateString === 'Flexible') return 'Flexible';
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
          <h2 className="text-2xl font-bold text-gray-900">Bootcamp Programs</h2>
          <p className="text-gray-600">Intensive training programs for career transformation</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            {filteredBootcamps.length} programs available
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Bootcamp</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search bootcamps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
        
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

      {/* Bootcamps List */}
      <div className="space-y-6">
        {filteredBootcamps.map((bootcamp) => (
          <div
            key={bootcamp.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
              {/* Left: Image and Basic Info */}
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={bootcamp.thumbnail}
                    alt={bootcamp.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {bootcamp.enrolled && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Enrolled
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 flex space-x-1">
                    <button
                      onClick={() => setEditingBootcamp(bootcamp)}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
                    >
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() => handleDeleteBootcamp(bootcamp.id)}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {bootcamp.type.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{bootcamp.rating}</span>
                    <span className="text-sm text-gray-500">({bootcamp.graduates} graduates)</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{bootcamp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="w-4 h-4" />
                      <span>{bootcamp.jobPlacementRate}% placement</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle: Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{bootcamp.title}</h3>
                  <p className="text-gray-600 mb-3">{bootcamp.description}</p>
                  <div className="text-sm text-gray-600">
                    <div className="mb-1"><strong>Level:</strong> {bootcamp.level}</div>
                    <div className="mb-1"><strong>Schedule:</strong> {bootcamp.schedule}</div>
                    <div className="mb-1">
                      <strong>Duration:</strong> {formatDate(bootcamp.startDate)} - {formatDate(bootcamp.endDate)}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {bootcamp.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Curriculum Highlights:</h4>
                  <ul className="space-y-1">
                    {bootcamp.curriculum.slice(0, 3).map((item, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                    {bootcamp.curriculum.length > 3 && (
                      <li className="text-sm text-gray-500">
                        +{bootcamp.curriculum.length - 3} more modules
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Right: Pricing and Action */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">${bootcamp.price.toLocaleString()}</span>
                      <span className="text-lg text-gray-500 line-through">${bootcamp.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Save {calculateSavings(bootcamp.originalPrice, bootcamp.price)}% 
                      (${(bootcamp.originalPrice - bootcamp.price).toLocaleString()})
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-between">
                      <span>Job Placement Rate:</span>
                      <span className="font-medium text-green-600">{bootcamp.jobPlacementRate}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Average Salary:</span>
                      <span className="font-medium">${bootcamp.averageSalary.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleEnrollment(bootcamp.id)}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      bootcamp.enrolled 
                        ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                        : 'bg-yellow-400 text-black hover:bg-yellow-500'
                    }`}
                  >
                    {bootcamp.enrolled ? 'Access Bootcamp' : 'Enroll Now'}
                  </button>

                  {!bootcamp.enrolled && (
                    <div className="mt-3 space-y-2">
                      <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        View Full Curriculum
                      </button>
                      <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Schedule Info Session
                      </button>
                    </div>
                  )}
                </div>

                <div className="text-xs text-gray-500 text-center">
                  💰 Financing options available<br />
                  🎓 Money-back guarantee<br />
                  📞 Free career counseling
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBootcamps.length === 0 && (
        <div className="text-center py-12">
          <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No bootcamps found</h3>
          <p className="text-gray-600">Try adjusting your search or type filter.</p>
        </div>
      )}

      {/* Add Bootcamp Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Bootcamp</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleAddBootcamp({
                title: formData.get('title'),
                description: formData.get('description'),
                type: formData.get('type'),
                duration: formData.get('duration'),
                schedule: formData.get('schedule'),
                startDate: formData.get('startDate'),
                endDate: formData.get('endDate'),
                level: formData.get('level'),
                price: parseInt(formData.get('price')) || 0,
                originalPrice: parseInt(formData.get('originalPrice')) || 0,
                jobPlacementRate: parseInt(formData.get('jobPlacementRate')) || 0,
                averageSalary: parseInt(formData.get('averageSalary')) || 0,
                features: formData.get('features'),
                curriculum: formData.get('curriculum')
              });
            }}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="title"
                    type="text"
                    placeholder="Bootcamp Title"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <select
                    name="type"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select Type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="self-paced">Self-paced</option>
                  </select>
                </div>
                <textarea
                  name="description"
                  placeholder="Bootcamp Description"
                  rows={3}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    name="duration"
                    type="text"
                    placeholder="Duration (e.g., 12 weeks)"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="startDate"
                    type="date"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="endDate"
                    type="date"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <input
                  name="schedule"
                  type="text"
                  placeholder="Schedule (e.g., Mon-Fri, 9AM-5PM)"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <select
                  name="level"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Beginner to Professional">Beginner to Professional</option>
                </select>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <input
                    name="price"
                    type="number"
                    placeholder="Price"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="originalPrice"
                    type="number"
                    placeholder="Original Price"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="jobPlacementRate"
                    type="number"
                    min="0"
                    max="100"
                    placeholder="Job Placement %"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="averageSalary"
                    type="number"
                    placeholder="Avg Salary"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <textarea
                  name="features"
                  placeholder="Key Features (one per line)"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <textarea
                  name="curriculum"
                  placeholder="Curriculum Items (one per line)"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
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
                  Add Bootcamp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Bootcamp Modal */}
      {editingBootcamp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Bootcamp</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleEditBootcamp({
                title: formData.get('title'),
                description: formData.get('description'),
                type: formData.get('type'),
                duration: formData.get('duration'),
                schedule: formData.get('schedule'),
                startDate: formData.get('startDate'),
                endDate: formData.get('endDate'),
                level: formData.get('level'),
                price: parseInt(formData.get('price')) || editingBootcamp.price,
                originalPrice: parseInt(formData.get('originalPrice')) || editingBootcamp.originalPrice,
                jobPlacementRate: parseInt(formData.get('jobPlacementRate')) || editingBootcamp.jobPlacementRate,
                averageSalary: parseInt(formData.get('averageSalary')) || editingBootcamp.averageSalary,
                features: formData.get('features'),
                curriculum: formData.get('curriculum')
              });
            }}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="title"
                    type="text"
                    defaultValue={editingBootcamp.title}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <select
                    name="type"
                    defaultValue={editingBootcamp.type}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="self-paced">Self-paced</option>
                  </select>
                </div>
                <textarea
                  name="description"
                  defaultValue={editingBootcamp.description}
                  rows={3}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    name="duration"
                    type="text"
                    defaultValue={editingBootcamp.duration}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="startDate"
                    type="date"
                    defaultValue={editingBootcamp.startDate}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="endDate"
                    type="date"
                    defaultValue={editingBootcamp.endDate}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <input
                  name="schedule"
                  type="text"
                  defaultValue={editingBootcamp.schedule}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <select
                  name="level"
                  defaultValue={editingBootcamp.level}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Beginner to Professional">Beginner to Professional</option>
                </select>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <input
                    name="price"
                    type="number"
                    defaultValue={editingBootcamp.price}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="originalPrice"
                    type="number"
                    defaultValue={editingBootcamp.originalPrice}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="jobPlacementRate"
                    type="number"
                    min="0"
                    max="100"
                    defaultValue={editingBootcamp.jobPlacementRate}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="averageSalary"
                    type="number"
                    defaultValue={editingBootcamp.averageSalary}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <textarea
                  name="features"
                  defaultValue={editingBootcamp.features.join('\n')}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <textarea
                  name="curriculum"
                  defaultValue={editingBootcamp.curriculum.join('\n')}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setEditingBootcamp(null)}
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

export default Bootcamp;