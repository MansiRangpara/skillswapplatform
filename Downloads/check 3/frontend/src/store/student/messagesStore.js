// Student Messages Store
// This file contains mock data and API functions for student messaging system

// Mock data for student messages
export const messagesMockData = {
  conversations: [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Instructor',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      lastMessage: 'Great progress on the React assignment!',
      timestamp: '2 min ago',
      unread: 2,
      online: true,
      course: 'Advanced React Development',
      type: 'instructor'
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Instructor',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      lastMessage: 'The data visualization project looks excellent',
      timestamp: '1 hour ago',
      unread: 0,
      online: false,
      course: 'Data Science with Python',
      type: 'instructor'
    },
    {
      id: 3,
      name: 'Study Group - Web Dev',
      role: 'Group',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      lastMessage: 'Alex: Thanks for sharing the resources!',
      timestamp: '3 hours ago',
      unread: 5,
      online: true,
      members: 12,
      type: 'group'
    }
  ],

  messages: [
    {
      id: 1,
      conversationId: 1,
      senderId: 2,
      senderName: 'Sarah Johnson',
      content: 'Hi Alex! I reviewed your React assignment and I\'m really impressed with your implementation of custom hooks.',
      timestamp: '10:30 AM',
      type: 'text',
      read: true
    },
    {
      id: 2,
      conversationId: 1,
      senderId: 1,
      senderName: 'You',
      content: 'Thank you so much! I spent a lot of time working on the useLocalStorage hook. Do you have any suggestions for improvement?',
      timestamp: '10:32 AM',
      type: 'text',
      read: true
    },
    {
      id: 3,
      conversationId: 1,
      senderId: 2,
      senderName: 'Sarah Johnson',
      content: 'Your implementation is solid! One suggestion would be to add error handling for cases where localStorage is not available.',
      timestamp: '10:35 AM',
      type: 'text',
      read: true
    }
  ],

  messageStats: {
    totalConversations: 8,
    unreadMessages: 7,
    instructorMessages: 5,
    groupMessages: 3,
    averageResponseTime: '2 hours'
  }
};

// API Service Functions for Messages
export const messagesAPI = {
  // Get all conversations
  async getConversations() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/messages/conversations').then(res => res.json());
    return Promise.resolve(messagesMockData.conversations);
  },

  // Get messages for a conversation
  async getMessages(conversationId, page = 1, limit = 50) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/messages/conversations/${conversationId}/messages?page=${page}&limit=${limit}`)
    //   .then(res => res.json());
    const messages = messagesMockData.messages.filter(m => m.conversationId === conversationId);
    return Promise.resolve(messages);
  },

  // Send a message
  async sendMessage(conversationId, content, type = 'text') {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/messages/conversations/${conversationId}/messages`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ content, type })
    // }).then(res => res.json());
    console.log(`Sending message to conversation ${conversationId}:`, content);
    return Promise.resolve({ 
      success: true, 
      message: {
        id: Date.now(),
        conversationId,
        senderId: 1,
        senderName: 'You',
        content,
        type,
        timestamp: new Date().toLocaleTimeString(),
        read: true
      }
    });
  },

  // Mark messages as read
  async markAsRead(conversationId, messageIds) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/messages/conversations/${conversationId}/read`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ messageIds })
    // }).then(res => res.json());
    console.log(`Marking messages as read for conversation ${conversationId}:`, messageIds);
    return Promise.resolve({ success: true });
  },

  // Search messages
  async searchMessages(query) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/messages/search?q=${encodeURIComponent(query)}`)
    //   .then(res => res.json());
    console.log('Searching messages:', query);
    return Promise.resolve([]);
  },

  // Get message statistics
  async getMessageStats() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/messages/stats').then(res => res.json());
    return Promise.resolve(messagesMockData.messageStats);
  },

  // Upload file attachment
  async uploadAttachment(file) {
    // TODO: Replace with actual API call
    // const formData = new FormData();
    // formData.append('file', file);
    // return await fetch('/api/student/messages/attachments', {
    //   method: 'POST',
    //   body: formData
    // }).then(res => res.json());
    console.log('Uploading attachment:', file.name);
    return Promise.resolve({ 
      success: true, 
      fileUrl: 'uploaded-file-url.pdf',
      fileName: file.name 
    });
  }
};

// Utility functions for messages
export const messagesUtils = {
  formatTimestamp: (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    
    return date.toLocaleDateString();
  },

  getTotalUnreadCount: (conversations) => {
    return conversations.reduce((total, conv) => total + conv.unread, 0);
  },

  filterConversations: (conversations, searchTerm) => {
    if (!searchTerm) return conversations;
    return conversations.filter(conv =>
      conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  groupMessagesByDate: (messages) => {
    const grouped = {};
    messages.forEach(message => {
      const date = new Date(message.timestamp).toDateString();
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(message);
    });
    return grouped;
  },

  isOnline: (lastSeen) => {
    if (!lastSeen) return false;
    const now = new Date();
    const lastSeenDate = new Date(lastSeen);
    const diffInMinutes = (now - lastSeenDate) / (1000 * 60);
    return diffInMinutes < 5; // Consider online if last seen within 5 minutes
  }
};

export default {
  data: messagesMockData,
  api: messagesAPI,
  utils: messagesUtils
};