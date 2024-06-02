document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".header-links-movile p");
    const navLinks = document.querySelector(".navlinks");



    if (menuIcon && navLinks && downloadpart && explicacionpart && seccionpart) {
        menuIcon.addEventListener("click", function() {
            navLinks.classList.toggle("show");
            downloadpart.classList.toggle("nonedisplay");
            seccionpart.classList.toggle("nonedisplay");
            explicacionpart.classList.toggle("nonedisplay");
        });
    } else if (menuIcon && navLinks && shoppart && futureshoppart && h1main) {
        menuIcon.addEventListener("click", function() {
            navLinks.classList.toggle("show");
            shoppart.classList.toggle("nonedisplay");
            futureshoppart.classList.toggle("nonedisplay");
            h1main.classList.toggle("nonedisplay")
            foot.classList.toggle("nonedisplay")
        });
    } else {
        console.error("Uno o más elementos no se encontraron en el DOM");
    }
});
