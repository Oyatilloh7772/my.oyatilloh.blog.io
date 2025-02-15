document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector(".hero h1");
    let colors = ["#ff0000", "#ff9900", "#ffff00", "#33cc33", "#0099ff", "#6600cc", "#ff0099"];
    let colorIndex = 0;

    function changeTextColor() {
        heroText.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }
    setInterval(changeTextColor, 500);

    // Добавляем плавный скролл к секциям
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
    const sections = document.querySelectorAll("section");
    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    window.addEventListener("scroll", revealSections);
    revealSections();
});
