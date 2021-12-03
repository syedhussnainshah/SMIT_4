const toggolebtn = document.querySelector('.toggle-btn');

const navbarLink = document.querySelector('.navbar-nav');

toggolebtn.onclick = function () {
    // Toggle Through Class Check
    // const hideCLass = navbarLink.classList.contains('navbar-nav-hide');
    // if (hideCLass) {
    //     navbarLink.classList.remove('navbar-nav-hide');
    // } else {
    //     navbarLink.classList.add('navbar-nav-hide');
    // }
    navbarLink.classList.toggle('navbar-nav-hide');
};

// Onresieh Hide Navbar Nav if Show
window.onresize = function () {
    const windowWidth = window.innerWidth;
    if (windowWidth < 771) {
        navbarLink.classList.add('navbar-nav-hide');
    }
};

// Onrefresh Hide Navbar Nav if Show
window.onload = function () {
    const windowWidth = window.innerWidth;
    if (windowWidth < 771) {
        navbarLink.classList.add('navbar-nav-hide');
    }
};