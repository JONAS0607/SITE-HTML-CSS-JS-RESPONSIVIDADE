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
function changeHeader() {
  if (window.scrollY >= navHeader) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

/**Testimonial */
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
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

/**Menu ativo conforme a seção visível na página */

const sections = document.querySelectorAll("main section[id]");
function activateMenu() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

//**Botão voltar para o topo */
function backToTop() {
  if (window.scrollY >= 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  changeHeader();
  backToTop();
  activateMenu();
});
