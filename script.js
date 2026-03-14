// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navLinks?.classList.remove('active');
    });
});

// ===== Scroll Reveal Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to sections and observe
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll(
        '.category-card, .property-card, .step-card, .testimonial-card, .section-header, .cta-content'
    );
    sections.forEach((el, i) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${i % 3 * 0.1}s`;
        observer.observe(el);
    });
});
// Properties are now fetched dynamically from the /api/search backend.

// ===== Search Functionality =====
const searchBtn = document.getElementById('searchBtn');
const propertyGrid = document.getElementById('propertyGrid');

function renderProperties(filteredProps) {
    if (!propertyGrid) return;
    
    if (filteredProps.length === 0) {
        propertyGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #fafafa; border-radius: 20px; border: 2px dashed #eee;">
                <div style="font-size: 50px; margin-bottom: 20px;">🔍</div>
                <h3 style="font-family: 'DM Serif Display', serif; font-size: 24px; color: var(--dark); margin-bottom: 10px;">No properties found</h3>
                <p style="color: var(--gray);">Try adjusting your filters or location to find what you're looking for.</p>
                <button onclick="resetSearch()" class="btn-proceed" style="margin-top: 20px;">Reset Search</button>
            </div>
        `;
        return;
    }

    let html = filteredProps.map(prop => `
        <a href="property.html?id=${prop.id}" class="property-card fade-in visible" id="property-${prop.id}">
            <div class="property-image">
                <img src="${prop.image}" alt="${prop.name}">
                <span class="property-badge ${prop.badgeClass}">${prop.badge}</span>
                <button class="property-fav" aria-label="Save to favorites">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
            </div>
            <div class="property-info">
                <div class="property-price">${prop.price}${prop.period || ''}</div>
                <h3 class="property-name">${prop.name}</h3>
                <p class="property-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/></svg>
                    ${prop.location}
                </p>
                <div class="property-features">
                    ${prop.features.map(f => `<span>${f}</span>`).join('')}
                </div>
            </div>
        </a>
    `).join('');

    // Add View More card back
    html += `
        <a href="listings.html" class="view-more-card" id="viewMoreCard">
            <div class="view-more-inner">
                <div class="view-more-images">
                    <img src="images/lakeside-manor.png" alt="" class="vmi vmi-1">
                    <img src="images/metro-heights.png" alt="" class="vmi vmi-2">
                    <img src="images/green-haven.png" alt="" class="vmi vmi-3">
                    <img src="images/royal-suites.png" alt="" class="vmi vmi-4">
                </div>
                <div class="view-more-overlay">
                    <div class="view-more-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </div>
                    <span class="view-more-text">View All<br>Properties</span>
                    <span class="view-more-count">20+ more</span>
                </div>
            </div>
        </a>
    `;

    propertyGrid.innerHTML = html;
}

async function handleSearch() {
    const locationVal = document.getElementById('searchLocation')?.value.toLowerCase().trim();
    const typeVal = document.getElementById('propertyType')?.value.toLowerCase();

    // Visual feedback
    if (searchBtn) {
        searchBtn.style.transform = 'scale(0.95)';
        searchBtn.style.opacity = '0.7';
        setTimeout(() => { 
            searchBtn.style.transform = ''; 
            searchBtn.style.opacity = '1';
        }, 150);
    }

    try {
        const response = await fetch(`/api/search?location=${encodeURIComponent(locationVal)}&type=${encodeURIComponent(typeVal)}`);
        const filtered = await response.json();
        
        renderProperties(filtered);

        // Scroll to results
        const featuredSection = document.querySelector('.featured');
        if (featuredSection) {
            featuredSection.scrollIntoView({ behavior: 'smooth' });
        }

        if (filtered.length > 0) {
            showToast(`Found ${filtered.length} properties for you!`);
        } else {
            showToast("No matches. Try 'Mumbai', 'Delhi' or 'Hotel'.");
        }
    } catch (error) {
        console.error("Search failed:", error);
        showToast("Search failed. Our servers are moving!");
    }
}

function resetSearch() {
    document.getElementById('searchLocation').value = '';
    document.getElementById('propertyType').value = '';
    renderProperties(properties.slice(0, 3)); // Reset to initial featured items
}

searchBtn?.addEventListener('click', handleSearch);

// Re-attach hover effects to new cards
propertyGrid?.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.property-card');
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
});

propertyGrid?.addEventListener('mouseleave', (e) => {
    const card = e.target.closest('.property-card');
    if (card) card.style.transform = '';
}, true);

// ===== Toast Notification =====
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: #2d3436;
        color: white;
        padding: 14px 28px;
        border-radius: 12px;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        z-index: 10000;
        opacity: 0;
        transition: all 0.3s ease;
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Category Card Click Effects =====
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        showToast(`Exploring ${category} properties...`);
    });
});

// ===== Property Card Hover Parallax =====
document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===== App Download Modal =====
// App Modal Logic
function openAppModal() {
    const modal = document.getElementById('appModal');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAppModal() {
    const modal = document.getElementById('appModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Information Center Logic
function openInfoCenter() {
    const modal = document.getElementById('infoModal');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeInfoCenter() {
    const modal = document.getElementById('infoModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Tab Switching Logic
document.querySelectorAll('.info-tab').forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        
        // Update tabs
        document.querySelectorAll('.info-tab').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update sections
        document.querySelectorAll('.info-section').forEach(section => section.classList.remove('active'));
        const section = document.getElementById(`tab-${tabName}`);
        if (section) section.classList.add('active');
    });
});

// Close modals on clicks outside
window.onclick = function(event) {
    const appModal = document.getElementById('appModal');
    const infoModal = document.getElementById('infoModal');
    if (event.target == appModal) closeAppModal();
    if (event.target == infoModal) closeInfoCenter();
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAppModal();
        closeInfoCenter();
    }
});

// Initial Render
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/search'); // Empty params gets initial featured set
        const props = await response.json();
        renderProperties(props.slice(0, 3));
    } catch (e) {
        console.error("Initial load failed:", e);
    }
});
