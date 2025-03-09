document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".testimonials-swiper", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		centeredSlides: false,
		grabCursor: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			// When window width is >= 640px
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			// When window width is >= 992px
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
});
