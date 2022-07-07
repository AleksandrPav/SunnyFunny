const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween:275,
});
export default swiper;
