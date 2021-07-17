"use strict";
let nav = document.querySelector(".nav-center");
let harmburger = document.querySelector(".hambuger");
let allSections = document.querySelectorAll(".section");
console.log(allSections);
harmburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  console.log("clicked");
});

const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("hidden");
});

//scroll to section

const navlinks = document.querySelectorAll(".nav-link");
navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href");
    console.log(id);
    let section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

const preloader = document.querySelector(".pre-loader");
window.addEventListener("load", () => (preloader.style.display = "none"));
