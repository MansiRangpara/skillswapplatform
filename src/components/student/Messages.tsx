import React, { useState } from 'react';
import { Search, MessageSquare, Send, Paperclip, MoreVertical, Phone, Video, Star, Clock, User } from 'lucide-react';

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Instructor',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      lastMessage: 'Great progress on the React assignment!',
      timestamp: '2 min ago',
      unread: 2,
      online: true,
      course: 'Advanced React Development'
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
      course: 'Data Science with Python'
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
      members: 12
    },
    {
      id: 4,
      name: 'Dr. Emily Davis',
      role: 'Tutor',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      lastMessage: 'Our next session is scheduled for tomorrow',
      timestamp: '1 day ago',
      unread: 0,
      online: false,
      course: 'Data Structures & Algorithms'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Instructor',
      avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
      lastMessage: 'Your portfolio design is coming along nicely',
      timestamp: '2 days ago',
      unread: 1,
      online: true,
      course: 'UI/UX Design Fundamentals'
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 2,
      senderName: 'Sarah Johnson',
      content: 'Hi Alex! I reviewed your React assignment and I\'m really impressed with your implementation of custom hooks.',
      timestamp: '10:30 AM',
      type: 'text'
    },
    {
      id: 2,
      senderId: 1,
      senderName: 'You',
      content: 'Thank you so much! I spent a lot of time working on the useLocalStorage hook. Do you have any suggestions for improvement?',
      timestamp: '10:32 AM',
      type: 'text'
    },
    {
      id: 3,
      senderId: 2,
      senderName: 'Sarah Johnson',
      content: 'Your implementation is solid! One suggestion would be to add error handling for cases where localStorage is not available.',
      timestamp: '10:35 AM',
      type: 'text'
    },
    {
      id: 4,
      senderId: 2,
      senderName: 'Sarah Johnson',
      content: 'I\'ve attached a code example that shows how to implement this gracefully.',
      timestamp: '10:36 AM',
      type: 'file',
      fileName: 'localStorage-error-handling.js'
    },
    {
      id: 5,
      senderId: 1,
      senderName: 'You',
      content: 'That\'s really helpful! I\'ll implement those changes and push an update to my repository.',
      timestamp: '10:40 AM',
      type: 'text'
    },
    {
      id: 6,
      senderId: 2,
      senderName: 'Sarah Johnson',
      content: 'Perfect! Also, don\'t forget about the upcoming project deadline next Friday. Let me know if you need any help.',
      timestamp: '10:42 AM',
      type: 'text'
    },
    {
      id: 7,
      senderId: 1,
      senderName: 'You',
      content: 'Will do! Thanks for all your support.',
      timestamp: '10:45 AM',
      type: 'text'
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <div className="h-[calc(100vh-200px)] bg-white rounded-xl shadow-sm border border-gray-100 flex">
      {/* Conversations List */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedConversation === conversation.id ? 'bg-yellow-50 border-r-2 border-yellow-400' : ''
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
                      <span className="bg-yellow-400 text-black text-xs font-medium px-2 py-1 rounded-full">
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
                    {conversation.members && (
                      <>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">{conversation.members} members</span>
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
                          ? 'bg-yellow-400 text-black'
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                  className="p-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
};

export default Messages;