document.addEventListener("DOMContentLoaded", function () {
	const faqItems = document.querySelectorAll(".faq-item");

	// Toggle FAQ answers
	faqItems.forEach((item) => {
		const question = item.querySelector(".faq-question");
		question.addEventListener("click", () => {
			const isActive = item.classList.contains("active");

			// Close all items
			faqItems.forEach((otherItem) => {
				otherItem.classList.remove("active");
				otherItem.querySelector(".faq-answer").classList.remove("active");
			});

			// Toggle the clicked item
			if (!isActive) {
				item.classList.add("active");
				item.querySelector(".faq-answer").classList.add("active");
			}
		});
	});
});

// Header
    document.querySelector(".mobile-toggle").addEventListener("click", function () {
		document.querySelector(".header-right").classList.toggle("active");
	});