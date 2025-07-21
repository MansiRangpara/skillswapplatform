import React, { useState } from 'react';
import { Search, Users, Calendar, MessageSquare, FileText, Plus, Settings, Crown, User, Edit, Trash2 } from 'lucide-react';

const MyTeams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('my-teams');

  const tabs = [
    { id: 'my-teams', name: 'My Teams', count: 3 },
    { id: 'invitations', name: 'Invitations', count: 2 },
    { id: 'discover', name: 'Discover Teams', count: null },
  ];

  const myTeams = [
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
      members_avatars: [
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
      ]
    },
    {
      id: 3,
      name: 'UX Design Hub',
      description: 'Creating beautiful and functional user experiences',
      members: 6,
      maxMembers: 12,
      role: 'Moderator',
      avatar: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      category: 'Design',
      isPrivate: false,
      lastActivity: '3 days ago',
      activeProjects: 1,
      completedProjects: 3,
      members_avatars: [
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
        'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
      ]
    }
  ];

  const invitations = [
    {
      id: 1,
      teamName: 'Mobile App Developers',
      description: 'Building cross-platform mobile applications',
      invitedBy: 'Sarah Johnson',
      invitedDate: '2024-01-20',
      members: 15,
      category: 'Programming',
      avatar: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      teamName: 'AI Research Group',
      description: 'Exploring cutting-edge AI and machine learning',
      invitedBy: 'Dr. Mike Chen',
      invitedDate: '2024-01-18',
      members: 8,
      category: 'AI/ML',
      avatar: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const discoverTeams = [
    {
      id: 1,
      name: 'Blockchain Builders',
      description: 'Learning and building decentralized applications',
      members: 20,
      maxMembers: 25,
      category: 'Blockchain',
      isPrivate: false,
      avatar: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      tags: ['Solidity', 'Web3', 'DeFi']
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
      tags: ['Penetration Testing', 'Network Security', 'Incident Response']
    },
    {
      id: 3,
      name: 'Game Dev Studio',
      description: 'Creating indie games and interactive experiences',
      members: 18,
      maxMembers: 20,
      category: 'Game Development',
      isPrivate: false,
      avatar: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      tags: ['Unity', 'Unreal Engine', 'Game Design']
    }
  ];

  const [teams, setTeams] = useState(myTeams);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingTeam, setEditingTeam] = useState(null);

  const handleCreateTeam = (teamData) => {
    const newTeam = {
      id: Date.now(),
      ...teamData,
      members: 1,
      role: 'Admin',
      lastActivity: 'Just now',
      activeProjects: 0,
      completedProjects: 0,
      members_avatars: ['https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop']
    };
    setTeams([...teams, newTeam]);
    setShowCreateModal(false);
  };

  const handleEditTeam = (teamData) => {
    setTeams(teams.map(team => 
      team.id === editingTeam.id ? { ...team, ...teamData } : team
    ));
    setEditingTeam(null);
  };

  const handleDeleteTeam = (teamId) => {
    if (window.confirm('Are you sure you want to delete this team?')) {
      setTeams(teams.filter(team => team.id !== teamId));
    }
  };

  const handleJoinTeam = (teamId) => {
    console.log('Joining team:', teamId);
  };

  const handleLeaveTeam = (teamId) => {
    if (window.confirm('Are you sure you want to leave this team?')) {
      setTeams(teams.filter(team => team.id !== teamId));
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Admin': return <Crown className="w-4 h-4 text-yellow-500" />;
      case 'Moderator': return <Settings className="w-4 h-4 text-blue-500" />;
      default: return <User className="w-4 h-4 text-gray-500" />;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin': return 'bg-yellow-100 text-yellow-800';
      case 'Moderator': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTeams = myTeams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Teams</h2>
          <p className="text-gray-600">Collaborate with peers on projects and learning</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Create Team</span>
        </button>
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
              {tab.count !== null && (
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  selectedTab === tab.id ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Search */}
      {selectedTab !== 'invitations' && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder={selectedTab === 'discover' ? 'Search teams to join...' : 'Search my teams...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
      )}

      {/* Content */}
      {selectedTab === 'my-teams' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.filter(team =>
            team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            team.description.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((team) => (
            <div
              key={team.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={team.avatar}
                    alt={team.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{team.name}</h3>
                    <div className="flex items-center space-x-1">
                      {getRoleIcon(team.role)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(team.role)}`}>
                        {team.role}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <button
                    onClick={() => setEditingTeam(team)}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleDeleteTeam(team.id)}
                    className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
              
              {team.isPrivate && (
                  <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    Private
                  </div>
              )}

              <p className="text-sm text-gray-600 mb-4">{team.description}</p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Members</span>
                  <span className="font-medium">{team.members}/{team.maxMembers}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {team.members_avatars.map((avatar, index) => (
                      <img
                        key={index}
                        src={avatar}
                        alt="Member"
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    {team.members > team.members_avatars.length && (
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                        <span className="text-xs text-gray-600">+{team.members - team.members_avatars.length}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Active Projects</span>
                    <div className="font-medium text-blue-600">{team.activeProjects}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Completed</span>
                    <div className="font-medium text-green-600">{team.completedProjects}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span>Last activity: {team.lastActivity}</span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{team.category}</span>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-1 bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm">
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat</span>
                </button>
                <button
                  onClick={() => handleLeaveTeam(team.id)}
                  className="flex items-center justify-center space-x-1 border border-red-300 text-red-700 py-2 px-3 rounded-lg hover:bg-red-50 transition-colors text-sm"
                >
                  Leave
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedTab === 'invitations' && (
        <div className="space-y-4">
          {invitations.map((invitation) => (
            <div
              key={invitation.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <img
                    src={invitation.avatar}
                    alt={invitation.teamName}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{invitation.teamName}</h3>
                    <p className="text-sm text-gray-600 mb-2">{invitation.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Invited by {invitation.invitedBy}</span>
                      <span>{invitation.members} members</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{invitation.category}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Invited on {new Date(invitation.invitedDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm">
                    Accept
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedTab === 'discover' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discoverTeams.map((team) => (
            <div
              key={team.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={team.avatar}
                    alt={team.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{team.name}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{team.category}</span>
                  </div>
                </div>
                {team.isPrivate && (
                  <div className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    Private
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-4">{team.description}</p>

              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-gray-600">Members</span>
                <span className="font-medium">{team.members}/{team.maxMembers}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {team.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleJoinTeam(team.id)}
                className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-medium"
              >
                {team.isPrivate ? 'Request to Join' : 'Join Team'}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Empty States */}
      {selectedTab === 'my-teams' && teams.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No teams found</h3>
          <p className="text-gray-600 mb-4">Create your first team or join existing ones to start collaborating.</p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Create Team
          </button>
        </div>
      )}

      {selectedTab === 'invitations' && invitations.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No pending invitations</h3>
          <p className="text-gray-600">You don't have any team invitations at the moment.</p>
        </div>
      )}

      {/* Create Team Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Team</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleCreateTeam({
                name: formData.get('name'),
                description: formData.get('description'),
                category: formData.get('category'),
                maxMembers: parseInt(formData.get('maxMembers')) || 15,
                isPrivate: formData.get('isPrivate') === 'on',
                avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
              });
            }}>
              <div className="space-y-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Team Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <textarea
                  name="description"
                  placeholder="Team Description"
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
                  <option value="Programming">Programming</option>
                  <option value="Design">Design</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Business">Business</option>
                  <option value="Marketing">Marketing</option>
                </select>
                <input
                  name="maxMembers"
                  type="number"
                  min="2"
                  max="50"
                  placeholder="Maximum Members"
                  defaultValue="15"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <div className="flex items-center space-x-2">
                  <input
                    name="isPrivate"
                    type="checkbox"
                    id="isPrivate"
                    className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                  <label htmlFor="isPrivate" className="text-sm text-gray-700">
                    Make this team private
                  </label>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Create Team
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Team Modal */}
      {editingTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Team</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleEditTeam({
                name: formData.get('name'),
                description: formData.get('description'),
                category: formData.get('category'),
                maxMembers: parseInt(formData.get('maxMembers')) || editingTeam.maxMembers,
                isPrivate: formData.get('isPrivate') === 'on'
              });
            }}>
              <div className="space-y-4">
                <input
                  name="name"
                  type="text"
                  defaultValue={editingTeam.name}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <textarea
                  name="description"
                  defaultValue={editingTeam.description}
                  rows={3}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
                <select
                  name="category"
                  defaultValue={editingTeam.category}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="Programming">Programming</option>
                  <option value="Design">Design</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Business">Business</option>
                  <option value="Marketing">Marketing</option>
                </select>
                <input
                  name="maxMembers"
                  type="number"
                  min="2"
                  max="50"
                  defaultValue={editingTeam.maxMembers}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <div className="flex items-center space-x-2">
                  <input
                    name="isPrivate"
                    type="checkbox"
                    id="editIsPrivate"
                    defaultChecked={editingTeam.isPrivate}
                    className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                  <label htmlFor="editIsPrivate" className="text-sm text-gray-700">
                    Make this team private
                  </label>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setEditingTeam(null)}
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

export default MyTeams;