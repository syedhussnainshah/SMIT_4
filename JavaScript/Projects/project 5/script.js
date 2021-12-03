const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarWIdth = sidebar.offsetWidth + "px";
const body = document.querySelector('body');

// Click on CLose btn Hide Sidebar
closeBtn.onclick = function () {
    sidebar.classList.remove('sidebar-show');
};

// Onclick Hide or Show Sidebar
toggleBtn.onclick = function () {
    const sidebarShow = sidebar.classList.contains('sidebar-show');
    if (sidebarShow) {
        sidebar.classList.remove('sidebar-show');
    } else {
        sidebar.classList.add('sidebar-show');
    }
};

// Store Sidebar Width
const windowWidth = window.innerWidth;
// Onrefresh Show Sidebar If width grater then 771.98px
if (windowWidth > 771.98) {
    sidebar.classList.add('sidebar-show');
} else {
    sidebar.classList.remove('sidebar-show');
}

// Onresize Hide or Show Sidebar
window.onresize = function () {
    const windowWidth = window.innerWidth;
    if (windowWidth > 771.98) {
        sidebar.classList.add('sidebar-show');
        body.style.width = `calc(100% - ${sidebarWIdth})`;
        body.style.marginLeft = "auto";

    } else {
        sidebar.classList.remove('sidebar-show');
        body.style.width = "100%";
    }
};


// Change Body Width on Load
if (sidebar.classList.contains("sidebar-show")) {
    body.style.width = `calc(100% - ${sidebarWIdth})`;
    body.style.marginLeft = "auto";
} else {
    body.style.width = "100%";
}

// Change Body Width on Change
window.onclick = function () {
    const windowWidth = window.innerWidth;
    if (windowWidth > 771.98) {
        if (sidebar.classList.contains("sidebar-show")) {
            body.style.width = `calc(100% - ${sidebarWIdth})`;
            body.style.marginLeft = "auto";
        } else {
            body.style.width = "100%";
        }
    }

}