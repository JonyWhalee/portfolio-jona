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
// form

form.addEventListener('submit', e =>{
  e.preventDefault();

  fetch("https://formsubmit.co/ajax/jonathandr600@gmail.com",{
      method:'POST',
      body:new FormData(e.target)
  })
  .then(res => res.ok ? res.json():Promise.reject(res))
  .then(json => {
      console.log(json);
      response.innerHTML = `<p>${json.message}</p>`
      form.reset();
  })
  .catch(err => {
      console.log(err);
      let message = err.statusText || "please try again";
      response.innerHTML = `<p>Error ${err.status}: ${message}</p>`
  })
  .finally(() => setTimeout(() =>{
      response.innerHTML = "";
  }, 3000))
})

// scroll

const sections = document.querySelectorAll("section[id");

function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav__menu a[href*="+ sectionId + "]").classList.add("active-link");
        }else{
            document.querySelector(".nav__menu a[href*="+ sectionId + "]").classList.remove("active-link");
        }
    })
}
window.addEventListener("scroll", scrollActive);

// background

function scrollHeader(){
  const nav = document.getElementById("header");
  if(this.scrollY >= 80) nav.classList.add("scroll-header"); else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// scroll

function scrollUp(){
  const scrollUp = document.getElementById("scroll-up");
  if(this.scrollY >= 560) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*Dark / ligth */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme){
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () =>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})