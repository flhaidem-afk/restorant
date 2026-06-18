// script.js
class TasteBite {
    constructor() {
        this.cart = [];
        this.dishes = this.generateDishes();
        this.currentCategory = 'all';
        this.testimonialIndex = 0;
        this.init();
    }

    init() {
        this.renderDishes();
        this.setupEventListeners();
        this.setupScrollEffects();
        this.setupNavbarScroll();
        this.setMinDate();
    }

    generateDishes() {
        return [
            {
                id: 1,
                name: 'Truffle Risotto',
                description: 'Creamy Arborio rice with black truffle, parmesan, and wild mushrooms',
                price: 28,
                category: 'mains',
                image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop',
                badge: 'popular',
                calories: '450 cal',
                time: '25 min'
            },
            {
                id: 2,
                name: 'Wagyu Beef Tartare',
                description: 'Premium wagyu with quail egg, capers, and toasted sourdough',
                price: 32,
                category: 'starters',
                image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
                badge: null,
                calories: '320 cal',
                time: '15 min'
            },
            {
                id: 3,
                name: 'Chocolate Soufflé',
                description: 'Warm dark chocolate soufflé with vanilla bean ice cream',
                price: 18,
                category: 'desserts',
                image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop',
                badge: 'popular',
                calories: '380 cal',
                time: '20 min'
            },
            {
                id: 4,
                name: 'Pan-Seared Scallops',
                description: 'Jumbo scallops with cauliflower purée and crispy pancetta',
                price: 26,
                category: 'starters',
                image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400&h=300&fit=crop',
                badge: 'new',
                calories: '280 cal',
                time: '18 min'
            },
            {
                id: 5,
                name: 'Herb-Crusted Lamb',
                description: 'Rack of lamb with rosemary crust, fondant potatoes, and red wine jus',
                price: 42,
                category: 'mains',
                image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
                badge: null,
                calories: '580 cal',
                time: '35 min'
            },
            {
                id: 6,
                name: 'Tiramisu Classico',
                description: 'Traditional Italian dessert with espresso-soaked ladyfingers and mascarpone',
                price: 16,
                category: 'desserts',
                image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
                badge: null,
                calories: '340 cal',
                time: '12 min'
            },
            {
                id: 7,
                name: 'Smoked Old Fashioned',
                description: 'Bourbon, maple syrup, angostura bitters, smoked with hickory wood',
                price: 16,
                category: 'drinks',
                image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop',
                badge: 'popular',
                calories: '180 cal',
                time: '5 min'
            },
            {
                id: 8,
                name: 'Lobster Thermidor',
                description: 'Whole lobster with cognac cream sauce, gruyère, and herb crust',
                price: 56,
                category: 'mains',
                image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop',
                badge: 'new',
                calories: '520 cal',
                time: '40 min'
            },
            {
                id: 9,
                name: 'Burrata Salad',
                description: 'Fresh burrata with heirloom tomatoes, basil oil, and balsamic glaze',
                price: 22,
                category: 'starters',
                image: 'https://images.unsplash.com/photo-1529312266912-b33cf6227e24?w=400&h=300&fit=crop',
                badge: null,
                calories: '290 cal',
                time: '10 min'
            }
        ];
    }

    renderDishes() {
        const grid = document.getElementById('dishesGrid');
        if (!grid) return;

        const filtered = this.currentCategory === 'all' 
            ? this.dishes 
            : this.dishes.filter(d => d.category === this.currentCategory);

        grid.innerHTML = filtered.map(dish => this.createDishCard(dish)).join('');
    }

