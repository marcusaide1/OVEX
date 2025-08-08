import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = ({ darkMode, toggleDarkMode }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex h-screen overflow-hidden">
      
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 p-2 rounded text-white"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white flex-shrink-0 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? 'w-20' : 'w-64'
      } ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} fixed md:relative z-40 h-full`}>
        
        {/* Logo Section */}
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center">
            <i className="fas fa-chart-line text-green-400 text-2xl mr-3"></i>
            {!sidebarCollapsed && <span className="text-xl font-bold">ZARcrypto</span>}
          </div>
          <button 
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white hidden md:block"
          >
            <i className={`fas fa-chevron-${sidebarCollapsed ? 'right' : 'left'}`}></i>
          </button>
        </div>

        {/* User Profile */}
        <div className="p-4 border-b border-gray-700 flex items-center">
          <div className="relative">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-800"></div>
          </div>
          {!sidebarCollapsed && (
            <div className="ml-3">
              <div className="font-medium">John Doe</div>
              <div className="text-xs text-gray-400">Premium <i className="fas fa-crown text-yellow-400 ml-1"></i></div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-grow overflow-y-auto">
          <ul className="p-2">
            <li>
              <Link to="/" className="flex items-center p-3 rounded hover:bg-gray-700">
                <i className="fas fa-home text-orange-400 w-6"></i>
                {!sidebarCollapsed && <span className="ml-3">Home</span>}
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded hover:bg-gray-700 bg-gray-700 border-l-4 border-green-400">
                <i className="fas fa-tachometer-alt text-green-400 w-6"></i>
                {!sidebarCollapsed && <span className="ml-3">Dashboard</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded hover:bg-gray-700">
                <i className="fas fa-chart-candlestick text-blue-400 w-6"></i>
                {!sidebarCollapsed && (
                  <>
                    <span className="ml-3">Trading</span>
                    <span className="ml-auto bg-red-500 text-white text-xs px-1 py-0.5 rounded-full animate-pulse">Live</span>
                  </>
                )}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded hover:bg-gray-700">
                <i className="fas fa-briefcase text-purple-400 w-6"></i>
                {!sidebarCollapsed && <span className="ml-3">Portfolio</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded hover:bg-gray-700">
                <i className="fas fa-wallet text-yellow-400 w-6"></i>
                {!sidebarCollapsed && (
                  <>
                    <span className="ml-3">Wallet</span>
                    <span className="ml-auto bg-green-500 text-white text-xs px-2 py-1 rounded-full">R 24.5K</span>
                  </>
                )}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded hover:bg-gray-700">
                <i className="fas fa-newspaper text-orange-400 w-6"></i>
                {!sidebarCollapsed && <span className="ml-3">Market News</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded hover:bg-gray-700">
                <i className="fas fa-cog text-gray-400 w-6"></i>
                {!sidebarCollapsed && <span className="ml-3">Settings</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 rounded hover:bg-gray-700">
                <i className="fas fa-headset text-pink-400 w-6"></i>
                {!sidebarCollapsed && <span className="ml-3">Support</span>}
              </a>
            </li>
            <li>
              <Link to="/login" className="flex items-center p-3 rounded hover:bg-gray-700 text-red-400">
                <i className="fas fa-sign-out-alt w-6"></i>
                {!sidebarCollapsed && <span className="ml-3">Logout</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-grow overflow-auto">
        {/* Top Bar */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="flex justify-between items-center p-4">
            <div>
              <h1 className="text-2xl font-bold dark:text-white">Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">Welcome back, John!</p>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-gray-600 dark:text-gray-300`}></i>
              </button>
              <div className="relative">
                <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                  <i className="fas fa-bell text-gray-600 dark:text-gray-300"></i>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 space-y-6">
          {/* Portfolio Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full -mr-10 -mt-10 opacity-20"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Balance</h3>
                  <i className="fas fa-wallet text-green-500"></i>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">R 124,567.89</div>
                <div className="text-green-500 text-sm mt-1">+12.5% <i className="fas fa-arrow-up"></i></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full -mr-10 -mt-10 opacity-20"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Today's P&L</h3>
                  <i className="fas fa-chart-line text-blue-500"></i>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">R 2,456.78</div>
                <div className="text-green-500 text-sm mt-1">+5.8% <i className="fas fa-arrow-up"></i></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full -mr-10 -mt-10 opacity-20"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Open Positions</h3>
                  <i className="fas fa-briefcase text-purple-500"></i>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">7</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">Active trades</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full -mr-10 -mt-10 opacity-20"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Available Cash</h3>
                  <i className="fas fa-coins text-orange-500"></i>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">R 15,432.10</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">Ready to trade</div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Portfolio Performance */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 dark:text-white">Portfolio Performance</h2>
              <div className="h-80 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-chart-area text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-500 dark:text-gray-400">Portfolio Chart</p>
                </div>
              </div>
            </div>

            {/* Asset Allocation */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 dark:text-white">Asset Allocation</h2>
              <div className="h-80 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-chart-pie text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-500 dark:text-gray-400">Allocation Chart</p>
                </div>
              </div>
            </div>
          </div>

          {/* Market Overview & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Market Overview */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold dark:text-white">Market Overview</h2>
                <button className="text-blue-500 text-sm hover:text-blue-600">View All</button>
              </div>
              <div className="space-y-4">
                {/* Bitcoin */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center">
                    <i className="fab fa-bitcoin text-orange-500 text-2xl mr-3"></i>
                    <div>
                      <div className="font-semibold dark:text-white">Bitcoin</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">BTC</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold dark:text-white">R 1,245,680</div>
                    <div className="text-green-500 text-sm">+5.2% <i className="fas fa-arrow-up"></i></div>
                  </div>
                </div>

                {/* Ethereum */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center">
                    <i className="fab fa-ethereum text-blue-500 text-2xl mr-3"></i>
                    <div>
                      <div className="font-semibold dark:text-white">Ethereum</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">ETH</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold dark:text-white">R 68,420</div>
                    <div className="text-red-500 text-sm">-2.1% <i className="fas fa-arrow-down"></i></div>
                  </div>
                </div>

                {/* Cardano */}
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-purple-500 font-bold text-2xl mr-3">ADA</span>
                    <div>
                      <div className="font-semibold dark:text-white">Cardano</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">ADA</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold dark:text-white">R 8.45</div>
                    <div className="text-green-500 text-sm">+8.7% <i className="fas fa-arrow-up"></i></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6 dark:text-white">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors">
                  <i className="fas fa-plus mr-2"></i>
                  Buy Crypto
                </button>
                <button className="w-full flex items-center justify-center bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors">
                  <i className="fas fa-minus mr-2"></i>
                  Sell Crypto
                </button>
                <button className="w-full flex items-center justify-center bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                  <i className="fas fa-exchange-alt mr-2"></i>
                  Trade
                </button>
                <button className="w-full flex items-center justify-center bg-purple-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition-colors">
                  <i className="fas fa-download mr-2"></i>
                  Withdraw
                </button>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold dark:text-white">Recent Transactions</h2>
                <button className="text-blue-500 text-sm hover:text-blue-600">View All</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Transaction</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                          <i className="fas fa-arrow-down text-green-500"></i>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">Buy Bitcoin</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">BTC Purchase</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">0.05 BTC</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">R 62,284</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      2 hours ago
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                          <i className="fas fa-arrow-up text-red-500"></i>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">Sell Ethereum</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">ETH Sale</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">2.5 ETH</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">R 171,050</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      5 hours ago
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <i className="fas fa-exchange-alt text-blue-500"></i>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">Deposit ZAR</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Bank Transfer</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">R 50,000</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">ZAR Deposit</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      1 day ago
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardPage;
