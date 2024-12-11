const container = document.querySelector(".container");
const likeBtns = document.querySelectorAll(".like-btn");

var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    slidesPerView: "auto",
    loop:true,
    speed:3000,
    freeMode: true,
    allowTouchMove: false,
    autoplay:{
       deplay:0,
    },
});

function stopAutoplay(){
    const swiperTranslate = swiper.getTranslate();
    swiper.setTranslate(swiperTranslate);
    swiper.autoplay.stop();
}

function startAutoplay(){
    swiper.slideTo(swiper.activeIndex,1000,false);
    swiper.autoplay.start();
}

container.addEventListener("mouseenter", () => stopAutoplay());
container.addEventListener("mouseenter", () => startAutoplay());

likeBtns.forEach((likeBtn) =>{
    likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("active");
        likeBtn.classList.toggle("pulse");
    })

});
