const hamurger = document.getElementById('hamburger');
const navmenu = document.getElementById('nav-menu')
const closeicon = document.getElementById('nav-close');
const navlink = document.querySelectorAll('.nav__link');


navlink.forEach(link => 
    link.addEventListener('click', ()=>{
        navmenu.classList.add('hidden')
    }))

closeicon.addEventListener('click', ()=>{
    navmenu.classList.add('hidden')
})

hamurger.addEventListener("click", ()=>{
    navmenu.classList.remove('hidden')
})   


// TABS
const tabs = document.querySelectorAll('.tabs_wrap ul li');
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const snacks = document.querySelectorAll('.snack');
const beverages = document.querySelectorAll('.Beverage');


tabs.forEach(tab => {
   tab.addEventListener("click",()=>{
     tabs.forEach(tab =>{
        tab.classList.remove('active')
     })
     tab.classList.add('active')

     const tabvalue = tab.getAttribute('data-tabs')
     console.log(tabvalue);

     all.forEach(item =>{
        item.style.display="none"
     })

     if(tabvalue == 'food'){
     foods.forEach(item =>{
        item.style.display = 'block'
     })
    }
    else if(tabvalue == 'snack'){
        snacks.forEach(item =>{
            item.style.display = 'block'
         })
     }
      else if(tabvalue == 'Beverage'){
        beverages.forEach(item =>{
            item.style.display = 'block'
         })
     }
     else{  
        all.forEach(item =>{
            item.style.display="block"  
         })
     }


   })
})

// DArk mode
const html= document.querySelector("html");
const themebtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode")=="dark"){
    darkmode();
    console.log("darkmode")
}else{
    lightmode();
    console.log("lihgthjsd")

}
   
themebtn.addEventListener('click', (e)=>{
    if(localStorage.getItem("mode") == "light"){
        darkmode();
    }else{
        lightmode();
    }
     
})

function lightmode(){
    html.classList.remove("dark");
    themebtn.classList.replace("ri-sun-line","ri-moon-line");
    localStorage.setItem("mode","light");
}  

   
function darkMode(){
    html.classList.add("dark");
    themebtn.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
}

// Show scroll 
const scrollUp = () =>{
    const scrollupbtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250){
        scrollupbtn.classList.remove('-bottom-1/2');
        scrollupbtn.classList.add('bottom-4');
    }else{
        scrollupbtn.classList.add('-bottom-1/2');
        scrollupbtn.classList.remove('bottom-4');
    }
}   
wondow.addEventListener('scroll',scrollUp);

// Scroll section active links
const activelink = ()=>{
    const sections = document.querySelectorAll("section");
    const navlinks = document.querySelectorAll(".nav__link");

    let current = 'home';
    sections.forEach(sec =>{
        const sectionTop =sec.offsetTop;
    
    if(this.scrollY >= sectionTop - 60){
        current =sec.getAttribute("id");
    }
    })

    navlinks.forEach((item) =>{
        item.classList.remove("text-secondaryColor");
        if(item.href.includes(current)){
            item.classList.add('text-secondaryColor');
        }
    });

window.addEventListener('scroll',activelink)

}