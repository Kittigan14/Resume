document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll("#nav-list li a");
    const boxContent = document.querySelector(".box-content");
    const boxProject = document.querySelector(".box-project");
    const boxContact = document.querySelector(".box-contact");
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.getElementById("nav-list");

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("show");
    });

    navItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            const target = item.textContent.trim();

            if (navList.classList.contains("show")) {
                navList.classList.remove("show");
            }

            navItems.forEach((el) => el.classList.remove("active"));
            item.classList.add("active");

            if (target === "Project") {
                boxContent.style.opacity = "0";
                boxContent.style.animation = "slideUp 0.5s forwards";
                boxContact.style.animation = "slideUp 0.5s forwards";
                boxProject.style.animation = "slideDown 0.5s forwards";
                setTimeout(() => {
                    boxContent.style.display = "none";
                    boxContact.style.display = "none";
                    boxProject.style.display = "flex";
                    setTimeout(() => {
                        boxProject.style.opacity = "1";
                    }, 50);
                }, 500);
            } else if (target === "Resume") {
                boxProject.style.opacity = "0";
                boxProject.style.animation = "slideUp 0.5s forwards";
                boxContact.style.animation = "slideUp 0.5s forwards";
                boxContent.style.animation = "slideDown 0.5s forwards";
                setTimeout(() => {
                    boxProject.style.display = "none";
                    boxContact.style.display = "none";
                    boxContent.style.display = "flex";
                    setTimeout(() => {
                        boxContent.style.opacity = "1";
                    }, 50);
                }, 500);
            } else if (target === "Contact") {
                boxProject.style.opacity = "0";
                boxProject.style.animation = "slideUp 0.5s forwards";
                boxContent.style.animation = "slideUp 0.5s forwards";
                boxContact.style.animation = "slideDown 0.5s forwards";
                setTimeout(() => {
                    boxContent.style.display = "none";
                    boxProject.style.display = "none";
                    boxContact.style.display = "flex";
                    setTimeout(() => {
                        boxContact.style.opacity = "1";
                    }, 50);
                }, 500);
            }
        });
    });
});
