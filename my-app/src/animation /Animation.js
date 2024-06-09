export function animateOnScroll(elements, className) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            }
        });
    });

    elements.forEach((element) => {
        observer.observe(element);
    });
}

