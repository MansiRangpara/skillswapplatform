import React, { useState } from 'react';
import { Search, Calendar, Clock, User, Video, MapPin, Star, DollarSign, Plus, Edit, Eye } from 'lucide-react';

const TutorBooking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const tabs = [
    { id: 'upcoming', name: 'Upcoming', count: 5 },
    { id: 'completed', name: 'Completed', count: 23 },
    { id: 'availability', name: 'Availability', count: null },
  ];

  const upcomingSessions = [
    {
      id: 1,
      student: 'Alex Johnson',
      studentAvatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      subject: 'Advanced JavaScript Concepts',
      date: '2024-01-25',
      time: '2:00 PM - 3:30 PM',
      duration: 90,
      type: 'online',
      price: 75,
      status: 'confirmed',
      meetingLink: 'https://zoom.us/j/123456789',
      notes: 'Focus on closures, async/await, and ES6+ features',
      studentLevel: 'Intermediate'
    },
    {
      id: 2,
      student: 'Sarah Wilson',
      studentAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      subject: 'React Hooks Deep Dive',
      date: '2024-01-27',
      time: '10:00 AM - 11:30 AM',
      duration: 90,
      type: 'online',
      price: 80,
      status: 'confirmed',
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      notes: 'Custom hooks, useContext, useReducer patterns',
      studentLevel: 'Advanced'
    },
    {
      id: 3,
      student: 'Mike Chen',
      studentAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      subject: 'Data Structures & Algorithms',
      date: '2024-01-28',
      time: '3:00 PM - 4:30 PM',
      duration: 90,
      type: 'in-person',
      price: 100,
      status: 'pending',
      location: 'Central Library, Room 204',
      notes: 'Binary trees, graph algorithms, dynamic programming',
      studentLevel: 'Beginner'
    }
  ];

  const completedSessions = [
    {
      id: 4,
      student: 'Emily Davis',
      studentAvatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      subject: 'Python Fundamentals',
      date: '2024-01-20',
      time: '1:00 PM - 2:30 PM',
      duration: 90,
      type: 'online',
      price: 70,
      status: 'completed',
      rating: 5,
      feedback: 'Excellent session! Very clear explanations.',
      earnings: 63 // After platform fee
    },
    {
      id: 5,
      student: 'John Smith',
      studentAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      subject: 'Database Design Principles',
      date: '2024-01-18',
      time: '4:00 PM - 5:30 PM',
      duration: 90,
      type: 'online',
      price: 85,
      status: 'completed',
      rating: 5,
      feedback: 'Great practical examples and hands-on approach.',
      earnings: 76.50
    }
  ];

  const availabilitySlots = [
    { day: 'Monday', slots: ['9:00 AM', '2:00 PM', '4:00 PM'] },
    { day: 'Tuesday', slots: ['10:00 AM', '1:00 PM', '3:00 PM'] },
    { day: 'Wednesday', slots: ['9:00 AM', '11:00 AM', '2:00 PM'] },
    { day: 'Thursday', slots: ['10:00 AM', '1:00 PM', '4:00 PM'] },
    { day: 'Friday', slots: ['9:00 AM', '2:00 PM'] },
    { day: 'Saturday', slots: ['10:00 AM', '1:00 PM'] },
    { day: 'Sunday', slots: [] }
  ];

  const getCurrentSessions = () => {
    switch (selectedTab) {
      case 'upcoming': return upcomingSessions;
      case 'completed': return completedSessions;
      default: return [];
    }
  };

  const filteredSessions = getCurrentSessions().filter(session =>
    session.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const totalEarnings = completedSessions.reduce((sum, session) => sum + (session.earnings || 0), 0);
  const averageRating = completedSessions.reduce((sum, session) => sum + (session.rating || 0), 0) / completedSessions.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Tutor Booking</h2>
          <p className="text-gray-600">Manage your one-on-one tutoring sessions</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-gray-600">This Month Earnings</div>
            <div className="text-xl font-bold text-green-600">${totalEarnings.toFixed(2)}</div>
          </div>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Availability</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{upcomingSessions.length}</div>
          <div className="text-sm text-gray-600">Upcoming Sessions</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-50 text-green-600">
              <User className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{completedSessions.length}</div>
          <div className="text-sm text-gray-600">Completed Sessions</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">${totalEarnings.toFixed(2)}</div>
          <div className="text-sm text-gray-600">Total Earnings</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-yellow-50 text-yellow-600">
              <Star className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
          <div className="text-sm text-gray-600">Average Rating</div>
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
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
              {tab.count !== null && (
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  selectedTab === tab.id ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {selectedTab !== 'availability' && (
        <>
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search sessions or students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Sessions List */}
          <div className="space-y-4">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Session Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4">
                      <img
                        src={session.studentAvatar}
                        alt={session.student}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{session.subject}</h3>
                        <p className="text-sm text-gray-600 mb-2">with {session.student}</p>
                        
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(session.date)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{session.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {session.type === 'online' ? <Video className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                            <span className="capitalize">{session.type}</span>
                            {session.location && <span>• {session.location}</span>}
                          </div>
                        </div>

                        {session.notes && (
                          <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm font-medium text-gray-900 mb-1">Session Notes:</div>
                            <div className="text-sm text-gray-600">{session.notes}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-600">Student Level</div>
                      <div className="font-medium">{session.studentLevel}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-medium">{session.duration} minutes</div>
                    </div>
                    
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                        {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                      </span>
                    </div>

                    {session.feedback && (
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm font-medium text-blue-900 mb-1">Student Feedback:</div>
                        <div className="text-sm text-blue-700">{session.feedback}</div>
                        {session.rating && (
                          <div className="flex items-center space-x-1 mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Price and Actions */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-lg font-bold text-gray-900">${session.price}</div>
                      {session.earnings && (
                        <div className="text-sm text-green-600">Earned: ${session.earnings}</div>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      {selectedTab === 'upcoming' && (
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedTab === 'availability' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Availability</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {availabilitySlots.map((day, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">{day.day}</h4>
                <div className="space-y-2">
                  {day.slots.length > 0 ? (
                    day.slots.map((slot, slotIndex) => (
                      <div key={slotIndex} className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                        <span className="text-sm text-green-800">{slot}</span>
                        <button className="text-red-600 hover:text-red-700">
                          <span className="text-xs">Remove</span>
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-500 italic">No availability</div>
                  )}
                  <button className="w-full text-sm text-blue-600 hover:text-blue-700 border border-blue-200 rounded-lg py-2">
                    + Add Time Slot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab !== 'availability' && filteredSessions.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No sessions found</h3>
          <p className="text-gray-600">
            {selectedTab === 'upcoming' 
              ? "You don't have any upcoming tutoring sessions."
              : "You haven't completed any tutoring sessions yet."
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default TutorBooking;