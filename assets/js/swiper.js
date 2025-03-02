// In swiper.js
const testimonialSwiper = new Swiper(".testimonialSwiper", {
	loop: true,
	autoplay: {
		delay: 5000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: { slidesPerView: 1 },
		768: { slidesPerView: 2 },
		1024: { slidesPerView: 3 },
	},
});
