// =====================
// Price Fetching
// =====================
async function fetchPrices() {
    try {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=zar');
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();

        // Homepage prices
        if (document.getElementById('btc-price')) {
            document.getElementById('btc-price').textContent = `R ${data.bitcoin.zar.toLocaleString()}`;
            document.getElementById('eth-price').textContent = `R ${data.ethereum.zar.toLocaleString()}`;
            document.getElementById('usdt-price').textContent = `R ${data.tether.zar.toLocaleString()}`;
        }

        // Dashboard prices
        if (document.getElementById('btc-price-dash')) {
            document.getElementById('btc-price-dash').textContent = `R ${data.bitcoin.zar.toLocaleString()}`;
            document.getElementById('eth-price-dash').textContent = `R ${data.ethereum.zar.toLocaleString()}`;
            document.getElementById('usdt-price-dash').textContent = `R ${data.tether.zar.toLocaleString()}`;
        }
    } catch (error) {
        console.error('Error fetching prices:', error);

        const priceIds = ['btc-price', 'eth-price', 'usdt-price', 'btc-price-dash', 'eth-price-dash', 'usdt-price-dash'];
        priceIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = 'Error';
        });
    }
}

fetchPrices();
setInterval(fetchPrices, 60000);

// =====================
// Dark Mode Toggle
// =====================
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    document.querySelectorAll('.modal-content').forEach(modal => modal.classList.toggle('dark'));
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}

document.addEventListener('DOMContentLoaded', () => {
    // Apply saved dark mode
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
        document.querySelectorAll('.modal-content').forEach(modal => modal.classList.add('dark'));
    }

    // Submit login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            fakeLogin();
        });
    }

    // Submit register form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', e => {
            e.preventDefault();
            registerUser();
        });
    }
});

// =====================
// Modal Toggles
// =====================
function toggleLogin() {
    const modal = document.getElementById('login-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    const error = document.getElementById('login-error');
    if (error) error.style.display = 'none';
}

function toggleRegister() {
    const modal = document.getElementById('register-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    const error = document.getElementById('register-error');
    if (error) error.style.display = 'none';
}

// =====================
// Modal Click Outside Closer
// =====================
window.addEventListener('click', function (e) {
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');

    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === registerModal) registerModal.style.display = 'none';
});
