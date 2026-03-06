// Enhanced Product Data with Reviews and Additional Properties
const products = [
    {
        id: 1,
        name: "Air Max 90",
        category: "lifestyle",
        gender: "men",
        price: 120,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1551107699-a5b68d2794e3?w=400&h=300&fit=crop"
        ],
        description: "Classic design meets modern comfort with the Air Max 90. Featuring visible Air cushioning and a timeless silhouette.",
        badge: "new",
        sizes: [7, 8, 9, 10, 11, 12],
        rating: 4.5,
        reviews: 128,
        material: "leather",
        technology: "air-max",
        ecoFriendly: false,
        limitedEdition: false,
        exclusive: false,
        bestSeller: true,
        videoId: "air-max-90-video"
    },
    {
        id: 2,
        name: "UltraBoost 22",
        category: "running",
        gender: "women",
        price: 180,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop"
        ],
        description: "Experience unlimited energy return with UltraBoost 22. Perfect for long-distance running and daily training.",
        badge: "sale",
        sizes: [5, 6, 7, 8, 9, 10],
        rating: 4.7,
        reviews: 256,
        material: "mesh",
        technology: "boost",
        ecoFriendly: true,
        limitedEdition: false,
        exclusive: false,
        bestSeller: false,
        videoId: "ultraboost-22-video"
    },
    {
        id: 3,
        name: "Jordan Legacy 312",
        category: "basketball",
        gender: "men",
        price: 150,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1551107699-a5b68d2794e3?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
        ],
        description: "Combining elements from classic Jordan models, the Legacy 312 offers style and performance on and off the court.",
        badge: "new",
        sizes: [8, 9, 10, 11, 12, 13],
        rating: 4.3,
        reviews: 89,
        material: "synthetic",
        technology: "air-max",
        ecoFriendly: false,
        limitedEdition: true,
        exclusive: false,
        bestSeller: false,
        videoId: "jordan-312-video"
    },
    {
        id: 4,
        name: "Metcon 8",
        category: "training",
        gender: "men",
        price: 130,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
        ],
        description: "Built for intense training sessions. The Metcon 8 provides stability and support for all your workouts.",
        badge: null,
        sizes: [7, 8, 9, 10, 11, 12],
        rating: 4.6,
        reviews: 167,
        material: "synthetic",
        technology: "react",
        ecoFriendly: false,
        limitedEdition: false,
        exclusive: false,
        bestSeller: false,
        videoId: "metcon-8-video"
    },
    {
        id: 5,
        name: "React Vision",
        category: "lifestyle",
        gender: "women",
        price: 160,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop"
        ],
        description: "Futuristic design meets everyday comfort. React Vision features transparent sole and bold styling.",
        badge: "new",
        sizes: [5, 6, 7, 8, 9, 10],
        rating: 4.4,
        reviews: 93,
        material: "mesh",
        technology: "react",
        ecoFriendly: false,
        limitedEdition: false,
        exclusive: true,
        bestSeller: false,
        videoId: "react-vision-video"
    },
    {
        id: 6,
        name: "Zoom Pegasus 39",
        category: "running",
        gender: "men",
        price: 110,
        image: "https://images.unsplash.com/photo-1551107699-a5b68d2794e3?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551107699-a5b68d2794e3?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop"
        ],
        description: "Your daily running partner. Pegasus 39 offers responsive cushioning and durable support for every mile.",
        badge: "sale",
        sizes: [7, 8, 9, 10, 11, 12],
        rating: 4.2,
        reviews: 201,
        material: "mesh",
        technology: "air-max",
        ecoFriendly: true,
        limitedEdition: false,
        exclusive: false,
        bestSeller: true,
        videoId: "pegasus-39-video"
    },
    {
        id: 7,
        name: "Blazer Mid '77",
        category: "lifestyle",
        gender: "kids",
        price: 80,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop"
        ],
        description: "Vintage basketball style for the next generation. Classic design with modern comfort for kids.",
        badge: null,
        sizes: [3, 4, 5, 6, 7],
        rating: 4.1,
        reviews: 45,
        material: "canvas",
        technology: "air-max",
        ecoFriendly: false,
        limitedEdition: false,
        exclusive: false,
        bestSeller: false,
        videoId: "blazer-mid-77-video"
    },
    {
        id: 8,
        name: "Revolution 6",
        category: "running",
        gender: "women",
        price: 65,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop"
        ],
        description: "Lightweight and comfortable running shoes perfect for beginners and daily runners.",
        badge: "sale",
        sizes: [5, 6, 7, 8, 9, 10],
        rating: 3.9,
        reviews: 78,
        material: "mesh",
        technology: "gel",
        ecoFriendly: true,
        limitedEdition: false,
        exclusive: false,
        bestSeller: false,
        videoId: "revolution-6-video"
    }
];

