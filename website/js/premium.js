/* =====================================================
   MAHLWALERWA PREMIUM JS
   Navigation, animations & interactive features
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ─── AOS Init ───
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
            disable: window.innerWidth < 768 ? 'phone' : false
        });
    }

    // ─── Mobile Nav Toggle ───
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px';
            if (isOpen) {
                mobileMenu.style.maxHeight = '0px';
                navToggle.classList.remove('active');
            } else {
                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
                navToggle.classList.add('active');
            }
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.style.maxHeight = '0px';
                navToggle.classList.remove('active');
            });
        });
    }

    // ─── Sticky Nav Shadow ───
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ─── Smooth Scroll for anchor links ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const yOffset = -80;
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });

    // ─── Contact Form ───
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            // Basic validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Build mailto or WhatsApp link
            const subject = encodeURIComponent(`Website Enquiry: ${data.subject || 'General'}`);
            const body = encodeURIComponent(
                `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\n\nMessage:\n${data.message}`
            );
            window.location.href = `mailto:info@mahlwalerwa.co.za?subject=${subject}&body=${body}`;

            showNotification('Opening your email client...', 'success');
            this.reset();
        });
    }

    // ─── Notification Toast ───
    function showNotification(message, type = 'success') {
        const existing = document.querySelector('.notification-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'notification-toast';
        toast.style.cssText = `
            position: fixed; top: 24px; right: 24px; z-index: 9999;
            padding: 16px 24px; border-radius: 12px; max-width: 360px;
            font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500;
            color: white; box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            transform: translateX(120%); transition: transform .4s cubic-bezier(.16,1,.3,1);
            ${type === 'success'
                ? 'background: linear-gradient(135deg, #1B1F5E, #2B4FA3);'
                : 'background: linear-gradient(135deg, #C42127, #9B1B20);'}
        `;
        toast.textContent = message;
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.transform = 'translateX(0)';
        });

        setTimeout(() => {
            toast.style.transform = 'translateX(120%)';
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    }

    // ─── Scroll Reveal (if AOS is not loaded) ───
    if (typeof AOS === 'undefined') {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

        document.querySelectorAll('[data-aos]').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // ─── Active nav highlighting ───
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length && navLinks.length) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY + 120;
            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { passive: true });
    }

});
