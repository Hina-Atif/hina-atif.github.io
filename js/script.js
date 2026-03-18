// SAFE NAVBAR FIX - DOES NOT HIDE ANY LINKS

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("header nav a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
