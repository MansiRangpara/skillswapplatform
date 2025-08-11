import React, { useState } from 'react';
import { Calendar, Download, DollarSign, TrendingUp, Clock, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const PayoutReport = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('last-30-days');

  const periods = [
    { id: 'last-7-days', name: 'Last 7 Days' },
    { id: 'last-30-days', name: 'Last 30 Days' },
    { id: 'last-90-days', name: 'Last 90 Days' },
    { id: 'this-year', name: 'This Year' },
    { id: 'all-time', name: 'All Time' },
  ];

  const payoutHistory = [
    {
      id: 1,
      amount: 2450.00,
      status: 'completed',
      requestDate: '2024-01-15',
      processedDate: '2024-01-17',
      method: 'Bank Transfer',
      transactionId: 'TXN-PAY-001',
      coursesIncluded: ['Complete Web Development Bootcamp', 'Advanced React Development'],
      platformFee: 245.00,
      netAmount: 2205.00
    },
    {
      id: 2,
      amount: 1890.00,
      status: 'pending',
      requestDate: '2024-01-20',
      processedDate: null,
      method: 'PayPal',
      transactionId: 'TXN-PAY-002',
      coursesIncluded: ['JavaScript Fundamentals', 'Node.js Backend Development'],
      platformFee: 189.00,
      netAmount: 1701.00
    },
    {
      id: 3,
      amount: 3200.00,
      status: 'completed',
      requestDate: '2024-01-01',
      processedDate: '2024-01-03',
      method: 'Bank Transfer',
      transactionId: 'TXN-PAY-003',
      coursesIncluded: ['Complete Web Development Bootcamp', 'Advanced React Development'],
      platformFee: 320.00,
      netAmount: 2880.00
    },
    {
      id: 4,
      amount: 1250.00,
      status: 'failed',
      requestDate: '2023-12-28',
      processedDate: null,
      method: 'Bank Transfer',
      transactionId: 'TXN-PAY-004',
      coursesIncluded: ['JavaScript Fundamentals'],
      platformFee: 125.00,
      netAmount: 1125.00,
      failureReason: 'Invalid bank account details'
    }
  ];

  const monthlyEarnings = [
    { month: 'Jan 2024', gross: 8540, platformFee: 854, net: 7686, paidOut: 6786, pending: 900 },
    { month: 'Dec 2023', gross: 7230, platformFee: 723, net: 6507, paidOut: 6507, pending: 0 },
    { month: 'Nov 2023', gross: 6890, platformFee: 689, net: 6201, paidOut: 6201, pending: 0 },
    { month: 'Oct 2023', gross: 5670, platformFee: 567, net: 5103, paidOut: 5103, pending: 0 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'failed': return <XCircle className="w-4 h-4 text-red-600" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const totalEarnings = monthlyEarnings.reduce((sum, month) => sum + month.gross, 0);
  const totalPaidOut = payoutHistory.filter(p => p.status === 'completed').reduce((sum, payout) => sum + payout.netAmount, 0);
  const pendingAmount = payoutHistory.filter(p => p.status === 'pending').reduce((sum, payout) => sum + payout.netAmount, 0);
  const availableBalance = 2772; // Mock available balance

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Payout Report</h2>
          <p className="text-gray-600">Track your earnings and payout history</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <DollarSign className="w-4 h-4" />
            <span>Request Payout</span>
          </button>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-50 text-green-600">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(availableBalance)}</div>
          <div className="text-sm text-gray-600">Available Balance</div>
          <div className="text-sm text-green-600 mt-1">Ready for payout</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-yellow-50 text-yellow-600">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(pendingAmount)}</div>
          <div className="text-sm text-gray-600">Pending Payouts</div>
          <div className="text-sm text-yellow-600 mt-1">Processing</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(totalEarnings)}</div>
          <div className="text-sm text-gray-600">Total Earnings</div>
          <div className="text-sm text-blue-600 mt-1">All time</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(totalPaidOut)}</div>
          <div className="text-sm text-gray-600">Total Paid Out</div>
          <div className="text-sm text-purple-600 mt-1">Completed</div>
        </div>
      </div>

      {/* Monthly Earnings */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Monthly Earnings Breakdown</h3>
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
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Month
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gross Earnings
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Platform Fee (10%)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Net Earnings
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Paid Out
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pending
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {monthlyEarnings.map((month, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {month.month}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(month.gross)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                    -{formatCurrency(month.platformFee)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {formatCurrency(month.net)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    {formatCurrency(month.paidOut)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600">
                    {formatCurrency(month.pending)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payout History */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Payout History</h3>
        </div>
        
        <div className="space-y-4 p-6">
          {payoutHistory.map((payout) => (
            <div
              key={payout.id}
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(payout.status)}
                  <div>
                    <div className="font-medium text-gray-900">
                      {formatCurrency(payout.netAmount)} payout
                    </div>
                    <div className="text-sm text-gray-600">
                      Requested on {formatDate(payout.requestDate)}
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(payout.status)}`}>
                  {payout.status.charAt(0).toUpperCase() + payout.status.slice(1)}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Payment Method</div>
                  <div className="font-medium">{payout.method}</div>
                </div>
                <div>
                  <div className="text-gray-600">Transaction ID</div>
                  <div className="font-mono text-sm">{payout.transactionId}</div>
                </div>
                <div>
                  <div className="text-gray-600">Processed Date</div>
                  <div className="font-medium">{formatDate(payout.processedDate)}</div>
                </div>
              </div>
              
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">Breakdown:</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Gross Amount:</span>
                    <span className="font-medium ml-2">{formatCurrency(payout.amount)}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Platform Fee:</span>
                    <span className="font-medium ml-2 text-red-600">-{formatCurrency(payout.platformFee)}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Net Amount:</span>
                    <span className="font-medium ml-2 text-green-600">{formatCurrency(payout.netAmount)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="text-sm text-gray-600 mb-1">Courses included:</div>
                <div className="flex flex-wrap gap-2">
                  {payout.coursesIncluded.map((course, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              
              {payout.failureReason && (
                <div className="mt-3 p-3 bg-red-50 rounded-lg">
                  <div className="text-sm font-medium text-red-900">Failure Reason:</div>
                  <div className="text-sm text-red-700">{payout.failureReason}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayoutReport;