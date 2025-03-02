document.addEventListener("DOMContentLoaded", () => {
	gsap.from(".cta-button", {
		scale: 0.8,
		opacity: 0,
		duration: 1,
		ease: "elastic.out(1, 0.3)",
	});

	// Add hover animations to product cards
	document.querySelectorAll(".group").forEach((item) => {
		item.addEventListener("mouseenter", () => {
			gsap.to(item.querySelector("img"), {
				scale: 1.1,
				duration: 0.3,
			});
		});

		item.addEventListener("mouseleave", () => {
			gsap.to(item.querySelector("img"), {
				scale: 1,
				duration: 0.3,
			});
		});
	});
});

// In animations.js
gsap.utils.toArray('section').forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%'
        }
    });
});