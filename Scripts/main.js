"use strict";
import {posts} from "./posts.js";
import {videos} from "./videos.js";

posts.forEach((post) => {
    document.querySelector(".blog").innerHTML += `
        <div class="post">
                <h2>${post.header}</h2>
                <p class="post-text js-post-text">${post.shownText}
                <span class="read-more-text">
                    ${post.moreText}
                </span>
                <span class="read-more-link js-read-more-link">...see more</span>
                </p>
                <img src="${post.image}" width="100%" alt="">
                <!-- <div class="reaction-container">
                    <span>2.3K</span>
                    <i class="fa-regular fa-heart"></i>
                </div> -->
                <!-- <i class="fa-solid fa-heart"></i> -->
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


videos.forEach((video) => {
    document.querySelector(".youtube-embed").innerHTML += `
        <div class="video">
            ${video.videoLink}
            <p class="video-title">${video.videoTitle}</p>
            <p class="video-description">${video.videoDescription}</p>
        </div>
    `;
});


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











