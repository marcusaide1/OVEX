// Fetch users from localStorage or initialize
function getStoredUsers() {
  return JSON.parse(localStorage.getItem('registeredUsers')) || [];
}

// Save users to localStorage
function saveUsers(users) {
  localStorage.setItem('registeredUsers', JSON.stringify(users));
}

// Page Load: Check if user is logged in
document.addEventListener('DOMContentLoaded', function () {
  checkLoginStatus();

  // Attach logout event listeners if buttons exist
  const logoutBtn = document.getElementById('logout-btn');
  const logoutBtnNav = document.getElementById('logout-btn-nav');
  if (logoutBtn) logoutBtn.addEventListener('click', logoutUser);
  if (logoutBtnNav) logoutBtnNav.addEventListener('click', logoutUser);

  // Optional: Attach registration event
  const registerBtn = document.getElementById('register-btn');
  if (registerBtn) registerBtn.addEventListener('click', registerUser);
});

/* =============================
   LOGIN FUNCTIONALITY
============================= */

function fakeLogin() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const errorElement = document.getElementById('login-error');
  const loginBtn = document.getElementById('login-btn');

  if (!email || !password) {
    showError(errorElement, 'Please enter both email and password');
    return;
  }

  loginBtn.disabled = true;
  loginBtn.textContent = 'Logging in...';

  setTimeout(() => {
    const users = getStoredUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      createSession(user);
      window.location.href = 'dashboard.html';
    } else {
      showError(errorElement, 'Invalid email or password');
      loginBtn.disabled = false;
      loginBtn.textContent = 'Login';
    }
  }, 1000);
}

/* =============================
   REGISTRATION FUNCTIONALITY
============================= */

function registerUser() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const password = document.getElementById('reg-password').value;
  const errorElement = document.getElementById('register-error');

  if (!name || !email || !password) {
    showError(errorElement, 'Please fill all fields');
    return;
  }

  const users = getStoredUsers();
  if (users.find(u => u.email === email)) {
    showError(errorElement, 'Email is already registered');
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);
  saveUsers(users);
  createSession(newUser);
  window.location.href = 'dashboard.html';
}

/* =============================
   SESSION HANDLING
============================= */

function createSession(user) {
  const sessionData = {
    loggedIn: true,
    email: user.email,
    name: user.name,
    lastLogin: new Date().toISOString()
  };
  localStorage.setItem('userSession', JSON.stringify(sessionData));
}

function getSession() {
  try {
    return JSON.parse(localStorage.getItem('userSession')) || null;
  } catch (e) {
    return null;
  }
}

function checkLoginStatus() {
  const sessionData = getSession();
  const protectedPages = ['dashboard.html'];
  const currentPage = window.location.pathname.split('/').pop();

  if (protectedPages.includes(currentPage)) {
    if (!sessionData?.loggedIn) {
      window.location.href = 'index.html';
    } else {
      updateUIForLoggedInUser(sessionData);
      const dashboard = document.getElementById('dashboard-content');
      if (dashboard) dashboard.style.display = 'block';
    }
  }

  if (currentPage === 'index.html' && sessionData?.loggedIn) {
    window.location.href = 'dashboard.html';
  }
}

/* =============================
   UI & ERROR HANDLING
============================= */

function updateUIForLoggedInUser(sessionData) {
  const welcomeElement = document.getElementById('welcome-message');
  const lastLoginElement = document.getElementById('last-login');
  const loginBtn = document.getElementById('login-btn-nav');
  const logoutBtn = document.getElementById('logout-btn-nav');

  if (welcomeElement) {
    welcomeElement.textContent = `Welcome back, ${sessionData.name}`;
  }

  if (lastLoginElement) {
    const lastLoginDate = new Date(sessionData.lastLogin);
    lastLoginElement.textContent = `Last login: ${lastLoginDate.toLocaleString()}`;
  }

  if (loginBtn) loginBtn.style.display = 'none';
  if (logoutBtn) logoutBtn.style.display = 'block';
}

function logoutUser() {
  localStorage.removeItem('userSession');
  window.location.href = 'index.html';
}

function showError(element, message) {
  if (element) {
    element.textContent = message;
    element.style.display = 'block';
    setTimeout(() => {
      element.style.display = 'none';
    }, 3000);
  }
}
