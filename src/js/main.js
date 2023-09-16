document.addEventListener("DOMContentLoaded", () => {
    const btnOpenMenu = document.querySelector(".burger-menu");
    const btnCloseMenu = document.querySelector(".close-menu");
    const btnToTop = document.getElementById("button-to-top");

    const navMobile = document.querySelector(".nav__mobile");
    const navLinks = document.querySelectorAll(".nav__link");

    const copyDate = document.querySelector(".copy__date");
    const currentDate = new Date();

    function closeMenu () {
        if (!navMobile.classList.contains("d-none")) {
            navMobile.classList.add("d-none");
        }
    }
    function showHideButton() {
        if (window.scrollY > 200) {
            btnToTop.style.display = "block";
        } else {
            btnToTop.style.display = "none";
        }
    }

    btnOpenMenu.addEventListener("click", () => {
        if (navMobile.classList.contains("d-none")) {
            navMobile.classList.remove("d-none");
        }
    });
    btnCloseMenu.addEventListener("click", () =>{
        closeMenu();
    });
    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("scroll", showHideButton);

    btnToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Desplazamiento suave
        });
    });

    // Cargar fecha del Copy
    const months = {
        0: "Enero",
        1: "Febrero",
        2: "Marzo",
        3: "Abril",
        4: "Mayo",
        5: "Junio",
        6: "Julio",
        7: "Agosto",
        8: "Septiembre",
        9: "Octubre",
        10: "Noviembre",
        11: "Diciembre",
    };
    copyDate.textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;


});