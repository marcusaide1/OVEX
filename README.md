# OVEX
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OVEX Exchange | Secure Crypto Trading</title>
  <meta name="OVEXcrypto" content="Buy and sell Bitcoin, Ethereum and other cryptocurrencies in South African Rand (ZAR)">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-900 text-white min-h-screen flex flex-col">

  <!-- Navbar -->
  <header class="bg-gray-800 shadow-md">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <a href="index.html" class="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">OVEXcrypto</a>
      <nav aria-label="Main navigation">
        <ul class="flex space-x-6 items-center">
          <li><a href="#markets" class="hover:text-green-400 transition-colors">Markets</a></li>
          <li><a href="#features" class="hover:text-green-400 transition-colors">Features</a></li>
          <li><a href="#support" class="hover:text-green-400 transition-colors">Support</a></li>
          <li><a href="login.html" class="hover:text-green-400 transition-colors">Login</a></li>
          <li><a href="signup.html" class="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded transition-colors">Sign Up</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="flex-grow">
    <!-- Hero Section -->
    <section class="text-center py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Buy & Sell Crypto in ZAR</h1>
        <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Secure, fast, and local cryptocurrency trading platform for South Africans.</p>
        <div class="flex justify-center gap-4">
          <a href="signup.html" class="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">Get Started</a>
          <a href="#markets" class="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors">View Markets</a>
        </div>
      </div>
    </section>

    <!-- Live Market Prices -->
    <section id="markets" class="py-12 bg-gray-800">
      <div class="container max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-10">Live Market Prices</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-semibold">Bitcoin</h3>
              <span class="text-gray-400">BTC</span>
            </div>
            <p class="text-2xl font-bold text-green-400">R 985,200</p>
            <p class="text-green-400 mt-2">+2.4% (24h)</p>
          </div>
          <div class="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-semibold">Ethereum</h3>
              <span class="text-gray-400">ETH</span>
            </div>
            <p class="text-2xl font-bold text-green-400">R 53,200</p>
            <p class="text-green-400 mt-2">+1.8% (24h)</p>
          </div>
          <div class="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-semibold">Tether</h3>
              <span class="text-gray-400">USDT</span>
            </div>
            <p class="text-2xl font-bold text-green-400">R 18.95</p>
            <p class="text-green-400 mt-2">+0.1% (24h)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section id="features" class="py-16 bg-gray-900">
      <div class="container max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Why Trade With Us?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15l5-5m0 0l-5-5m5 5H7"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Instant ZAR Withdrawals</h3>
            <p class="text-gray-400">Get your money in your bank account within minutes, not days.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Bank-Level Security</h3>
            <p class="text-gray-400">98% of funds stored offline in cold storage with multi-signature protection.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Lowest Fees</h3>
            <p class="text-gray-400">0.1% trading fees - the most competitive rates in South Africa.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-green-500 text-black">
      <div class="container mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-6">Ready to start trading?</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">Join thousands of South Africans trading crypto securely with OVEXcrypto.</p>
        <div class="flex justify-center gap-4">
          <a href="signup.html" class="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Create Free Account</a>
          <a href="#support" class="border border-black hover:bg-black hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">Contact Support</a>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer id="support" class="bg-gray-800 py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold text-green-400 mb-4">OVEXcrypto</h3>
          <p class="text-gray-400">South Africa's most trusted cryptocurrency exchange since 2025.</p>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Company</h4>
          <ul class="space-y-2">
            <li><a href="about.html" class="text-gray-400 hover:text-green-400 transition-colors">About Us</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">Careers</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">Compliance</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Support</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">Help Center</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">Contact Us</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors">FAQs</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; <span id="currentYear">2025</span> OVEXcrypto Exchange. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script>
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
  </script>
</body>
</html>
