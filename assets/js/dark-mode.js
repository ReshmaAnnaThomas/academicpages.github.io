// Dark mode toggle logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

// Add event listener to toggle button
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Save the user's preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
