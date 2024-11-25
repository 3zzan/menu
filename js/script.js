// Menu Data with translations
const menuData = {
    appetizers: [
        {
            name: {
                en: "Crispy Spring Rolls",
                ar: "سبرينج رول مقرمش"
            },
            description: {
                en: "Vegetable filled crispy rolls served with sweet chili sauce",
                ar: "لفائف مقرمشة محشوة بالخضار تقدم مع صلصة الفلفل الحلو"
            },
            price: "$8.99",
            image: "images/spring-rolls.jpg"
        },
        {
            name: {
                en: "Mediterranean Hummus",
                ar: "حمص على الطريقة المتوسطية"
            },
            description: {
                en: "Creamy hummus served with warm pita bread",
                ar: "حمص كريمي يقدم مع خبز البيتا الساخن"
            },
            price: "$7.99",
            image: "images/hummus.jpg"
        },
        {
            name: {
                en: "Calamari Fritti",
                ar: "كاليماري مقلي"
            },
            description: {
                en: "Lightly battered squid rings with marinara sauce",
                ar: "حلقات الحبار المقلية تقدم مع صلصة المارينارا"
            },
            price: "$10.99",
            image: "images/calamari.jpg"
        }
    ],
    main: [
        {
            name: {
                en: "Grilled Salmon",
                ar: "سلمون مشوي"
            },
            description: {
                en: "Fresh Atlantic salmon with lemon butter sauce",
                ar: "سلمون طازج مع صلصة الليمون والزبدة"
            },
            price: "$24.99",
            image: "images/salmon.jpg"
        },
        {
            name: {
                en: "Beef Tenderloin",
                ar: "تندرلوين لحم البقر"
            },
            description: {
                en: "8oz beef tenderloin with red wine reduction",
                ar: "٨ أونصات من لحم البقر مع صلصة النبيذ الأحمر"
            },
            price: "$29.99",
            image: "images/beef.jpg"
        },
        {
            name: {
                en: "Vegetable Risotto",
                ar: "ريزوتو بالخضار"
            },
            description: {
                en: "Creamy arborio rice with seasonal vegetables",
                ar: "أرز أربوريو كريمي مع الخضار الموسمية"
            },
            price: "$18.99",
            image: "images/risotto.jpg"
        }
    ],
    desserts: [
        {
            name: {
                en: "Tiramisu",
                ar: "تيراميسو"
            },
            description: {
                en: "Classic Italian coffee-flavored dessert",
                ar: "حلوى إيطالية كلاسيكية بنكهة القهوة"
            },
            price: "$8.99",
            image: "images/tiramisu.jpg"
        },
        {
            name: {
                en: "Chocolate Fondant",
                ar: "فوندان الشوكولاتة"
            },
            description: {
                en: "Warm chocolate cake with vanilla ice cream",
                ar: "كيك الشوكولاتة الساخن مع آيس كريم الفانيليا"
            },
            price: "$9.99",
            image: "images/fondant.jpg"
        }
    ],
    drinks: [
        {
            name: {
                en: "Signature Cocktail",
                ar: "كوكتيل خاص"
            },
            description: {
                en: "House special blend of premium spirits",
                ar: "مزيج خاص من المشروبات الممتازة"
            },
            price: "$12.99",
            image: "images/cocktail.jpg"
        },
        {
            name: {
                en: "Fresh Juice",
                ar: "عصير طازج"
            },
            description: {
                en: "Selection of freshly squeezed juices",
                ar: "تشكيلة من العصائر الطازجة"
            },
            price: "$5.99",
            image: "images/juice.jpg"
        }
    ]
};

// Gallery Data with translations
const galleryImages = [
    { src: 'images/gallery1.jpg', alt: { en: 'Restaurant Interior', ar: 'المطعم من الداخل' } },
    { src: 'images/gallery2.jpg', alt: { en: 'Signature Dish', ar: 'الطبق المميز' } },
    { src: 'images/gallery3.jpg', alt: { en: 'Outdoor Seating', ar: 'الجلسة الخارجية' } },
    { src: 'images/gallery4.jpg', alt: { en: 'Chef Special', ar: 'طبق الشيف الخاص' } },
    { src: 'images/gallery5.jpg', alt: { en: 'Dessert Platter', ar: 'طبق الحلويات' } }
];

// Language Switching
let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all elements with language-specific content
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = lang === 'ar' ? el.dataset.ar : el.dataset.en;
    });

    // Update logo text
    document.querySelectorAll('.logo .en, .logo .ar').forEach(el => {
        el.style.display = el.classList.contains(lang) ? 'block' : 'none';
    });

    // Update form placeholders
    document.querySelectorAll('input[data-placeholder-ar], textarea[data-placeholder-ar]').forEach(el => {
        el.placeholder = lang === 'ar' ? el.dataset.placeholderAr : el.getAttribute('placeholder');
    });

    // Update select options
    document.querySelectorAll('option[data-en]').forEach(option => {
        option.textContent = lang === 'ar' ? option.dataset.ar : option.dataset.en;
    });

    // Update all spans with language classes
    document.querySelectorAll('.en, .ar').forEach(el => {
        el.style.display = el.classList.contains(lang) ? 'inline-block' : 'none';
    });

    // Refresh menu display
    const activeCategory = document.querySelector('.category-btn.active')?.dataset.category;
    if (activeCategory) {
        displayMenuItems(activeCategory);
    }

    // Load gallery with new language
    loadGallery();
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchLanguage(button.dataset.lang);
        });
    });

    // Set initial language
    switchLanguage('en');
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Initialize menu and gallery
    displayMenuItems('appetizers');
    loadGallery();
});

// Menu Category Switching
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Display menu items for selected category
        displayMenuItems(button.dataset.category);
    });
});

// Display Menu Items
function displayMenuItems(category) {
    const menuContainer = document.querySelector('.menu-items');
    const items = menuData[category];
    
    menuContainer.innerHTML = items.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name[currentLang]}">
            <div class="menu-item-content">
                <h3>${item.name[currentLang]}</h3>
                <p>${item.description[currentLang]}</p>
                <span class="price">${item.price}</span>
            </div>
        </div>
    `).join('');
}

// Load Gallery
function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryGrid.innerHTML = galleryImages.map(image => `
        <div class="gallery-item">
            <img src="${image.src}" alt="${image.alt[currentLang]}">
        </div>
    `).join('');
}

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // Close mobile menu after clicking a link
        document.querySelector('.nav-links').classList.remove('active');
    });
});
