// Get Current Year
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Hide & Show Navbar
const toggleBtn = document.querySelector('.toggle-btn');
const collaspe = document.querySelector('.collapse');
const navbarNav = document.querySelector('.navbar-nav');

// Onresize Check Height
window.onresize = () => {
    width = window.innerWidth;
    if (width < 775.98) {
        collaspe.style.height = `0px`;
    }
}

toggleBtn.onclick = function () {
    const collaspeHeight = collaspe.getBoundingClientRect().height;
    const navbarHeight = navbarNav.getBoundingClientRect().height;
    if (collaspeHeight === 0) {
        collaspe.style.height = `${navbarHeight}px`;
    } else {
        collaspe.style.height = `0px`;
    }
};

// Jump to top button
const jumpBtn = document.getElementById("topBtn");
window.onscroll = () => {
    const pageHeight = window.pageYOffset;
    if (pageHeight > 500) {
        jumpBtn.style.display = "block";
    } else {
        jumpBtn.style.display = "none";
    }
}
jumpBtn.onclick = () => {
    window.scrollTo({
        left: 0,
        top: 0,
    })
}

// Jump to Navbar Link
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.getElementById("navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
console.log(navbarHeight);
navLinks.forEach((navLink) => {
    navLink.onclick = (e) => {
        // Prevent Default
        e.preventDefault();
        const linkId = e.currentTarget.getAttribute('href').slice(1);
        console.log(linkId);
        // Get Id of Section
        const linkSection = document.getElementById(linkId);
        let position = linkSection.offsetTop;
        // Go to spoted Section
        window.scrollTo({
            left: 0,
            top: position - navbarHeight,
        });
        collaspe.style.height = `0px`;
    }
});