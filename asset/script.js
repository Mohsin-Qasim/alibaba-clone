  // Show the second navbar on scroll
  window.addEventListener('scroll', () => {
    const secondNavbar = document.getElementById('second-navbar');
    if (window.scrollY > 150) { // Adjust scroll value as needed
      secondNavbar.style.display = 'block';
    } else {
      secondNavbar.style.display = 'none';
    }
  });