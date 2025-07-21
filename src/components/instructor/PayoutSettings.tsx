import React, { useState } from 'react';
import { CreditCard, Ban as Bank, DollarSign, Settings, Plus, Edit, Trash2, Check, AlertCircle, Save } from 'lucide-react';

const PayoutSettings = () => {
  const [activeTab, setActiveTab] = useState('methods');

  const tabs = [
    { id: 'methods', name: 'Payment Methods', icon: CreditCard },
    { id: 'settings', name: 'Payout Settings', icon: Settings },
    { id: 'tax', name: 'Tax Information', icon: DollarSign },
  ];

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'bank',
      name: 'Chase Bank',
      details: '****1234',
      isDefault: true,
      verified: true,
      addedDate: '2024-01-15'
    },
    {
      id: 2,
      type: 'paypal',
      name: 'PayPal',
      details: 'instructor@example.com',
      isDefault: false,
      verified: true,
      addedDate: '2024-01-10'
    }
  ]);

  const [payoutSettings, setPayoutSettings] = useState({
    minimumAmount: 50,
    frequency: 'weekly',
    autoPayoutEnabled: true,
    currency: 'USD',
    holdPeriod: 7
  });

  const [taxInfo, setTaxInfo] = useState({
    taxId: 'XXX-XX-1234',
    taxCountry: 'United States',
    taxForm: 'W-9',
    businessType: 'individual',
    businessName: '',
    businessAddress: '123 Main St, New York, NY 10001',
    taxExempt: false
  });

  const getMethodIcon = (type) => {
    switch (type) {
      case 'bank': return <Bank className="w-6 h-6" />;
      case 'paypal': return <div className="w-6 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">P</div>;
      case 'card': return <CreditCard className="w-6 h-6" />;
      default: return <CreditCard className="w-6 h-6" />;
    }
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
          <h2 className="text-2xl font-bold text-gray-900">Payout Settings</h2>
          <p className="text-gray-600">Manage your payment methods and payout preferences</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-gray-600">Available Balance</div>
            <div className="text-2xl font-bold text-green-600">$2,772.00</div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Request Payout
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
      {activeTab === 'methods' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Add Method</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`bg-white rounded-xl p-6 border-2 transition-colors ${
                  method.isDefault ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getMethodIcon(method.type)}
                    <div>
                      <h4 className="font-medium text-gray-900">{method.name}</h4>
                      <p className="text-sm text-gray-600">{method.details}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-red-100 rounded">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status:</span>
                    <div className="flex items-center space-x-1">
                      {method.verified ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm text-yellow-600">Pending</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Added:</span>
                    <span className="text-sm text-gray-900">{formatDate(method.addedDate)}</span>
                  </div>

                  {method.isDefault && (
                    <div className="mt-3 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium text-center">
                      Default Method
                    </div>
                  )}

                  {!method.isDefault && method.verified && (
                    <button className="w-full mt-3 px-3 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Set as Default
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Payout Preferences</h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Payout Amount
                </label>
                <select
                  value={payoutSettings.minimumAmount}
                  onChange={(e) => setPayoutSettings({...payoutSettings, minimumAmount: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="25">$25</option>
                  <option value="50">$50</option>
                  <option value="100">$100</option>
                  <option value="200">$200</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payout Frequency
                </label>
                <select
                  value={payoutSettings.frequency}
                  onChange={(e) => setPayoutSettings({...payoutSettings, frequency: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="manual">Manual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency
                </label>
                <select
                  value={payoutSettings.currency}
                  onChange={(e) => setPayoutSettings({...payoutSettings, currency: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hold Period (days)
                </label>
                <select
                  value={payoutSettings.holdPeriod}
                  onChange={(e) => setPayoutSettings({...payoutSettings, holdPeriod: parseInt(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="0">0 days</option>
                  <option value="7">7 days</option>
                  <option value="14">14 days</option>
                  <option value="30">30 days</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="auto-payout"
                checked={payoutSettings.autoPayoutEnabled}
                onChange={(e) => setPayoutSettings({...payoutSettings, autoPayoutEnabled: e.target.checked})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="auto-payout" className="text-sm text-gray-700">
                Enable automatic payouts when minimum amount is reached
              </label>
            </div>

            <div className="flex justify-end">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Save className="w-4 h-4" />
                <span>Save Settings</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tax' && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Tax Information</h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax ID / SSN
                </label>
                <input
                  type="text"
                  value={taxInfo.taxId}
                  onChange={(e) => setTaxInfo({...taxInfo, taxId: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax Country
                </label>
                <select
                  value={taxInfo.taxCountry}
                  onChange={(e) => setTaxInfo({...taxInfo, taxCountry: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax Form
                </label>
                <select
                  value={taxInfo.taxForm}
                  onChange={(e) => setTaxInfo({...taxInfo, taxForm: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="W-9">W-9 (US Citizens)</option>
                  <option value="W-8BEN">W-8BEN (Non-US Individuals)</option>
                  <option value="W-8BEN-E">W-8BEN-E (Non-US Entities)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type
                </label>
                <select
                  value={taxInfo.businessType}
                  onChange={(e) => setTaxInfo({...taxInfo, businessType: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="individual">Individual</option>
                  <option value="sole-proprietorship">Sole Proprietorship</option>
                  <option value="llc">LLC</option>
                  <option value="corporation">Corporation</option>
                </select>
              </div>
            </div>

            {taxInfo.businessType !== 'individual' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  value={taxInfo.businessName}
                  onChange={(e) => setTaxInfo({...taxInfo, businessName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Address
              </label>
              <textarea
                value={taxInfo.businessAddress}
                onChange={(e) => setTaxInfo({...taxInfo, businessAddress: e.target.value})}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="tax-exempt"
                checked={taxInfo.taxExempt}
                onChange={(e) => setTaxInfo({...taxInfo, taxExempt: e.target.checked})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="tax-exempt" className="text-sm text-gray-700">
                I am tax exempt
              </label>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-yellow-800">Important Tax Information</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Please ensure all tax information is accurate. You will receive tax documents (1099-NEC) 
                    for earnings over $600 per year. Consult with a tax professional for advice.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Save className="w-4 h-4" />
                <span>Save Tax Information</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayoutSettings;