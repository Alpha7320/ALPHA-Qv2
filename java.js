document.addEventListener('DOMContentLoaded', function() {
    // App State
    const appState = {
        currentLanguage: 'en',
        currentTheme: 'light',
        quotes: [],
        favorites: JSON.parse(localStorage.getItem('favorites')) || [],
        userQuotes: JSON.parse(localStorage.getItem('userQuotes')) || [],
        dailyQuote: null,
        categories: [
            { id: 'motivation', name: { en: 'Motivation', ar: 'تحفيز' }, icon: 'fa-fire' },
            { id: 'wisdom', name: { en: 'Wisdom', ar: 'حكمة' }, icon: 'fa-brain' },
            { id: 'life', name: { en: 'Life', ar: 'الحياة' }, icon: 'fa-heartbeat' },
            { id: 'love', name: { en: 'Love', ar: 'حب' }, icon: 'fa-heart' },
            { id: 'success', name: { en: 'Success', ar: 'نجاح' }, icon: 'fa-trophy' },
            { id: 'friendship', name: { en: 'Friendship', ar: 'صداقة' }, icon: 'fa-user-friends' }
        ],
        currentFilter: 'all',
        quotesLoaded: 0,
        quotesPerLoad: 6
    };

    // DOM Elements
    const elements = {
        languageToggle: document.getElementById('language-toggle'),
        themeToggle: document.getElementById('theme-toggle'),
        dailyQuoteText: document.getElementById('daily-quote-text'),
        dailyQuoteAuthor: document.getElementById('daily-quote-author'),
        dailyFavorite: document.getElementById('daily-favorite'),
        dailyShare: document.getElementById('daily-share'),
        dailyCopy: document.getElementById('daily-copy'),
        categoriesContainer: document.getElementById('categories-container'),
        quotesContainer: document.getElementById('quotes-container'),
        loadMoreBtn: document.getElementById('load-more'),
        creatorText: document.getElementById('creator-text'),
        creatorAuthor: document.getElementById('creator-author'),
        creatorCategory: document.getElementById('creator-category'),
        creatorBgColor: document.getElementById('creator-bg-color'),
        createQuoteBtn: document.getElementById('create-quote'),
        previewCard: document.getElementById('preview-card'),
        favoritesContainer: document.getElementById('favorites-container'),
        clearFavoritesBtn: document.getElementById('clear-favorites'),
        searchModal: document.getElementById('search-modal'),
        searchInput: document.getElementById('search-input'),
        searchBtn: document.getElementById('search-btn'),
        searchCategory: document.getElementById('search-category'),
        searchLanguage: document.getElementById('search-language'),
        searchResults: document.getElementById('search-results'),
        closeSearchBtn: document.getElementById('close-search'),
        notification: document.getElementById('notification'),
        notificationText: document.getElementById('notification-text'),
        currentDate: document.getElementById('current-date'),
        navBtns: document.querySelectorAll('.nav-btn'),
        filterTabs: document.querySelectorAll('.filter-tab')
    };

    // Initialize App
    function initApp() {
        // Load quotes
        loadQuotes();
        
        // Set daily quote
        setDailyQuote();
        
        // Render categories
        renderCategories();
        
        // Render initial quotes
        renderQuotes();
        
        // Render favorites
        renderFavorites();
        
        // Set current date
        setCurrentDate();
        
        // Set up event listeners
        setupEventListeners();
        
        // Check for saved theme
        if (localStorage.getItem('theme') === 'dark') {
            toggleTheme();
        }
        
        // Check for saved language
        if (localStorage.getItem('language') === 'ar') {
            toggleLanguage();
        }
    }

    // Load quotes from local storage or use default quotes
    function loadQuotes() {
        const savedQuotes = localStorage.getItem('quotes');
        if (savedQuotes) {
            appState.quotes = JSON.parse(savedQuotes);
        } else {
            // Default quotes
            appState.quotes = [
                {
                    id: 1,
                    text: { en: "The only way to do great work is to love what you do.", ar: "الطريقة الوحيدة لعمل رائع هي أن تحب ما تفعله." },
                    author: { en: "Steve Jobs", ar: "ستيف جوبز" },
                    category: "motivation",
                    language: "both",
                    date: new Date().toISOString()
                },
                {
                    id: 2,
                    text: { en: "In the middle of difficulty lies opportunity.", ar: "في منتصف الصعوبة تكمن الفرصة." },
                    author: { en: "Albert Einstein", ar: "ألبرت أينشتاين" },
                    category: "wisdom",
                    language: "both",
                    date: new Date().toISOString()
                },
                {
                    id: 3,
                    text: { en: "Life is what happens when you're busy making other plans.", ar: "الحياة هي ما يحدث عندما تكون مشغولاً بوضع خطط أخرى." },
                    author: { en: "John Lennon", ar: "جون لينون" },
                    category: "life",
                    language: "both",
                    date: new Date().toISOString()
                },
                {
                    id: 4,
                    text: { en: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", ar: "أفضل وأجمل الأشياء في العالم لا يمكن رؤيتها أو حتى لمسها - يجب أن تُشعر بالقلب." },
                    author: { en: "Helen Keller", ar: "هيلين كيلر" },
                    category: "love",
                    language: "both",
                    date: new Date().toISOString()
                },
                {
                    id: 5,
                    text: { en: "Success is not final, failure is not fatal: It is the courage to continue that counts.", ar: "النجاح ليس نهائياً، والفشل ليس قاتلاً: الأمر يكمن في الشجاعة للمتابعة." },
                    author: { en: "Winston Churchill", ar: "ونستون تشرشل" },
                    category: "success",
                    language: "both",
                    date: new Date().toISOString()
                },
                {
                    id: 6,
                    text: { en: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'", ar: "الصداقة تولد في تلك اللحظة التي يقول فيها شخص لآخر: 'ماذا! أنت أيضاً؟ ظننت أنني الوحيد'." },
                    author: { en: "C.S. Lewis", ar: "سي. إس. لويس" },
                    category: "friendship",
                    language: "both",
                    date: new Date().toISOString()
                },
                {
                    id: 7,
                    text: { en: "The future belongs to those who believe in the beauty of their dreams.", ar: "المستقبل belongs لأولئك الذين يؤمنون بجمال أحلامهم." },
                    author: { en: "Eleanor Roosevelt", ar: "إليانور روزفلت" },
                    category: "motivation",
                    language: "both",
                    date: new Date().toISOString()
                },
                {
                    id: 8,
                    text: { en: "It is during our darkest moments that we must focus to see the light.", ar: "خلال أظلم لحظاتنا يجب أن نركز لرؤية النور." },
                    author: { en: "Aristotle", ar: "أرسطو" },
                    category: "wisdom",
                    language: "both",
                    date: new Date().toISOString()
                },
                {
                    id: 9,
                    text: { en: "Life is really simple, but we insist on making it complicated.", ar: "الحياة بسيطة حقاً، لكننا نصر على تعقيدها." },
                    author: { en: "Confucius", ar: "كونفوشيوس" },
                    category: "life",
                    language: "both",
                    date: new Date().toISOString()
                },
                {
                    id: 10,
                    text: { en: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", ar: "أن تحب بعمق من قبل شخص ما يمنحك القوة، بينما حب شخص ما بعمق يمنحك الشجاعة." },
                    author: { en: "Lao Tzu", ar: "لاو تزو" },
                    category: "love",
                    language: "both",
                    date: new Date().toISOString()
                },
                {
                    id: 11,
                    text: { en: "Don't watch the clock; do what it does. Keep going.", ar: "لا تراقب الساعة؛ افعل ما تفعله. استمر في المشي." },
                    author: { en: "Sam Levenson", ar: "سام ليفنسون" },
                    category: "success",
                    language: "both",
                    date: new Date().toISOString()
                },
                {
                    id: 12,
                    text: { en: "A real friend is one who walks in when the rest of the world walks out.", ar: "الصديق الحقيقي هو من يدخل عندما يخرج بقية العالم." },
                    author: { en: "Walter Winchell", ar: "والتر وينشل" },
                    category: "friendship",
                    language: "both",
                    date: new Date().toISOString()
                }
            ];
            
            // Add user quotes to the main quotes array
            appState.quotes = [...appState.quotes, ...appState.userQuotes];
            
            // Save to localStorage
            localStorage.setItem('quotes', JSON.stringify(appState.quotes));
        }
    }

    // Set daily quote
    function setDailyQuote() {
        const today = new Date().toDateString();
        const savedDailyQuote = localStorage.getItem('dailyQuote');
        
        if (savedDailyQuote) {
            const { date, quoteId } = JSON.parse(savedDailyQuote);
            if (date === today) {
                appState.dailyQuote = appState.quotes.find(q => q.id === quoteId);
            }
        }
        
        if (!appState.dailyQuote) {
            // Get a random quote for today
            const randomIndex = Math.floor(Math.random() * appState.quotes.length);
            appState.dailyQuote = appState.quotes[randomIndex];
            
            // Save to localStorage
            localStorage.setItem('dailyQuote', JSON.stringify({
                date: today,
                quoteId: appState.dailyQuote.id
            }));
        }
        
        // Render daily quote
        renderDailyQuote();
    }

    // Render daily quote
    function renderDailyQuote() {
        if (appState.dailyQuote) {
            elements.dailyQuoteText.textContent = appState.dailyQuote.text[appState.currentLanguage];
            elements.dailyQuoteAuthor.textContent = `- ${appState.dailyQuote.author[appState.currentLanguage]}`;
            
            // Check if quote is in favorites
            const isFavorite = appState.favorites.some(fav => fav.id === appState.dailyQuote.id);
            if (isFavorite) {
                elements.dailyFavorite.innerHTML = '<i class="fas fa-heart"></i>';
                elements.dailyFavorite.classList.add('active');
            } else {
                elements.dailyFavorite.innerHTML = '<i class="far fa-heart"></i>';
                elements.dailyFavorite.classList.remove('active');
            }
        }
    }

    // Render categories
    function renderCategories() {
        elements.categoriesContainer.innerHTML = '';
        
        appState.categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            categoryCard.dataset.category = category.id;
            
            categoryCard.innerHTML = `
                <div class="category-icon">
                    <i class="fas ${category.icon}"></i>
                </div>
                <div class="category-name">${category.name[appState.currentLanguage]}</div>
            `;
            
            categoryCard.addEventListener('click', () => {
                filterQuotesByCategory(category.id);
            });
            
            elements.categoriesContainer.appendChild(categoryCard);
        });
    }

    // Render quotes
    function renderQuotes() {
        const quotesToRender = getFilteredQuotes();
        const endIndex = Math.min(appState.quotesLoaded + appState.quotesPerLoad, quotesToRender.length);
        
        for (let i = appState.quotesLoaded; i < endIndex; i++) {
            const quote = quotesToRender[i];
            const quoteCard = createQuoteCard(quote);
            elements.quotesContainer.appendChild(quoteCard);
        }
        
        appState.quotesLoaded = endIndex;
        
        // Hide load more button if all quotes are loaded
        if (endIndex >= quotesToRender.length) {
            elements.loadMoreBtn.style.display = 'none';
        } else {
            elements.loadMoreBtn.style.display = 'block';
        }
    }

    // Create quote card element
    function createQuoteCard(quote) {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        quoteCard.dataset.quoteId = quote.id;
        
        const isFavorite = appState.favorites.some(fav => fav.id === quote.id);
        
        quoteCard.innerHTML = `
            <div class="quote-content">
                <p class="quote-text">${quote.text[appState.currentLanguage]}</p>
                <p class="quote-author">- ${quote.author[appState.currentLanguage]}</p>
            </div>
            <div class="quote-meta">
                <div class="quote-category">${getCategoryName(quote.category)}</div>
                <div class="quote-actions">
                    <button class="action-btn favorite-btn ${isFavorite ? 'active' : ''}" aria-label="Add to favorites">
                        <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                    <button class="action-btn share-btn" aria-label="Share quote">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <button class="action-btn copy-btn" aria-label="Copy quote">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners
        const favoriteBtn = quoteCard.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', () => toggleFavorite(quote));
        
        const shareBtn = quoteCard.querySelector('.share-btn');
        shareBtn.addEventListener('click', () => shareQuote(quote));
        
        const copyBtn = quoteCard.querySelector('.copy-btn');
        copyBtn.addEventListener('click', () => copyQuote(quote));
        
        return quoteCard;
    }

    // Get filtered quotes based on current filter
    function getFilteredQuotes() {
        let filteredQuotes = [...appState.quotes];
        
        if (appState.currentFilter === 'popular') {
            // Sort by favorites count (simulated)
            filteredQuotes.sort((a, b) => {
                const aFavorites = appState.favorites.filter(fav => fav.id === a.id).length;
                const bFavorites = appState.favorites.filter(fav => fav.id === b.id).length;
                return bFavorites - aFavorites;
            });
        } else if (appState.currentFilter === 'recent') {
            // Sort by date (newest first)
            filteredQuotes.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        
        return filteredQuotes;
    }

    // Filter quotes by category
    function filterQuotesByCategory(categoryId) {
        appState.currentFilter = 'category';
        appState.currentCategory = categoryId;
        appState.quotesLoaded = 0;
        elements.quotesContainer.innerHTML = '';
        
        // Update active tab
        elements.filterTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.filter === 'all') {
                tab.classList.remove('active');
            }
        });
        
        renderQuotes();
        
        // Scroll to quotes section
        document.querySelector('.featured-section').scrollIntoView({ behavior: 'smooth' });
    }

    // Get category name by ID
    function getCategoryName(categoryId) {
        const category = appState.categories.find(cat => cat.id === categoryId);
        return category ? category.name[appState.currentLanguage] : '';
    }

    // Render favorites
    function renderFavorites() {
        if (appState.favorites.length === 0) {
            elements.favoritesContainer.innerHTML = `
                <p class="empty-favorites" data-en="No favorites yet. Start adding quotes you love!" data-ar="لا توجد مفضلات بعد. ابدأ بإضافة الاقتباسات التي تحبها!">
                    ${appState.currentLanguage === 'en' ? 'No favorites yet. Start adding quotes you love!' : 'لا توجد مفضلات بعد. ابدأ بإضافة الاقتباسات التي تحبها!'}
                </p>
            `;
        } else {
            elements.favoritesContainer.innerHTML = '';
            appState.favorites.forEach(favorite => {
                const quoteCard = createQuoteCard(favorite);
                elements.favoritesContainer.appendChild(quoteCard);
            });
        }
    }

    // Toggle favorite
    function toggleFavorite(quote) {
        const existingIndex = appState.favorites.findIndex(fav => fav.id === quote.id);
        
        if (existingIndex !== -1) {
            // Remove from favorites
            appState.favorites.splice(existingIndex, 1);
            showNotification(appState.currentLanguage === 'en' ? 'Removed from favorites' : 'تمت الإزالة من المفضلات');
        } else {
            // Add to favorites
            appState.favorites.push(quote);
            showNotification(appState.currentLanguage === 'en' ? 'Added to favorites' : 'تمت الإضافة إلى المفضلات');
        }
        
        // Save to localStorage
        localStorage.setItem('favorites', JSON.stringify(appState.favorites));
        
        // Update UI
        renderDailyQuote();
        renderQuotes();
        renderFavorites();
    }

    // Share quote
    function shareQuote(quote) {
        const text = `"${quote.text[appState.currentLanguage]}" - ${quote.author[appState.currentLanguage]}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'ALPHA QUOTES',
                text: text
            }).catch(err => console.log('Error sharing:', err));
        } else {
            // Fallback - copy to clipboard
            copyQuote(quote);
        }
    }

    // Copy quote to clipboard
    function copyQuote(quote) {
        const text = `"${quote.text[appState.currentLanguage]}" - ${quote.author[appState.currentLanguage]}`;
        
        navigator.clipboard.writeText(text)
            .then(() => {
                showNotification(appState.currentLanguage === 'en' ? 'Copied to clipboard!' : 'تم النسخ إلى الحافظة!');
            })
            .catch(err => {
                console.error('Error copying text: ', err);
                showNotification(appState.currentLanguage === 'en' ? 'Failed to copy' : 'فشل النسخ');
            });
    }

    // Create quote
    function createQuote() {
        const text = elements.creatorText.value.trim();
        const author = elements.creatorAuthor.value.trim() || (appState.currentLanguage === 'en' ? 'Anonymous' : 'مجهول');
        const category = elements.creatorCategory.value;
        const bgColor = elements.creatorBgColor.value;
        
        if (!text) {
            showNotification(appState.currentLanguage === 'en' ? 'Please enter a quote' : 'الرجاء إدخال اقتباس');
            return;
        }
        
        const newQuote = {
            id: Date.now(),
            text: {
                en: appState.currentLanguage === 'en' ? text : '',
                ar: appState.currentLanguage === 'ar' ? text : ''
            },
            author: {
                en: appState.currentLanguage === 'en' ? author : '',
                ar: appState.currentLanguage === 'ar' ? author : ''
            },
            category: category,
            language: appState.currentLanguage,
            date: new Date().toISOString(),
            userCreated: true,
            bgColor: bgColor
        };
        
        // Add to quotes
        appState.quotes.unshift(newQuote);
        appState.userQuotes.push(newQuote);
        
        // Save to localStorage
        localStorage.setItem('quotes', JSON.stringify(appState.quotes));
        localStorage.setItem('userQuotes', JSON.stringify(appState.userQuotes));
        
        // Reset form
        elements.creatorText.value = '';
        elements.creatorAuthor.value = '';
        elements.creatorBgColor.value = '#6366f1';
        updatePreview();
        
        // Show notification
        showNotification(appState.currentLanguage === 'en' ? 'Quote created successfully!' : 'تم إنشاء الاقتباس بنجاح!');
        
        // Refresh quotes
        appState.quotesLoaded = 0;
        elements.quotesContainer.innerHTML = '';
        renderQuotes();
    }

    // Update preview
    function updatePreview() {
        const text = elements.creatorText.value.trim() || (appState.currentLanguage === 'en' ? 'Your quote will appear here' : 'سيظهر اقتباسك هنا');
        const author = elements.creatorAuthor.value.trim() || (appState.currentLanguage === 'en' ? 'Author' : 'المؤلف');
        const bgColor = elements.creatorBgColor.value;
        
        elements.previewCard.style.background = `linear-gradient(135deg, ${bgColor}, ${adjustColor(bgColor, -20)})`;
        elements.previewCard.querySelector('.quote-text').textContent = text;
        elements.previewCard.querySelector('.quote-author').textContent = `- ${author}`;
    }

    // Adjust color brightness
    function adjustColor(color, amount) {
        let usePound = false;
        if (color[0] === "#") {
            color = color.slice(1);
            usePound = true;
        }
        
        const num = parseInt(color, 16);
        let r = (num >> 16) + amount;
        if (r > 255) r = 255;
        else if (r < 0) r = 0;
        
        let g = ((num >> 8) & 0x00FF) + amount;
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
        
        let b = (num & 0x0000FF) + amount;
        if (b > 255) b = 255;
        else if (b < 0) b = 0;
        
        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
    }

    // Clear favorites
    function clearFavorites() {
        if (confirm(appState.currentLanguage === 'en' ? 'Are you sure you want to clear all favorites?' : 'هل أنت متأكد من أنك تريد مسح جميع المفضلات؟')) {
            appState.favorites = [];
            localStorage.setItem('favorites', JSON.stringify(appState.favorites));
            renderFavorites();
            renderDailyQuote();
            renderQuotes();
            showNotification(appState.currentLanguage === 'en' ? 'All favorites cleared' : 'تم مسح جميع المفضلات');
        }
    }

    // Search quotes
    function searchQuotes() {
        const query = elements.searchInput.value.trim().toLowerCase();
        const category = elements.searchCategory.value;
        const language = elements.searchLanguage.value;
        
        if (!query && category === 'all' && language === 'all') {
            elements.searchResults.innerHTML = `
                <p class="empty-favorites">${appState.currentLanguage === 'en' ? 'Please enter a search term or select filters' : 'الرجاء إدخال مصطلح بحث أو تحديد عوامل التصفية'}</p>
            `;
            return;
        }
        
        let results = [...appState.quotes];
        
        // Filter by query
        if (query) {
            results = results.filter(quote => {
                const text = quote.text[appState.currentLanguage].toLowerCase();
                const author = quote.author[appState.currentLanguage].toLowerCase();
                return text.includes(query) || author.includes(query);
            });
        }
        
        // Filter by category
        if (category !== 'all') {
            results = results.filter(quote => quote.category === category);
        }
        
        // Filter by language
        if (language !== 'all') {
            results = results.filter(quote => quote.language === language || quote.language === 'both');
        }
        
        // Display results
        if (results.length === 0) {
            elements.searchResults.innerHTML = `
                <p class="empty-favorites">${appState.currentLanguage === 'en' ? 'No quotes found matching your search' : 'لم يتم العثور على اقتباسات تطابق بحثك'}</p>
            `;
        } else {
            elements.searchResults.innerHTML = '';
            results.forEach(quote => {
                const quoteCard = createQuoteCard(quote);
                elements.searchResults.appendChild(quoteCard);
            });
        }
    }

    // Show notification
    function showNotification(message) {
        elements.notificationText.textContent = message;
        elements.notification.classList.add('show');
        
        setTimeout(() => {
            elements.notification.classList.remove('show');
        }, 3000);
    }

    // Set current date
    function setCurrentDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        elements.currentDate.textContent = today.toLocaleDateString(appState.currentLanguage === 'en' ? 'en-US' : 'ar-EG', options);
    }

    // Toggle language
    function toggleLanguage() {
        appState.currentLanguage = appState.currentLanguage === 'en' ? 'ar' : 'en';
        document.body.classList.toggle('arabic');
        
        // Save to localStorage
        localStorage.setItem('language', appState.currentLanguage);
        
        // Update all text elements
        document.querySelectorAll('[data-en]').forEach(element => {
            const enText = element.getAttribute('data-en');
            const arText = element.getAttribute('data-ar');
            element.textContent = appState.currentLanguage === 'en' ? enText : arText;
        });
        
        // Update placeholders
        document.querySelectorAll('[data-en-placeholder]').forEach(element => {
            const enPlaceholder = element.getAttribute('data-en-placeholder');
            const arPlaceholder = element.getAttribute('data-ar-placeholder');
            element.placeholder = appState.currentLanguage === 'en' ? enPlaceholder : arPlaceholder;
        });
        
        // Re-render all content
        renderDailyQuote();
        renderCategories();
        appState.quotesLoaded = 0;
        elements.quotesContainer.innerHTML = '';
        renderQuotes();
        renderFavorites();
        setCurrentDate();
    }

    // Toggle theme
    function toggleTheme() {
        appState.currentTheme = appState.currentTheme === 'light' ? 'dark' : 'light';
        document.body.classList.toggle('dark-theme');
        
        // Update icon
        const icon = elements.themeToggle.querySelector('i');
        icon.className = appState.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        
        // Save to localStorage
        localStorage.setItem('theme', appState.currentTheme);
    }

    // Setup event listeners
    function setupEventListeners() {
        // Language toggle
        elements.languageToggle.addEventListener('click', toggleLanguage);
        
        // Theme toggle
        elements.themeToggle.addEventListener('click', toggleTheme);
        
        // Daily quote actions
        elements.dailyFavorite.addEventListener('click', () => {
            if (appState.dailyQuote) {
                toggleFavorite(appState.dailyQuote);
            }
        });
        
        elements.dailyShare.addEventListener('click', () => {
            if (appState.dailyQuote) {
                shareQuote(appState.dailyQuote);
            }
        });
        
        elements.dailyCopy.addEventListener('click', () => {
            if (appState.dailyQuote) {
                copyQuote(appState.dailyQuote);
            }
        });
        
        // Load more quotes
        elements.loadMoreBtn.addEventListener('click', renderQuotes);
        
        // Quote creator
        elements.creatorText.addEventListener('input', updatePreview);
        elements.creatorAuthor.addEventListener('input', updatePreview);
        elements.creatorBgColor.addEventListener('input', updatePreview);
        elements.createQuoteBtn.addEventListener('click', createQuote);
        
        // Clear favorites
        elements.clearFavoritesBtn.addEventListener('click', clearFavorites);
        
        // Search modal
        elements.searchBtn.addEventListener('click', () => {
            elements.searchModal.classList.add('active');
        });
        
        elements.closeSearchBtn.addEventListener('click', () => {
            elements.searchModal.classList.remove('active');
        });
        
        elements.searchInput.addEventListener('input', searchQuotes);
        elements.searchCategory.addEventListener('change', searchQuotes);
        elements.searchLanguage.addEventListener('change', searchQuotes);
        
        // Navigation
        elements.navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.dataset.page;
                
                // Update active nav button
                elements.navBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Handle navigation
                if (page === 'search') {
                    elements.searchModal.classList.add('active');
                } else if (page === 'create') {
                    document.querySelector('.creator-section').scrollIntoView({ behavior: 'smooth' });
                } else if (page === 'favorites') {
                    document.querySelector('.favorites-section').scrollIntoView({ behavior: 'smooth' });
                } else if (page === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
        
        // Filter tabs
        elements.filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                elements.filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                appState.currentFilter = tab.dataset.filter;
                appState.quotesLoaded = 0;
                elements.quotesContainer.innerHTML = '';
                renderQuotes();
            });
        });
        
        // Close modal when clicking outside
        elements.searchModal.addEventListener('click', (e) => {
            if (e.target === elements.searchModal) {
                elements.searchModal.classList.remove('active');
            }
        });
    }

    // Initialize the app
    initApp();
});
