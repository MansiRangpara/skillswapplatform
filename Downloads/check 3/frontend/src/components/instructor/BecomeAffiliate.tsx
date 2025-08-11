import React, { useState } from 'react';
import { Users, DollarSign, TrendingUp, Link, Copy, Share2, BarChart3, Calendar, Star, Award } from 'lucide-react';

const BecomeAffiliate = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'links', name: 'Affiliate Links', icon: Link },
    { id: 'earnings', name: 'Earnings', icon: DollarSign },
    { id: 'resources', name: 'Resources', icon: Share2 },
  ];

  const affiliateStats = {
    totalEarnings: 2450.75,
    thisMonthEarnings: 485.50,
    totalReferrals: 89,
    conversionRate: 12.5,
    commissionRate: 15,
    pendingPayouts: 325.25
  };

  const affiliateLinks = [
    {
      id: 1,
      name: 'Complete Web Development Bootcamp',
      url: 'https://academy.com/course/web-dev?ref=mathew123',
      clicks: 245,
      conversions: 18,
      earnings: 162.00,
      conversionRate: 7.3
    },
    {
      id: 2,
      name: 'Advanced React Development',
      url: 'https://academy.com/course/react?ref=mathew123',
      clicks: 189,
      conversions: 23,
      earnings: 296.70,
      conversionRate: 12.2
    },
    {
      id: 3,
      name: 'Data Science Bundle',
      url: 'https://academy.com/bundle/data-science?ref=mathew123',
      clicks: 156,
      conversions: 12,
      earnings: 180.00,
      conversionRate: 7.7
    }
  ];

  const recentReferrals = [
    {
      id: 1,
      customerName: 'John Smith',
      courseName: 'Advanced React Development',
      purchaseDate: '2024-01-22',
      commission: 19.35,
      status: 'confirmed'
    },
    {
      id: 2,
      customerName: 'Sarah Johnson',
      courseName: 'Web Development Bootcamp',
      purchaseDate: '2024-01-21',
      commission: 13.35,
      status: 'confirmed'
    },
    {
      id: 3,
      customerName: 'Mike Chen',
      courseName: 'Data Science Bundle',
      purchaseDate: '2024-01-20',
      commission: 22.50,
      status: 'pending'
    }
  ];

  const marketingResources = [
    {
      type: 'banner',
      name: 'Course Banner 728x90',
      description: 'Horizontal banner for website headers',
      downloadUrl: '#'
    },
    {
      type: 'social',
      name: 'Social Media Kit',
      description: 'Instagram and Facebook post templates',
      downloadUrl: '#'
    },
    {
      type: 'email',
      name: 'Email Templates',
      description: 'Ready-to-use email marketing templates',
      downloadUrl: '#'
    },
    {
      type: 'video',
      name: 'Promotional Videos',
      description: 'Short promotional videos for social media',
      downloadUrl: '#'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Affiliate Program</h2>
          <p className="text-gray-600">Earn commissions by promoting courses</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-gray-600">Commission Rate</div>
            <div className="text-xl font-bold text-green-600">{affiliateStats.commissionRate}%</div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Generate New Link
          </button>
        </div>
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
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(affiliateStats.totalEarnings)}</div>
          <div className="text-sm text-gray-600">Total Earnings</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{affiliateStats.totalReferrals}</div>
          <div className="text-sm text-gray-600">Total Referrals</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-purple-50 text-purple-600">
              <BarChart3 className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{affiliateStats.conversionRate}%</div>
          <div className="text-sm text-gray-600">Conversion Rate</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-yellow-50 text-yellow-600">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(affiliateStats.thisMonthEarnings)}</div>
          <div className="text-sm text-gray-600">This Month</div>
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
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-8 h-8" />
              <h3 className="text-xl font-semibold">Welcome to the Affiliate Program!</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Earn {affiliateStats.commissionRate}% commission on every sale you refer. Share your knowledge and get rewarded!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">{formatCurrency(affiliateStats.thisMonthEarnings)}</div>
                <div className="text-blue-200 text-sm">This Month</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{affiliateStats.totalReferrals}</div>
                <div className="text-blue-200 text-sm">Total Referrals</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{affiliateStats.conversionRate}%</div>
                <div className="text-blue-200 text-sm">Conversion Rate</div>
              </div>
            </div>
          </div>

          {/* Recent Referrals */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Referrals</h3>
            <div className="space-y-4">
              {recentReferrals.map((referral) => (
                <div key={referral.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{referral.customerName}</h4>
                    <p className="text-sm text-gray-600">{referral.courseName}</p>
                    <p className="text-xs text-gray-500">{formatDate(referral.purchaseDate)}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">{formatCurrency(referral.commission)}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      referral.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {referral.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'links' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Affiliate Links</h3>
            <div className="space-y-4">
              {affiliateLinks.map((link) => (
                <div key={link.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{link.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <input
                          type="text"
                          value={link.url}
                          readOnly
                          className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded px-3 py-1 w-96"
                        />
                        <button
                          onClick={() => copyToClipboard(link.url)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Clicks</div>
                      <div className="font-medium">{link.clicks}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Conversions</div>
                      <div className="font-medium">{link.conversions}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Earnings</div>
                      <div className="font-medium text-green-600">{formatCurrency(link.earnings)}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Conversion Rate</div>
                      <div className="font-medium">{link.conversionRate}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'earnings' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Earnings Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Earnings:</span>
                  <span className="font-medium">{formatCurrency(affiliateStats.totalEarnings)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pending Payouts:</span>
                  <span className="font-medium text-yellow-600">{formatCurrency(affiliateStats.pendingPayouts)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">This Month:</span>
                  <span className="font-medium text-green-600">{formatCurrency(affiliateStats.thisMonthEarnings)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Commission Rate:</span>
                  <span className="font-medium">{affiliateStats.commissionRate}%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Referrals:</span>
                  <span className="font-medium">{affiliateStats.totalReferrals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Conversion Rate:</span>
                  <span className="font-medium">{affiliateStats.conversionRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg. Commission:</span>
                  <span className="font-medium">{formatCurrency(affiliateStats.totalEarnings / affiliateStats.totalReferrals)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Best Performing Course:</span>
                  <span className="font-medium">React Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'resources' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Marketing Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {marketingResources.map((resource, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{resource.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Download →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Affiliate Tips</h3>
            <div className="space-y-3 text-sm text-blue-800">
              <div className="flex items-start space-x-2">
                <span className="font-bold">1.</span>
                <span>Share your personal experience with the courses to build trust</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-bold">2.</span>
                <span>Use social media platforms where your audience is most active</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-bold">3.</span>
                <span>Create valuable content that naturally incorporates your affiliate links</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-bold">4.</span>
                <span>Track your performance and optimize your best-performing content</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BecomeAffiliate;