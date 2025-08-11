import React, { useState } from 'react';
import { Book, Home, User, Menu, X, Search, Bell, ChevronRight, ChevronDown, Shield, Users, Settings, BarChart3, LogOut, Heart, ShoppingBag, HelpCircle } from 'lucide-react';
import Dashboard from './components/Dashboard';
import InstructorDashboard from './components/InstructorDashboard';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import Courses from './components/Courses';
import Profile from './components/Profile';
import CourseDetail from './components/CourseDetail';
import LandingPage from './components/LandingPage';
import InstructorLandingPage from './components/InstructorLandingPage';
import StudentLandingPage from './components/StudentLandingPage';
import AdminLandingPage from './components/AdminLandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import { Routes, Route } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('student'); // 'student', 'instructor', or 'admin'
  const [showInstructorDashboard, setShowInstructorDashboard] = useState(false);
  const [showStudentDashboard, setShowStudentDashboard] = useState(false);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);


  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'courses', name: 'Courses', icon: Book },
    { id: 'profile', name: 'Profile', icon: User },
  ];

  const handleLogin = (role = 'student') => {
    setIsAuthenticated(true);
    setUserRole(role);
    // After login, show appropriate content based on role
    setCurrentPage('landing');
    setShowInstructorDashboard(false);
    setShowStudentDashboard(false);
    setShowAdminDashboard(false);
  };
<Routes>
  
  <Route path="/reset-password/:token" element={<ResetPassword />} />
