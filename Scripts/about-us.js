import {team} from "./team.js";

//OFFCANVAS MENU
const offcanvasIcon = document.querySelector(".sm-screen-nav");
const offcanvas = document.querySelector(".offcanvas");
const offcanvasShade = document.querySelector(".offcanvas-shade");
offcanvasIcon.addEventListener('click', () => {
    if(!offcanvasIcon.dataset.clicked){
        offcanvasIcon.setAttribute("data-clicked", "true");
        offcanvasIcon.classList.add("offcanvas-icon-anim");
        offcanvas.classList.remove("offcanvas-anim-off");
        offcanvas.classList.add("offcanvas-anim");
        offcanvas.style.display = 'flex';
        offcanvasShade.style.display = "flex";
        offcanvasIcon.innerHTML = `<i class="fa-solid fa-x"></i>`;
        offcanvasShade.addEventListener('click', () => {
            offcanvasIcon.removeAttribute("data-clicked");
            offcanvasIcon.classList.remove("offcanvas-icon-anim");
            offcanvas.classList.remove("offcanvas-anim");
            offcanvas.classList.add("offcanvas-anim-off");
            offcanvasShade.style.display = "none";
            offcanvasIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        });
    }else{
        offcanvasIcon.removeAttribute("data-clicked");
        offcanvasIcon.classList.remove("offcanvas-icon-anim");
        offcanvas.classList.remove("offcanvas-anim");
        offcanvas.classList.add("offcanvas-anim-off");
        offcanvasShade.style.display = "none";
        offcanvasIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
});

team.forEach((member) => {
    document.querySelector(".team-members-ctn").innerHTML += `
        <div class="team-member">
            <img width="100%" src="${member.image}" alt="">
            <p>${member.name}</p>
        </div>
    `;
});






