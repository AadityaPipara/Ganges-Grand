document.getElementById("tabBar").addEventListener("click", function (e) {
    const tab = e.target.closest(".tab-btn");
    if (!tab) return;

    document.querySelectorAll(".tab-btn").forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
        b.setAttribute("aria-expanded", "false");
    });

    document.querySelectorAll(".tab-content").forEach(function (c) {
        c.classList.remove("active");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    tab.setAttribute("aria-expanded", "true");

    document.getElementById(tab.getAttribute("aria-controls")).classList.add("active");
});