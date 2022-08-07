const mobile_nav = document.querySelector('.mobile-nav-btn');
const show = document.querySelector('.nav');
mobile_nav.addEventListener('click',() => toggleNavbar());
function toggleNavbar(){
     show.classList.toggle("show");
}