// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initJobCardAnimations();
    initMobileMenu();
    initScrollAnimations();
    initButtonInteractions();
    initViewAllJobsButton();
    initNewsletterForm();
    renderJobCards();
    
    // Initialize carousel if on company page
    if (document.querySelector('.image-carousel')) {
        initCarousel();
    }
});

// Carousel functionality
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentSlide = 0;
    
    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Indicator click events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-play carousel
    setInterval(nextSlide, 5000);
    
    // Initialize first slide
    showSlide(0);
}

// Newsletter form functionality
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('.newsletter-input');
            const submitBtn = this.querySelector('.newsletter-btn');
            
            if (emailInput.value) {
                // Show loading state
                submitBtn.textContent = 'Subscribing...';
                submitBtn.disabled = true;
                
                // Simulate subscription process
                setTimeout(() => {
                    submitBtn.textContent = 'Subscribed!';
                    submitBtn.style.background = 'rgba(34, 197, 94, 0.8)';
                    emailInput.value = '';
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        submitBtn.textContent = 'Subscribe';
                        submitBtn.disabled = false;
                        submitBtn.style.background = 'rgba(255, 255, 255, 0.2)';
                    }, 2000);
                }, 1000);
            }
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Job card click events
function initJobCardAnimations() {
    const jobCards = document.querySelectorAll('.job-card');
    
    jobCards.forEach(card => {
        // Add click event for job cards
        card.addEventListener('click', function() {
            const jobTitle = this.querySelector('h3').textContent;
            const companyName = this.querySelector('.company-name').textContent;
            
            // Simple alert for demo purposes
            // In a real application, this would navigate to a job details page
            console.log(`Clicked on ${jobTitle} at ${companyName}`);
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    const navActions = document.querySelector('.nav-actions');
    
    // Create hamburger menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.display = 'none';
    
    // Insert mobile menu button before nav-actions
    navbar.insertBefore(mobileMenuBtn, navActions);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('mobile-menu-open');
        // Change hamburger icon
        if (navMenu.classList.contains('mobile-menu-open')) {
            mobileMenuBtn.innerHTML = '✕';
        } else {
            mobileMenuBtn.innerHTML = '☰';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            navMenu.classList.remove('mobile-menu-open');
            mobileMenuBtn.innerHTML = '☰';
        }
    });
    
    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('mobile-menu-open');
            mobileMenuBtn.style.display = 'none';
            mobileMenuBtn.innerHTML = '☰';
        } else {
            mobileMenuBtn.style.display = 'block';
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.job-card, .career-card, .insight-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Button interactions
function initButtonInteractions() {
    // Post a Job button
    const postJobBtn = document.querySelector('.btn-post');
    if (postJobBtn) {
        postJobBtn.addEventListener('click', function() {
            alert('Post a Job functionality would be implemented here!');
        });
    }
    
    // Login/Register button
    const loginBtn = document.querySelector('.btn-login');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert('Login/Register functionality would be implemented here!');
        });
    }
    
    // Discord button
    const discordBtn = document.querySelector('.btn-discord');
    if (discordBtn) {
        discordBtn.addEventListener('click', function() {
            // In a real application, this would open Discord invite link
            window.open('https://discord.gg/tokyodev', '_blank');
        });
    }
    
    // Career card interactions
    const careerCards = document.querySelectorAll('.career-card');
    careerCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            console.log(`Clicked on career guide: ${title}`);
            // In a real application, this would navigate to the guide page
        });
        
        // Add hover effect
        card.style.cursor = 'pointer';
    });
}

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Header scroll effect
window.addEventListener('scroll', debounce(function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
}, 10));



// Simple analytics tracking (for demo purposes)
function trackEvent(eventName, eventData) {
    console.log(`Analytics Event: ${eventName}`, eventData);
    // In a real application, this would send data to analytics service
}

// Track page view
trackEvent('page_view', {
    page: 'home',
    timestamp: new Date().toISOString()
});

