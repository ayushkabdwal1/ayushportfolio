/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu =document.getElementById("nav-menu");
const navToggle =document.getElementById("nav-toggle");
const navClose= document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu");
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu");
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll(".nav_link").forEach((item)=>{
    item.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu");
    });
});

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll(".skills_content")
 const skillsHeader = document.querySelectorAll(".skills_header")
skillsHeader.forEach((header)=>{
header.addEventListener("click", function(){
    let skillClass = this.parentNode.className;
    skillsContent.forEach((c)=>{
        c.className = "skills_content skills_close";
    });

    if(skillClass === "skills_content skills_close"){
        this.parentNode.classList.remove("skills_close")
        this.parentNode.classList.add("skills_open")
    }
   
});
});
 
/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/
const ServiceModal = document.querySelectorAll(".services_modal"),
modalBtns = document.querySelectorAll(".services_button"),
modalClose = document.querySelectorAll(".services_modal-close");

let modal = function(i){
    ServiceModal[i].classList.add("active-modal");
}


modalBtns.forEach((btn, i)=>{
    btn.addEventListener("click",()=>{
        modal(i);
    });
});

modalClose.forEach((btn, i)=>{
    btn.addEventListener("click",()=>{
    ServiceModal[i].classList.remove("active-modal");
    });
});
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 
const body = document.body,
themeBtn = document.getElementById("theme-button")

themeBtn.addEventListener("click",()=>{
   if(body.classList.contains("dark-theme")){
    body.classList.remove("dark-theme")
    themeBtn.classList = "uil uil-moon change-theme"
   }else{
    body.classList.add("dark-theme")
    themeBtn.classList = "uil uil-sun change-theme"
   }
})

// form backend 
const btn = document.getElementById('submit');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.textContent = 'Sending...';

   const serviceID = 'service_uqbka6a';
   const templateID = 'template_wrsv67g';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Send Message';
      alert('Sent!');
      this.reset();
    }, (err) => {
      btn.textContent = 'Send Message';
      alert(JSON.stringify(err));
    }).catch((err)=>{
      console.log(err);
    });
});
 