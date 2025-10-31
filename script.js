// Select elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');
const loginForm = document.getElementById('loginForm');

// Check if credentials are saved in localStorage on load
window.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  // Show or hide 'Login as existing user' button
  if (savedUsername && savedPassword) {
    existingBtn.classList.remove('hidden');
  } else {
    existingBtn.classList.add('hidden');
  }

  // Clear inputs and checkbox on page load
  usernameInput.value = '';
  passwordInput.value = '';
  rememberCheckbox.checked = false;
});

// Handle form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (rememberCheckbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    existingBtn.classList.remove('hidden');
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    existingBtn.classList.add('hidden');
  }

  // Clear password input for security
  passwordInput.value = '';
});

// Handle "Login as existing user" button click
existingBtn.addEventListener('click', () => {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
