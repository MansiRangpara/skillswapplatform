import React, { useState } from 'react';
import { Search, Calendar, Clock, User, Video, MapPin, Star, Filter, Plus } from 'lucide-react';

const BookedTuition = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [showBookModal, setShowBookModal] = useState(false);
  const [editingSession, setEditingSession] = useState(null);

  const filters = [
    { id: 'all', name: 'All Sessions' },
    { id: 'online', name: 'Online' },
    { id: 'in-person', name: 'In-Person' },
  ];

  const tabs = [
    { id: 'upcoming', name: 'Upcoming', count: 3 },
    { id: 'completed', name: 'Completed', count: 8 },
    { id: 'cancelled', name: 'Cancelled', count: 1 },
  ];

  const upcomingSessions = [
    {
      id: 1,
      subject: 'Advanced JavaScript Concepts',
      tutor: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 4.9,
        expertise: 'Full-Stack Developer'
      },
      date: '2024-01-25',
      time: '2:00 PM - 3:30 PM',
      duration: 90,
      type: 'online',
      price: 75,
      status: 'confirmed',
      meetingLink: 'https://zoom.us/j/123456789',
      notes: 'Focus on closures, async/await, and ES6+ features',
      materials: ['JavaScript Advanced Guide.pdf', 'Code Examples.zip']
    },
    {
      id: 2,
      subject: 'React Hooks Deep Dive',
      tutor: {
        name: 'Mike Chen',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 4.8,
        expertise: 'React Specialist'
      },
      date: '2024-01-27',
      time: '10:00 AM - 11:30 AM',
      duration: 90,
      type: 'online',
      price: 80,
      status: 'confirmed',
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      notes: 'Custom hooks, useContext, useReducer patterns',
      materials: ['React Hooks Cheatsheet.pdf']
    },
    {
      id: 3,
      subject: 'Data Structures & Algorithms',
      tutor: {
        name: 'Dr. Emily Davis',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 5.0,
        expertise: 'Computer Science Professor'
      },
      date: '2024-01-28',
      time: '3:00 PM - 4:30 PM',
      duration: 90,
      type: 'in-person',
      price: 100,
      status: 'pending',
      location: 'Central Library, Room 204',
      notes: 'Binary trees, graph algorithms, dynamic programming',
      materials: ['Algorithm Visualizations.pptx', 'Practice Problems.pdf']
    }
  ];

  const completedSessions = [
    {
      id: 4,
      subject: 'Python Fundamentals',
      tutor: {
        name: 'John Smith',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 4.7,
        expertise: 'Python Developer'
      },
      date: '2024-01-20',
      time: '1:00 PM - 2:30 PM',
      duration: 90,
      type: 'online',
      price: 70,
      status: 'completed',
      feedback: 'Excellent session! Very clear explanations.',
      rating_given: 5,
      materials: ['Python Basics.pdf', 'Exercise Solutions.py']
    },
    {
      id: 5,
      subject: 'Database Design Principles',
      tutor: {
        name: 'Lisa Wang',
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 4.8,
        expertise: 'Database Architect'
      },
      date: '2024-01-18',
      time: '4:00 PM - 5:30 PM',
      duration: 90,
      type: 'online',
      price: 85,
      status: 'completed',
      feedback: 'Great practical examples and hands-on approach.',
      rating_given: 5,
      materials: ['ER Diagrams.pdf', 'SQL Scripts.sql']
    }
  ];

  const cancelledSessions = [
    {
      id: 6,
      subject: 'Machine Learning Basics',
      tutor: {
        name: 'Dr. Robert Wilson',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 4.9,
        expertise: 'ML Engineer'
      },
      date: '2024-01-15',
      time: '2:00 PM - 3:30 PM',
      duration: 90,
      type: 'online',
      price: 90,
      status: 'cancelled',
      reason: 'Tutor unavailable due to emergency',
      refunded: true
    }
  ];

  const [sessions, setSessions] = useState({
    upcoming: upcomingSessions,
    completed: completedSessions,
    cancelled: cancelledSessions
  });

  const getCurrentSessions = () => {
    switch (selectedTab) {
      case 'upcoming': return sessions.upcoming;
      case 'completed': return sessions.completed;
      case 'cancelled': return sessions.cancelled;
      default: return sessions.upcoming;
    }
  };

  const filteredSessions = getCurrentSessions().filter(session => {
    const matchesSearch = session.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.tutor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || session.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleBookSession = (sessionData) => {
    const newSession = {
      id: Date.now(),
      ...sessionData,
      status: 'pending',
      tutor: {
        name: sessionData.tutorName,
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 4.8,
        expertise: sessionData.expertise || 'Subject Expert'
      }
    };
    setSessions({
      ...sessions,
      upcoming: [...sessions.upcoming, newSession]
    });
    setShowBookModal(false);
  };

  const handleEditSession = (sessionData) => {
    setSessions({
      ...sessions,
      [selectedTab]: sessions[selectedTab].map(session => 
        session.id === editingSession.id ? { ...session, ...sessionData } : session
      )
    });
    setEditingSession(null);
  };

  const handleCancelSession = (sessionId) => {
    if (window.confirm('Are you sure you want to cancel this session?')) {
      const sessionToCancel = sessions.upcoming.find(s => s.id === sessionId);
      if (sessionToCancel) {
        setSessions({
          ...sessions,
          upcoming: sessions.upcoming.filter(s => s.id !== sessionId),
          cancelled: [...sessions.cancelled, { ...sessionToCancel, status: 'cancelled', reason: 'Cancelled by student' }]
        });
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Booked Tuition</h2>
          <p className="text-gray-600">Manage your one-on-one learning sessions</p>
        </div>
        <button
          onClick={() => setShowBookModal(true)}
          className="flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Book New Session</span>
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
            placeholder="Search sessions or tutors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
        
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        >
          {filters.map((filter) => (
            <option key={filter.id} value={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
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
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{session.subject}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                      {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">${session.price}</div>
                    <div className="text-sm text-gray-500">{session.duration} min</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
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
                    {session.type === 'in-person' && session.location && (
                      <span className="text-gray-500">• {session.location}</span>
                    )}
                  </div>
                </div>

                {session.notes && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-900 mb-1">Session Notes:</div>
                    <div className="text-sm text-gray-600">{session.notes}</div>
                  </div>
                )}

                {session.reason && (
                  <div className="mt-3 p-3 bg-red-50 rounded-lg">
                    <div className="text-sm font-medium text-red-900 mb-1">Cancellation Reason:</div>
                    <div className="text-sm text-red-700">{session.reason}</div>
                    {session.refunded && (
                      <div className="text-sm text-green-600 mt-1">✓ Refund processed</div>
                    )}
                  </div>
                )}
              </div>

              {/* Tutor Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={session.tutor.avatar}
                    alt={session.tutor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{session.tutor.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{session.tutor.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">{session.tutor.expertise}</div>
                  </div>
                </div>

                {session.materials && session.materials.length > 0 && (
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">Materials:</div>
                    <div className="space-y-1">
                      {session.materials.map((material, index) => (
                        <div key={index} className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                          📄 {material}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="lg:col-span-1">
                <div className="space-y-2">
                  {selectedTab === 'upcoming' && (
                    <>
                      {session.status === 'confirmed' && session.type === 'online' && (
                        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                          Join Session
                        </button>
                      )}
                      <button
                        onClick={() => setEditingSession(session)}
                        className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                      >
                        Reschedule
                      </button>
                      <button
                        onClick={() => handleCancelSession(session.id)}
                        className="w-full border border-red-300 text-red-700 py-2 rounded-lg hover:bg-red-50 transition-colors text-sm"
                      >
                        Cancel
                      </button>
                    </>
                  )}

                  {selectedTab === 'completed' && (
                    <>
                      {session.rating_given && (
                        <div className="text-center mb-2">
                          <div className="text-sm text-gray-600">Your Rating:</div>
                          <div className="flex items-center justify-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < session.rating_given ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      <button className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm">
                        Book Again
                      </button>
                      <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Download Materials
                      </button>
                    </>
                  )}

                  {selectedTab === 'cancelled' && (
                    <button
                      onClick={() => setShowBookModal(true)}
                      className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm"
                    >
                      Rebook Session
                    </button>
                  )}
                </div>

                {session.feedback && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm font-medium text-blue-900 mb-1">Your Feedback:</div>
                    <div className="text-sm text-blue-700">{session.feedback}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredSessions.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No sessions found</h3>
          <p className="text-gray-600 mb-4">
            {selectedTab === 'upcoming' 
              ? "You don't have any upcoming tuition sessions."
              : selectedTab === 'completed'
              ? "You haven't completed any tuition sessions yet."
              : "You don't have any cancelled sessions."
            }
          </p>
          <button
            onClick={() => setShowBookModal(true)}
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Book Your First Session
          </button>
        </div>
      )}

      {/* Book Session Modal */}
      {showBookModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Book New Session</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleBookSession({
                subject: formData.get('subject'),
                tutorName: formData.get('tutorName'),
                date: formData.get('date'),
                time: formData.get('time'),
                duration: parseInt(formData.get('duration')) || 60,
                type: formData.get('type'),
                price: parseFloat(formData.get('price')) || 75,
                notes: formData.get('notes'),
                location: formData.get('location') || null,
                meetingLink: formData.get('type') === 'online' ? 'https://zoom.us/j/generated' : null
              });
            }}>
              <div className="space-y-4">
                <input
                  name="subject"
                  type="text"
                  placeholder="Session Subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  name="tutorName"
                  type="text"
                  placeholder="Tutor Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="date"
                    type="date"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="time"
                    type="time"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    name="duration"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="120">120 minutes</option>
                  </select>
                  <select
                    name="type"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="online">Online</option>
                    <option value="in-person">In-Person</option>
                  </select>
                </div>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  placeholder="Price per hour"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  name="location"
                  type="text"
                  placeholder="Location (for in-person sessions)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <textarea
                  name="notes"
                  placeholder="Session notes or special requirements"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowBookModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Book Session
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Session Modal */}
      {editingSession && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reschedule Session</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleEditSession({
                subject: formData.get('subject'),
                date: formData.get('date'),
                time: formData.get('time'),
                duration: parseInt(formData.get('duration')) || editingSession.duration,
                type: formData.get('type'),
                price: parseFloat(formData.get('price')) || editingSession.price,
                notes: formData.get('notes')
              });
            }}>
              <div className="space-y-4">
                <input
                  name="subject"
                  type="text"
                  defaultValue={editingSession.subject}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="date"
                    type="date"
                    defaultValue={editingSession.date}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    name="time"
                    type="time"
                    defaultValue={editingSession.time.split(' - ')[0]}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    name="duration"
                    defaultValue={editingSession.duration}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="120">120 minutes</option>
                  </select>
                  <select
                    name="type"
                    defaultValue={editingSession.type}
                    required
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="online">Online</option>
                    <option value="in-person">In-Person</option>
                  </select>
                </div>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  defaultValue={editingSession.price}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <textarea
                  name="notes"
                  defaultValue={editingSession.notes}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setEditingSession(null)}
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

export default BookedTuition;