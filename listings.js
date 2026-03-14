// ===== All Properties Data =====
const allProperties = [
    {
        id: 'skyline-residence',
        name: 'Skyline Residence',
        type: 'buy',
        badge: 'For Sale',
        badgeClass: 'badge-buy',
        price: '₹1.2 Cr',
        pricePeriod: '',
        location: 'Whitefield, Bangalore',
        image: 'images/skyline-residence.png',
        features: ['3 BHK', '1,850 sqft', '2 Bath']
    },
    {
        id: 'urban-nest',
        name: 'Urban Nest Apartments',
        type: 'rent',
        badge: 'For Rent',
        badgeClass: 'badge-rent',
        price: '₹35K',
        pricePeriod: '/month',
        location: 'Indiranagar, Bangalore',
        image: 'images/urban-nest.png',
        features: ['2 BHK', '1,200 sqft', '2 Bath']
    },
    {
        id: 'grand-oasis',
        name: 'The Grand Oasis',
        type: 'hourly',
        badge: 'Hourly',
        badgeClass: 'badge-hourly',
        price: '₹499',
        pricePeriod: '/hour',
        location: 'MG Road, Bangalore',
        image: 'images/grand-oasis.png',
        features: ['Deluxe Room', 'AC', 'Wi-Fi']
    },
    {
        id: 'lakeside-manor',
        name: 'Lakeside Manor',
        type: 'buy',
        badge: 'For Sale',
        badgeClass: 'badge-buy',
        price: '₹2.8 Cr',
        pricePeriod: '',
        location: 'Hebbal, Bangalore',
        image: 'images/lakeside-manor.png',
        features: ['4 BHK', '3,200 sqft', '4 Bath']
    },
    {
        id: 'metro-heights',
        name: 'Metro Heights Tower',
        type: 'rent',
        badge: 'For Rent',
        badgeClass: 'badge-rent',
        price: '₹52K',
        pricePeriod: '/month',
        location: 'Koramangala, Bangalore',
        image: 'images/metro-heights.png',
        features: ['3 BHK', '1,600 sqft', '3 Bath']
    },
    {
        id: 'green-haven',
        name: 'Green Haven Eco Living',
        type: 'buy',
        badge: 'For Sale',
        badgeClass: 'badge-buy',
        price: '₹95 L',
        pricePeriod: '',
        location: 'Electronic City, Bangalore',
        image: 'images/green-haven.png',
        features: ['2 BHK', '1,100 sqft', '2 Bath']
    },
    {
        id: 'royal-suites',
        name: 'Royal Suites Hotel',
        type: 'hourly',
        badge: 'Hourly',
        badgeClass: 'badge-hourly',
        price: '₹899',
        pricePeriod: '/hour',
        location: 'Brigade Road, Bangalore',
        image: 'images/royal-suites.png',
        features: ['Royal Suite', 'AC', 'Jacuzzi']
    }
];

// ===== Render Property Cards =====
function renderProperties(filter = 'all') {
    const grid = document.getElementById('listingsGrid');
    if (!grid) return;

    const filtered = filter === 'all'
        ? allProperties
        : allProperties.filter(p => p.type === filter);

    grid.innerHTML = '';

    filtered.forEach((p, index) => {
        const card = document.createElement('a');
        card.href = `property.html?id=${p.id}`;
        card.className = 'property-card';
        card.style.animationDelay = `${index * 0.08}s`;
        card.innerHTML = `
            <div class="property-image">
                <img src="${p.image}" alt="${p.name}">
                <span class="property-badge ${p.badgeClass}">${p.badge}</span>
                <button class="property-fav" aria-label="Save to favorites" onclick="event.preventDefault(); event.stopPropagation(); this.classList.toggle('active'); this.querySelector('svg').style.fill = this.classList.contains('active') ? 'white' : 'none';">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
            </div>
            <div class="property-info">
                <div class="property-price">${p.price} ${p.pricePeriod ? `<span class="price-period">${p.pricePeriod}</span>` : ''}</div>
                <h3 class="property-name">${p.name}</h3>
                <p class="property-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/></svg>
                    ${p.location}
                </p>
                <div class="property-features">
                    ${p.features.map(f => `<span>${f}</span>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Animate cards in
    requestAnimationFrame(() => {
        grid.querySelectorAll('.property-card').forEach((card, i) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`;
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        });
    });
}

// ===== Filter Functionality =====
document.addEventListener('DOMContentLoaded', () => {
    renderProperties('all');

    document.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderProperties(pill.dataset.filter);
        });
    });
});