</Routes>
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('student');
    setCurrentPage('landing');
    setSelectedCourse(null);
    setShowInstructorDashboard(false);
    setShowStudentDashboard(false);
    setShowAdminDashboard(false);
    setShowUserDropdown(false);
  };

  // Helper function to get user display info
  const getUserDisplayInfo = () => {
    switch (userRole) {
      case 'admin':
        return {
          name: 'System Administrator',
          email: 'admin@example.com',
          avatar: null, // We'll use Shield icon instead
          bgColor: 'bg-red-500'
        };
      case 'instructor':
        return {
          name: 'Mathew Anderson',
          email: 'instructor@example.com',
          avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
          bgColor: 'bg-purple-500'
        };
      default: // student
        return {
          name: 'Alex Johnson',
          email: 'student@example.com',
          avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
          bgColor: 'bg-purple-500'
        };
    }
  };

  const userInfo = getUserDisplayInfo();

  // Check if we're in a dashboard view
  const isDashboardView = showInstructorDashboard || showStudentDashboard || showAdminDashboard;

  // Landing page and auth pages
  if (!isAuthenticated) {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginPage
            onLogin={handleLogin}
            onSignup={() => navigate('/signup')}
            onHome={() => navigate('/')}
          />
        }
      />
      <Route
        path="/signup"
        element={
          <SignupPage
            onSignup={handleLogin}
            onLogin={() => navigate('/login')}
            onHome={() => navigate('/')}
          />
        }
      />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route
        path="*"
        element={
          <LandingPage
            onLogin={() => navigate('/login')}
            onSignup={() => navigate('/signup')}
          />
        }
      />
    </Routes>
  );
}

  // Show instructor dashboard if requested
  if (showInstructorDashboard && userRole === 'instructor') {
    return (
      <InstructorDashboard 
        onProfileClick={() => {}} 
        onBackToWebsite={() => setShowInstructorDashboard(false)}
      />
    );
  }

  // Show student dashboard if requested
  if (showStudentDashboard && userRole === 'student') {
    return (
      <StudentDashboard 
        onProfileClick={() => {}} 
        onBackToWebsite={() => setShowStudentDashboard(false)}
      />
    );
  }

  // Show admin dashboard if requested
  if (showAdminDashboard && userRole === 'admin') {
    return (
      <AdminDashboard 
        onProfileClick={() => {}} 
        onBackToWebsite={() => setShowAdminDashboard(false)}
      />
    );
  }


  const renderContent = () => {
    if (selectedCourse) {
      return <CourseDetail course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
    }

    // Show appropriate landing page based on user role
    if (currentPage === 'landing') {
      if (userRole === 'admin') {
        return <AdminLandingPage onNavigate={setCurrentPage} />;
      } else if (userRole === 'instructor') {
        return <InstructorLandingPage onNavigate={setCurrentPage} />;
      } else {
        return <StudentLandingPage onNavigate={setCurrentPage} />;
      }
    }

    switch (currentPage) {
      case 'dashboard':
        if (userRole === 'admin') {
          return <AdminDashboard onProfileClick={() => {}} onBackToWebsite={() => setCurrentPage('landing')} />;
        } else if (userRole === 'instructor') {
          return <InstructorDashboard onProfileClick={() => {}} onBackToWebsite={() => setCurrentPage('landing')} />;
        } else {
          return <StudentDashboard onProfileClick={() => {}} onBackToWebsite={() => setCurrentPage('landing')} />;
        }
      case 'courses':
        return <Courses onCourseSelect={setSelectedCourse} />;
      case 'profile':
        if (userRole === 'admin') {
          return <AdminDashboard onProfileClick={() => {}} onBackToWebsite={() => setCurrentPage('landing')} />;
        } else if (userRole === 'instructor') {
          return <InstructorDashboard onProfileClick={() => {}} onBackToWebsite={() => setCurrentPage('landing')} />;
        } else {
          return <StudentDashboard onProfileClick={() => {}} onBackToWebsite={() => setCurrentPage('landing')} />;
        }
      default:
        if (userRole === 'admin') {
          return <AdminLandingPage onNavigate={setCurrentPage} />;
        } else if (userRole === 'instructor') {
          return <InstructorLandingPage onNavigate={setCurrentPage} />;
        } else {
          return <StudentLandingPage onNavigate={setCurrentPage} />;
        }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - Only show when not in dashboard views */}
      {!isDashboardView && (
        <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Book className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                academy
                {userRole === 'instructor' && (
                  <span className="ml-2 text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                    Instructor
                  </span>
                )}
                {userRole === 'admin' && (
                  <span className="ml-2 text-sm bg-red-100 text-red-800 px-2 py-1 rounded-full">
                    Admin
                  </span>
                )}
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            
            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors"
              >
                <div className={`w-8 h-8 ${userInfo.bgColor} rounded-full flex items-center justify-center`}>
                  {userRole === 'admin' ? (
                    <Shield className="w-5 h-5 text-white" />
                  ) : userInfo.avatar ? (
                    <img
                      src={userInfo.avatar}
                      alt={userInfo.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-5 h-5 text-white" />
                  )}
                </div>
                <span className="text-sm text-gray-700">
                  {userInfo.name}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {/* Dropdown Menu */}
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${userInfo.bgColor} rounded-full flex items-center justify-center`}>
                        {userRole === 'admin' ? (
                          <Shield className="w-6 h-6 text-white" />
                        ) : (
                          <img
                            src={userInfo.avatar}
                            alt={userInfo.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {userInfo.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {userInfo.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {userRole === 'admin' && (
                    <>
                      <button
                        onClick={() => {
                          setShowAdminDashboard(true);
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <Home className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">Admin dashboard</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('courses');
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">User management</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('courses');
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <Book className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">Course management</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('courses');
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <Bell className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">System alerts</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('courses');
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <BarChart3 className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">Reports & analytics</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('courses');
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <Settings className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">System settings</span>
                      </button>
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors text-red-600"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Log out</span>
                        </button>
                      </div>
                    </>
                  )}

                  {userRole === 'instructor' && (
                    <>
                      <button
                        onClick={() => {
                          setShowInstructorDashboard(true);
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <Home className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">Instructor dashboard</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('courses');
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <Book className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">My courses</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('courses');
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <Heart className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">My wishlist</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('courses');
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <Bell className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">My messages</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('courses');
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">Purchase history</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('instructor-profile');
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">User profile</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('courses');
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">Become an affiliator</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentPage('courses');
                          setShowUserDropdown(false);
                        }}
                        className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        <HelpCircle className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">Support</span>
                      </button>
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors text-red-600"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Log out</span>
                        </button>
                      </div>
                    </>
                  )}

                  {userRole === 'student' && (
                    <>
                     <button
                       onClick={() => {
                         setShowStudentDashboard(true);
                         setShowUserDropdown(false);
                       }}
                       className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                     >
                       <Home className="w-4 h-4 text-gray-500" />
                       <span className="text-gray-700">Student dashboard</span>
                     </button>
                     <button
                       onClick={() => {
                         setCurrentPage('courses');
                         setShowUserDropdown(false);
                       }}
                       className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                     >
                       <Book className="w-4 h-4 text-gray-500" />
                       <span className="text-gray-700">My courses</span>
                     </button>
                     <button
                       onClick={() => {
                         setCurrentPage('courses');
                         setShowUserDropdown(false);
                       }}
                       className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                     >
                       <Heart className="w-4 h-4 text-gray-500" />
                       <span className="text-gray-700">My wishlist</span>
                     </button>
                     <button
                       onClick={() => {
                         setCurrentPage('courses');
                         setShowUserDropdown(false);
                       }}
                       className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                     >
                       <Bell className="w-4 h-4 text-gray-500" />
                       <span className="text-gray-700">My messages</span>
                     </button>
                     <button
                       onClick={() => {
                         setCurrentPage('courses');
                         setShowUserDropdown(false);
                       }}
                       className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                     >
                       <ShoppingBag className="w-4 h-4 text-gray-500" />
                       <span className="text-gray-700">Purchase history</span>
                     </button>
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors text-red-600"
                        >
                          <LogOut className="w-4 h-4" />
                         <span>Log out</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Click outside to close dropdown */}
        {showUserDropdown && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowUserDropdown(false)}
          ></div>
        )}
      </header>
      )}

      <div className="flex flex-1">
        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          <div className={currentPage === 'landing' || isDashboardView ? '' : 'p-6'}>
            {/* Breadcrumb */}
            {currentPage !== 'landing' && !isDashboardView && (
              <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <span>Academy LMS</span>
                <ChevronRight size={16} />
                <span className="capitalize">
                  {selectedCourse ? selectedCourse.title : currentPage}
                  {userRole === 'instructor' && ' (Instructor)'}
                  {userRole === 'admin' && ' (Admin)'}
                </span>
              </nav>
            )}

            {renderContent()}
          </div>
        </main>
      </div>
      
      {/* Footer */}
      {!isDashboardView && <Footer />}
    </div>
  );
}

export default App;