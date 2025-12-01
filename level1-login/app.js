const form = document.getElementById('loginForm');
const errorEl = document.getElementById('error');
const success = document.getElementById('success');
const logout = document.getElementById('logout');

form.addEventListener('submit', e => {
  e.preventDefault();
  errorEl.textContent = '';
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if(!email || password.length < 6){
    errorEl.textContent = 'Please enter a valid email and password (min 6 chars).';
    return;
  }
  form.classList.add('hidden');
  success.classList.remove('hidden');
  localStorage.setItem('mockUser', email);
});

logout && logout.addEventListener('click', () => {
  localStorage.removeItem('mockUser');
  success.classList.add('hidden');
  form.classList.remove('hidden');
});
