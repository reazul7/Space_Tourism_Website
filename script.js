// for navigation part
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone click the button
navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true)
    }
    else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false)
    }

    console.log(visibility);
    console.log(navToggle.getAttribute('aria-expanded'));
})


// for tabs part
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', (e) => {
    console.log(e);
})