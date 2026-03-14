// ===== Property Data =====
const properties = {
    'skyline-residence': {
        name: 'Skyline Residence',
        type: 'buy',
        badge: 'For Sale',
        badgeClass: 'badge-buy',
        price: '₹1.2 Cr',
        priceNote: 'Negotiable',
        location: 'Whitefield, Bangalore',
        image: 'images/skyline-residence.png',
        description: 'Skyline Residence is a premium 3 BHK apartment located in the heart of Whitefield, Bangalore. This beautifully designed home features modern interiors, spacious rooms, and breathtaking views of the city skyline. The residence is part of a gated community with world-class amenities including a swimming pool, gymnasium, clubhouse, and 24/7 security. Perfect for families looking for a luxurious yet comfortable living experience in one of Bangalore\'s most sought-after neighborhoods.',
        features: [
            { label: 'Bedrooms', value: '3 BHK', icon: '🛏️' },
            { label: 'Area', value: '1,850 sqft', icon: '📐' },
            { label: 'Bathrooms', value: '2', icon: '🚿' },
            { label: 'Floor', value: '12th of 20', icon: '🏢' }
        ],
        highlights: [
            { icon: '🏗️', text: 'Ready to Move In' },
            { icon: '🅿️', text: '2 Covered Parking' },
            { icon: '🌳', text: 'Garden Facing' },
            { icon: '📋', text: 'All Documents Clear' },
            { icon: '🏊', text: 'Pool View' },
            { icon: '🔐', text: 'Gated Community' }
        ],
        amenities: [
            { icon: '🏊', name: 'Swimming Pool' },
            { icon: '💪', name: 'Gymnasium' },
            { icon: '🏠', name: 'Clubhouse' },
            { icon: '🌳', name: 'Landscaped Garden' },
            { icon: '🏃', name: 'Jogging Track' },
            { icon: '🏸', name: 'Badminton Court' },
            { icon: '👶', name: 'Kids Play Area' },
            { icon: '🔒', name: '24/7 Security' },
            { icon: '⚡', name: 'Power Backup' }
        ]
    },
    'urban-nest': {
        name: 'Urban Nest Apartments',
        type: 'rent',
        badge: 'For Rent',
        badgeClass: 'badge-rent',
        price: '₹35,000',
        priceNote: 'per month • 6 month minimum',
        location: 'Indiranagar, Bangalore',
        image: 'images/urban-nest.png',
        description: 'Urban Nest Apartments offers a stylish 2 BHK living experience in the vibrant neighborhood of Indiranagar. This fully furnished apartment comes with modern amenities, a modular kitchen, and is just minutes away from some of Bangalore\'s best restaurants, cafes, and shopping destinations. The apartment is ideal for young professionals and couples who want to live in the heart of the city with easy access to metro connectivity and IT hubs.',
        features: [
            { label: 'Bedrooms', value: '2 BHK', icon: '🛏️' },
            { label: 'Area', value: '1,200 sqft', icon: '📐' },
            { label: 'Bathrooms', value: '2', icon: '🚿' },
            { label: 'Floor', value: '4th of 8', icon: '🏢' }
        ],
        highlights: [
            { icon: '🪑', text: 'Fully Furnished' },
            { icon: '🚇', text: 'Near Metro Station' },
            { icon: '🅿️', text: '1 Covered Parking' },
            { icon: '🍽️', text: 'Modular Kitchen' },
            { icon: '📺', text: 'Smart Home Features' },
            { icon: '🌅', text: 'East Facing Balcony' }
        ],
        amenities: [
            { icon: '🏊', name: 'Swimming Pool' },
            { icon: '💪', name: 'Gymnasium' },
            { icon: '🧺', name: 'Laundry Service' },
            { icon: '📶', name: 'High-Speed WiFi' },
            { icon: '🚗', name: 'Visitor Parking' },
            { icon: '🔒', name: '24/7 Security' },
            { icon: '🛗', name: 'Elevator Access' },
            { icon: '⚡', name: 'Power Backup' },
            { icon: '🗑️', name: 'Waste Management' }
        ]
    },
    'grand-oasis': {
        name: 'The Grand Oasis',
        type: 'hourly',
        badge: 'Hourly Stay',
        badgeClass: 'badge-hourly',
        price: '₹499',
        priceNote: 'per hour • Minimum 3 hours',
        location: 'MG Road, Bangalore',
        image: 'images/grand-oasis.png',
        description: 'The Grand Oasis is a premium boutique hotel offering luxurious hourly stays right on MG Road. Whether you need a place to freshen up between meetings, rest during a layover, or enjoy a private retreat, our deluxe rooms provide the perfect escape. Each room features a king-size bed, rainfall shower, premium toiletries, and floor-to-ceiling windows with stunning city views. Complimentary high-speed WiFi, room service, and access to the business lounge are included with every booking.',
        features: [
            { label: 'Room Type', value: 'Deluxe Suite', icon: '🏨' },
            { label: 'Area', value: '450 sqft', icon: '📐' },
            { label: 'Bed', value: 'King Size', icon: '🛏️' },
            { label: 'Rating', value: '4.8 ★', icon: '⭐' }
        ],
        highlights: [
            { icon: '🚿', text: 'Rainfall Shower' },
            { icon: '🍽️', text: 'Room Service' },
            { icon: '💼', text: 'Business Lounge' },
            { icon: '🅿️', text: 'Valet Parking' },
            { icon: '🧴', text: 'Premium Toiletries' },
            { icon: '🌆', text: 'City View' }
        ],
        amenities: [
            { icon: '📶', name: 'High-Speed WiFi' },
            { icon: '❄️', name: 'Climate Control' },
            { icon: '📺', name: '55" Smart TV' },
            { icon: '☕', name: 'Tea/Coffee Maker' },
            { icon: '🔒', name: 'In-Room Safe' },
            { icon: '🧹', name: 'Housekeeping' },
            { icon: '👔', name: 'Ironing Service' },
            { icon: '🅿️', name: 'Free Parking' },
            { icon: '🏋️', name: 'Fitness Center' }
        ]
    },
    'lakeside-manor': {
        name: 'Lakeside Manor',
        type: 'buy',
        badge: 'For Sale',
        badgeClass: 'badge-buy',
        price: '₹2.8 Cr',
        priceNote: 'Premium Villa • Negotiable',
        location: 'Hebbal, Bangalore',
        image: 'images/lakeside-manor.png',
        description: 'Lakeside Manor is an exclusive 4 BHK villa nestled by the serene Hebbal Lake. This architectural masterpiece blends contemporary design with nature, featuring floor-to-ceiling windows that frame stunning lake views. The villa includes a private garden, rooftop terrace, Italian marble flooring, and smart home automation. Located in one of North Bangalore\'s most premium neighborhoods, it offers easy access to the airport, Manyata Tech Park, and top international schools.',
        features: [
            { label: 'Bedrooms', value: '4 BHK', icon: '🛏️' },
            { label: 'Area', value: '3,200 sqft', icon: '📐' },
            { label: 'Bathrooms', value: '4', icon: '🚿' },
            { label: 'Type', value: 'Villa', icon: '🏡' }
        ],
        highlights: [
            { icon: '🌊', text: 'Lake View' },
            { icon: '🏡', text: 'Private Garden' },
            { icon: '🅿️', text: '3 Car Parking' },
            { icon: '🤖', text: 'Smart Home' },
            { icon: '🏗️', text: 'Ready to Move' },
            { icon: '📋', text: 'Clear Title' }
        ],
        amenities: [
            { icon: '🏊', name: 'Infinity Pool' },
            { icon: '🌳', name: 'Private Garden' },
            { icon: '🏠', name: 'Rooftop Terrace' },
            { icon: '💪', name: 'Home Gym' },
            { icon: '🎬', name: 'Home Theater' },
            { icon: '🔒', name: 'Gated Security' },
            { icon: '⚡', name: 'Solar Power' },
            { icon: '🚗', name: '3-Car Garage' },
            { icon: '🏃', name: 'Jogging Path' }
        ]
    },
    'metro-heights': {
        name: 'Metro Heights Tower',
        type: 'rent',
        badge: 'For Rent',
        badgeClass: 'badge-rent',
        price: '₹52,000',
        priceNote: 'per month • 12 month lease',
        location: 'Koramangala, Bangalore',
        image: 'images/metro-heights.png',
        description: 'Metro Heights Tower is a premium 3 BHK apartment in the vibrant heart of Koramangala. This semi-furnished apartment offers modern living with spacious rooms, a large balcony overlooking the city, and access to world-class amenities. The tower is surrounded by Bangalore\'s best dining, shopping, and nightlife options, with excellent connectivity to major IT parks and the upcoming metro line.',
        features: [
            { label: 'Bedrooms', value: '3 BHK', icon: '🛏️' },
            { label: 'Area', value: '1,600 sqft', icon: '📐' },
            { label: 'Bathrooms', value: '3', icon: '🚿' },
            { label: 'Floor', value: '18th of 25', icon: '🏢' }
        ],
        highlights: [
            { icon: '🪑', text: 'Semi-Furnished' },
            { icon: '🌆', text: 'City Skyline View' },
            { icon: '🅿️', text: '2 Covered Parking' },
            { icon: '🍽️', text: 'Modular Kitchen' },
            { icon: '🚇', text: 'Metro Nearby' },
            { icon: '🌅', text: 'West Facing Sunset' }
        ],
        amenities: [
            { icon: '🏊', name: 'Rooftop Pool' },
            { icon: '💪', name: 'Gymnasium' },
            { icon: '🎾', name: 'Tennis Court' },
            { icon: '📶', name: 'High-Speed WiFi' },
            { icon: '🧺', name: 'Laundry Room' },
            { icon: '🔒', name: '24/7 Security' },
            { icon: '🛗', name: 'High-Speed Elevators' },
            { icon: '⚡', name: 'Full Power Backup' },
            { icon: '🏠', name: 'Sky Lounge' }
        ]
    },
    'green-haven': {
        name: 'Green Haven Eco Living',
        type: 'buy',
        badge: 'For Sale',
        badgeClass: 'badge-buy',
        price: '₹95 Lakhs',
        priceNote: 'Eco-Certified • EMI Available',
        location: 'Electronic City, Bangalore',
        image: 'images/green-haven.png',
        description: 'Green Haven Eco Living is a pioneering 2 BHK apartment in Electronic City that combines sustainable living with modern comfort. The project features vertical gardens on every floor, rainwater harvesting, solar panels, and organic waste composting. Each apartment is designed with cross-ventilation, natural lighting, and eco-friendly materials. Located close to major IT companies and with excellent public transport connectivity.',
        features: [
            { label: 'Bedrooms', value: '2 BHK', icon: '🛏️' },
            { label: 'Area', value: '1,100 sqft', icon: '📐' },
            { label: 'Bathrooms', value: '2', icon: '🚿' },
            { label: 'Floor', value: '6th of 12', icon: '🏢' }
        ],
        highlights: [
            { icon: '🌿', text: 'Eco-Certified' },
            { icon: '☀️', text: 'Solar Powered' },
            { icon: '💧', text: 'Rainwater Harvest' },
            { icon: '🅿️', text: '1 Covered Parking' },
            { icon: '🚌', text: 'Bus Stop Nearby' },
            { icon: '🏗️', text: 'Ready by 2026' }
        ],
        amenities: [
            { icon: '🌳', name: 'Vertical Gardens' },
            { icon: '🏊', name: 'Natural Pool' },
            { icon: '💪', name: 'Open-Air Gym' },
            { icon: '🚲', name: 'Cycling Track' },
            { icon: '♻️', name: 'Waste Composting' },
            { icon: '🔒', name: '24/7 Security' },
            { icon: '👶', name: 'Kids Play Zone' },
            { icon: '📚', name: 'Community Library' },
            { icon: '⚡', name: 'Solar Backup' }
        ]
    },
    'royal-suites': {
        name: 'Royal Suites Hotel',
        type: 'hourly',
        badge: 'Hourly Stay',
        badgeClass: 'badge-hourly',
        price: '₹899',
        priceNote: 'per hour • Minimum 2 hours',
        location: 'Brigade Road, Bangalore',
        image: 'images/royal-suites.png',
        description: 'Royal Suites Hotel is a five-star boutique hotel on Brigade Road offering the most luxurious hourly stay experience in Bangalore. Each Royal Suite features hand-picked Italian furnishings, a marble bathroom with a Jacuzzi, panoramic city views, and a private mini-bar. The hotel offers discreet check-in, world-class concierge service, and access to an exclusive rooftop bar. Ideal for business travelers, couples, and anyone who demands the very best.',
        features: [
            { label: 'Room Type', value: 'Royal Suite', icon: '🏨' },
            { label: 'Area', value: '600 sqft', icon: '📐' },
            { label: 'Bed', value: 'King Size', icon: '🛏️' },
            { label: 'Rating', value: '4.9 ★', icon: '⭐' }
        ],
        highlights: [
            { icon: '🛁', text: 'Jacuzzi Bath' },
            { icon: '🍷', text: 'Private Mini-Bar' },
            { icon: '🍽️', text: '24/7 Room Service' },
            { icon: '🅿️', text: 'Valet Parking' },
            { icon: '👔', text: 'Butler Service' },
            { icon: '🌆', text: 'Panoramic View' }
        ],
        amenities: [
            { icon: '📶', name: 'Premium WiFi' },
            { icon: '❄️', name: 'Climate Control' },
            { icon: '📺', name: '65" OLED TV' },
            { icon: '☕', name: 'Nespresso Machine' },
            { icon: '🔒', name: 'Digital Safe' },
            { icon: '🧹', name: 'Turndown Service' },
            { icon: '🍸', name: 'Rooftop Bar Access' },
            { icon: '🅿️', name: 'Complimentary Parking' },
            { icon: '🏋️', name: 'Spa & Wellness' }
        ]
    }
};

