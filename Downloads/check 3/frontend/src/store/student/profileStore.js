// Student Profile Store
// This file contains mock data and API functions for student profile management

// Mock data for student profile
export const profileMockData = {
  profile: {
    id: 1,
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'student@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1995-06-15',
    country: 'United States',
    timezone: 'America/New_York',
    language: 'English',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
    title: 'Passionate learner exploring web development and data science.',
    skills: 'JavaScript, React, Python, HTML/CSS, Git, Data Analysis',
    biography: `Meet Alex Johnson, a dedicated and enthusiastic learner with a passion for technology and continuous growth. Currently diving deep into web development and data science, Alex brings curiosity and determination to every learning opportunity. With a strong foundation in programming fundamentals and a keen interest in modern web technologies, Alex is committed to building practical skills that can make a real-world impact. Whether it's mastering new frameworks, understanding complex algorithms, or working on hands-on projects, Alex approaches each challenge with enthusiasm and a growth mindset.`,
    linkedinLink: 'https://linkedin.com/in/alexjohnson',
    joinDate: '2024-01-15',
    location: 'New York, USA',
    bio: 'Passionate learner exploring web development and data science.'
  }
};

// API Service Functions for Profile
export const profileAPI = {
  // Get user profile
  async getProfile() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/profile').then(res => res.json());
    return Promise.resolve(profileMockData.profile);
  },

  // Update user profile
  async updateProfile(profileData) {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/profile', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(profileData)
    // }).then(res => res.json());
    console.log('Updating profile:', profileData);
    return Promise.resolve({ success: true, data: profileData });
  },

  // Upload profile photo
  async uploadPhoto(file) {
    // TODO: Replace with actual API call
    // const formData = new FormData();
    // formData.append('photo', file);
    // return await fetch('/api/student/profile/photo', {
    //   method: 'POST',
    //   body: formData
    // }).then(res => res.json());
    console.log('Uploading photo:', file);
    return Promise.resolve({ success: true, photoUrl: 'new-photo-url.jpg' });
  },

  // Delete account
  async deleteAccount() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/profile', {
    //   method: 'DELETE'
    // }).then(res => res.json());
    console.log('Deleting account');
    return Promise.resolve({ success: true });
  }
};

// Utility functions for profile
export const profileUtils = {
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  validatePhone: (phone) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    return phoneRegex.test(phone);
  },

  formatJoinDate: (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  },

  getProfileCompleteness: (profile) => {
    const requiredFields = ['firstName', 'lastName', 'email', 'bio'];
    const optionalFields = ['phone', 'location', 'skills', 'linkedinLink'];
    
    const completedRequired = requiredFields.filter(field => profile[field] && profile[field].trim()).length;
    const completedOptional = optionalFields.filter(field => profile[field] && profile[field].trim()).length;
    
    const totalFields = requiredFields.length + optionalFields.length;
    const completedFields = completedRequired + completedOptional;
    
    return Math.round((completedFields / totalFields) * 100);
  }
};

export default {
  data: profileMockData,
  api: profileAPI,
  utils: profileUtils
};