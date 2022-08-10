$(document).ready(function () {
     $(window).scroll(function () {
         var pos = $(body).scrollTop();
         console.log(pos);
     //     if((pos>2)&& (pos<104)){
     //         $('.card-1').addClass(' animate__animated animate__backInRight');
     //         $('.card-2').addClass(' animate__animated animate__backInDown');
     //         $('.card-3').addClass(' animate__animated animate__backInRight');
     //     }
     //     if(pos==177){
     //         $('.text').addClass('animate__animated animate__animated animate__backInRight');
     //     }
     });
 });
 const mobile_nav = document.querySelector('.mobile-nav-btn');
const show = document.querySelector('.nav');
mobile_nav.addEventListener('click',() => toggleNavbar());
function toggleNavbar(){
     show.classList.toggle("show");
}