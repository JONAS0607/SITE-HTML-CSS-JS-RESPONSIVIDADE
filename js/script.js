/** abre links do menu */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}
/** fecha links do menu */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

/**Mudar o header da página quando der scroll */
const header = document.querySelector("#header");
const navHeader = header.offsetHeight;
window.addEventListener("scroll", () => {
  if (window.scrollY >= navHeader) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

/**Testimonial */
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

//**scroll review */

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});
scrollReveal.reveal(
  `
#home .text, #home .image,
#about .text, #about .image,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links`,
  { interval: 100 }
);

//**Botão voltar para o topo */

const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});
