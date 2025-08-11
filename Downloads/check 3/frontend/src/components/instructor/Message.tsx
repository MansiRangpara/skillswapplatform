import React, { useState } from 'react';
import { Search, MessageSquare, Send, Paperclip, MoreVertical, Phone, Video, Star, Clock, User, Filter } from 'lucide-react';

const Message = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filterTypes = [
    { id: 'all', name: 'All Messages' },
    { id: 'students', name: 'Students' },
    { id: 'instructors', name: 'Instructors' },
    { id: 'support', name: 'Support' },
    { id: 'unread', name: 'Unread' },
  ];

  const conversations = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Student',
      avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      lastMessage: 'Thank you for the detailed explanation about React hooks!',
      timestamp: '2 min ago',
      unread: 2,
      online: true,
      course: 'Advanced React Development',
      type: 'students'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      role: 'Student',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      lastMessage: 'Could you help me with the assignment submission?',
      timestamp: '1 hour ago',
      unread: 1,
      online: false,
      course: 'Complete Web Development Bootcamp',
      type: 'students'
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      role: 'Instructor',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      lastMessage: 'Great collaboration on the new course content!',
      timestamp: '3 hours ago',
      unread: 0,
      online: true,
      course: null,
      type: 'instructors'
    },
    {
      id: 4,
      name: 'Academy Support',
      role: 'Support Team',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      lastMessage: 'Your payout has been processed successfully.',
      timestamp: '1 day ago',
      unread: 0,
      online: false,
      course: null,
      type: 'support'
    },
    {
      id: 5,
      name: 'Mike Chen',
      role: 'Student',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      lastMessage: 'The data structures explanation was very helpful.',
      timestamp: '2 days ago',
      unread: 0,
      online: false,
      course: 'Data Structures & Algorithms',
      type: 'students'
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 2,
      senderName: 'Alex Johnson',
      content: 'Hi Mathew! I\'m working through the React hooks section and I\'m having trouble understanding the useEffect cleanup function.',
      timestamp: '2:30 PM',
      type: 'text'
    },
    {
      id: 2,
      senderId: 1,
      senderName: 'You',
      content: 'Hi Alex! Great question. The cleanup function in useEffect is crucial for preventing memory leaks. Let me explain with an example.',
      timestamp: '2:32 PM',
      type: 'text'
    },
    {
      id: 3,
      senderId: 1,
      senderName: 'You',
      content: 'When you return a function from useEffect, React will call it when the component unmounts or before the effect runs again.',
      timestamp: '2:33 PM',
      type: 'text'
    },
    {
      id: 4,
      senderId: 1,
      senderName: 'You',
      content: 'Here\'s a practical example with event listeners and timers.',
      timestamp: '2:34 PM',
      type: 'file',
      fileName: 'useEffect-cleanup-example.js'
    },
    {
      id: 5,
      senderId: 2,
      senderName: 'Alex Johnson',
      content: 'This is incredibly helpful! I can see how the cleanup prevents the timer from running after the component is unmounted.',
      timestamp: '2:40 PM',
      type: 'text'
    },
    {
      id: 6,
      senderId: 1,
      senderName: 'You',
      content: 'Exactly! This pattern is essential for building robust React applications. Feel free to ask if you have more questions.',
      timestamp: '2:42 PM',
      type: 'text'
    },
    {
      id: 7,
      senderId: 2,
      senderName: 'Alex Johnson',
      content: 'Thank you for the detailed explanation about React hooks!',
      timestamp: '2:45 PM',
      type: 'text'
    }
  ];

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || 
                         conv.type === filterType || 
                         (filterType === 'unread' && conv.unread > 0);
    return matchesSearch && matchesFilter;
  });

  const selectedConv = conversations.find(conv => conv.id === selectedConversation);

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const totalUnread = conversations.reduce((sum, conv) => sum + conv.unread, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
          <p className="text-gray-600">Communicate with students and colleagues</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-gray-600">Unread Messages</div>
            <div className="text-xl font-bold text-blue-600">{totalUnread}</div>
          </div>
        </div>
      </div>

      {/* Message Interface */}
      <div className="h-[calc(100vh-300px)] bg-white rounded-xl shadow-sm border border-gray-100 flex">
        {/* Conversations List */}
        <div className="w-1/3 border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {filterTypes.map((filter) => (
                <option key={filter.id} value={filter.id}>
                  {filter.name}
                </option>
              ))}
            </select>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedConversation === conversation.id ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <img
                      src={conversation.avatar}
                      alt={conversation.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-gray-900 truncate">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      {conversation.unread > 0 && (
                        <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">{conversation.role}</span>
                      {conversation.course && (
                        <>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{conversation.course}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConv ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={selectedConv.avatar}
                      alt={selectedConv.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {selectedConv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{selectedConv.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{selectedConv.role}</span>
                      {selectedConv.course && (
                        <>
                          <span>•</span>
                          <span>{selectedConv.course}</span>
                        </>
                      )}
                      {selectedConv.online ? (
                        <span className="text-green-600">• Online</span>
                      ) : (
                        <span>• Last seen 2 hours ago</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Video className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === 1 ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md ${message.senderId === 1 ? 'order-2' : 'order-1'}`}>
                      <div
                        className={`px-4 py-2 rounded-lg ${
                          message.senderId === 1
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        {message.type === 'file' ? (
                          <div className="flex items-center space-x-2">
                            <Paperclip className="w-4 h-4" />
                            <span className="text-sm">{message.fileName}</span>
                          </div>
                        ) : (
                          <p className="text-sm">{message.content}</p>
                        )}
                      </div>
                      <div className={`text-xs text-gray-500 mt-1 ${message.senderId === 1 ? 'text-right' : 'text-left'}`}>
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-end space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Paperclip className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="flex-1">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type a message..."
                      rows={1}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    onClick={sendMessage}
                    disabled={!newMessage.trim()}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                <p className="text-gray-600">Choose a conversation from the list to start messaging.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;