// Sample Reviews Data
const sampleReviews = [
    {
        id: 1,
        productId: 1,
        name: "John D.",
        rating: 5,
        date: "2024-01-15",
        comment: "Amazing comfort and style! These are my daily go-to shoes."
    },
    {
        id: 2,
        productId: 1,
        name: "Sarah M.",
        rating: 4,
        date: "2024-01-10",
        comment: "Great looking shoes, very comfortable for all-day wear."
    },
    {
        id: 3,
        productId: 2,
        name: "Emily R.",
        rating: 5,
        date: "2024-01-12",
        comment: "Perfect for my morning runs. The cushioning is incredible!"
    },
    {
        id: 4,
        productId: 3,
        name: "Mike T.",
        rating: 4,
        date: "2024-01-08",
        comment: "Classic Jordan style with modern comfort. Love these!"
    }
];

// Global State
let cart = [];
let wishlist = [];
let currentProduct = null;
let currentQuickViewProduct = null;
let filteredProducts = [...products];
let recentlyViewed = [];
let advancedFilters = {
    material: [],
    technology: []
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
    renderProducts();
    renderTrendingProducts();
    updateCartBadge();
    updateWishlistBadge();
    setupEventListeners();
    setupTheme();
    setupParallax();
    setupAdvancedFilters();
    loadRecentlyViewed();
});

