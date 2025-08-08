import React, { useEffect, useRef, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LivePrices = () => {
  const [prices, setPrices] = useState({
    bitcoin: { price: 892450, change: 5.2, trend: 'up' },
    ethereum: { price: 45230, change: 3.1, trend: 'up' },
    litecoin: { price: 1245, change: -1.2, trend: 'down' },
    ripple: { price: 8.45, change: 2.8, trend: 'up' }
  });

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => {
        const newPrices = { ...prev };
        Object.keys(newPrices).forEach(coin => {
          const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
          newPrices[coin].price = Math.round(newPrices[coin].price * (1 + variation));
          newPrices[coin].change = parseFloat((newPrices[coin].change + variation * 100).toFixed(2));
          newPrices[coin].trend = newPrices[coin].change >= 0 ? 'up' : 'down';
        });
        return newPrices;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Chart data for Bitcoin
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Bitcoin Price (ZAR)',
        data: [750000, 820000, 780000, 850000, 890000, 892450],
        borderColor: '#f97316',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#f97316',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#f97316',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
        },
      },
      y: {
        grid: {
          color: 'rgba(107, 114, 128, 0.1)',
        },
        ticks: {
          color: '#6b7280',
          callback: function(value) {
            return 'R' + value.toLocaleString();
          },
        },
      },
    },
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: price < 100 ? 2 : 0,
    }).format(price);
  };

  const PriceCard = ({ coin, data, icon, name, symbol }) => (
    <div className="price-card bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 ${icon.bg}`}>
            <span className={`text-xl font-bold ${icon.text}`}>{icon.symbol}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{symbol}/ZAR</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatPrice(data.price)}
          </div>
          <div className={`text-sm font-medium ${data.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {data.change > 0 ? '+' : ''}{data.change.toFixed(2)}%
          </div>
        </div>
      </div>
      <div className="h-16 relative">
        {/* Mini chart placeholder */}
        <div className="flex items-end justify-between h-full px-1">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className={`w-1 rounded-sm ${data.trend === 'up' ? 'bg-green-400' : 'bg-red-400'}`}
              style={{
                height: `${Math.random() * 80 + 20}%`,
                opacity: 0.7 + (i * 0.015)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white fade-in">
          Live Market Prices
        </h2>
        
        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <PriceCard
            coin="bitcoin"
            data={prices.bitcoin}
            icon={{ bg: 'bg-bitcoin-gradient', text: 'text-white', symbol: '₿' }}
            name="Bitcoin"
            symbol="BTC"
          />
          <PriceCard
            coin="ethereum"
            data={prices.ethereum}
            icon={{ bg: 'bg-blue-500', text: 'text-white', symbol: 'Ξ' }}
            name="Ethereum"
            symbol="ETH"
          />
          <PriceCard
            coin="litecoin"
            data={prices.litecoin}
            icon={{ bg: 'bg-gray-400', text: 'text-white', symbol: 'Ł' }}
            name="Litecoin"
            symbol="LTC"
          />
          <PriceCard
            coin="ripple"
            data={prices.ripple}
            icon={{ bg: 'bg-blue-600', text: 'text-white', symbol: 'X' }}
            name="Ripple"
            symbol="XRP"
          />
        </div>

        {/* Bitcoin Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 fade-in delay-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Bitcoin Price Chart
            </h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-orange-500 text-white rounded-lg">6M</button>
              <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">1Y</button>
              <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">ALL</button>
            </div>
          </div>
          <div className="h-64">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivePrices;
