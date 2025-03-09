// Toggle the hamburger menu for mobile view
const hamburgerMenu = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');

hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