// Enhanced Product Card Creation
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Generate badge HTML
    let badgeHtml = '';
    if (product.badge) {
        badgeHtml = `<span class="product-badge">${product.badge.toUpperCase()}</span>`;
    }
    if (product.ecoFriendly) {
        badgeHtml += `<span class="product-badge eco">ECO</span>`;
    }
    if (product.limitedEdition) {
        badgeHtml += `<span class="product-badge limited">LIMITED</span>`;
    }
    if (product.exclusive) {
        badgeHtml += `<span class="product-badge exclusive">EXCLUSIVE</span>`;
    }
    if (product.bestSeller) {
        badgeHtml += `<span class="product-badge best-seller">BEST SELLER</span>`;
    }
    
    // Generate star rating HTML
    const starsHtml = generateStars(product.rating);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${badgeHtml}
            <button class="product-wishlist ${wishlist.some(item => item.id === product.id) ? 'active' : ''}" 
                    onclick="toggleWishlistItem(${product.id}, event)">
                ❤️
            </button>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-category">${product.category} • ${product.gender}</p>
            <div class="product-rating">
                <div class="stars">${starsHtml}</div>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-price">$${product.price}</div>
            <div class="product-actions">
                <button class="quick-view-btn" onclick="openQuickView(${product.id})">Quick View</button>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
            <div class="social-share">
                <button class="share-btn" onclick="shareProduct('facebook', ${product.id})">📘</button>
                <button class="share-btn" onclick="shareProduct('twitter', ${product.id})">🐦</button>
                <button class="share-btn" onclick="shareProduct('pinterest', ${product.id})">📌</button>
            </div>
        </div>
    `;
    
    // Add click event for recently viewed tracking
    card.addEventListener('click', function(e) {
        if (!e.target.closest('button')) {
            addToRecentlyViewed(product);
        }
    });
    
    return card;
}

// Generate Star Rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="star">★</span>';
        } else {
            stars += '<span class="star empty">☆</span>';
        }
    }
    return stars;
}

// Quick View Modal Functions
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentQuickViewProduct = product;
    
    // Update quick view content
    document.getElementById('quickViewImage').src = product.image;
    document.getElementById('quickViewName').textContent = product.name;
    document.getElementById('quickViewRating').innerHTML = generateStars(product.rating) + ` <span class="rating-count">(${product.reviews})</span>`;
    document.getElementById('quickViewPrice').textContent = `$${product.price}`;
    document.getElementById('quickViewQuantity').value = 1;
    
    // Update size recommendation
    const recommendedSize = calculateRecommendedSize(product);
    document.getElementById('recommendedSize').textContent = recommendedSize;
    
    // Render size options
    const sizeOptions = document.getElementById('quickViewSizeOptions');
    sizeOptions.innerHTML = '';
    product.sizes.forEach(size => {
        const sizeOption = document.createElement('div');
        sizeOption.className = 'size-option';
        sizeOption.textContent = size;
        sizeOption.onclick = () => selectQuickViewSize(sizeOption);
        sizeOptions.appendChild(sizeOption);
    });
    
    // Update wishlist button
    const isInWishlist = wishlist.some(item => item.id === product.id);
    document.getElementById('quickViewWishlistIcon').textContent = isInWishlist ? '❤️' : '🤍';
    
    // Show modal
    document.getElementById('quickViewModal').classList.add('active');
    
    // Track recently viewed
    addToRecentlyViewed(product);
}

function closeQuickView() {
    document.getElementById('quickViewModal').classList.remove('active');
    currentQuickViewProduct = null;
}

function selectQuickViewSize(sizeOption) {
    document.querySelectorAll('#quickViewSizeOptions .size-option').forEach(option => {
        option.classList.remove('selected');
    });
    sizeOption.classList.add('selected');
}

function increaseQuickViewQuantity() {
    const input = document.getElementById('quickViewQuantity');
    input.value = Math.min(parseInt(input.value) + 1, 10);
}

function decreaseQuickViewQuantity() {
    const input = document.getElementById('quickViewQuantity');
    input.value = Math.max(parseInt(input.value) - 1, 1);
}

function addToCartFromQuickView() {
    if (!currentQuickViewProduct) return;
    
    const quantity = parseInt(document.getElementById('quickViewQuantity').value);
    const selectedSize = document.querySelector('#quickViewSizeOptions .size-option.selected');
    
    if (!selectedSize) {
        showToast('Please select a size', 'warning');
        return;
    }
    
    // Add to cart with size and quantity
    const existingItem = cart.find(item => 
        item.id === currentQuickViewProduct.id && item.size === selectedSize.textContent
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...currentQuickViewProduct,
            quantity: quantity,
            size: selectedSize.textContent
        });
    }
    
    saveToLocalStorage();
    updateCartBadge();
    renderCart();
    closeQuickView();
    showToast(`${currentQuickViewProduct.name} added to cart!`);
}

function toggleQuickViewWishlist() {
    if (!currentQuickViewProduct) return;
    
    const index = wishlist.findIndex(item => item.id === currentQuickViewProduct.id);
    if (index > -1) {
        wishlist.splice(index, 1);
        document.getElementById('quickViewWishlistIcon').textContent = '🤍';
        showToast('Removed from wishlist');
    } else {
        wishlist.push(currentQuickViewProduct);
        document.getElementById('quickViewWishlistIcon').textContent = '❤️';
        showToast('Added to wishlist!');
    }
    
    saveToLocalStorage();
    updateWishlistBadge();
}

// Size Recommendation System
function calculateRecommendedSize(product) {
    // This is a simplified recommendation algorithm
    // In a real app, this would use user's previous purchases, foot measurements, etc.
    const userPreferences = getUserSizePreferences();
    const gender = product.gender;
    
    let recommendedSize;
    
    if (gender === 'men') {
        recommendedSize = userPreferences.menSize || 10;
    } else if (gender === 'women') {
        recommendedSize = userPreferences.womenSize || 8;
    } else {
        recommendedSize = userPreferences.kidsSize || 4;
    }
    
    // Adjust based on product category
    if (product.category === 'running') {
        recommendedSize += 0.5; // Running shoes often need half size up
    } else if (product.category === 'basketball') {
        recommendedSize += 1; // Basketball shoes need more room
    }
    
    // Ensure the recommended size is available
    if (product.sizes.includes(Math.floor(recommendedSize))) {
        return Math.floor(recommendedSize);
    } else if (product.sizes.includes(Math.ceil(recommendedSize))) {
        return Math.ceil(recommendedSize);
    } else {
        return product.sizes[Math.floor(product.sizes.length / 2)]; // Fallback to middle size
    }
}

function getUserSizePreferences() {
    // Get user preferences from localStorage or use defaults
    const saved = localStorage.getItem('userSizePreferences');
    if (saved) {
        return JSON.parse(saved);
    }
    return {
        menSize: 10,
        womenSize: 8,
        kidsSize: 4
    };
}

// Recently Viewed Products
function addToRecentlyViewed(product) {
    // Remove if already exists
    recentlyViewed = recentlyViewed.filter(item => item.id !== product.id);
    
    // Add to beginning
    recentlyViewed.unshift(product);
    
    // Keep only last 6 items
    recentlyViewed = recentlyViewed.slice(0, 6);
    
    // Save to localStorage
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    
    // Update display
    renderRecentlyViewed();
}

function loadRecentlyViewed() {
    const saved = localStorage.getItem('recentlyViewed');
    if (saved) {
        recentlyViewed = JSON.parse(saved);
        renderRecentlyViewed();
    }
}

function renderRecentlyViewed() {
    const grid = document.getElementById('recentlyViewedGrid');
    const section = document.getElementById('recentlyViewed');
    
    if (!grid || !section) return;
    
    if (recentlyViewed.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';
    grid.innerHTML = '';
    
    recentlyViewed.forEach(product => {
        const card = document.createElement('div');
        card.className = 'recently-viewed-card';
        card.onclick = () => openProductModal(product.id);
        
        card.innerHTML = `
            <div class="recently-viewed-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="recently-viewed-info">
                <div class="recently-viewed-name">${product.name}</div>
                <div class="recently-viewed-price">$${product.price}</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Advanced Filters
