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
