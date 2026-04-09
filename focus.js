document.querySelector(".icone").onclick = () => {
    document.querySelector("#email").focus();
};

const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close-btn');
const navMenu = document.getElementById('nav-menu');

// Open the menu
hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');
});

// Close the menu
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Optional: Close menu when clicking a link
document.querySelectorAll('header ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

document.addEventListener('click', (event) => {
    // Check if the menu is currently active
    const isMenuOpen = navMenu.classList.contains('active');
    
    // Check if the click happened INSIDE the menu or ON the hamburger button
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    // If the menu is open AND the click was NOT inside menu and NOT on hamburger:
    if (isMenuOpen && !isClickInsideMenu && !isClickOnHamburger) {
        navMenu.classList.remove('active');
    }
});