    createDishCard(dish) {
        return `
            <div class="dish-card" data-id="${dish.id}">
                <div class="dish-image">
                    <img src="${dish.image}" alt="${dish.name}" loading="lazy">
                    ${dish.badge ? `<span class="dish-badge badge-${dish.badge}">${dish.badge}</span>` : ''}
                    <div class="dish-overlay">
                        <div class="dish-actions">
                            <button class="btn-add" onclick="addToCart(${dish.id})">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="5" x2="12" y2="19"/>
                                    <line x1="5" y1="12" x2="19" y2="12"/>
                                </svg>
                                Add to Order
                            </button>
                            <button class="btn-fav" onclick="toggleDishFav(this)">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="dish-details">
                    <div class="dish-header">
                        <h3 class="dish-name">${dish.name}</h3>
                        <span class="dish-price">$${dish.price}</span>
                    </div>
                    <p class="dish-desc">${dish.description}</p>
                    <div class="dish-meta">
                        <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2v20M2 12h20"/>
                            </svg>
                            ${dish.calories}
                        </span>
                        <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12 6 12 12 16 14"/>
                            </svg>
                            ${dish.time}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Menu tabs
        document.querySelectorAll('.menu-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                this.currentCategory = e.target.dataset.category;
                this.renderDishes();
            });
        });

        // Cart button
        const cartBtn = document.getElementById('cartBtn');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => this.toggleCart());
        }

        // Mobile toggle
        const mobileToggle = document.getElementById('mobileToggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                const navLinks = document.getElementById('navLinks');
                navLinks.classList.toggle('mobile-open');
            });
        }

        // Reservation form
        const resForm = document.getElementById('reservationForm');
        if (resForm) {
            resForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitReservation();
            });
        }

        // Smooth scroll for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    setupScrollEffects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.dish-card, .info-card, .gallery-item, .testimonial-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }

    setupNavbarScroll() {
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    setMinDate() {
        const dateInput = document.getElementById('resDate');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
            dateInput.value = today;
        }
    }

    addToCart(dishId) {
        const dish = this.dishes.find(d => d.id === dishId);
        if (!dish) return;

        const existing = this.cart.find(item => item.id === dishId);
        if (existing) {
            existing.qty++;
        } else {
            this.cart.push({ ...dish, qty: 1 });
        }

        this.updateCart();
        this.showToast(`${dish.name} added to order!`);
    }

    removeFromCart(dishId) {
        this.cart = this.cart.filter(item => item.id !== dishId);
        this.updateCart();
    }

    updateQty(dishId, delta) {
        const item = this.cart.find(i => i.id === dishId);
        if (!item) return;

        item.qty += delta;
        if (item.qty <= 0) {
            this.removeFromCart(dishId);
        } else {
            this.updateCart();
        }
    }

    updateCart() {
        const badge = document.getElementById('cartBadge');
        const itemsContainer = document.getElementById('cartItems');
        const footer = document.getElementById('cartFooter');
        const totalEl = document.getElementById('cartTotal');

        const totalQty = this.cart.reduce((sum, item) => sum + item.qty, 0);
        const totalPrice = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

        if (badge) badge.textContent = totalQty;

        if (this.cart.length === 0) {
            if (itemsContainer) {
                itemsContainer.innerHTML = `
                    <div class="cart-empty">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M9 22a1 1 0 100-2 1 1 0 000 2z"/>
                            <path d="M20 22a1 1 0 100-2 1 1 0 000 2z"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                        </svg>
                        <p>Your cart is empty</p>
                        <button class="btn-text" onclick="toggleCart(); window.tasteBite.scrollToMenu()">Browse Menu</button>
                    </div>
                `;
            }
            if (footer) footer.style.display = 'none';
        } else {
            if (itemsContainer) {
                itemsContainer.innerHTML = this.cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">$${item.price}</div>
                            <div class="cart-item-qty">
                                <button class="qty-btn" onclick="window.tasteBite.updateQty(${item.id}, -1)">−</button>
                                <span>${item.qty}</span>
                                <button class="qty-btn" onclick="window.tasteBite.updateQty(${item.id}, 1)">+</button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
            if (footer) {
                footer.style.display = 'block';
                if (totalEl) totalEl.textContent = `$${totalPrice.toFixed(2)}`;
            }
        }
    }

    toggleCart() {
        const sidebar = document.getElementById('cartSidebar');
        const overlay = document.getElementById('cartOverlay');
        
        if (sidebar && overlay) {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('open');
            document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
        }
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        const msgEl = document.getElementById('toastMessage');
        
        if (toast && msgEl) {
            msgEl.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }

    submitReservation() {
        const btn = document.querySelector('.btn-submit');
        const btnText = btn.querySelector('.btn-text');
        const btnLoader = btn.querySelector('.btn-loader');

        btnText.style.display = 'none';
        btnLoader.style.display = 'flex';
        btn.disabled = true;

        setTimeout(() => {
            btnText.style.display = 'block';
            btnLoader.style.display = 'none';
            btn.disabled = false;

            const name = document.getElementById('resName').value;
            this.showToast(`Reservation confirmed for ${name}!`);
            
            document.getElementById('reservationForm').reset();
            this.setMinDate();
        }, 2000);
    }

    scrollToMenu() {
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    }
}

// Global functions
function addToCart(dishId) {
    window.tasteBite.addToCart(dishId);
}

function toggleDishFav(btn) {
    btn.classList.toggle('active');
    const isActive = btn.classList.contains('active');
    window.tasteBite.showToast(isActive ? 'Added to favorites!' : 'Removed from favorites');
}

function toggleCart() {
    window.tasteBite.toggleCart();
}

function scrollToReserve() {
    document.getElementById('reservations').scrollIntoView({ behavior: 'smooth' });
}

function scrollToMenu() {
    window.tasteBite.scrollToMenu();
}

function showFullMenu() {
    window.tasteBite.showToast('Full menu coming soon!');
}

function checkout() {
    window.tasteBite.showToast('Proceeding to checkout...');
}

let testimonialIndex = 0;
function updateTestimonial() {
    const track = document.querySelector('.testimonials-track');
    const dots = document.querySelectorAll('.test-dot');
    if (!track) return;
    
    const cardWidth = track.children[0]?.offsetWidth + 24 || 0;
    track.style.transform = `translateX(-${testimonialIndex * cardWidth}px)`;
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === testimonialIndex);
    });
}

function nextTestimonial() {
    const total = document.querySelectorAll('.testimonial-card').length;
    testimonialIndex = (testimonialIndex + 1) % total;
    updateTestimonial();
}

function prevTestimonial() {
    const total = document.querySelectorAll('.testimonial-card').length;
    testimonialIndex = (testimonialIndex - 1 + total) % total;
    updateTestimonial();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.tasteBite = new TasteBite();
    
    // CSS for visible class
    const style = document.createElement('style');
    style.textContent = `
        .dish-card.visible, .info-card.visible, .gallery-item.visible, .testimonial-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});