// ===== Load Property Data =====
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');

    if (!propertyId || !properties[propertyId]) {
        window.location.href = 'index.html';
        return;
    }

    const property = properties[propertyId];

    // Set page title
    document.title = `${property.name} — Sthara`;

    // Main image
    document.getElementById('mainImage').src = property.image;
    document.getElementById('mainImage').alt = property.name;

    // Badge
    const badge = document.getElementById('detailBadge');
    badge.textContent = property.badge;
    badge.className = `property-badge ${property.badgeClass}`;

    // Thumbnails (reuse same image with slight variations)
    document.querySelector('#thumb1 img').src = property.image;
    document.querySelector('#thumb2 img').src = property.image;

    // Title & Location
    document.getElementById('detailTitle').textContent = property.name;
    document.getElementById('locationText').textContent = property.location;
    document.getElementById('mapLocationText').textContent = property.location;

    // Price
    document.getElementById('detailPrice').textContent = property.price;
    document.getElementById('detailPriceNote').textContent = property.priceNote;

    // Quick Features
    const quickFeaturesEl = document.getElementById('quickFeatures');
    property.features.forEach(f => {
        quickFeaturesEl.innerHTML += `
            <div class="quick-feature">
                <div class="quick-feature-icon">${f.icon}</div>
                <div>
                    <span class="quick-feature-label">${f.label}</span>
                    <span class="quick-feature-value">${f.value}</span>
                </div>
            </div>
        `;
    });

    // Highlights
    const highlightsGrid = document.getElementById('highlightsGrid');
    property.highlights.forEach(h => {
        highlightsGrid.innerHTML += `
            <div class="highlight-item">
                <div class="highlight-icon">${h.icon}</div>
                ${h.text}
            </div>
        `;
    });

    // Description
    document.getElementById('detailDescription').textContent = property.description;

    // Amenities
    const amenitiesGrid = document.getElementById('amenitiesGrid');
    property.amenities.forEach(a => {
        amenitiesGrid.innerHTML += `
            <div class="amenity-item">
                <span class="amenity-icon">${a.icon}</span>
                ${a.name}
            </div>
        `;
    });

    // ===== Interactions =====

    // Favorite button
    const favBtn = document.getElementById('favBtn');
    favBtn?.addEventListener('click', () => {
        favBtn.classList.toggle('active');
        const isSaved = favBtn.classList.contains('active');
        favBtn.querySelector('svg').style.fill = isSaved ? 'white' : 'none';
        showToast(isSaved ? 'Property saved to favorites!' : 'Removed from favorites');
    });

    // Share button
    document.getElementById('shareBtn')?.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: property.name,
                text: `Check out ${property.name} on Sthara`,
                url: window.location.href
            });
        } else {
            navigator.clipboard?.writeText(window.location.href);
            showToast('Link copied to clipboard!');
        }
    });

    // Contact form
    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Enquiry sent! Our team will contact you shortly.');
        e.target.reset();
    });

    // Schedule slots
    document.querySelectorAll('.slot-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Schedule visit
    document.getElementById('scheduleBtn')?.addEventListener('click', () => {
        const activeSlot = document.querySelector('.slot-btn.active');
        const time = document.querySelector('.time-select')?.value;
        if (activeSlot && time !== 'Select Time') {
            showToast(`Visit scheduled for ${activeSlot.textContent} at ${time}! We'll confirm shortly.`);
        } else {
            showToast('Please select a day and time for your visit.');
        }
    });
});

// Toast function (reuse from main script.js or define)
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
