// Student Badges Store
// This file contains mock data and API functions for student badges and achievements

// Mock data for student badges
export const badgesMockData = {
  earnedBadges: [
    {
      id: 1,
      name: 'First Course Complete',
      description: 'Completed your first course',
      category: 'learning',
      icon: 'book-open',
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
      icon: 'zap',
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
      icon: 'target',
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
      icon: 'users',
      color: 'bg-purple-500',
      earnedDate: '2024-01-25',
      rarity: 'uncommon',
      points: 30
    }
  ],

  availableBadges: [
    {
      id: 5,
      name: 'Marathon Learner',
      description: 'Learn for 30 consecutive days',
      category: 'achievement',
      icon: 'trophy',
      color: 'bg-red-500',
      rarity: 'epic',
      points: 100,
      progress: 15,
      requirement: 30
    },
    {
      id: 6,
      name: 'Course Completionist',
      description: 'Complete 10 courses',
      category: 'learning',
      icon: 'book-open',
      color: 'bg-blue-600',
      rarity: 'uncommon',
      points: 50,
      progress: 5,
      requirement: 10
    }
  ],

  lockedBadges: [
    {
      id: 7,
      name: 'Legendary Learner',
      description: 'Complete 50 courses with perfect scores',
      category: 'special',
      icon: 'crown',
      color: 'bg-yellow-600',
      rarity: 'legendary',
      points: 500,
      requirement: 'Complete 25 courses first'
    }
  ],

  badgeStats: {
    totalEarned: 12,
    totalPoints: 180,
    completionRate: 45,
    nextBadge: 'Marathon Learner',
    nextBadgeProgress: 50
  }
};

// API Service Functions for Badges
export const badgesAPI = {
  // Get earned badges
  async getEarnedBadges() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/badges/earned').then(res => res.json());
    return Promise.resolve(badgesMockData.earnedBadges);
  },

  // Get available badges
  async getAvailableBadges() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/badges/available').then(res => res.json());
    return Promise.resolve(badgesMockData.availableBadges);
  },

  // Get locked badges
  async getLockedBadges() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/badges/locked').then(res => res.json());
    return Promise.resolve(badgesMockData.lockedBadges);
  },

  // Get badge statistics
  async getBadgeStats() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/badges/stats').then(res => res.json());
    return Promise.resolve(badgesMockData.badgeStats);
  },

  // Check badge progress
  async checkBadgeProgress(badgeId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/badges/${badgeId}/progress`).then(res => res.json());
    const badge = badgesMockData.availableBadges.find(b => b.id === badgeId);
    return Promise.resolve(badge ? { progress: badge.progress, requirement: badge.requirement } : null);
  },

  // Claim earned badge
  async claimBadge(badgeId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/badges/${badgeId}/claim`, {
    //   method: 'POST'
    // }).then(res => res.json());
    console.log(`Claiming badge ${badgeId}`);
    return Promise.resolve({ success: true });
  }
};

// Utility functions for badges
export const badgesUtils = {
  getRarityColor: (rarity) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800';
      case 'uncommon': return 'bg-green-100 text-green-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  },

  calculateProgress: (current, required) => {
    if (required === 0) return 100;
    return Math.min(Math.round((current / required) * 100), 100);
  },

  filterByCategory: (badges, category) => {
    if (category === 'all') return badges;
    return badges.filter(badge => badge.category === category);
  },

  searchBadges: (badges, searchTerm) => {
    if (!searchTerm) return badges;
    return badges.filter(badge =>
      badge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      badge.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  sortBadges: (badges, sortBy) => {
    switch (sortBy) {
      case 'date-earned':
        return [...badges].sort((a, b) => new Date(b.earnedDate) - new Date(a.earnedDate));
      case 'points':
        return [...badges].sort((a, b) => b.points - a.points);
      case 'rarity':
        const rarityOrder = { common: 1, uncommon: 2, rare: 3, epic: 4, legendary: 5 };
        return [...badges].sort((a, b) => rarityOrder[b.rarity] - rarityOrder[a.rarity]);
      case 'name':
        return [...badges].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return badges;
    }
  },

  getTotalPoints: (badges) => {
    return badges.reduce((total, badge) => total + badge.points, 0);
  },

  getNextMilestone: (currentPoints) => {
    const milestones = [100, 250, 500, 1000, 2500, 5000];
    return milestones.find(milestone => milestone > currentPoints) || null;
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
  data: badgesMockData,
  api: badgesAPI,
  utils: badgesUtils
};