// Track job card clicks
document.addEventListener('click', function(e) {
    if (e.target.closest('.job-card')) {
        const jobCard = e.target.closest('.job-card');
        const jobTitle = jobCard.querySelector('h3').textContent;
        const companyName = jobCard.querySelector('.company-name').textContent;
        
        trackEvent('job_card_click', {
            job_title: jobTitle,
            company: companyName,
            timestamp: new Date().toISOString()
        });
    }
});

// Form validation helper (for future use)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Local storage helper functions
const storage = {
    set: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
    },
    
    get: function(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.warn('LocalStorage not available:', e);
            return null;
        }
    },
    
    remove: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
    }
};

// Save user preferences
function saveUserPreferences() {
    const preferences = {
        lastVisit: new Date().toISOString(),
        viewedJobs: [], // Array of job IDs user has viewed
        favoriteCategories: [] // Array of categories user is interested in
    };
    
    storage.set('userPreferences', preferences);
}


// Load user preferences
function loadUserPreferences() {
    return storage.get('userPreferences') || {
        lastVisit: null,
        viewedJobs: [],
        favoriteCategories: []
    };
}

// Initialize user preferences
const userPrefs = loadUserPreferences();
console.log('User preferences loaded:', userPrefs);

// Save preferences on page unload
window.addEventListener('beforeunload', saveUserPreferences);

// Export functions for potential use in other scripts
// Function to render job cards from jobs data
function renderJobCards() {
    console.log('renderJobCards function called');
    
    // Check if jobsData is available
    if (typeof jobsData === 'undefined') {
        console.error('jobsData is not available. Make sure jobs-data.js is loaded.');
        return;
    }
    
    console.log('jobsData found:', jobsData.length, 'companies');

    const jobListingsSection = document.querySelector('.job-listings');
    if (!jobListingsSection) {
        console.error('Job listings section not found');
        return;
    }
    
    console.log('Job listings section found');
    
    // Find the job-stats-header and insert after it
    const jobStatsHeader = jobListingsSection.querySelector('.job-stats-header');
    if (!jobStatsHeader) {
        console.error('Job stats header not found');
        return;
    }
    
    console.log('Job stats header found, rendering jobs...');

    // Create job cards HTML
    const jobCardsHTML = jobsData.map(company => {
        const positionsHTML = company.positions.map(position => {
            const tagsHTML = position.tags.map(tag => 
                `<span class="tag ${tag.color}">${tag.text}</span>`
            ).join('');
            
            const skillsHTML = position.skills.map(skill => 
                `<span class="skill">${skill}</span>`
            ).join('');
            
            return `
                <div class="job-position">
                    <div class="job-details">
                        <h3>${position.title}</h3>
                        <div class="job-salary">${position.salary}</div>
                        <div class="job-tags">${tagsHTML}</div>
                        <div class="job-skills">${skillsHTML}</div>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="job-card">
                <div class="company-header">
                    <div class="company-logo ${company.logoColor.replace('#', '').match(/^0/) ? 'color-' + company.logoColor.replace('#', '') : company.logoColor.replace('#', '')}">${company.logo}</div>
                    <div class="company-info">
                        <h2 class="company-name">${company.company}</h2>
                        <p class="company-description">${company.description}</p>
                    </div>
                </div>
                <div class="company-positions">
                    ${positionsHTML}
                </div>
                <div class="view-all-jobs">
                    <a href="#" class="view-all-link">View All Jobs (${company.moreJobs})</a>
                </div>
            </div>
        `;
    }).join('');

    console.log('Generated HTML:', jobCardsHTML.substring(0, 200) + '...');

    // Create a container div and insert it after the job-stats-header
    const container = document.createElement('div');
    container.className = 'job-cards-container';
    container.innerHTML = jobCardsHTML;
    jobStatsHeader.parentNode.insertBefore(container, jobStatsHeader.nextSibling);
    
    console.log('Job cards rendered successfully!');
}

window.TokyoDevApp = {
    trackEvent,
    validateEmail,
    storage,
    userPreferences: userPrefs
};


function initViewAllJobsButton() {
    // Minimal implementation to prevent error
    const btn = document.getElementById('viewAllJobsBtn');
    if (btn) {
        btn.addEventListener('click', function() {
            alert('View All Jobs functionality coming soon!');
        });
    }
}