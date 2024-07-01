import { eventPosts } from "./event-posts.js";
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

eventPosts.forEach((post) => {
    document.querySelector(".event-posts").innerHTML += `
    <div class="event-post-div">
        <div class="post">
                <h2>${post.postHead}</h2>
                <p class="post-text js-post-text">${post.shownContent}
                <span class="read-more-text">
                    ${post.moreContent}
                </span>
                <span class="read-more-link js-read-more-link">...see more</span>
                </p>   
            </div>
            <div class="img-div">
                <img src="${post.img1}" alt="Meeting Picture with Mr Ibrahim Kalokoh">
                <img src="${post.img2}" alt="Meeting Picture with Mr Ibrahim Kalokoh">
            </div>
            <p class="date">${post.date}</p>
            </div>
    `;
    const postContents = document.querySelectorAll('.js-post-text');
    const seeMoreBtns = document.querySelectorAll('.js-read-more-link');
    const seeMoreText = document.querySelectorAll(".read-more-text");   
    postContents.forEach((postContent, index) => {
        postContent.addEventListener('click', () => {
            if(!postContent.dataset.clicked){
                postContent.setAttribute("data-clicked", "true");
                seeMoreText[index].style.display = "inline";
                seeMoreBtns[index].innerHTML = "collapse";
            }else{
                postContent.removeAttribute("data-clicked");
                seeMoreText[index].style.display = "none";
                seeMoreBtns[index].innerHTML = "...see more";
            }
        });
    });
});


