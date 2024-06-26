// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelectorAll('header nav a[href*=' + id + ']').forEach(link => {
                link.classList.add('active');
            });
            sec.classList.add('show-animate');

        }
        else {
            sec.classList.remove('show-animate');
        }
    });
    // sticky header
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

let footer = document.querySelector('footer');
footer.classList.toggle('show-animate',this.innerHeight+this.scrollY >= document.scrollingElement.scrollHeight);
};






