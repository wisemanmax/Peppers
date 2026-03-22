// Custom Cursor
const cursor = document.getElementById('custom-cursor');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, label, .category-badge').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            setTimeout(() => {
                element.classList.add('animated');
            }, index * 100);
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Smooth Scroll for hash links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        if (navOverlay) navOverlay.classList.toggle('active');
        hamburger.setAttribute('aria-expanded',
            hamburger.classList.contains('active') ? 'true' : 'false'
        );
    });

    if (navOverlay) {
        navOverlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            navOverlay.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    }

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            if (navOverlay) navOverlay.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// Dynamic copyright year
const yearEl = document.getElementById('copyright-year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = newsletterForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'SUBSCRIBED!';
        btn.style.background = '#228B22';
        btn.style.borderColor = '#228B22';
        newsletterForm.reset();
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
        }, 3000);
    });
}
