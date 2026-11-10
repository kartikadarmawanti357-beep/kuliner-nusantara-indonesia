document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-menu a").forEach(function (link) {
            link.addEventListener("click", function () {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }


    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (e) {

            const id = this.getAttribute("href");

            if (id === "#") return;

            const target = document.querySelector(id);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    const tombolPesan = document.querySelectorAll(".food-bottom button");

    tombolPesan.forEach(function (button) {
        button.addEventListener("click", function () {

            const card = this.closest(".food-card");

            if (!card) return;

            const namaMakanan = card.querySelector("h3").textContent;
            const harga = card.querySelector("h4").textContent;

            alert(
                "🍽️ PESANAN KAMU\n\n" +
                "Menu : " + namaMakanan + "\n" +
                "Harga : " + harga + "\n\n" +
                "Terima kasih sudah memesan di Nusantara Taste ❤️"
            );
        });
    });


    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });
    }


    const sections = document.querySelectorAll(
        ".hero, .about, .menu, .gallery, .testimonial"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });

});