import React, { useState } from 'react';
import { Edit2, Camera, Award, BookOpen, Clock, TrendingUp, Calendar, Mail, MapPin } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userStats = [
    { label: 'Courses Completed', value: '5', icon: BookOpen },
    { label: 'Total Hours', value: '120', icon: Clock },
    { label: 'Certificates', value: '3', icon: Award },
    { label: 'Current Streak', value: '15 days', icon: TrendingUp },
  ];

  const certificates = [
    {
      id: 1,
      name: 'Web Development Fundamentals',
      date: '2024-01-15',
      issuer: 'Academy LMS',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'React Developer Certification',
      date: '2024-02-20',
      issuer: 'Academy LMS',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'UI/UX Design Basics',
      date: '2024-03-10',
      issuer: 'Academy LMS',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
  ];

  const learningHistory = [
    {
      course: 'Complete Web Development Bootcamp',
      completedAt: '2024-01-15',
      progress: 100,
      grade: 'A+'
    },
    {
      course: 'Advanced React and Redux',
      completedAt: '2024-02-20',
      progress: 100,
      grade: 'A'
    },
    {
      course: 'UI/UX Design Fundamentals',
      completedAt: '2024-03-10',
      progress: 100,
      grade: 'A+'
    },
    {
      course: 'Data Science with Python',
      completedAt: 'In Progress',
      progress: 65,
      grade: '-'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-black">AJ</span>
              </div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Alex Johnson</h2>
              <p className="text-gray-600">Full Stack Developer</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>alex.johnson@example.com</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined January 2024</span>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
            <Edit2 className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className="bg-yellow-400 text-black p-3 rounded-lg">
                  <Icon size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-100">
          <nav className="flex space-x-8 px-6">
            {['overview', 'certificates', 'history'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-yellow-600 border-b-2 border-yellow-400'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About Me</h3>
                <p className="text-gray-700 leading-relaxed">
                  Passionate full-stack developer with a strong interest in modern web technologies. 
                  Currently expanding my skills in React, Node.js, and cloud technologies. 
                  I enjoy building user-friendly applications and learning new frameworks.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'HTML/CSS', 'Git', 'MongoDB', 'Express.js'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Goals</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-700">Complete Data Science with Python course</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-700">Learn cloud deployment (AWS/Azure)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-700">Build a full-stack portfolio project</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">My Certificates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                  <div key={cert.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="flex items-center justify-center mb-4">
                      <Award className="w-16 h-16 text-yellow-400" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">Issued by {cert.issuer}</p>
                      <p className="text-xs text-gray-500">{new Date(cert.date).toLocaleDateString()}</p>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors text-sm font-medium">
                      View Certificate
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Learning History</h3>
              <div className="space-y-4">
                {learningHistory.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.course}</h4>
                      <p className="text-sm text-gray-600">
                        {item.completedAt === 'In Progress' ? 'Currently enrolled' : `Completed on ${new Date(item.completedAt).toLocaleDateString()}`}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{item.progress}%</div>
                        <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Grade</div>
                        <div className="text-lg font-bold text-gray-900">{item.grade}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;