import React, { useState } from 'react';
import { Video, Settings, Save, Eye, EyeOff, Copy, RefreshCw, Calendar, Users, Clock } from 'lucide-react';

const ZoomLiveSettings = () => {
  const [zoomSettings, setZoomSettings] = useState({
    apiKey: 'your_zoom_api_key_here',
    apiSecret: '••••••••••••••••',
    accountId: 'your_account_id',
    defaultMeetingPassword: 'academy123',
    waitingRoom: true,
    muteOnEntry: true,
    autoRecording: 'cloud',
    allowScreenShare: true,
    chatEnabled: true,
    breakoutRooms: false
  });

  const [showApiSecret, setShowApiSecret] = useState(false);
  const [activeTab, setActiveTab] = useState('connection');

  const tabs = [
    { id: 'connection', name: 'Connection', icon: Settings },
    { id: 'meetings', name: 'Meeting Settings', icon: Video },
    { id: 'scheduled', name: 'Scheduled Sessions', icon: Calendar },
  ];

  const scheduledSessions = [
    {
      id: 1,
      title: 'Advanced React Patterns',
      date: '2024-01-25',
      time: '2:00 PM - 4:00 PM',
      participants: 25,
      maxParticipants: 30,
      meetingId: '123-456-789',
      password: 'react123',
      status: 'scheduled'
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals Q&A',
      date: '2024-01-27',
      time: '10:00 AM - 11:00 AM',
      participants: 18,
      maxParticipants: 50,
      meetingId: '987-654-321',
      password: 'js2024',
      status: 'scheduled'
    }
  ];

  const handleSaveSettings = () => {
    // Handle save settings
    console.log('Saving Zoom settings:', zoomSettings);
  };

  const copyMeetingId = (meetingId) => {
    navigator.clipboard.writeText(meetingId);
  };

  const testConnection = () => {
    // Handle test connection
    console.log('Testing Zoom connection...');
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
          <h2 className="text-2xl font-bold text-gray-900">Zoom Live Settings</h2>
          <p className="text-gray-600">Configure your Zoom integration for live sessions</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-600">Connected</span>
          </div>
          <button
            onClick={testConnection}
            className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Test Connection</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'connection' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Zoom API Configuration</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                API Key
              </label>
              <input
                type="text"
                value={zoomSettings.apiKey}
                onChange={(e) => setZoomSettings({...zoomSettings, apiKey: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your Zoom API key"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                API Secret
              </label>
              <div className="relative">
                <input
                  type={showApiSecret ? 'text' : 'password'}
                  value={zoomSettings.apiSecret}
                  onChange={(e) => setZoomSettings({...zoomSettings, apiSecret: e.target.value})}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your Zoom API secret"
                />
                <button
                  type="button"
                  onClick={() => setShowApiSecret(!showApiSecret)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showApiSecret ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account ID
              </label>
              <input
                type="text"
                value={zoomSettings.accountId}
                onChange={(e) => setZoomSettings({...zoomSettings, accountId: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your Zoom account ID"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-900 mb-2">How to get your Zoom credentials:</h4>
              <ol className="text-sm text-blue-700 space-y-1">
                <li>1. Go to the Zoom Marketplace and create a Server-to-Server OAuth app</li>
                <li>2. Copy your Account ID, Client ID, and Client Secret</li>
                <li>3. Add the required scopes: meeting:write, meeting:read, user:read</li>
                <li>4. Paste the credentials above</li>
              </ol>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSaveSettings}
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save Connection</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'meetings' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Default Meeting Settings</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Meeting Password
              </label>
              <input
                type="text"
                value={zoomSettings.defaultMeetingPassword}
                onChange={(e) => setZoomSettings({...zoomSettings, defaultMeetingPassword: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Auto Recording
              </label>
              <select
                value={zoomSettings.autoRecording}
                onChange={(e) => setZoomSettings({...zoomSettings, autoRecording: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="none">No Recording</option>
                <option value="local">Local Recording</option>
                <option value="cloud">Cloud Recording</option>
              </select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Enable Waiting Room</label>
                  <p className="text-sm text-gray-500">Participants wait for host approval</p>
                </div>
                <input
                  type="checkbox"
                  checked={zoomSettings.waitingRoom}
                  onChange={(e) => setZoomSettings({...zoomSettings, waitingRoom: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Mute Participants on Entry</label>
                  <p className="text-sm text-gray-500">Automatically mute participants when they join</p>
                </div>
                <input
                  type="checkbox"
                  checked={zoomSettings.muteOnEntry}
                  onChange={(e) => setZoomSettings({...zoomSettings, muteOnEntry: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Allow Screen Sharing</label>
                  <p className="text-sm text-gray-500">Participants can share their screen</p>
                </div>
                <input
                  type="checkbox"
                  checked={zoomSettings.allowScreenShare}
                  onChange={(e) => setZoomSettings({...zoomSettings, allowScreenShare: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Enable Chat</label>
                  <p className="text-sm text-gray-500">Allow participants to use chat</p>
                </div>
                <input
                  type="checkbox"
                  checked={zoomSettings.chatEnabled}
                  onChange={(e) => setZoomSettings({...zoomSettings, chatEnabled: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Enable Breakout Rooms</label>
                  <p className="text-sm text-gray-500">Allow creating breakout rooms during sessions</p>
                </div>
                <input
                  type="checkbox"
                  checked={zoomSettings.breakoutRooms}
                  onChange={(e) => setZoomSettings({...zoomSettings, breakoutRooms: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSaveSettings}
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save Settings</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'scheduled' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Scheduled Live Sessions</h3>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Schedule Session</span>
            </button>
          </div>

          <div className="space-y-4">
            {scheduledSessions.map((session) => (
              <div
                key={session.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-2">{session.title}</h4>
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
                        <Users className="w-4 h-4" />
                        <span>{session.participants}/{session.maxParticipants} participants</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-600">Meeting ID</div>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-sm">{session.meetingId}</span>
                        <button
                          onClick={() => copyMeetingId(session.meetingId)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Password</div>
                      <div className="font-mono text-sm">{session.password}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {scheduledSessions.length === 0 && (
            <div className="text-center py-12">
              <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No scheduled sessions</h3>
              <p className="text-gray-600 mb-4">Schedule your first live session to get started.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Session
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ZoomLiveSettings;