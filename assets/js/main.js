const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

if(navToggle){
 navToggle.addEventListener("click", ()=>{
  navMenu.classList.add("show-menu")
 })
}

if(navClose){
 navClose.addEventListener("click", ()=>{
  navMenu.classList.remove("show-menu")
 })
}

// 

const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
 const navMenu = document.getElementById("nav-menu")
 navMenu.classList.remove("show-menu")
}
navLink.forEach(x => x.addEventListener("click", linkAction))

// skills

const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll(".skills__header");


function toggleSkills(){
 let itemClass = this.parentNode.className;

 for(i=0; i < skillsContent.length; i++){
  skillsContent[i].className = "skills__content skills__close"
 }

 if(itemClass === "skills__content skills__close"){
  this.parentNode.className = "skills__content skills__open"
 }
}

skillsHeader.forEach((el) =>{
 el.addEventListener("click", toggleSkills)
});


// qualification

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
   tab.addEventListener('click', ()=>{
     const target = document.querySelector(tab.dataset.target)

     tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification__active')
     })
     target.classList.add('qualification__active')

     tabs.forEach(tab =>{
      tab.classList.remove('qualification__active')
     })
     tab.classList.add('qualification__active')
 })
})

// modal

const modalViews  = document.querySelectorAll('.services__modal'),
      modalBtns  = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close');


let modal = (modalClick) =>{
  modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtns, i)=>{
  modalBtns.addEventListener('click', () =>{
    modal(i);
  })
});

modalClose.forEach((modalClose)=>{
  modalClose.addEventListener('click', ()=>{
    modalViews.forEach((modalViews)=>{
      modalViews.classList.remove('active-modal')
    })
  })
})


// swiper

let swiper = new Swiper(".portfolio__container",{
  cssMode: true,
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickeable: true,
  },
});