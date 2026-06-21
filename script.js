/**
 * La Maison Dorée - Fine Dining Restaurant
 * Complete JavaScript Application
 */

const LaMaisonDoree = {
    state: {
        currentTestimonial: 0,
        testimonialCount: 4,
        autoSlideInterval: null,
        currentMenuCategory: 'all'
    },

    // ============================================
    // Menu Data
    // ============================================
    menuData: [
        {
            id: 1, category: 'starters', name: 'Foie Gras Terrine', price: 28,
            description: 'Duck foie gras with fig compote, brioche toast, and aged balsamic reduction.',
            image: 'https://images.unsplash.com/photo-1546271876-af607c87e97d?w=200&h=200&fit=crop',
            tags: ['Signature']
        },
        {
            id: 2, category: 'starters', name: 'Bouillabaisse', price: 24,
            description: 'Traditional Provençal fish stew with saffron broth, rouille, and crusty baguette.',
            image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=200&h=200&fit=crop',
            tags: ['Chef\'s Pick']
        },
        {
            id: 3, category: 'starters', name: 'Escargots de Bourgogne', price: 22,
            description: 'Burgundy snails baked in garlic herb butter with parsley and puff pastry.',
            image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=200&h=200&fit=crop',
            tags: ['Classic']
        },
        {
            id: 4, category: 'starters', name: 'Tartare de Saumon', price: 26,
            description: 'Fresh salmon tartare with avocado mousse, dill crème fraîche, and caviar.',
            image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b94a?w=200&h=200&fit=crop',
            tags: ['Fresh']
        },
        {
            id: 5, category: 'mains', name: 'Duck Confit à l\'Orange', price: 42,
            description: 'Slow-cooked duck leg with Grand Marnier orange glaze and parsnip purée.',
            image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=200&fit=crop',
            tags: ['Signature', 'Chef\'s Pick']
        },
        {
            id: 6, category: 'mains', name: 'Beef Wellington', price: 58,
            description: 'Tenderloin wrapped in mushroom duxelles and golden puff pastry with truffle jus.',
            image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=200&h=200&fit=crop',
            tags: ['Premium']
        },
        {
            id: 7, category: 'mains', name: 'Lobster Thermidor', price: 65,
            description: 'Whole Maine lobster with cognac cream sauce and gruyère cheese crust.',
            image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=200&h=200&fit=crop',
            tags: ['Premium']
        },
        {
            id: 8, category: 'mains', name: 'Coq au Vin', price: 38,
            description: 'Braised chicken in red wine with pearl onions, mushrooms, and lardons.',
            image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=200&h=200&fit=crop',
            tags: ['Classic']
        },
        {
            id: 9, category: 'mains', name: 'Rack of Lamb', price: 48,
            description: 'Herb-crusted lamb with mint pistou, ratatouille, and rosemary jus.',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=200&fit=crop',
            tags: ['Chef\'s Pick']
        },
        {
            id: 10, category: 'desserts', name: 'Crème Brûlée', price: 16,
            description: 'Classic vanilla bean custard with caramelized sugar crust and fresh berries.',
            image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6ca6b?w=200&h=200&fit=crop',
            tags: ['Classic']
        },
        {
            id: 11, category: 'desserts', name: 'Grand Marnier Soufflé', price: 22,
            description: 'Cloud-like vanilla soufflé with warm Grand Marnier crème anglaise.',
            image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=200&fit=crop',
            tags: ['Signature', 'Must Try']
        },
        {
            id: 12, category: 'desserts', name: 'Tarte Tatin', price: 18,
            description: 'Caramelized apple tart with vanilla ice cream and calvados caramel.',
            image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&h=200&fit=crop',
            tags: ['Classic']
        },
        {
            id: 13, category: 'beverages', name: 'French 75', price: 18,
            description: 'Champagne, gin, lemon juice, and sugar. A timeless Parisian classic.',
            image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=200&h=200&fit=crop',
            tags: ['Cocktail']
        },
        {
            id: 14, category: 'beverages', name: 'Château Margaux 2015', price: 45,
            description: 'Glass of premier cru Bordeaux. Notes of blackcurrant, violet, and truffle.',
            image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=200&h=200&fit=crop',
            tags: ['Wine']
        },
        {
            id: 15, category: 'beverages', name: 'Espresso Martini', price: 16,
            description: 'Vodka, coffee liqueur, fresh espresso, and vanilla syrup.',
            image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=200&h=200&fit=crop',
            tags: ['Cocktail']
        }
    ],

    // ============================================
    // Initialization
    // ============================================
    init() {
        this.initLoading();
        this.initNavbar();
        this.initMobileMenu();
        this.initSmoothScroll();
        this.initActiveNav();
        this.initScrollReveal();
        this.initBackToTop();
        this.initCounters();
        this.renderMenu();
        this.initMenuFilters();
        this.initTestimonials();
        this.initReservationForm();
        this.initContactForm();
        this.initNewsletter();
        this.initBusinessHours();
        this.initModals();
    },

    // ============================================
    // Loading Screen
    // ============================================
    initLoading() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (!loadingScreen) return;

        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 2000);
        });

        if (document.readyState === 'complete') {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 2000);
        }
    },

    // ============================================
    // Navbar
    // ============================================
    initNavbar() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            if (currentScroll > lastScroll && currentScroll > 200) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
        });

        navbar.style.transition = 'transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease';
    },

    // ============================================
    // Mobile Menu
    // ============================================
    initMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        if (!hamburger || !mobileMenu) return;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    },

    // ============================================
    // Smooth Scroll
    // ============================================
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    // ============================================
    // Active Navigation
    // ============================================
    initActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

        sections.forEach(section => observer.observe(section));
    },

    // ============================================
    // Scroll Reveal
    // ============================================
    initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => observer.observe(el));
    },

    // ============================================
    // Back to Top
    // ============================================
    initBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (!backToTop) return;

        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.pageYOffset > 500);
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    // ============================================
    // Animated Counters
    // ============================================
    initCounters() {
        // Stats are text-based in this design, no counters needed
    },

    // ============================================
    // Render Menu
    // ============================================
    renderMenu() {
        const grid = document.getElementById('menuGrid');
        if (!grid) return;

        const items = this.state.currentMenuCategory === 'all'
            ? this.menuData
            : this.menuData.filter(item => item.category === this.state.currentMenuCategory);

        grid.innerHTML = items.map(item => this.createMenuItem(item)).join('');
    },

    createMenuItem(item) {
        const tagsHtml = item.tags.map(tag =>
            '<span class="menu-item-tag">' + tag + '</span>'
        ).join('');

        return `
            <div class="menu-item" data-category="${item.category}">
                <div class="menu-item-img">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h3 class="menu-item-title">${item.name}</h3>
                        <span class="menu-item-price">$${item.price}</span>
                    </div>
                    <p class="menu-item-desc">${item.description}</p>
                    <div class="menu-item-tags">${tagsHtml}</div>
                </div>
            </div>
        `;
    },

    // ============================================
    // Menu Filters
    // ============================================
    initMenuFilters() {
        const filterBtns = document.querySelectorAll('.menu-filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.state.currentMenuCategory = btn.getAttribute('data-category');
                this.renderMenu();
            });
        });
    },

    // ============================================
    // Testimonials Slider
    // ============================================
    initTestimonials() {
        const track = document.querySelector('.testimonials-track');
        const prevBtn = document.querySelector('.testimonial-prev');
        const nextBtn = document.querySelector('.testimonial-next');
        const dots = document.querySelectorAll('.testimonials-dots .dot');

        if (!track || !prevBtn || !nextBtn) return;

        const updateSlider = () => {
            const cardWidth = track.children[0].offsetWidth;
            track.style.transform = 'translateX(-' + (this.state.currentTestimonial * cardWidth) + 'px)';
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === this.state.currentTestimonial);
            });
        };

        const nextSlide = () => {
            this.state.currentTestimonial = (this.state.currentTestimonial + 1) % this.state.testimonialCount;
            updateSlider();
        };

        const prevSlide = () => {
            this.state.currentTestimonial = (this.state.currentTestimonial - 1 + this.state.testimonialCount) % this.state.testimonialCount;
            updateSlider();
        };

        nextBtn.addEventListener('click', () => { nextSlide(); this.resetAutoSlide(); });
        prevBtn.addEventListener('click', () => { prevSlide(); this.resetAutoSlide(); });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                this.state.currentTestimonial = i;
                updateSlider();
                this.resetAutoSlide();
            });
        });

        this.startAutoSlide();
        window.addEventListener('resize', () => { updateSlider(); });
    },

    startAutoSlide() {
        this.state.autoSlideInterval = setInterval(() => {
            this.state.currentTestimonial = (this.state.currentTestimonial + 1) % this.state.testimonialCount;
            const track = document.querySelector('.testimonials-track');
            if (track && track.children.length > 0) {
                const cardWidth = track.children[0].offsetWidth;
                track.style.transform = 'translateX(-' + (this.state.currentTestimonial * cardWidth) + 'px)';
            }
            document.querySelectorAll('.testimonials-dots .dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === this.state.currentTestimonial);
            });
        }, 5000);
    },

    resetAutoSlide() {
        clearInterval(this.state.autoSlideInterval);
        this.startAutoSlide();
    },

    // ============================================
    // Reservation Form
    // ============================================
    initReservationForm() {
        const form = document.getElementById('reservationForm');
        if (!form) return;

        // Set minimum date to today
        const dateInput = document.getElementById('resDate');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateReservationForm(form)) {
                document.getElementById('reservationModal')?.classList.add('active');
                form.reset();
            }
        });

        const inputs = form.querySelectorAll('input[required], select[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateReservationField(input));
            input.addEventListener('input', () => this.clearReservationError(input));
        });
    },

    validateReservationForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('input[required], select[required]');
        requiredFields.forEach(field => {
            if (!this.validateReservationField(field)) isValid = false;
        });

        const email = form.querySelector('#resEmail');
        if (email && email.value && !this.isValidEmail(email.value)) {
            this.showReservationError(email, 'Please enter a valid email');
            isValid = false;
        }

        const phone = form.querySelector('#resPhone');
        if (phone && phone.value) {
            const digits = phone.value.replace(/\D/g, '');
            if (digits.length < 10) {
                this.showReservationError(phone, 'Please enter a valid phone number');
                isValid = false;
            }
        }

        return isValid;
    },

    validateReservationField(field) {
        const value = field.value.trim();
        if (!value) {
            this.showReservationError(field, 'This field is required');
            return false;
        }
        this.clearReservationError(field);
        return true;
    },

    showReservationError(field, message) {
        field.classList.add('error');
        const errorEl = document.getElementById(field.id + 'Error');
        if (errorEl) errorEl.textContent = message;
    },

    clearReservationError(field) {
        field.classList.remove('error');
        const errorEl = document.getElementById(field.id + 'Error');
        if (errorEl) errorEl.textContent = '';
    },

    // ============================================
    // Contact Form
    // ============================================
    initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateContactForm(form)) {
                document.getElementById('contactSuccessModal')?.classList.add('active');
                form.reset();
            }
        });

        const inputs = form.querySelectorAll('input[required], textarea[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateContactField(input));
            input.addEventListener('input', () => this.clearContactError(input));
        });
    },

    validateContactForm(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('input[required], textarea[required]');
        requiredFields.forEach(field => {
            if (!this.validateContactField(field)) isValid = false;
        });

        const email = form.querySelector('#contactEmail');
        if (email && email.value && !this.isValidEmail(email.value)) {
            this.showContactError(email, 'Please enter a valid email');
            isValid = false;
        }

        return isValid;
    },

    validateContactField(field) {
        const value = field.value.trim();
        if (!value) {
            this.showContactError(field, 'This field is required');
            return false;
        }
        this.clearContactError(field);
        return true;
    },

    showContactError(field, message) {
        field.classList.add('error');
        const errorEl = document.getElementById(field.id + 'Error');
        if (errorEl) errorEl.textContent = message;
    },

    clearContactError(field) {
        field.classList.remove('error');
        const errorEl = document.getElementById(field.id + 'Error');
        if (errorEl) errorEl.textContent = '';
    },

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    // ============================================
    // Newsletter
    // ============================================
    initNewsletter() {
        const form = document.getElementById('newsletterForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            if (input && input.value && this.isValidEmail(input.value)) {
                this.showToast('Thank you for subscribing!');
                form.reset();
            } else {
                this.showToast('Please enter a valid email address');
            }
        });
    },

    // ============================================
    // Business Hours
    // ============================================
    initBusinessHours() {
        this.updateBusinessStatus();
        setInterval(() => this.updateBusinessStatus(), 60000);
    },

    updateBusinessStatus() {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const currentTime = hour + minute / 60;

        const statusIndicator = document.getElementById('statusIndicator');
        const statusText = document.getElementById('statusText');
        const scheduleItems = document.querySelectorAll('.schedule-item');

        if (!statusIndicator || !statusText) return;

        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const currentDay = days[day];

        scheduleItems.forEach(item => {
            item.classList.remove('current-day');
            if (item.getAttribute('data-day') === currentDay) {
                item.classList.add('current-day');
            }
        });

        let isOpen = false;

        switch (day) {
            case 1: // Monday
                isOpen = false;
                break;
            case 2: case 3: // Tue-Wed
                isOpen = currentTime >= 17 && currentTime < 22;
                break;
            case 4: case 5: // Thu-Fri
                isOpen = currentTime >= 17 && currentTime < 23;
                break;
            case 6: // Saturday
                isOpen = currentTime >= 12 && currentTime < 23;
                break;
            case 0: // Sunday
                isOpen = currentTime >= 12 && currentTime < 21;
                break;
        }

        if (isOpen) {
            statusIndicator.className = 'status-indicator open';
            statusText.textContent = 'We are Open Now';
            statusText.style.color = 'var(--color-success)';
        } else {
            statusIndicator.className = 'status-indicator closed';
            statusText.textContent = 'We are Closed Now';
            statusText.style.color = 'var(--color-danger)';
        }
    },

    // ============================================
    // Modals
    // ============================================
    initModals() {
        const resModal = document.getElementById('reservationModal');
        const contactModal = document.getElementById('contactSuccessModal');
        const resClose = document.getElementById('reservationModalClose');
        const contactClose = document.getElementById('contactModalClose');

        if (resClose && resModal) {
            resClose.addEventListener('click', () => {
                resModal.classList.remove('active');
            });
            resModal.addEventListener('click', (e) => {
                if (e.target === resModal) resModal.classList.remove('active');
            });
        }

        if (contactClose && contactModal) {
            contactClose.addEventListener('click', () => {
                contactModal.classList.remove('active');
            });
            contactModal.addEventListener('click', (e) => {
                if (e.target === contactModal) contactModal.classList.remove('active');
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (resModal) resModal.classList.remove('active');
                if (contactModal) contactModal.classList.remove('active');
            }
        });
    },

    // ============================================
    // Toast
    // ============================================
    showToast(message) {
        const existing = document.querySelector('.toast-notification');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: var(--color-bg-card);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 14px 28px;
            color: var(--color-text);
            font-size: 0.95rem;
            z-index: 10000;
            box-shadow: var(--shadow-lg);
            transition: transform 0.3s ease;
        `;
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.transform = 'translateX(-50%) translateY(0)';
        });

        setTimeout(() => {
            toast.style.transform = 'translateX(-50%) translateY(100px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
};

// ============================================
// Global Init
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    LaMaisonDoree.init();
});