function setupAdvancedFilters() {
    // Add click handlers for filter chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            this.classList.toggle('active');
            updateAdvancedFilters();
        });
    });
}

function updateAdvancedFilters() {
    // Collect active filters
    const activeChips = document.querySelectorAll('.filter-chip.active');
    
    advancedFilters.material = [];
    advancedFilters.technology = [];
    
    activeChips.forEach(chip => {
        const filterType = chip.dataset.filter;
        if (['leather', 'mesh', 'synthetic', 'canvas'].includes(filterType)) {
            advancedFilters.material.push(filterType);
        } else if (['air-max', 'boost', 'react', 'gel'].includes(filterType)) {
            advancedFilters.technology.push(filterType);
        }
    });
    
    // Apply filters
    applyAdvancedFilters();
}

function applyAdvancedFilters() {
    filteredProducts = products.filter(product => {
        // Check material filter
        if (advancedFilters.material.length > 0 && !advancedFilters.material.includes(product.material)) {
            return false;
        }
        
        // Check technology filter
        if (advancedFilters.technology.length > 0 && !advancedFilters.technology.includes(product.technology)) {
            return false;
        }
        
        return true;
    });
    
    renderProducts();
}

// Social Sharing
function shareProduct(platform, productId = null) {
    const product = productId ? products.find(p => p.id === productId) : currentProduct;
    if (!product) return;
    
    const url = window.location.href;
    const text = `Check out this ${product.name} - $${product.price}`;
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
            break;
        case 'pinterest':
            shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&media=${product.image}&description=${encodeURIComponent(text)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
        showToast('Sharing product...');
    }
}

// Product Video Gallery
function playProductVideo() {
    showToast('Video player would open here', 'info');
    // In a real implementation, this would open a video player modal
}

// Reviews System
function renderReviews(productId) {
    const reviewsList = document.getElementById('reviewsList');
    if (!reviewsList) return;
    
    const productReviews = sampleReviews.filter(review => review.productId === productId);
    
    reviewsList.innerHTML = '';
    
    if (productReviews.length === 0) {
        reviewsList.innerHTML = '<p>No reviews yet. Be the first to review!</p>';
        return;
    }
    
    productReviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-item';
        
        reviewElement.innerHTML = `
            <div class="review-header">
                <div class="reviewer-info">
                    <div class="reviewer-avatar">${review.name.charAt(0)}</div>
                    <div>
                        <div class="reviewer-name">${review.name}</div>
                        <div class="review-date">${formatDate(review.date)}</div>
                    </div>
                </div>
                <div class="stars">${generateStars(review.rating)}</div>
            </div>
            <div class="review-content">${review.comment}</div>
        `;
        
        reviewsList.appendChild(reviewElement);
    });
}

function writeReview() {
    showToast('Review form would open here', 'info');
    // In a real implementation, this would open a review form modal
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Enhanced Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    // Update modal content
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductCategory').textContent = `${product.category} • ${product.gender}`;
    document.getElementById('modalProductRating').innerHTML = generateStars(product.rating) + ` <span class="rating-count">(${product.reviews})</span>`;
    document.getElementById('modalProductPrice').textContent = `$${product.price}`;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalMainImage').src = product.images[0];
    document.getElementById('modalQuantity').value = 1;
    
    // Update size recommendation
    const recommendedSize = calculateRecommendedSize(product);
    document.getElementById('modalRecommendedSize').textContent = recommendedSize;
    
    // Render thumbnails
    const thumbnailGrid = document.getElementById('thumbnailGrid');
    thumbnailGrid.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.onclick = () => selectThumbnail(image, thumbnail);
        thumbnailGrid.appendChild(thumbnail);
    });
    
    // Render size options
    const sizeOptions = document.getElementById('sizeOptions');
    sizeOptions.innerHTML = '';
    product.sizes.forEach(size => {
        const sizeOption = document.createElement('div');
        sizeOption.className = 'size-option';
        sizeOption.textContent = size;
        sizeOption.onclick = () => selectSize(sizeOption);
        sizeOptions.appendChild(sizeOption);
    });
    
    // Update wishlist button
    const isInWishlist = wishlist.some(item => item.id === product.id);
    document.getElementById('modalWishlistIcon').textContent = isInWishlist ? '❤️' : '🤍';
    
    // Render reviews
    renderReviews(product.id);
    
    // Update average rating display
    document.getElementById('averageRating').textContent = product.rating.toFixed(1);
    document.getElementById('averageStars').innerHTML = generateStars(product.rating);
    document.getElementById('totalReviews').textContent = `${product.reviews} reviews`;
    
    // Show modal
    document.getElementById('productModal').classList.add('active');
    
    // Track recently viewed
    addToRecentlyViewed(product);
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    currentProduct = null;
}

