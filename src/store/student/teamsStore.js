// Student Teams Store
// This file contains mock data and API functions for student teams management

// Mock data for student teams
export const teamsMockData = {
  myTeams: [
    {
      id: 1,
      name: 'Web Dev Warriors',
      description: 'Full-stack developers working on real-world projects',
      members: 12,
      maxMembers: 15,
      role: 'Admin',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      category: 'Programming',
      isPrivate: false,
      lastActivity: '2 hours ago',
      activeProjects: 3,
      completedProjects: 8,
      joinedDate: '2024-01-10',
      members_avatars: [
        'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
      ]
    },
    {
      id: 2,
      name: 'Data Science Collective',
      description: 'Analyzing data and building ML models together',
      members: 8,
      maxMembers: 10,
      role: 'Member',
      avatar: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      category: 'Data Science',
      isPrivate: true,
      lastActivity: '1 day ago',
      activeProjects: 2,
      completedProjects: 5,
      joinedDate: '2024-01-08',
      members_avatars: [
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
      ]
    }
  ],

  invitations: [
    {
      id: 1,
      teamName: 'Mobile App Developers',
      description: 'Building cross-platform mobile applications',
      invitedBy: 'Sarah Johnson',
      invitedDate: '2024-01-20',
      members: 15,
      category: 'Programming',
      avatar: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      expiresAt: '2024-02-20'
    },
    {
      id: 2,
      teamName: 'AI Research Group',
      description: 'Exploring cutting-edge AI and machine learning',
      invitedBy: 'Dr. Mike Chen',
      invitedDate: '2024-01-18',
      members: 8,
      category: 'AI/ML',
      avatar: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      expiresAt: '2024-02-18'
    }
  ],

  discoverTeams: [
    {
      id: 1,
      name: 'Blockchain Builders',
      description: 'Learning and building decentralized applications',
      members: 20,
      maxMembers: 25,
      category: 'Blockchain',
      isPrivate: false,
      avatar: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      tags: ['Solidity', 'Web3', 'DeFi'],
      rating: 4.8,
      activeProjects: 5
    },
    {
      id: 2,
      name: 'Cybersecurity Squad',
      description: 'Ethical hacking and security research',
      members: 12,
      maxMembers: 15,
      category: 'Security',
      isPrivate: true,
      avatar: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      tags: ['Penetration Testing', 'Network Security', 'Incident Response'],
      rating: 4.9,
      activeProjects: 3
    }
  ],

  teamStats: {
    totalTeams: 3,
    totalMembers: 35,
    activeProjects: 5,
    completedProjects: 13,
    averageRating: 4.7
  }
};

// API Service Functions for Teams
export const teamsAPI = {
  // Get user's teams
  async getMyTeams() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/teams/my-teams').then(res => res.json());
    return Promise.resolve(teamsMockData.myTeams);
  },

  // Get team invitations
  async getInvitations() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/teams/invitations').then(res => res.json());
    return Promise.resolve(teamsMockData.invitations);
  },

  // Get discoverable teams
  async getDiscoverTeams(filters = {}) {
    // TODO: Replace with actual API call
    // const queryParams = new URLSearchParams(filters);
    // return await fetch(`/api/student/teams/discover?${queryParams}`).then(res => res.json());
    return Promise.resolve(teamsMockData.discoverTeams);
  },

  // Join a team
  async joinTeam(teamId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/teams/${teamId}/join`, {
    //   method: 'POST'
    // }).then(res => res.json());
    console.log(`Joining team ${teamId}`);
    return Promise.resolve({ success: true });
  },

  // Leave a team
  async leaveTeam(teamId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/teams/${teamId}/leave`, {
    //   method: 'POST'
    // }).then(res => res.json());
    console.log(`Leaving team ${teamId}`);
    return Promise.resolve({ success: true });
  },

  // Accept team invitation
  async acceptInvitation(invitationId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/teams/invitations/${invitationId}/accept`, {
    //   method: 'POST'
    // }).then(res => res.json());
    console.log(`Accepting invitation ${invitationId}`);
    return Promise.resolve({ success: true });
  },

  // Decline team invitation
  async declineInvitation(invitationId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/teams/invitations/${invitationId}/decline`, {
    //   method: 'POST'
    // }).then(res => res.json());
    console.log(`Declining invitation ${invitationId}`);
    return Promise.resolve({ success: true });
  },

  // Create a new team
  async createTeam(teamData) {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/teams', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(teamData)
    // }).then(res => res.json());
    console.log('Creating team:', teamData);
    return Promise.resolve({ success: true, teamId: Date.now() });
  },

  // Get team details
  async getTeamDetails(teamId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/teams/${teamId}`).then(res => res.json());
    const team = teamsMockData.myTeams.find(t => t.id === teamId) ||
                 teamsMockData.discoverTeams.find(t => t.id === teamId);
    return Promise.resolve(team);
  },

  // Get team statistics
  async getTeamStats() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/teams/stats').then(res => res.json());
    return Promise.resolve(teamsMockData.teamStats);
  }
};

// Utility functions for teams
export const teamsUtils = {
  getRoleColor: (role) => {
    switch (role) {
      case 'Admin': return 'bg-yellow-100 text-yellow-800';
      case 'Moderator': return 'bg-blue-100 text-blue-800';
      case 'Member': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  },

  getRoleIcon: (role) => {
    switch (role) {
      case 'Admin': return 'crown';
      case 'Moderator': return 'settings';
      case 'Member': return 'user';
      default: return 'user';
    }
  },

  filterTeams: (teams, filters) => {
    let filteredTeams = [...teams];

    if (filters.category && filters.category !== 'all') {
      filteredTeams = filteredTeams.filter(team => team.category === filters.category);
    }

    if (filters.privacy && filters.privacy !== 'all') {
      const isPrivate = filters.privacy === 'private';
      filteredTeams = filteredTeams.filter(team => team.isPrivate === isPrivate);
    }

    if (filters.search) {
      filteredTeams = filteredTeams.filter(team =>
        team.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        team.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    return filteredTeams;
  },

  searchTeams: (teams, searchTerm) => {
    if (!searchTerm) return teams;
    return teams.filter(team =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (team.tags && team.tags.some(tag => 
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    );
  },

  sortTeams: (teams, sortBy) => {
    switch (sortBy) {
      case 'name':
        return [...teams].sort((a, b) => a.name.localeCompare(b.name));
      case 'members':
        return [...teams].sort((a, b) => b.members - a.members);
      case 'activity':
        return [...teams].sort((a, b) => {
          const aTime = new Date(a.lastActivity || 0);
          const bTime = new Date(b.lastActivity || 0);
          return bTime - aTime;
        });
      case 'projects':
        return [...teams].sort((a, b) => (b.activeProjects || 0) - (a.activeProjects || 0));
      default:
        return teams;
    }
  },

  calculateTeamProgress: (team) => {
    const totalProjects = (team.activeProjects || 0) + (team.completedProjects || 0);
    if (totalProjects === 0) return 0;
    return Math.round(((team.completedProjects || 0) / totalProjects) * 100);
  },

  formatLastActivity: (lastActivity) => {
    if (!lastActivity) return 'No recent activity';
    
    const now = new Date();
    const activityDate = new Date(lastActivity);
    const diffInHours = Math.floor((now - activityDate) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Active now';
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    
    return activityDate.toLocaleDateString();
  },

  formatDate: (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  },

  isInvitationExpired: (expiresAt) => {
    return new Date() > new Date(expiresAt);
  }
};

export default {
  data: teamsMockData,
  api: teamsAPI,
  utils: teamsUtils
};