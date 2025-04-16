let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

function checkLogin() {
  if (!currentUser) {
    window.location.href = 'login.html';
  }
}

function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    alert("Invalid credentials or user doesn't exist. Please register.");
    return false;
  }
  localStorage.setItem('currentUser', JSON.stringify(user));
  return true;
}

function register(name, email, username, password) {
  if (users.some(u => u.username === username)) {
    alert('Username already exists!');
    return false;
  }
  const newUser = { name, email, username, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  return true;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'login.html';
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser'));
}

function validatePassword(password) {
  const user = getCurrentUser();
  return user && user.password === password;
}

  