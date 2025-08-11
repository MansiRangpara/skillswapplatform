import React, { useState } from 'react';
import { Calendar, Download, Filter, TrendingUp, DollarSign, Users, BookOpen, BarChart3 } from 'lucide-react';

const SalesReport = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('last-30-days');
  const [selectedCourse, setSelectedCourse] = useState('all');

  const periods = [
    { id: 'last-7-days', name: 'Last 7 Days' },
    { id: 'last-30-days', name: 'Last 30 Days' },
    { id: 'last-90-days', name: 'Last 90 Days' },
    { id: 'this-year', name: 'This Year' },
    { id: 'custom', name: 'Custom Range' },
  ];

  const courses = [
    { id: 'all', name: 'All Courses' },
    { id: '1', name: 'Complete Web Development Bootcamp' },
    { id: '2', name: 'Advanced React Development' },
    { id: '3', name: 'JavaScript Fundamentals' },
    { id: '4', name: 'Node.js Backend Development' },
  ];

  // Mock sales data
  const salesData = [
    { date: '2024-01-23', course: 'Complete Web Development Bootcamp', students: 45, revenue: 4005, refunds: 0 },
    { date: '2024-01-22', course: 'Advanced React Development', students: 32, revenue: 4128, refunds: 129 },
    { date: '2024-01-21', course: 'Complete Web Development Bootcamp', students: 38, revenue: 3382, refunds: 0 },
    { date: '2024-01-20', course: 'JavaScript Fundamentals', students: 28, revenue: 2212, refunds: 79 },
    { date: '2024-01-19', course: 'Advanced React Development', students: 41, revenue: 5289, refunds: 0 },
    { date: '2024-01-18', course: 'Complete Web Development Bootcamp', students: 52, revenue: 4628, refunds: 178 },
    { date: '2024-01-17', course: 'Node.js Backend Development', students: 29, revenue: 2871, refunds: 0 },
  ];

  // Mock chart data for revenue trend
  const chartData = [
    { date: '2024-01-17', revenue: 2871 },
    { date: '2024-01-18', revenue: 4628 },
    { date: '2024-01-19', revenue: 5289 },
    { date: '2024-01-20', revenue: 2212 },
    { date: '2024-01-21', revenue: 3382 },
    { date: '2024-01-22', revenue: 4128 },
    { date: '2024-01-23', revenue: 4005 },
  ];

  const totalRevenue = salesData.reduce((sum, sale) => sum + sale.revenue, 0);
  const totalStudents = salesData.reduce((sum, sale) => sum + sale.students, 0);
  const totalRefunds = salesData.reduce((sum, sale) => sum + sale.refunds, 0);
  const averageOrderValue = totalRevenue / totalStudents;

  const maxRevenue = Math.max(...chartData.map(d => d.revenue));

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Sales Report</h2>
          <p className="text-gray-600">Track your course sales and revenue performance</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {periods.map((period) => (
            <option key={period.id} value={period.id}>
              {period.name}
            </option>
          ))}
        </select>
        
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-50 text-green-600">
              <DollarSign className="w-6 h-6" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(totalRevenue)}</div>
          <div className="text-sm text-gray-600">Total Revenue</div>
          <div className="text-sm text-green-600 mt-1">+12% from last period</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
              <Users className="w-6 h-6" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalStudents}</div>
          <div className="text-sm text-gray-600">New Students</div>
          <div className="text-sm text-green-600 mt-1">+8% from last period</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
              <BarChart3 className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(averageOrderValue)}</div>
          <div className="text-sm text-gray-600">Avg. Order Value</div>
          <div className="text-sm text-green-600 mt-1">+5% from last period</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-red-50 text-red-600">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(totalRefunds)}</div>
          <div className="text-sm text-gray-600">Total Refunds</div>
          <div className="text-sm text-red-600 mt-1">2.1% refund rate</div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">REVENUE TREND</h3>
        
        <div className="relative h-64 mb-8">
          <div className="absolute inset-0 flex items-end justify-between px-4">
            {chartData.map((data, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                <div className="relative w-full max-w-12 h-48 flex items-end">
                  <div
                    className="w-full bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-lg transition-all duration-500"
                    style={{
                      height: `${(data.revenue / maxRevenue) * 100}%`,
                      minHeight: '4px'
                    }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">
                  {formatDate(data.date)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sales Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Sales</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Refunds
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Net Revenue
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {salesData.map((sale, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(sale.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{sale.course}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sale.students}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {formatCurrency(sale.revenue)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                    {sale.refunds > 0 ? `-${formatCurrency(sale.refunds)}` : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    {formatCurrency(sale.revenue - sale.refunds)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Course Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Course Performance</h3>
        
        <div className="space-y-4">
          {courses.slice(1).map((course) => {
            const courseData = salesData.filter(sale => sale.course.includes(course.name.split(' ')[0]));
            const courseRevenue = courseData.reduce((sum, sale) => sum + sale.revenue, 0);
            const courseStudents = courseData.reduce((sum, sale) => sum + sale.students, 0);
            
            return (
              <div key={course.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{course.name}</h4>
                  <div className="text-sm text-gray-600">
                    {courseStudents} students • {formatCurrency(courseRevenue)} revenue
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{formatCurrency(courseRevenue)}</div>
                  <div className="text-sm text-gray-500">{courseStudents} enrollments</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SalesReport;