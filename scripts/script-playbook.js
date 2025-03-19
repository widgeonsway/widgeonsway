

// Sidebar button for the aside section
const btnSidebarEl = document.querySelector(".btn-mobile-sidebar");
const sidebarEl = document.querySelector(".aside");
const iconSidebarBars = document.querySelector(".fa-screwdriver-wrench");
const iconSidebarX = document.querySelector(".fa-xmark");



// Toggle the sidebar
btnSidebarEl.addEventListener("click", function () {
  sidebarEl.classList.toggle("sidebar-open");

  // Toggle icons for the sidebar
  if (sidebarEl.classList.contains("sidebar-open")) {
    iconSidebarBars.style.display = "none";
    iconSidebarX.style.display = "block";
  } else {
    iconSidebarBars.style.display = "block";
    iconSidebarX.style.display = "none";
  }
});