// Enhanced Event Listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Filter functionality
    document.getElementById('categoryFilter').addEventListener('change', handleFilter);
    document.getElementById('genderFilter').addEventListener('change', handleFilter);
    document.getElementById('priceFilter').addEventListener('change', handleFilter);
    
    // Cart and Wishlist toggles
    document.getElementById('cartBtn').addEventListener('click', toggleCart);
    document.getElementById('wishlistBtn').addEventListener('click', toggleWishlist);
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Close modals on outside click
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProductModal();
        }
    });
    
    document.getElementById('quickViewModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeQuickView();
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (!e.target.closest('.nav-container') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    navLinks.classList.toggle('active');
    menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
}

// Enhanced Local Storage Functions
function saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
}

// Keep all existing functions from the original script.js below this line
// (renderProducts, handleSearch, handleFilter, addToCart, etc.)

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
    renderProducts();
    renderTrendingProducts();
    updateCartBadge();
    updateWishlistBadge();
    setupEventListeners();
    setupTheme();
    setupParallax();
});

// Parallax Scrolling Effect
function setupParallax() {
    const parallaxHero = document.getElementById('parallaxHero');
    const heroImage = document.getElementById('heroImage');
    
    if (!parallaxHero || !heroImage) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        const heroHeight = heroSection.offsetHeight;
        
        // Only apply parallax effect when within hero section
        if (scrolled < heroHeight) {
            // Parallax background moves slower than scroll
            const parallaxSpeed = 0.5;
            const yPos = -(scrolled * parallaxSpeed);
            parallaxHero.style.transform = `translateY(${yPos}px)`;
            
            // Hero image moves faster and slightly rotates
            const imageSpeed = 0.3;
            const imageYPos = -(scrolled * imageSpeed);
            const rotation = scrolled * 0.1;
            const scale = 1 + (scrolled * 0.0005);
            heroImage.style.transform = `translateY(${imageYPos}px) rotate(${rotation}deg) scale(${scale})`;
            
            // Fade out parallax background as user scrolls down
            const opacity = Math.max(0.1, 0.3 - (scrolled / heroHeight) * 0.2);
            parallaxHero.style.opacity = opacity;
        }
        
        // Parallax effects for other sections
        setupSectionParallax(scrolled);
    });
    
    // Add smooth reveal effect for hero content
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe hero elements for scroll animations
    const heroText = document.querySelector('.hero-text');
    const heroImg = document.querySelector('.hero-image');
    
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';
        heroText.style.transition = 'all 0.8s ease-out';
        observer.observe(heroText);
    }
    
    if (heroImg) {
        heroImg.style.opacity = '0';
        heroImg.style.transform = 'translateY(30px)';
        heroImg.style.transition = 'all 0.8s ease-out 0.2s';
        observer.observe(heroImg);
    }
    
    // Observe section elements for scroll animations
    observeSectionElements(observer);
}

