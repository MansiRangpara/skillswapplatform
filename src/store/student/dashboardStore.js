// Student Dashboard Store
// This file contains mock data and API functions for student dashboard overview

// Mock data for student dashboard
export const dashboardMockData = {
  stats: {
    coursesEnrolled: 12,
    hoursLearned: 48,
    certificatesEarned: 5,
    currentStreak: 15,
    completedCourses: 5,
    inProgressCourses: 7,
    overallProgress: 65,
    totalSpent: 567.00,
    totalSaved: 234.00
  },

  learningProgress: [
    { month: 'Jan', hours: 8, courses: 2 },
    { month: 'Feb', hours: 12, courses: 3 },
    { month: 'Mar', hours: 15, courses: 2 },
    { month: 'Apr', hours: 20, courses: 4 },
    { month: 'May', hours: 25, courses: 3 },
    { month: 'Jun', hours: 30, courses: 5 },
    { month: 'Jul', hours: 28, courses: 2 },
    { month: 'Aug', hours: 22, courses: 3 },
    { month: 'Sep', hours: 35, courses: 4 },
    { month: 'Oct', hours: 32, courses: 3 },
    { month: 'Nov', hours: 28, courses: 2 },
    { month: 'Dec', hours: 24, courses: 1 }
  ],

  recentActivity: [
    {
      id: 1,
      type: 'course_completed',
      title: 'Completed "Digital Marketing Strategy"',
      description: 'Earned certificate for completing the course',
      timestamp: '2024-01-15T10:30:00Z',
      icon: 'award'
    },
    {
      id: 2,
      type: 'lesson_completed',
      title: 'Completed lesson "React Hooks"',
      description: 'Advanced React Development course',
      timestamp: '2024-01-14T15:45:00Z',
      icon: 'book'
    },
    {
      id: 3,
      type: 'badge_earned',
      title: 'Earned "Week Streak" badge',
      description: 'Learned for 7 consecutive days',
      timestamp: '2024-01-13T09:20:00Z',
      icon: 'badge'
    }
  ],

  upcomingDeadlines: [
    {
      id: 1,
      title: 'React Project Submission',
      course: 'Advanced React Development',
      dueDate: '2024-01-30',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Data Analysis Assignment',
      course: 'Data Science with Python',
      dueDate: '2024-02-05',
      priority: 'medium'
    }
  ],

  achievements: [
    { name: 'First Course Complete', icon: 'award', earned: true, earnedDate: '2024-01-15' },
    { name: 'Week Streak', icon: 'trending-up', earned: true, earnedDate: '2024-01-20' },
    { name: 'Quiz Master', icon: 'trophy', earned: false },
    { name: 'Community Helper', icon: 'users', earned: false }
  ]
};

// API Service Functions for Dashboard
export const dashboardAPI = {
  // Get dashboard statistics
  async getDashboardStats() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/dashboard/stats').then(res => res.json());
    return Promise.resolve(dashboardMockData.stats);
  },

  // Get learning progress data
  async getLearningProgress(period = 'year') {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/dashboard/progress?period=${period}`).then(res => res.json());
    return Promise.resolve(dashboardMockData.learningProgress);
  },

  // Get recent activity
  async getRecentActivity(limit = 10) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/dashboard/activity?limit=${limit}`).then(res => res.json());
    return Promise.resolve(dashboardMockData.recentActivity);
  },

  // Get upcoming deadlines
  async getUpcomingDeadlines() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/dashboard/deadlines').then(res => res.json());
    return Promise.resolve(dashboardMockData.upcomingDeadlines);
  },

  // Get achievements
  async getAchievements() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/dashboard/achievements').then(res => res.json());
    return Promise.resolve(dashboardMockData.achievements);
  },

  // Update learning streak
  async updateLearningStreak() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/dashboard/streak', {
    //   method: 'POST'
    // }).then(res => res.json());
    console.log('Updating learning streak');
    return Promise.resolve({ success: true, newStreak: 16 });
  }
};

// Utility functions for dashboard
export const dashboardUtils = {
  formatLearningTime: (hours) => {
    if (hours < 1) return `${Math.round(hours * 60)} minutes`;
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  },

  getStreakStatus: (streakDays) => {
    if (streakDays >= 30) return { status: 'excellent', color: 'text-green-600', message: 'Amazing streak!' };
    if (streakDays >= 14) return { status: 'good', color: 'text-blue-600', message: 'Great consistency!' };
    if (streakDays >= 7) return { status: 'fair', color: 'text-yellow-600', message: 'Keep it up!' };
    return { status: 'needs-improvement', color: 'text-red-600', message: 'Start building your streak!' };
  },

  calculateProgressPercentage: (completed, total) => {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
  },

  formatActivityTime: (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    
    return date.toLocaleDateString();
  },

  getPriorityColor: (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  },

  getActivityIcon: (type) => {
    switch (type) {
      case 'course_completed': return 'award';
      case 'lesson_completed': return 'book';
      case 'badge_earned': return 'badge';
      case 'quiz_passed': return 'check-circle';
      default: return 'activity';
    }
  }
};

export default {
  data: dashboardMockData,
  api: dashboardAPI,
  utils: dashboardUtils
};