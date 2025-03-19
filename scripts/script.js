"use strict";

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const iconBars = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-x");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");

  // Manually toggle display instead of relying on .hidden
  if (headerEl.classList.contains("nav-open")) {
    iconBars.style.display = "none";
    iconX.style.display = "block";
  } else {
    iconBars.style.display = "block";
    iconX.style.display = "none";
  }
});


