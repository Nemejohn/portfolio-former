const logo = document.querySelectorAll("#logo path");
const unorderedlist = document.getElementById("unordered-list");

function openmenu(){
    unorderedlist.style.clipPath = "circle(100%)"
} 
function closemenu(){
    unorderedlist.style.clipPath = "circle(0% at 0 0)"
} 
function listitem(){
    unorderedlist.style.clipPath = "circle(0% at 0 0)"
}

function changeBg(){
    var navbar = document.getElementById('nav-bar');
    var scrollValue = window.scrollY;

    if(scrollValue < 50){
        navbar.classList.remove('scroll-background');
    }else{
        navbar.classList.add('scroll-background');
    }

}

window.addEventListener('scroll', changeBg);

// JavaScript for Auto typing
var typed = new Typed (".auto-type", {
    strings: ["Front-End Developer", "UI/UX Designer", "Web Designer"],
    typeSpeed: 70,
    backspeed: 150,
    loop: true
});

// JavaScript for Preloader
// var loader = document.getElementById("preloader");
// var loader_videos = document.getElementById("loader-videos");

// window.addEventListener("load", function(){
//     loader.style.display= "none"
//     loader_videos.style.display= "none"
// })

// ------------------------

// JavaScript for like & dislike button

document.querySelectorAll(".post").forEach(post => {
    const postId = post.dataset.postId;
    const ratings = post.querySelectorAll(".post-rating");
    const likeRating = ratings[0];

    ratings.forEach(rating => {
        const button = rating.querySelector(".post-rating-button");
        const count = rating.querySelector(".post-rating-count");

        button.addEventListener("click", async () => {
            if (rating.classList.contains("post-rating-selected")) {
                return;
            }

            count.textContent = Number(count.textContent) + 1;

            ratings.forEach(rating => {
                if (rating.classList.contains("post-rating-selected")) {
                    const count = rating.querySelector(".post-rating-count");

                    count.textContent = Math.max(0, Number(count.textContent) - 1);
                    rating.classList.remove("post-rating-selected");
                }
            });

            rating.classList.add("post-rating-selected");

            const likeOrDislike = likeRating === rating ? "like" : "dislike";
            const response = await fetch(`/posts/${postId}/${likeOrDislike}`);
            const body = await response.json();
        });
    });
});


