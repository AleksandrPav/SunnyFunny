const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween:275,
});
export default swiper;
