document.addEventListener("DOMContentLoaded", function () {
    // Навигация при клике на меню
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Анимация появления секций
    const sections = document.querySelectorAll(".content");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Галерея - увеличение изображения при клике
    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", function () {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `<div class="modal-content"><img src="${this.src}" alt="Изображение"><span class="close">&times;</span></div>`;
            document.body.appendChild(modal);
            document.querySelector(".close").addEventListener("click", () => modal.remove());
            modal.addEventListener("click", () => modal.remove());
        });
    });
});
