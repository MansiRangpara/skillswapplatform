import React, { useState } from 'react';
import { Search, Award, Star, Trophy, Target, Zap, Crown, Shield, Heart, BookOpen, Users, Clock } from 'lucide-react';

const Badges = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTab, setSelectedTab] = useState('earned');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'learning', name: 'Learning' },
    { id: 'achievement', name: 'Achievement' },
    { id: 'community', name: 'Community' },
    { id: 'special', name: 'Special' },
  ];

  const tabs = [
    { id: 'earned', name: 'Earned', count: 12 },
    { id: 'available', name: 'Available', count: 25 },
    { id: 'locked', name: 'Locked', count: 8 },
  ];

  const earnedBadges = [
    {
      id: 1,
      name: 'First Course Complete',
      description: 'Completed your first course',
      category: 'learning',
      icon: BookOpen,
      color: 'bg-blue-500',
      earnedDate: '2024-01-15',
      rarity: 'common',
      points: 10
    },
    {
      id: 2,
      name: 'Week Streak',
      description: 'Learned for 7 consecutive days',
      category: 'achievement',
      icon: Zap,
      color: 'bg-yellow-500',
      earnedDate: '2024-01-20',
      rarity: 'common',
      points: 15
    },
    {
      id: 3,
      name: 'Quiz Master',
      description: 'Scored 100% on 5 quizzes',
      category: 'achievement',
      icon: Target,
      color: 'bg-green-500',
      earnedDate: '2024-01-22',
      rarity: 'uncommon',
      points: 25
    },
    {
      id: 4,
      name: 'Community Helper',
      description: 'Helped 10 fellow students',
      category: 'community',
      icon: Users,
      color: 'bg-purple-500',
      earnedDate: '2024-01-25',
      rarity: 'uncommon',
      points: 30
    },
    {
      id: 5,
      name: 'Speed Learner',
      description: 'Completed a course in under 24 hours',
      category: 'achievement',
      icon: Clock,
      color: 'bg-orange-500',
      earnedDate: '2024-01-28',
      rarity: 'rare',
      points: 50
    },
    {
      id: 6,
      name: 'Certificate Collector',
      description: 'Earned 5 certificates',
      category: 'learning',
      icon: Award,
      color: 'bg-indigo-500',
      earnedDate: '2024-02-01',
      rarity: 'rare',
      points: 75
    }
  ];

  const availableBadges = [
    {
      id: 7,
      name: 'Marathon Learner',
      description: 'Learn for 30 consecutive days',
      category: 'achievement',
      icon: Trophy,
      color: 'bg-red-500',
      rarity: 'epic',
      points: 100,
      progress: 15,
      requirement: 30
    },
    {
      id: 8,
      name: 'Course Completionist',
      description: 'Complete 10 courses',
      category: 'learning',
      icon: BookOpen,
      color: 'bg-blue-600',
      rarity: 'uncommon',
      points: 50,
      progress: 5,
      requirement: 10
    },
    {
      id: 9,
      name: 'Perfect Score',
      description: 'Score 100% on 20 quizzes',
      category: 'achievement',
      icon: Star,
      color: 'bg-yellow-600',
      rarity: 'rare',
      points: 75,
      progress: 5,
      requirement: 20
    },
    {
      id: 10,
      name: 'Team Player',
      description: 'Join 5 study groups',
      category: 'community',
      icon: Users,
      color: 'bg-green-600',
      rarity: 'common',
      points: 25,
      progress: 3,
      requirement: 5
    }
  ];

  const lockedBadges = [
    {
      id: 11,
      name: 'Legendary Learner',
      description: 'Complete 50 courses with perfect scores',
      category: 'special',
      icon: Crown,
      color: 'bg-yellow-600',
      rarity: 'legendary',
      points: 500,
      requirement: 'Complete 25 courses first'
    },
    {
      id: 12,
      name: 'Master Instructor',
      description: 'Become a top-rated instructor',
      category: 'special',
      icon: Shield,
      color: 'bg-purple-600',
      rarity: 'legendary',
      points: 1000,
      requirement: 'Instructor status required'
    }
  ];

  const getCurrentBadges = () => {
    switch (selectedTab) {
      case 'earned': return earnedBadges;
      case 'available': return availableBadges;
      case 'locked': return lockedBadges;
      default: return earnedBadges;
    }
  };

  const filteredBadges = getCurrentBadges().filter(badge => {
    const matchesSearch = badge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         badge.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || badge.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800';
      case 'uncommon': return 'bg-green-100 text-green-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-yellow-100 text-yellow-800';
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

  const totalPoints = earnedBadges.reduce((sum, badge) => sum + badge.points, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Badges & Achievements</h2>
          <p className="text-gray-600">Track your learning milestones and accomplishments</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-gray-600">Total Points</div>
            <div className="text-2xl font-bold text-yellow-600">{totalPoints}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Badges Earned</div>
            <div className="text-2xl font-bold text-gray-900">{earnedBadges.length}</div>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-6 text-black">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Achievement Progress</h3>
            <p className="text-black/80">Keep learning to unlock more badges!</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{Math.round((earnedBadges.length / (earnedBadges.length + availableBadges.length + lockedBadges.length)) * 100)}%</div>
            <div className="text-sm text-black/80">Completion Rate</div>
          </div>
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
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                selectedTab === tab.id ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-600'
              }`}>
                {tab.count}
              </span>
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
            placeholder="Search badges..."
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

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBadges.map((badge) => {
          const Icon = badge.icon;
          const isEarned = selectedTab === 'earned';
          const isLocked = selectedTab === 'locked';
          
          return (
            <div
              key={badge.id}
              className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ${
                isLocked ? 'opacity-60' : ''
              }`}
            >
              <div className="text-center">
                {/* Badge Icon */}
                <div className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isLocked ? 'grayscale' : ''
                }`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Badge Info */}
                <h3 className="font-semibold text-gray-900 mb-2">{badge.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{badge.description}</p>

                {/* Rarity and Points */}
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(badge.rarity)}`}>
                    {badge.rarity.charAt(0).toUpperCase() + badge.rarity.slice(1)}
                  </span>
                  <span className="text-sm font-medium text-yellow-600">
                    {badge.points} pts
                  </span>
                </div>

                {/* Progress Bar for Available Badges */}
                {selectedTab === 'available' && badge.progress !== undefined && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">Progress</span>
                      <span className="text-xs text-gray-900">{badge.progress}/{badge.requirement}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(badge.progress / badge.requirement) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Earned Date */}
                {isEarned && badge.earnedDate && (
                  <div className="text-xs text-gray-500">
                    Earned on {formatDate(badge.earnedDate)}
                  </div>
                )}

                {/* Lock Requirement */}
                {isLocked && badge.requirement && (
                  <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
                    <strong>Requirement:</strong> {badge.requirement}
                  </div>
                )}

                {/* Action Button */}
                {selectedTab === 'available' && (
                  <button className="mt-4 w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-medium">
                    Work Towards This
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredBadges.length === 0 && (
        <div className="text-center py-12">
          <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No badges found</h3>
          <p className="text-gray-600">Try adjusting your search or category filter.</p>
        </div>
      )}
    </div>
  );
};

export default Badges;