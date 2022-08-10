const mobile_nav = document.querySelector('.mobile-nav-btn');
const show = document.querySelector('.nav');
mobile_nav.addEventListener('click',() => toggleNavbar());
function toggleNavbar(){
     show.classList.toggle("show");
}
$(document).ready(function () {
     $(window).scroll(function () {
         var pos = $(document).scrollTop();
         console.log(pos);
          if(pos>234 && pos<300){
              $('.two').addClass(' animate__animated animate__rotateInUpLeft');}
          if(pos>600 && pos<900){
               $('.three').addClass('animate__animated animate__rotateInUpRight')
          }
          if(pos>1099 && pos<1224){
               $('.four').addClass('animate__animated animate__lightSpeedInLeft')
          }
          if(pos>1500 && pos<1700){
               $('.five').addClass('animate__animated animate__fadeInUp')
          }
     });
 });