// Setup parallax for different sections
function setupSectionParallax(scrolled) {
    // Featured Products parallax
    const featuredSection = document.querySelector('.featured-products');
    if (featuredSection) {
        const rect = featuredSection.getBoundingClientRect();
        const sectionTop = rect.top + window.pageYOffset;
        const sectionHeight = rect.height;
        
        if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
            const progress = (scrolled - (sectionTop - window.innerHeight)) / (window.innerHeight + sectionHeight);
            const yPos = progress * 30; // Move up to 30px
            
            // Animate background gradient
            const bgElement = featuredSection.querySelector('::before');
            if (bgElement) {
                featuredSection.style.setProperty('--parallax-offset', `${yPos}px`);
            }
            
            // Animate section title
            const sectionTitle = featuredSection.querySelector('.section-title');
            if (sectionTitle) {
                const titleYPos = -(progress * 20);
                sectionTitle.style.transform = `translateY(${titleYPos}px)`;
                sectionTitle.style.opacity = 1 - (progress * 0.3);
            }
            
            // Animate product cards with staggered effect
            const productCards = featuredSection.querySelectorAll('.product-card');
            productCards.forEach((card, index) => {
                const delay = index * 0.1;
                const cardProgress = Math.max(0, (progress - delay) / (1 - delay));
                const cardYPos = -(cardProgress * 15);
                const cardRotation = cardProgress * 2;
                card.style.transform = `translateY(${cardYPos}px) rotateX(${cardRotation}deg)`;
            });
        }
    }
    
    // Categories parallax
    const categoriesSection = document.querySelector('.categories');
    if (categoriesSection) {
        const rect = categoriesSection.getBoundingClientRect();
        const sectionTop = rect.top + window.pageYOffset;
        const sectionHeight = rect.height;
        
        if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
            const progress = (scrolled - (sectionTop - window.innerHeight)) / (window.innerHeight + sectionHeight);
            
            // Animate section title
            const sectionTitle = categoriesSection.querySelector('.section-title');
            if (sectionTitle) {
                const titleYPos = -(progress * 25);
                const rotation = progress * 3;
                sectionTitle.style.transform = `translateY(${titleYPos}px) rotate(${rotation}deg)`;
                sectionTitle.style.opacity = 1 - (progress * 0.2);
            }
            
            // Animate category cards with wave effect
            const categoryCards = categoriesSection.querySelectorAll('.category-card');
            categoryCards.forEach((card, index) => {
                const wave = Math.sin((progress * Math.PI * 2) + (index * 0.5)) * 10;
                const cardYPos = -(progress * 20) + wave;
                const scale = 1 + (progress * 0.05);
                card.style.transform = `translateY(${cardYPos}px) scale(${scale})`;
            });
        }
    }
    
    // Trending parallax
    const trendingSection = document.querySelector('.trending');
    if (trendingSection) {
        const rect = trendingSection.getBoundingClientRect();
        const sectionTop = rect.top + window.pageYOffset;
        const sectionHeight = rect.height;
        
        if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
            const progress = (scrolled - (sectionTop - window.innerHeight)) / (window.innerHeight + sectionHeight);
            
            // Animate section title
            const sectionTitle = trendingSection.querySelector('.section-title');
            if (sectionTitle) {
                const titleYPos = -(progress * 30);
                const skewX = progress * 2;
                sectionTitle.style.transform = `translateY(${titleYPos}px) skewX(${skewX}deg)`;
                sectionTitle.style.opacity = 1 - (progress * 0.25);
            }
            
            // Animate trending slider
            const slider = trendingSection.querySelector('.trending-slider');
            if (slider) {
                const sliderXPos = progress * 50;
                slider.style.transform = `translateX(${sliderXPos}px)`;
            }
            
            // Animate trending cards with cascade effect
            const trendingCards = trendingSection.querySelectorAll('.trending-card');
            trendingCards.forEach((card, index) => {
                const delay = index * 0.15;
                const cardProgress = Math.max(0, (progress - delay) / (1 - delay));
                const cardYPos = -(cardProgress * 25);
                const cardRotation = cardProgress * 4;
                const cardScale = 1 + (cardProgress * 0.03);
                card.style.transform = `translateY(${cardYPos}px) rotate(${cardRotation}deg) scale(${cardScale})`;
            });
        }
    }
}

// Observe section elements for scroll animations
function observeSectionElements(observer) {
    // Observe section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(30px)';
        title.style.transition = 'all 0.8s ease-out';
        observer.observe(title);
    });
    
    // Observe product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe trending cards
    const trendingCards = document.querySelectorAll('.trending-card');
    trendingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Filter functionality
    document.getElementById('categoryFilter').addEventListener('change', handleFilter);
    document.getElementById('genderFilter').addEventListener('change', handleFilter);
    document.getElementById('priceFilter').addEventListener('change', handleFilter);
    
    // Cart and Wishlist toggles
    document.getElementById('cartBtn').addEventListener('click', toggleCart);
    document.getElementById('wishlistBtn').addEventListener('click', toggleWishlist);
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', handleCategoryClick);
    });
    
    // Close modals on outside click
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProductModal();
        }
    });
    
    // Scroll to top button
    window.addEventListener('scroll', handleScroll);
    
    // Newsletter subscription
    document.getElementById('newsletterEmail').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            subscribeNewsletter();
        }
    });
}

