// Student Courses Store
// This file contains mock data and API functions for student courses management

// Mock data for student courses
export const coursesMockData = {
  enrolledCourses: [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'John Smith',
      category: 'programming',
      rating: 4.8,
      students: 15420,
      duration: '40 hours',
      price: '$89',
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp.',
      level: 'Beginner',
      enrolled: true,
      progress: 75,
      status: 'in-progress',
      lastAccessed: '2 days ago',
      nextLesson: 'State Management with Redux',
      totalLessons: 45,
      completedLessons: 34,
      enrollmentDate: '2024-01-10'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Sarah Johnson',
      category: 'design',
      rating: 4.7,
      students: 12340,
      duration: '30 hours',
      price: '$99',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Learn design principles, user research, wireframing, and prototyping.',
      level: 'Beginner',
      enrolled: true,
      progress: 40,
      status: 'in-progress',
      lastAccessed: '1 week ago',
      nextLesson: 'Color Theory and Psychology',
      totalLessons: 25,
      completedLessons: 10,
      enrollmentDate: '2024-01-08'
    },
    {
      id: 3,
      title: 'Data Science with Python',
      instructor: 'Mike Chen',
      category: 'data',
      rating: 4.9,
      students: 9876,
      duration: '45 hours',
      price: '$149',
      thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Complete data science course covering pandas, numpy, matplotlib, and machine learning.',
      level: 'Intermediate',
      enrolled: true,
      progress: 90,
      status: 'in-progress',
      lastAccessed: '3 days ago',
      nextLesson: 'Machine Learning Basics',
      totalLessons: 35,
      completedLessons: 32,
      enrollmentDate: '2024-01-05'
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      instructor: 'Robert Wilson',
      category: 'business',
      rating: 4.6,
      students: 7654,
      duration: '20 hours',
      price: '$79',
      thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Learn SEO, social media marketing, email campaigns, and analytics.',
      level: 'Beginner',
      enrolled: true,
      progress: 100,
      status: 'completed',
      lastAccessed: '1 month ago',
      completedDate: '2024-01-15',
      totalLessons: 20,
      completedLessons: 20,
      enrollmentDate: '2023-12-20'
    }
  ],

  courseStats: {
    totalEnrolled: 12,
    completed: 5,
    inProgress: 7,
    notStarted: 0,
    totalHours: 134,
    completedHours: 89,
    averageRating: 4.7
  }
};

// API Service Functions for Courses
export const coursesAPI = {
  // Get enrolled courses
  async getEnrolledCourses() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/courses/enrolled').then(res => res.json());
    return Promise.resolve(coursesMockData.enrolledCourses);
  },

  // Get course details
  async getCourseDetails(courseId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/courses/${courseId}`).then(res => res.json());
    const course = coursesMockData.enrolledCourses.find(c => c.id === courseId);
    return Promise.resolve(course);
  },

  // Update course progress
  async updateCourseProgress(courseId, progress) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/courses/${courseId}/progress`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ progress })
    // }).then(res => res.json());
    console.log(`Updating course ${courseId} progress to ${progress}%`);
    return Promise.resolve({ success: true, progress });
  },

  // Mark lesson as completed
  async markLessonCompleted(courseId, lessonId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/courses/${courseId}/lessons/${lessonId}/complete`, {
    //   method: 'POST'
    // }).then(res => res.json());
    console.log(`Marking lesson ${lessonId} as completed for course ${courseId}`);
    return Promise.resolve({ success: true });
  },

  // Get course statistics
  async getCourseStats() {
    // TODO: Replace with actual API call
    // return await fetch('/api/student/courses/stats').then(res => res.json());
    return Promise.resolve(coursesMockData.courseStats);
  },

  // Enroll in course
  async enrollInCourse(courseId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/courses/${courseId}/enroll`, {
    //   method: 'POST'
    // }).then(res => res.json());
    console.log(`Enrolling in course ${courseId}`);
    return Promise.resolve({ success: true });
  },

  // Unenroll from course
  async unenrollFromCourse(courseId) {
    // TODO: Replace with actual API call
    // return await fetch(`/api/student/courses/${courseId}/unenroll`, {
    //   method: 'DELETE'
    // }).then(res => res.json());
    console.log(`Unenrolling from course ${courseId}`);
    return Promise.resolve({ success: true });
  }
};

// Utility functions for courses
export const coursesUtils = {
  calculateOverallProgress: (courses) => {
    if (!courses || courses.length === 0) return 0;
    const totalProgress = courses.reduce((sum, course) => sum + course.progress, 0);
    return Math.round(totalProgress / courses.length);
  },

  getCompletedCourses: (courses) => {
    return courses.filter(course => course.progress === 100);
  },

  getInProgressCourses: (courses) => {
    return courses.filter(course => course.progress > 0 && course.progress < 100);
  },

  getNotStartedCourses: (courses) => {
    return courses.filter(course => course.progress === 0);
  },

  filterCoursesByCategory: (courses, category) => {
    if (category === 'all') return courses;
    return courses.filter(course => course.category === category);
  },

  filterCoursesByStatus: (courses, status) => {
    if (status === 'all') return courses;
    return courses.filter(course => course.status === status);
  },

  searchCourses: (courses, searchTerm) => {
    if (!searchTerm) return courses;
    return courses.filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  formatDuration: (duration) => {
    if (duration.includes('hour')) return duration;
    const hours = parseInt(duration);
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  },

  getNextLesson: (course) => {
    if (course.progress === 100) return 'Course completed';
    return course.nextLesson || 'Continue learning';
  }
};

export default {
  data: coursesMockData,
  api: coursesAPI,
  utils: coursesUtils
};