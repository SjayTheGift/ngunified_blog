const btn = document.getElementById('menu-btn');
const mobile_nav = document.querySelector('.nav');
const a_btn = document.querySelectorAll('.nav-list > li > a');
const navigation = document.querySelector('.navigation');
const lastname = document.querySelector('.lastname')
const hamburger_top = document.querySelector('.hamburger-top');
const hamburger_middle = document.querySelector('.hamburger-middle');
const hamburger_bottom = document.querySelector('.hamburger-bottom'); 

const sections = document.querySelectorAll('section');

// Toggle nav hide and show on mobile

function toggleNav(){
    btn.classList.toggle('open');
    mobile_nav.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', toggleNav);



a_btn.forEach(a =>{
    a.addEventListener('click', toggleNav)
});

