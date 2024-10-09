// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding a slight fade-in effect when scrolling sections into view
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// CSS for fade-in effect
document.styleSheets[0].insertRule(`
    .fade-in {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 1s ease-out, transform 1s ease-out;
    }
    section {
        opacity: 0;
        transform: translateY(20px);
    }
`, 0);