// Theme Management
function setupTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').innerHTML = '<span class="icon">☀️</span>';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('themeToggle').innerHTML = isDark ? '<span class="icon">☀️</span>' : '<span class="icon">🌙</span>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Product Rendering
function renderProducts(productsToRender = filteredProducts) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
    
    // Add animation
    const cards = grid.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'fadeIn 0.5s ease-out';
        }, index * 100);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.badge ? `<span class="product-badge">${product.badge.toUpperCase()}</span>` : ''}
            <button class="product-wishlist ${wishlist.some(item => item.id === product.id) ? 'active' : ''}" 
                    onclick="toggleWishlistItem(${product.id}, event)">
                ❤️
            </button>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-category">${product.category} • ${product.gender}</p>
            <div class="product-price">$${product.price}</div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn btn-outline" onclick="openProductModal(${product.id})">View</button>
            </div>
        </div>
    `;
    return card;
}

function renderTrendingProducts() {
    const slider = document.getElementById('trendingSlider');
    const trendingProducts = products.filter(p => p.badge === 'new').slice(0, 5);
    
    trendingProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'trending-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <span class="product-badge">${product.badge.toUpperCase()}</span>
            </div>
            <div class="product-info" style="padding: 15px;">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price}</div>
                <button class="btn btn-primary" onclick="addToCart(${product.id})" style="width: 100%; margin-top: 10px;">Add to Cart</button>
            </div>
        `;
        slider.appendChild(card);
    });
}

// Search Functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    // Determine current page context
    const currentPath = window.location.pathname;
    let baseProducts = [...products];
    
    // Filter products based on current page
    if (currentPath.includes('men.html')) {
        baseProducts = products.filter(product => product.gender === 'men');
    } else if (currentPath.includes('women.html')) {
        baseProducts = products.filter(product => product.gender === 'women');
    } else if (currentPath.includes('kids.html')) {
        baseProducts = products.filter(product => product.gender === 'kids');
    } else if (currentPath.includes('new-releases.html')) {
        baseProducts = products.filter(product => product.badge === 'new' || product.badge === 'limited');
    }
    // index.html shows all products
    
    if (searchTerm === '') {
        filteredProducts = baseProducts;
    } else {
        filteredProducts = baseProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.materials?.some(material => material.toLowerCase().includes(searchTerm)) ||
            product.technologies?.some(tech => tech.toLowerCase().includes(searchTerm))
        );
    }
    
    renderProducts();
    
    // Show search feedback
    const searchInput = e.target;
    if (searchTerm.length > 0) {
        searchInput.style.borderColor = 'var(--accent-color)';
        if (filteredProducts.length === 0) {
            showNoResultsMessage();
        } else {
            hideNoResultsMessage();
        }
    } else {
        searchInput.style.borderColor = 'var(--border-color)';
        hideNoResultsMessage();
    }
}

// Show no results message
function showNoResultsMessage() {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid && !document.getElementById('noResultsMessage')) {
        const noResultsDiv = document.createElement('div');
        noResultsDiv.id = 'noResultsMessage';
        noResultsDiv.className = 'no-results';
        noResultsDiv.innerHTML = `
            <div class="no-results-icon">🔍</div>
            <h3>No products found</h3>
            <p>Try searching with different keywords or browse our categories.</p>
        `;
        productsGrid.appendChild(noResultsDiv);
    }
}

// Hide no results message
function hideNoResultsMessage() {
    const noResultsDiv = document.getElementById('noResultsMessage');
    if (noResultsDiv) {
        noResultsDiv.remove();
    }
}

// Filter Functionality
function handleFilter() {
    const category = document.getElementById('categoryFilter').value;
    const gender = document.getElementById('genderFilter').value;
    const priceRange = document.getElementById('priceFilter').value;
    
    filteredProducts = products.filter(product => {
        let matchCategory = category === 'all' || product.category === category;
        let matchGender = gender === 'all' || product.gender === gender;
        let matchPrice = true;
        
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
            matchPrice = max ? (product.price >= min && product.price <= max) : product.price >= min;
        }
        
        return matchCategory && matchGender && matchPrice;
    });
    
    renderProducts();
}

// Cart Functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveToLocalStorage();
    updateCartBadge();
    renderCart();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveToLocalStorage();
    updateCartBadge();
    renderCart();
    showToast('Item removed from cart');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveToLocalStorage();
            renderCart();
            updateCartBadge();
        }
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Your cart is empty</p>';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="close-btn" onclick="removeFromCart(${item.id})">×</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('active');
    renderCart();
    
    // Close wishlist if open
    document.getElementById('wishlistSidebar').classList.remove('active');
}

// Wishlist Functionality
function toggleWishlistItem(productId, event) {
    event.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const index = wishlist.findIndex(item => item.id === productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist');
    } else {
        wishlist.push(product);
        showToast('Added to wishlist!');
    }
    
    saveToLocalStorage();
    updateWishlistBadge();
    renderProducts();
    renderWishlist();
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlistBadge');
    badge.textContent = wishlist.length;
    badge.style.display = wishlist.length > 0 ? 'flex' : 'none';
}

