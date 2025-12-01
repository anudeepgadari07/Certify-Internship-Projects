document.getElementById('cta').addEventListener('click', () => {
  const more = document.getElementById('more');
  more.classList.toggle('hidden');
  const btn = document.querySelector('.btn');
  btn.textContent = more.classList.contains('hidden') ? 'Get Started' : 'Hide';
});
