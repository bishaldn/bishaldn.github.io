
const mobile_nav = document.querySelector('.mobile-nav-btn');
const show = document.querySelector('.nav');
mobile_nav.addEventListener('click', () => toggleNavbar());
function toggleNavbar() {
    show.classList.toggle("show");
}



//js for quotes
let q_data = '';
let a_data ='';
let txt = document.getElementById('q-txt');
let athor = document.getElementById('q-author');
let newQ = document.getElementById('btn-nxt-q');


const newQuotesGen = () =>{
    let num = Math.floor(Math.random()*100);
    txt.innerHTML = q_data[num].text;
    a_data = q_data[num].author;
    if(a_data==null){
        athor.innerHTML = 'By'+' '+'Unknown';
    } 
    else{
        athor.innerHTML = 'By'+' '+a_data;
    }
    const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);
  
      node.classList.add(`${prefix}animated`, animationName);
  
      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }
  
      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
    animateCSS('.q-text', 'slideInRight');
    animateCSS('.q-name','slideInUp');
  
}

const quotesGen = async () => {
    const api = "https://type.fit/api/quotes";

    try {

        let data = await fetch(api);
        q_data = await data.json();
        newQuotesGen();
    } catch (error) {

    }
};
newQ.addEventListener('click',newQuotesGen);
quotesGen();
//animation for quoets
