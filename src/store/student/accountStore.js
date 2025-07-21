// Student Account Store
// This file contains mock data and API functions for student account settings

// Mock data for student account settings
export const accountMockData = {
  accountSettings: {
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'student@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1995-06-15',
    country: 'United States',
    timezone: 'America/New_York',
    language: 'English',
    bio: 'Passionate learner exploring web development and data science.'
  },

  securitySettings: {
    twoFactorEnabled: true,
    lastPasswordChange: '2024-01-15',
    activeSessions: [
      {
        id: 1,
        device: 'Chrome on Windows',
        location: 'New York, NY',
        lastActive: '2024-01-23T10:30:00Z',
        current: true
      },
      {
        id: 2,
        device: 'iPhone App',
        location: 'New York, NY',
        lastActive: '2024-01-22T15:45:00Z',
        current: false
      }
    ]
  },

  notificationSettings: {
    emailNotifications: {
      courseUpdates: true,
      newCourses: true,
      promotions: false,
      reminders: true,
      achievements: true
    },
    pushNotifications: {
      courseReminders: true,
      liveClasses: true,
      messages: true,
      achievements: false
    },
    smsNotifications: {
      importantUpdates: false,
      securityAlerts: true
    }
  },

  privacySettings: {
    profileVisibility: 'public',
    showProgress: true,
    showAchievements: true,
    allowMessages: true,
    dataCollection: true,
    marketingEmails: false
  },

  billingInfo: {
    paymentMethods: [
      {
        id: 1,
        type: 'card',
        name: 'Visa ****1234',
        expiryDate: '12/25',
        isDefault: true
      },
      {
        id: 2,
        type: 'paypal',
        name: 'PayPal',
        email: 'student@example.com',
        isDefault: false
      }
    ],
    billingHistory: [
      {
        id: 1,
        description: 'Web Development Course',
        amount: 89.00,
        date: '2024-01-10',
        status: 'paid'
      },
      {
        id: 2,
        description: 'UI/UX Design Bundle',
        amount: 149.00,
        date: '2024-01-08',
        status: 'paid'
      }
    ]
  }
};

// API Service Functions for Account
export const accountAPI = {
  // Get account settings
  async getAccountSettings() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account/settings').then(res => res.json());
    return Promise.resolve(accountMockData.accountSettings);
  },

  // Update account settings
  async updateAccountSettings(settings) {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account/settings', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(settings)
    // }).then(res => res.json());
    console.log('Updating account settings:', settings);
    return Promise.resolve({ success: true });
  },

  // Change password
  async changePassword(currentPassword, newPassword) {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account/password', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ currentPassword, newPassword })
    // }).then(res => res.json());
    console.log('Changing password');
    return Promise.resolve({ success: true });
  },

  // Get security settings
  async getSecuritySettings() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account/security').then(res => res.json());
    return Promise.resolve(accountMockData.securitySettings);
  },

  // Enable/disable two-factor authentication
  async toggleTwoFactor(enabled) {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account/2fa', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ enabled })
    // }).then(res => res.json());
    console.log(`${enabled ? 'Enabling' : 'Disabling'} two-factor authentication`);
    return Promise.resolve({ success: true });
  },

  // Get active sessions
  async getActiveSessions() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account/sessions').then(res => res.json());
    return Promise.resolve(accountMockData.securitySettings.activeSessions);
  },

  // Revoke session
  async revokeSession(sessionId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/account/sessions/${sessionId}`, {
    //   method: 'DELETE'
    // }).then(res => res.json());
    console.log(`Revoking session ${sessionId}`);
    return Promise.resolve({ success: true });
  },

  // Get notification settings
  async getNotificationSettings() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account/notifications').then(res => res.json());
    return Promise.resolve(accountMockData.notificationSettings);
  },

  // Update notification settings
  async updateNotificationSettings(settings) {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account/notifications', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(settings)
    // }).then(res => res.json());
    console.log('Updating notification settings:', settings);
    return Promise.resolve({ success: true });
  },

  // Get privacy settings
  async getPrivacySettings() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account/privacy').then(res => res.json());
    return Promise.resolve(accountMockData.privacySettings);
  },

  // Update privacy settings
  async updatePrivacySettings(settings) {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account/privacy', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(settings)
    // }).then(res => res.json());
    console.log('Updating privacy settings:', settings);
    return Promise.resolve({ success: true });
  },

  // Get billing information
  async getBillingInfo() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account/billing').then(res => res.json());
    return Promise.resolve(accountMockData.billingInfo);
  },

  // Add payment method
  async addPaymentMethod(paymentData) {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account/payment-methods', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(paymentData)
    // }).then(res => res.json());
    console.log('Adding payment method:', paymentData);
    return Promise.resolve({ success: true, paymentMethodId: Date.now() });
  },

  // Remove payment method
  async removePaymentMethod(paymentMethodId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/account/payment-methods/${paymentMethodId}`, {
    //   method: 'DELETE'
    // }).then(res => res.json());
    console.log(`Removing payment method ${paymentMethodId}`);
    return Promise.resolve({ success: true });
  },

  // Delete account
  async deleteAccount(password, reason) {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/account', {
    //   method: 'DELETE',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ password, reason })
    // }).then(res => res.json());
    console.log('Deleting account:', reason);
    return Promise.resolve({ success: true });
  }
};

// Utility functions for account
export const accountUtils = {
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  validatePhone: (phone) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    return phoneRegex.test(phone);
  },

  validatePassword: (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      isValid: password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar,
      errors: {
        minLength: password.length < minLength,
        upperCase: !hasUpperCase,
        lowerCase: !hasLowerCase,
        numbers: !hasNumbers,
        specialChar: !hasSpecialChar
      }
    };
  },

  formatLastActive: (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Active now';
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    
    return date.toLocaleDateString();
  },

  getPasswordStrength: (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

    if (score < 2) return { strength: 'weak', color: 'text-red-600' };
    if (score < 4) return { strength: 'medium', color: 'text-yellow-600' };
    return { strength: 'strong', color: 'text-green-600' };
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
  }
};

export default {
  data: accountMockData,
  api: accountAPI,
  utils: accountUtils
};