function renderWishlist() {
    const wishlistItems = document.getElementById('wishlistItems');
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Your wishlist is empty</p>';
        return;
    }
    
    wishlistItems.innerHTML = '';
    
    wishlist.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        wishlistItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="wishlist-item-image">
            <div class="wishlist-item-info">
                <div class="wishlist-item-name">${item.name}</div>
                <div class="wishlist-item-price">$${item.price}</div>
            </div>
            <button class="btn btn-primary" onclick="addToCart(${item.id}); toggleWishlist();">Add to Cart</button>
            <button class="close-btn" onclick="toggleWishlistItem(${item.id}, event)">×</button>
        `;
        wishlistItems.appendChild(wishlistItem);
    });
}

function toggleWishlist() {
    const sidebar = document.getElementById('wishlistSidebar');
    sidebar.classList.toggle('active');
    renderWishlist();
    
    // Close cart if open
    document.getElementById('cartSidebar').classList.remove('active');
}

// Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    // Update modal content
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductCategory').textContent = `${product.category} • ${product.gender}`;
    document.getElementById('modalProductPrice').textContent = `$${product.price}`;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalMainImage').src = product.images[0];
    document.getElementById('modalQuantity').value = 1;
    
    // Update wishlist button
    const isInWishlist = wishlist.some(item => item.id === product.id);
    document.getElementById('modalWishlistIcon').textContent = isInWishlist ? '❤️' : '🤍';
    
    // Render thumbnails
    const thumbnailGrid = document.getElementById('thumbnailGrid');
    thumbnailGrid.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.onclick = () => selectThumbnail(image, thumbnail);
        thumbnailGrid.appendChild(thumbnail);
    });
    
    // Render size options
    const sizeOptions = document.getElementById('sizeOptions');
    sizeOptions.innerHTML = '';
    product.sizes.forEach(size => {
        const sizeOption = document.createElement('div');
        sizeOption.className = 'size-option';
        sizeOption.textContent = size;
        sizeOption.onclick = () => selectSize(sizeOption);
        sizeOptions.appendChild(sizeOption);
    });
    
    // Show modal
    document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    currentProduct = null;
}

function selectThumbnail(image, thumbnail) {
    document.getElementById('modalMainImage').src = image;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

function selectSize(sizeOption) {
    document.querySelectorAll('.size-option').forEach(option => option.classList.remove('selected'));
    sizeOption.classList.add('selected');
}

function increaseQuantity() {
    const input = document.getElementById('modalQuantity');
    input.value = Math.min(parseInt(input.value) + 1, 10);
}

function decreaseQuantity() {
    const input = document.getElementById('modalQuantity');
    input.value = Math.max(parseInt(input.value) - 1, 1);
}

function addToCartFromModal() {
    if (!currentProduct) return;
    
    const quantity = parseInt(document.getElementById('modalQuantity').value);
    const selectedSize = document.querySelector('.size-option.selected');
    
    if (!selectedSize) {
        showToast('Please select a size', 'warning');
        return;
    }
    
    // Add to cart with size and quantity
    const existingItem = cart.find(item => 
        item.id === currentProduct.id && item.size === selectedSize.textContent
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...currentProduct,
            quantity: quantity,
            size: selectedSize.textContent
        });
    }
    
    saveToLocalStorage();
    updateCartBadge();
    closeProductModal();
    showToast(`${currentProduct.name} added to cart!`);
}

function toggleWishlistModal() {
    if (!currentProduct) return;
    
    const index = wishlist.findIndex(item => item.id === currentProduct.id);
    if (index > -1) {
        wishlist.splice(index, 1);
        document.getElementById('modalWishlistIcon').textContent = '🤍';
        showToast('Removed from wishlist');
    } else {
        wishlist.push(currentProduct);
        document.getElementById('modalWishlistIcon').textContent = '❤️';
        showToast('Added to wishlist!');
    }
    
    saveToLocalStorage();
    updateWishlistBadge();
}

// Category Handling
function handleCategoryClick(e) {
    const category = e.currentTarget.dataset.category;
    document.getElementById('categoryFilter').value = category;
    handleFilter();
    scrollToProducts();
}

// Utility Functions
function scrollToProducts() {
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

function handleScroll() {
    const scrollTop = document.getElementById('scrollTop');
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value;
    if (email && email.includes('@')) {
        showToast('Successfully subscribed to newsletter!');
        document.getElementById('newsletterEmail').value = '';
    } else {
        showToast('Please enter a valid email address', 'error');
    }
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty', 'warning');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showToast(`Order placed successfully! Total: $${total.toFixed(2)}`);
    
    // Clear cart
    cart = [];
    saveToLocalStorage();
    updateCartBadge();
    renderCart();
    toggleCart();
}

// Local Storage Functions
function saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
}

// Add scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTop';
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(scrollTopBtn);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Sticky navigation effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
