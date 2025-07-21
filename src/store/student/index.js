// Student Store Index
// This file exports all student store modules for easy importing

// Import all store modules
import profileStoreModule from './profileStore';
import coursesStoreModule from './coursesStore';
import dashboardStoreModule from './dashboardStore';
import messagesStoreModule from './messagesStore';
import wishlistStoreModule from './wishlistStore';
import badgesStoreModule from './badgesStore';
import purchaseHistoryStoreModule from './purchaseHistoryStore';
import teamsStoreModule from './teamsStore';
import accountStoreModule from './accountStore';
import ebooksStoreModule from './ebooksStore';

// Export the stores with proper names
export const profileStore = profileStoreModule;
export const coursesStore = coursesStoreModule;
export const dashboardStore = dashboardStoreModule;
export const messagesStore = messagesStoreModule;
export const wishlistStore = wishlistStoreModule;
export const badgesStore = badgesStoreModule;
export const purchaseHistoryStore = purchaseHistoryStoreModule;
export const teamsStore = teamsStoreModule;
export const accountStore = accountStoreModule;
export const ebooksStore = ebooksStoreModule;

// Combined API object for easy access
export const studentAPI = {
  profile: profileStore.api,
  courses: coursesStore.api,
  dashboard: dashboardStore.api,
  messages: messagesStore.api,
  wishlist: wishlistStore.api,
  badges: badgesStore.api,
  purchaseHistory: purchaseHistoryStore.api,
  teams: teamsStore.api,
  account: accountStore.api,
  ebooks: ebooksStore.api
};

// Combined utils object for easy access
export const studentUtils = {
  profile: profileStore.utils,
  courses: coursesStore.utils,
  dashboard: dashboardStore.utils,
  messages: messagesStore.utils,
  wishlist: wishlistStore.utils,
  badges: badgesStore.utils,
  purchaseHistory: purchaseHistoryStore.utils,
  teams: teamsStore.utils,
  account: accountStore.utils,
  ebooks: ebooksStore.utils
};

// Combined mock data for testing
export const studentMockData = {
  profile: profileStore.data,
  courses: coursesStore.data,
  dashboard: dashboardStore.data,
  messages: messagesStore.data,
  wishlist: wishlistStore.data,
  badges: badgesStore.data,
  purchaseHistory: purchaseHistoryStore.data,
  teams: teamsStore.data,
  account: accountStore.data,
  ebooks: ebooksStore.data
};