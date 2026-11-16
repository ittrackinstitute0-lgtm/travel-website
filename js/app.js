/**
 * Explore Pakistan 🇵🇰 - Core Application Logic
 * Implements interactive navigation, search engine, city modal,
 * destination filters, hotel booking, budget calculator, image lightbox,
 * currency switcher, and wishlist drawer.
 */

document.addEventListener("DOMContentLoaded", () => {
  // App State
  const state = {
    currency: localStorage.getItem("ep_currency") || "PKR",
    wishlist: JSON.parse(localStorage.getItem("ep_wishlist") || "[]"),
    activeHeroIndex: 0,
    lightboxIndex: 0,
    currentFilteredGallery: [...PAKISTAN_DATA.gallery],
    activeCityModalId: null,
    calcState: {
      destination: "golden-triangle",
      days: 7,
      travelers: 2,
      style: "comfort",
      transport: "private-car"
    }
  };

  // DOM Elements
  const heroSlides = document.querySelectorAll(".hero-slide");
  const heroDots = document.querySelectorAll(".slider-dot");
  const currencyToggleBtn = document.getElementById("currencyToggleBtn");
  const currentCurrencyLabel = document.getElementById("currentCurrencyLabel");
  const wishlistCounter = document.getElementById("wishlistCounter");
  const wishlistDrawer = document.getElementById("wishlistDrawer");
  const wishlistDrawerBody = document.getElementById("wishlistDrawerBody");
  const openWishlistBtn = document.getElementById("openWishlistBtn");
  const closeWishlistBtn = document.getElementById("closeWishlistBtn");
  const toastContainer = document.getElementById("toastContainer");

  // Search Elements
  const heroSearchInput = document.getElementById("heroSearchInput");
  const heroCategorySelect = document.getElementById("heroCategorySelect");
  const heroRegionSelect = document.getElementById("heroRegionSelect");
  const heroSearchBtn = document.getElementById("heroSearchBtn");
  const searchDropdown = document.getElementById("searchDropdown");

  // Modal Elements
  const cityModalBackdrop = document.getElementById("cityModalBackdrop");
  const cityModalContent = document.getElementById("cityModalContent");
  const closeCityModalBtn = document.getElementById("closeCityModalBtn");

  const hotelModalBackdrop = document.getElementById("hotelModalBackdrop");
  const hotelModalContent = document.getElementById("hotelModalContent");
  const closeHotelModalBtn = document.getElementById("closeHotelModalBtn");

  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDesc = document.getElementById("lightboxDesc");
  const lightboxPrevBtn = document.getElementById("lightboxPrevBtn");
  const lightboxNextBtn = document.getElementById("lightboxNextBtn");
  const closeLightboxBtn = document.getElementById("closeLightboxBtn");

  const reviewModalBackdrop = document.getElementById("reviewModalBackdrop");
  const openReviewModalBtn = document.getElementById("openReviewModalBtn");
  const closeReviewModalBtn = document.getElementById("closeReviewModalBtn");
  const reviewForm = document.getElementById("reviewForm");

  // Mobile Menu Elements
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  const closeMobileNavBtn = document.getElementById("closeMobileNavBtn");

  // =========================================================================
  // 1. CURRENCY CONVERSION & FORMATTING
  // =========================================================================
  function formatMoney(amountPKR) {
    if (state.currency === "USD") {
      const usd = Math.round(amountPKR * PAKISTAN_DATA.config.currencyRates.USD);
      return `$${usd.toLocaleString()}`;
    }
    return `₨ ${amountPKR.toLocaleString()}`;
  }

  function updateCurrencyUI() {
    if (currentCurrencyLabel) {
      currentCurrencyLabel.textContent = `${state.currency} (${PAKISTAN_DATA.config.currencySymbols[state.currency]})`;
    }
    // Re-render hotels & budget calculator to reflect currency change
    renderHotels();
    updateBudgetCalculator();
    renderDestinations();
  }

  if (currencyToggleBtn) {
    currencyToggleBtn.addEventListener("click", () => {
      state.currency = state.currency === "PKR" ? "USD" : "PKR";
      localStorage.setItem("ep_currency", state.currency);
      updateCurrencyUI();
      showToast(`Currency switched to ${state.currency}`, "success");
    });
  }

  // =========================================================================
  // 2. HERO SLIDER AUTO-ROTATION
  // =========================================================================
  function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    heroDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    state.activeHeroIndex = index;
  }

  let heroInterval = setInterval(() => {
    let nextIndex = (state.activeHeroIndex + 1) % heroSlides.length;
    showHeroSlide(nextIndex);
  }, 5000);

  heroDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(heroInterval);
      showHeroSlide(index);
      heroInterval = setInterval(() => {
        let nextIndex = (state.activeHeroIndex + 1) % heroSlides.length;
        showHeroSlide(nextIndex);
      }, 5000);
    });
  });

  // =========================================================================
  // 3. TOAST NOTIFICATIONS
  // =========================================================================
  function showToast(message, type = "info") {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    const icon = type === "success" ? "✓" : "★";
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // =========================================================================
  // 4. WISHLIST / FAVORITES SYSTEM
  // =========================================================================
  function toggleWishlist(item) {
    const existingIndex = state.wishlist.findIndex(w => w.id === item.id);
    if (existingIndex > -1) {
      state.wishlist.splice(existingIndex, 1);
      showToast(`Removed "${item.name}" from your wishlist`);
    } else {
      state.wishlist.push(item);
      showToast(`Added "${item.name}" to your wishlist!`, "success");
    }
    localStorage.setItem("ep_wishlist", JSON.stringify(state.wishlist));
    updateWishlistUI();
    renderDestinations();
  }

  function updateWishlistUI() {
    if (wishlistCounter) {
      wishlistCounter.textContent = state.wishlist.length;
    }
    if (!wishlistDrawerBody) return;

    if (state.wishlist.length === 0) {
      wishlistDrawerBody.innerHTML = `
        <div class="drawer-empty-state">
          <div class="drawer-empty-icon">🤍</div>
          <h4>Your wishlist is empty</h4>
          <p>Browse destinations and cities to save your favorite spots for your trip.</p>
        </div>
      `;
    } else {
      wishlistDrawerBody.innerHTML = state.wishlist.map(item => `
        <div class="wishlist-item">
          <img src="${item.image}" alt="${item.name}" class="wishlist-thumb">
          <div class="wishlist-info">
            <h5>${item.name}</h5>
            <span>${item.region || item.city || "Pakistan"}</span>
          </div>
          <button class="wishlist-remove-btn" data-remove-id="${item.id}" title="Remove">✕</button>
        </div>
      `).join("");

      wishlistDrawerBody.querySelectorAll("[data-remove-id]").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-remove-id");
          const target = state.wishlist.find(w => w.id === id);
          if (target) toggleWishlist(target);
        });
      });
    }
  }

  if (openWishlistBtn) {
    openWishlistBtn.addEventListener("click", () => {
      updateWishlistUI();
      wishlistDrawer.classList.add("open");
    });
  }

  if (closeWishlistBtn) {
    closeWishlistBtn.addEventListener("click", () => {
      wishlistDrawer.classList.remove("open");
    });
  }

  // =========================================================================
  // 5. CITIES SECTION - VERIFIED CITY CARDS & FILTER TABS
  // =========================================================================
  let activeCityFilter = "all";

  function renderCityCards() {
    const container = document.getElementById("citiesCardsContainer");
    if (!container) return;

    let filteredCities = PAKISTAN_DATA.cities;
    if (activeCityFilter === "top3") {
      filteredCities = PAKISTAN_DATA.cities.filter(c => ["karachi", "lahore", "islamabad"].includes(c.id));
    } else if (activeCityFilter !== "all") {
      filteredCities = PAKISTAN_DATA.cities.filter(c => c.province.toLowerCase().includes(activeCityFilter.toLowerCase()));
    }

    container.innerHTML = filteredCities.map(city => `
      <article class="city-card">
        <div class="city-card-image-wrap">
          <img src="${city.coverImage}" alt="${city.name}" class="city-card-img" loading="lazy">
          <div class="city-card-overlay"></div>
          <span class="city-badge-province">${city.province}</span>
          <span class="city-urdu-title">${city.urduName}</span>
          <div class="city-name-banner">
            <h3 class="city-card-name">${city.name}</h3>
            <p class="city-card-tagline">${city.title}</p>
          </div>
        </div>

        <div class="city-card-body">
          <p class="city-short-desc">${city.description}</p>
          
          <div class="city-attractions-block">
            <h4 class="attractions-heading">
              <span>🏛️</span> Popular Attractions
            </h4>
            <div class="attractions-tags">
              ${city.attractions.map(attr => `
                <span class="attraction-tag">📍 ${attr.name}</span>
              `).join("")}
            </div>
          </div>

          <div class="city-card-footer">
            <div class="city-quick-stat">
              <span>Best: <strong>${city.quickStats.bestTime}</strong></span>
            </div>
            <button class="btn btn-primary explore-city-btn" data-city-id="${city.id}">
              Explore ${city.name} →
            </button>
          </div>
        </div>
      </article>
    `).join("");

    // Attach click events for "Explore City" buttons
    container.querySelectorAll(".explore-city-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const cityId = btn.getAttribute("data-city-id");
        openCityModal(cityId);
      });
    });
  }

  // City Filter Tab Listeners
  const cityFilterBtns = document.querySelectorAll(".city-tab-btn");
  cityFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      cityFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCityFilter = btn.getAttribute("data-city-filter");
      renderCityCards();
    });
  });

  // City Detail Modal
  function openCityModal(cityId) {
    const city = PAKISTAN_DATA.cities.find(c => c.id === cityId);
    if (!city || !cityModalContent) return;

    cityModalContent.innerHTML = `
      <div class="city-modal-hero">
        <img src="${city.coverImage}" alt="${city.name}" class="city-modal-hero-img">
        <div class="city-modal-hero-overlay">
          <span class="city-modal-badge">${city.province}</span>
          <h2 class="city-modal-title">${city.name} <span class="city-modal-urdu">${city.urduName}</span></h2>
          <p class="city-modal-tagline">${city.title}</p>
        </div>
      </div>

      <div class="city-modal-content">
        <div class="city-stats-bar">
          <div class="city-stat-box">
            <div class="city-stat-label">Population</div>
            <div class="city-stat-val">${city.quickStats.population}</div>
          </div>
          <div class="city-stat-box">
            <div class="city-stat-label">Best Months</div>
            <div class="city-stat-val">${city.quickStats.bestTime}</div>
          </div>
          <div class="city-stat-box">
            <div class="city-stat-label">Airport</div>
            <div class="city-stat-val">${city.quickStats.airport}</div>
          </div>
          <div class="city-stat-box">
            <div class="city-stat-label">Climate</div>
            <div class="city-stat-val">${city.quickStats.climate}</div>
          </div>
        </div>

        <p class="about-lead-text" style="margin-bottom: 2rem;">
          ${city.longDescription}
        </p>

        <h3 class="city-modal-section-title">Must-Visit Attractions in ${city.name}</h3>
        <div class="modal-attractions-grid">
          ${city.attractions.map(attr => `
            <div class="modal-attraction-card">
              <img src="${attr.image}" alt="${attr.name}" class="modal-attraction-img">
              <div class="modal-attraction-body">
                <div style="font-size:0.75rem; color:var(--pk-green-700); font-weight:700; margin-bottom:0.25rem;">
                  ${attr.category}
                </div>
                <h4 class="modal-attraction-name">${attr.name}</h4>
                <p class="modal-attraction-desc">${attr.description}</p>
                <div class="modal-attraction-meta">
                  <span>⏱ ${attr.timings}</span>
                  <span>🎟 ${attr.entryFee}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <h3 class="city-modal-section-title">Iconic Culinary Delights</h3>
        <div class="food-chips-wrap">
          ${city.mustTryFoods.map(food => `
            <span class="food-chip">🍲 ${food}</span>
          `).join("")}
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; padding-top:1.5rem; border-top:1px solid var(--bg-tertiary);">
          <div>
            <strong>Ready to experience ${city.name}?</strong>
            <p style="font-size:0.85rem; color:var(--text-muted);">Book premier hotels and tours curated for this city.</p>
          </div>
          <a href="#hotels" class="btn btn-primary" onclick="filterHotelsByCity('${city.id}')">
            View Hotels in ${city.name} →
          </a>
        </div>
      </div>
    `;

    cityModalBackdrop.classList.add("show");
  }

  window.filterHotelsByCity = function(cityId) {
    cityModalBackdrop.classList.remove("show");
    const hotelFilterSelect = document.getElementById("hotelCityFilter");
    if (hotelFilterSelect) {
      hotelFilterSelect.value = cityId;
      renderHotels();
    }
  };

  if (closeCityModalBtn) {
    closeCityModalBtn.addEventListener("click", () => {
      cityModalBackdrop.classList.remove("show");
    });
  }

  // =========================================================================
  // 6. DESTINATIONS CATALOG & FILTER TABS
  // =========================================================================
  let activeDestFilter = "all";

  function renderDestinations() {
    const container = document.getElementById("destinationsGridContainer");
    if (!container) return;

    const filtered = activeDestFilter === "all"
      ? PAKISTAN_DATA.destinations
      : PAKISTAN_DATA.destinations.filter(d => d.category === activeDestFilter);

    container.innerHTML = filtered.map(dest => {
      const isSaved = state.wishlist.some(w => w.id === dest.id);
      return `
        <article class="dest-card">
          <div class="dest-image-wrap">
            <img src="${dest.image}" alt="${dest.name}" class="dest-img" loading="lazy">
            <span class="dest-badge-region">${dest.region}</span>
            <button class="dest-fav-btn" data-dest-id="${dest.id}" title="${isSaved ? 'Remove from Wishlist' : 'Add to Wishlist'}">
              ${isSaved ? '❤️' : '🤍'}
            </button>
            <div class="dest-rating-pill">
              ★ ${dest.rating} <span style="color:var(--text-muted); font-weight:normal;">(${dest.reviewsCount})</span>
            </div>
          </div>

          <div class="dest-card-body">
            <h3 class="dest-title">${dest.name}</h3>
            <p class="dest-tagline">${dest.tagline}</p>
            <p class="dest-desc">${dest.description}</p>

            <div class="dest-features-list">
              ${dest.highlights.slice(0, 3).map(h => `
                <span class="dest-feature-pill">✦ ${h}</span>
              `).join("")}
            </div>

            <div class="dest-footer">
              <div class="dest-price-box">
                <span class="dest-price-label">Avg. Daily Cost</span>
                <span class="dest-price-value">${formatMoney(dest.pricePerDayPKR)}</span>
              </div>
              <button class="btn btn-secondary plan-dest-btn" data-dest-id="${dest.id}">
                Plan Trip →
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    // Attach Wishlist click listeners
    container.querySelectorAll(".dest-fav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-dest-id");
        const dest = PAKISTAN_DATA.destinations.find(d => d.id === id);
        if (dest) toggleWishlist(dest);
      });
    });

    // Attach "Plan Trip" listeners
    container.querySelectorAll(".plan-dest-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-dest-id");
        const calcDest = document.getElementById("calcDestination");
        if (calcDest) {
          calcDest.value = id;
          state.calcState.destination = id;
          updateBudgetCalculator();
          document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Filter Tab Buttons
  const filterTabs = document.querySelectorAll(".filter-tab-btn");
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeDestFilter = tab.getAttribute("data-filter");
      renderDestinations();
    });
  });

  // =========================================================================
  // 7. HOTELS & BOOKING SYSTEM
  // =========================================================================
  function renderHotels() {
    const container = document.getElementById("hotelsGridContainer");
    const cityFilter = document.getElementById("hotelCityFilter");
    if (!container) return;

    const selectedCity = cityFilter ? cityFilter.value : "all";

    const filtered = selectedCity === "all"
      ? PAKISTAN_DATA.hotels
      : PAKISTAN_DATA.hotels.filter(h => h.cityId === selectedCity);

    container.innerHTML = filtered.map(hotel => `
      <article class="hotel-card">
        <div class="hotel-img-wrap">
          <img src="${hotel.image}" alt="${hotel.name}" class="hotel-img" loading="lazy">
          <span class="hotel-badge">${hotel.badge}</span>
          <div class="hotel-stars">
            ${"★".repeat(hotel.stars)}
          </div>
        </div>

        <div class="hotel-body">
          <h3 class="hotel-name">${hotel.name}</h3>
          <div class="hotel-location">
            <span>📍</span> ${hotel.city} — ${hotel.address}
          </div>
          <p class="hotel-desc">${hotel.description}</p>

          <div class="hotel-amenities-tags">
            ${hotel.amenities.slice(0, 4).map(a => `
              <span class="hotel-amenity-pill">✓ ${a}</span>
            `).join("")}
          </div>

          <div class="hotel-footer">
            <div>
              <span class="hotel-price-unit">Per Night from</span>
              <div class="hotel-price-val">${formatMoney(hotel.pricePerNightPKR)}</div>
            </div>
            <button class="btn btn-primary book-hotel-btn" data-hotel-id="${hotel.id}">
              Book Now →
            </button>
          </div>
        </div>
      </article>
    `).join("");

    // Attach Book Hotel listeners
    container.querySelectorAll(".book-hotel-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-hotel-id");
        openHotelBookingModal(id);
      });
    });
  }

  const hotelCityFilter = document.getElementById("hotelCityFilter");
  if (hotelCityFilter) {
    hotelCityFilter.addEventListener("change", renderHotels);
  }

  function openHotelBookingModal(hotelId) {
    const hotel = PAKISTAN_DATA.hotels.find(h => h.id === hotelId);
    if (!hotel || !hotelModalContent) return;

    const nights = 3;
    const initialTotalPKR = hotel.pricePerNightPKR * nights;

    hotelModalContent.innerHTML = `
      <div class="booking-modal-body">
        <h2 class="form-title">Reserve at ${hotel.name}</h2>
        <p class="form-subtitle">Enjoy guaranteed luxury hospitality with instant confirmation & free cancellation up to 48 hours prior.</p>

        <div class="booking-summary-card">
          <img src="${hotel.image}" alt="${hotel.name}" class="booking-summary-img">
          <div>
            <h4 style="font-size:1.1rem; font-weight:700;">${hotel.name}</h4>
            <span style="font-size:0.85rem; color:var(--pk-green-700);">📍 ${hotel.city} (${"★".repeat(hotel.stars)})</span>
            <div style="font-size:0.95rem; font-weight:800; color:var(--pk-green-900); margin-top:0.25rem;">
              ${formatMoney(hotel.pricePerNightPKR)} / night
            </div>
          </div>
        </div>

        <form id="hotelReservationForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Check-in Date</label>
              <input type="date" class="form-control" required value="${new Date().toISOString().split('T')[0]}">
            </div>
            <div class="form-group">
              <label class="form-label">Check-out Date</label>
              <input type="date" class="form-control" required value="${new Date(Date.now() + 3*24*60*60*1000).toISOString().split('T')[0]}">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Guests</label>
              <select class="form-control" id="modalBookingGuests">
                <option value="1">1 Adult</option>
                <option value="2" selected>2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">Family (2 Adults, 2 Kids)</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Room Category</label>
              <select class="form-control">
                <option>Deluxe Mountain/City View</option>
                <option>Executive Club Suite</option>
                <option>Royal Presidential Suite</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Guest Full Name</label>
              <input type="text" class="form-control" placeholder="e.g. John Doe" required>
            </div>
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-control" placeholder="john@example.com" required>
            </div>
          </div>

          <div style="background:var(--bg-secondary); padding:1rem 1.25rem; border-radius:var(--radius-md); margin-bottom:1.5rem;">
            <div class="booking-calc-row">
              <span>Rate (3 Nights)</span>
              <span>${formatMoney(initialTotalPKR)}</span>
            </div>
            <div class="booking-calc-row">
              <span>Govt Taxes & Service (16%)</span>
              <span>${formatMoney(Math.round(initialTotalPKR * 0.16))}</span>
            </div>
            <div class="booking-total-row">
              <span>Estimated Total:</span>
              <span>${formatMoney(Math.round(initialTotalPKR * 1.16))}</span>
            </div>
          </div>

          <button type="submit" class="btn btn-primary" style="width:100%; padding:0.9rem;">
            Confirm Reservation (Simulated) ✓
          </button>
        </form>
      </div>
    `;

    const form = document.getElementById("hotelReservationForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      hotelModalBackdrop.classList.remove("show");
      const bookingRef = "PK-" + Math.floor(100000 + Math.random() * 900000);
      showToast(`Reservation Confirmed! Ref: ${bookingRef} at ${hotel.name}`, "success");
    });

    hotelModalBackdrop.classList.add("show");
  }

  if (closeHotelModalBtn) {
    closeHotelModalBtn.addEventListener("click", () => {
      hotelModalBackdrop.classList.remove("show");
    });
  }

  // =========================================================================
  // 8. TRAVEL BUDGET CALCULATOR
  // =========================================================================
  const calcDestination = document.getElementById("calcDestination");
  const calcDaysSlider = document.getElementById("calcDaysSlider");
  const calcDaysDisplay = document.getElementById("calcDaysDisplay");
  const calcTravelers = document.getElementById("calcTravelers");
  const calcTransport = document.getElementById("calcTransport");
  const styleRadioCards = document.querySelectorAll(".style-radio-card");

  function updateBudgetCalculator() {
    const days = parseInt(calcDaysSlider ? calcDaysSlider.value : "7", 10);
    const travelers = parseInt(calcTravelers ? calcTravelers.value : "2", 10);
    const transportType = calcTransport ? calcTransport.value : "private-car";
    const travelStyle = state.calcState.style;

    if (calcDaysDisplay) {
      calcDaysDisplay.textContent = `${days} Days`;
    }

    // Baseline daily per person costs in PKR
    let hotelDailyPerRoom = 8000;
    let foodDailyPerPerson = 2500;
    let activityDailyPerPerson = 1500;

    if (travelStyle === "budget") {
      hotelDailyPerRoom = 4500;
      foodDailyPerPerson = 1200;
      activityDailyPerPerson = 800;
    } else if (travelStyle === "luxury") {
      hotelDailyPerRoom = 38000;
      foodDailyPerPerson = 7000;
      activityDailyPerPerson = 5000;
    }

    // Transport daily flat rate
    let transportDailyRate = 8000; // private car
    if (transportType === "public") transportDailyRate = 2500;
    if (transportType === "suv-flights") transportDailyRate = 24000;

    // Rooms needed (approx 2 people per room)
    const rooms = Math.ceil(travelers / 2);

    const totalAccom = hotelDailyPerRoom * rooms * days;
    const totalFood = foodDailyPerPerson * travelers * days;
    const totalTransport = transportDailyRate * days;
    const totalActivities = activityDailyPerPerson * travelers * days;
    const grandTotalPKR = totalAccom + totalFood + totalTransport + totalActivities;

    // Update UI elements
    const calcGrandTotal = document.getElementById("calcGrandTotal");
    const calcTotalUSD = document.getElementById("calcTotalUSD");
    const calcAccomVal = document.getElementById("calcAccomVal");
    const calcFoodVal = document.getElementById("calcFoodVal");
    const calcTransportVal = document.getElementById("calcTransportVal");
    const calcActivitiesVal = document.getElementById("calcActivitiesVal");

    const barAccom = document.getElementById("barAccom");
    const barFood = document.getElementById("barFood");
    const barTransport = document.getElementById("barTransport");
    const barActivities = document.getElementById("barActivities");

    if (calcGrandTotal) calcGrandTotal.textContent = formatMoney(grandTotalPKR);
    if (calcTotalUSD) {
      const approxUSD = Math.round(grandTotalPKR * PAKISTAN_DATA.config.currencyRates.USD);
      calcTotalUSD.textContent = state.currency === "PKR" ? `≈ $${approxUSD.toLocaleString()} USD` : `≈ ₨ ${grandTotalPKR.toLocaleString()} PKR`;
    }

    if (calcAccomVal) calcAccomVal.textContent = formatMoney(totalAccom);
    if (calcFoodVal) calcFoodVal.textContent = formatMoney(totalFood);
    if (calcTransportVal) calcTransportVal.textContent = formatMoney(totalTransport);
    if (calcActivitiesVal) calcActivitiesVal.textContent = formatMoney(totalActivities);

    // Percentage widths for visual progress bars
    if (barAccom) barAccom.style.width = `${Math.round((totalAccom / grandTotalPKR) * 100)}%`;
    if (barFood) barFood.style.width = `${Math.round((totalFood / grandTotalPKR) * 100)}%`;
    if (barTransport) barTransport.style.width = `${Math.round((totalTransport / grandTotalPKR) * 100)}%`;
    if (barActivities) barActivities.style.width = `${Math.round((totalActivities / grandTotalPKR) * 100)}%`;
  }

  if (calcDaysSlider) {
    calcDaysSlider.addEventListener("input", updateBudgetCalculator);
  }
  if (calcTravelers) {
    calcTravelers.addEventListener("change", updateBudgetCalculator);
  }
  if (calcTransport) {
    calcTransport.addEventListener("change", updateBudgetCalculator);
  }
  if (calcDestination) {
    calcDestination.addEventListener("change", updateBudgetCalculator);
  }

  styleRadioCards.forEach(card => {
    card.addEventListener("click", () => {
      styleRadioCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      state.calcState.style = card.getAttribute("data-style");
      updateBudgetCalculator();
    });
  });

  const bookCalculatedTripBtn = document.getElementById("bookCalculatedTripBtn");
  if (bookCalculatedTripBtn) {
    bookCalculatedTripBtn.addEventListener("click", () => {
      const days = calcDaysSlider.value;
      const travelers = calcTravelers.value;
      const destSelect = document.getElementById("contactDestinationSelect");
      const messageBox = document.getElementById("contactMessage");

      if (destSelect) destSelect.value = calcDestination.value;
      if (messageBox) {
        messageBox.value = `Hi Explore Pakistan team! I calculated an estimated budget for a ${days}-day trip for ${travelers} traveler(s) with ${state.calcState.style} tier and ${calcTransport.value} transport. I'd love to finalize an itinerary!`;
      }
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      showToast("Budget details loaded into inquiry form!", "success");
    });
  }

  // =========================================================================
  // 9. IMAGE GALLERY & LIGHTBOX
  // =========================================================================
  let activeGalleryCategory = "all";

  function renderGallery() {
    const container = document.getElementById("galleryGridContainer");
    if (!container) return;

    state.currentFilteredGallery = activeGalleryCategory === "all"
      ? PAKISTAN_DATA.gallery
      : PAKISTAN_DATA.gallery.filter(g => g.category === activeGalleryCategory);

    container.innerHTML = state.currentFilteredGallery.map((item, index) => `
      <div class="gallery-item" data-index="${index}">
        <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy">
        <div class="gallery-overlay">
          <span class="gallery-loc">📍 ${item.location}</span>
          <h4 class="gallery-title">${item.title}</h4>
        </div>
      </div>
    `).join("");

    container.querySelectorAll(".gallery-item").forEach(item => {
      item.addEventListener("click", () => {
        const index = parseInt(item.getAttribute("data-index"), 10);
        openLightbox(index);
      });
    });
  }

  function openLightbox(index) {
    state.lightboxIndex = index;
    const item = state.currentFilteredGallery[index];
    if (!item || !lightboxModal) return;

    lightboxImg.src = item.image;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = `${item.location} — ${item.description}`;
    lightboxModal.classList.add("show");
  }

  function stepLightbox(direction) {
    let next = state.lightboxIndex + direction;
    if (next < 0) next = state.currentFilteredGallery.length - 1;
    if (next >= state.currentFilteredGallery.length) next = 0;
    openLightbox(next);
  }

  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", () => stepLightbox(-1));
  if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", () => stepLightbox(1));
  if (closeLightboxBtn) closeLightboxBtn.addEventListener("click", () => lightboxModal.classList.remove("show"));

  document.addEventListener("keydown", (e) => {
    if (lightboxModal && lightboxModal.classList.contains("show")) {
      if (e.key === "Escape") lightboxModal.classList.remove("show");
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    }
  });

  const galleryFilterTabs = document.querySelectorAll(".gallery-filter-btn");
  galleryFilterTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      galleryFilterTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeGalleryCategory = btn.getAttribute("data-gallery-filter");
      renderGallery();
    });
  });

  // =========================================================================
  // 10. REVIEWS & TESTIMONIALS
  // =========================================================================
  function renderReviews() {
    const container = document.getElementById("reviewsGridContainer");
    if (!container) return;

    container.innerHTML = PAKISTAN_DATA.testimonials.map(review => `
      <article class="review-card">
        <div>
          <div class="review-header">
            <img src="${review.avatar}" alt="${review.name}" class="review-avatar" loading="lazy">
            <div class="review-user-info">
              <h4>${review.name} <span>${review.flag}</span></h4>
              <span class="review-user-role">${review.role} • ${review.country}</span>
            </div>
          </div>
          <div class="review-rating-stars">${"★".repeat(review.rating)}</div>
          <p class="review-quote">"${review.quote}"</p>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1rem;">
          <span class="review-badge">✓ Verified Traveler</span>
          <span style="font-size:0.75rem; color:var(--text-light);">${review.visited}</span>
        </div>
      </article>
    `).join("");
  }

  if (openReviewModalBtn) {
    openReviewModalBtn.addEventListener("click", () => {
      reviewModalBackdrop.classList.add("show");
    });
  }

  if (closeReviewModalBtn) {
    closeReviewModalBtn.addEventListener("click", () => {
      reviewModalBackdrop.classList.remove("show");
    });
  }

  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("reviewAuthorName").value;
      const country = document.getElementById("reviewAuthorCountry").value;
      const quote = document.getElementById("reviewAuthorQuote").value;
      const visited = document.getElementById("reviewAuthorVisited").value;

      PAKISTAN_DATA.testimonials.unshift({
        id: Date.now(),
        name,
        country,
        flag: "🌍",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
        role: "Passionate Tourist",
        rating: 5,
        date: "Just now",
        quote,
        visited: visited || "Pakistan"
      });

      renderReviews();
      reviewModalBackdrop.classList.remove("show");
      reviewForm.reset();
      showToast("Thank you! Your review has been published.", "success");
    });
  }

  // =========================================================================
  // 11. FAQ ACCORDION
  // =========================================================================
  function renderFaqs() {
    const container = document.getElementById("faqAccordionContainer");
    if (!container) return;

    container.innerHTML = PAKISTAN_DATA.faqs.map((faq, index) => `
      <div class="faq-item ${index === 0 ? 'active' : ''}">
        <button class="faq-question" type="button">
          <span>${faq.q}</span>
          <span class="faq-arrow">▼</span>
        </button>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join("");

    container.querySelectorAll(".faq-question").forEach(qBtn => {
      qBtn.addEventListener("click", () => {
        const item = qBtn.closest(".faq-item");
        const isOpen = item.classList.contains("active");

        // Close all others
        container.querySelectorAll(".faq-item").forEach(other => other.classList.remove("active"));
        if (!isOpen) {
          item.classList.add("active");
        }
      });
    });
  }

  // =========================================================================
  // 12. DESTINATION SEARCH AUTOCOMPLETE & LIVE DROPDOWN
  // =========================================================================
  function executeSearch(query) {
    if (!query || query.trim().length === 0) {
      if (searchDropdown) searchDropdown.classList.remove("show");
      return;
    }

    const q = query.toLowerCase().trim();
    const results = [];

    // Search Cities
    PAKISTAN_DATA.cities.forEach(city => {
      if (city.name.toLowerCase().includes(q) || city.province.toLowerCase().includes(q)) {
        results.push({
          type: "City",
          name: city.name,
          subtitle: `${city.province} • The City of Lights / Cultural Center`,
          image: city.thumbnailImage,
          action: () => openCityModal(city.id)
        });
      }

      // Search city attractions
      city.attractions.forEach(attr => {
        if (attr.name.toLowerCase().includes(q) || attr.category.toLowerCase().includes(q)) {
          results.push({
            type: "Attraction",
            name: attr.name,
            subtitle: `${city.name} • ${attr.category}`,
            image: attr.image,
            action: () => openCityModal(city.id)
          });
        }
      });
    });

    // Search Destinations
    PAKISTAN_DATA.destinations.forEach(dest => {
      if (dest.name.toLowerCase().includes(q) || dest.region.toLowerCase().includes(q) || dest.highlights.some(h => h.toLowerCase().includes(q))) {
        results.push({
          type: "Destination",
          name: dest.name,
          subtitle: `${dest.region} • ${dest.tagline}`,
          image: dest.image,
          action: () => {
            const destSection = document.getElementById("destinations");
            if (destSection) destSection.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    });

    if (results.length > 0 && searchDropdown) {
      searchDropdown.innerHTML = results.slice(0, 6).map((r, i) => `
        <div class="search-result-item" data-res-index="${i}">
          <img src="${r.image}" alt="${r.name}" class="search-result-thumb">
          <div class="search-result-info">
            <span style="font-size:0.7rem; color:var(--pk-green-700); font-weight:700; text-transform:uppercase;">${r.type}</span>
            <h4>${r.name}</h4>
            <p>${r.subtitle}</p>
          </div>
        </div>
      `).join("");

      searchDropdown.classList.add("show");

      searchDropdown.querySelectorAll(".search-result-item").forEach((el, index) => {
        el.addEventListener("click", () => {
          results[index].action();
          searchDropdown.classList.remove("show");
          if (heroSearchInput) heroSearchInput.value = "";
        });
      });
    } else if (searchDropdown) {
      searchDropdown.innerHTML = `
        <div style="padding:1.25rem; text-align:center; color:var(--text-muted); font-size:0.875rem;">
          No destinations found matching "<strong>${query}</strong>". Try searching "Lahore", "Hunza", or "Beach".
        </div>
      `;
      searchDropdown.classList.add("show");
    }
  }

  if (heroSearchInput) {
    heroSearchInput.addEventListener("input", (e) => {
      executeSearch(e.target.value);
    });

    document.addEventListener("click", (e) => {
      if (!heroSearchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.remove("show");
      }
    });
  }

  if (heroSearchBtn) {
    heroSearchBtn.addEventListener("click", () => {
      const q = heroSearchInput ? heroSearchInput.value : "";
      const region = heroRegionSelect ? heroRegionSelect.value : "all";
      const category = heroCategorySelect ? heroCategorySelect.value : "all";

      if (q && q.trim().length > 0) {
        executeSearch(q);
      } else if (region !== "all") {
        const regionMapping = {
          punjab: "Punjab",
          sindh: "Sindh",
          islamabad: "Islamabad Capital Territory",
          kpk: "Khyber Pakhtunkhwa",
          gilgit: "Gilgit-Baltistan",
          balochistan: "Balochistan"
        };
        const targetRegion = regionMapping[region];
        if (targetRegion) {
          activeCityFilter = targetRegion;
          document.querySelectorAll(".city-tab-btn").forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-city-filter") === targetRegion);
          });
          renderCityCards();
          document.getElementById("cities")?.scrollIntoView({ behavior: "smooth" });
          showToast(`Filtered cities for ${targetRegion}`, "info");
        }
      } else if (category !== "all") {
        if (category === "cities") {
          document.getElementById("cities")?.scrollIntoView({ behavior: "smooth" });
        } else {
          activeDestFilter = category;
          document.querySelectorAll(".filter-tab-btn[data-filter]").forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-filter") === category);
          });
          renderDestinations();
          document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
          showToast(`Filtered destinations for ${category}`, "info");
        }
      } else {
        document.getElementById("cities")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // =========================================================================
  // 13. CONTACT FORM & NEWSLETTER
  // =========================================================================
  const mainContactForm = document.getElementById("mainContactForm");
  if (mainContactForm) {
    mainContactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName").value;
      showToast(`Thank you, ${name}! Your inquiry has been sent to our travel experts.`, "success");
      mainContactForm.reset();
    });
  }

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you for subscribing to Explore Pakistan updates!", "success");
      newsletterForm.reset();
    });
  }

  // =========================================================================
  // 14. STICKY NAVBAR & MOBILE MENU
  // =========================================================================
  const siteHeader = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      siteHeader?.classList.add("scrolled");
    } else {
      siteHeader?.classList.remove("scrolled");
    }
  });

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileNavDrawer.classList.add("open");
    });
  }

  if (closeMobileNavBtn) {
    closeMobileNavBtn.addEventListener("click", () => {
      mobileNavDrawer.classList.remove("open");
    });
  }

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileNavDrawer.classList.remove("open");
    });
  });

  // Close modals when clicking backdrop
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("show");
      }
    });
  });

  // =========================================================================
  // 15. INITIALIZE ALL COMPONENTS
  // =========================================================================
  renderCityCards();
  renderDestinations();
  renderHotels();
  renderGallery();
  renderReviews();
  renderFaqs();
  updateBudgetCalculator();
  updateWishlistUI();
  updateCurrencyUI();
});
