document.addEventListener("DOMContentLoaded", function () {
    // --- ✅ Set Active Class Based on URL ---
    const currentPage = window.location.pathname.split("/").pop(); // e.g., "about.html"
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href')?.split("/").pop();

        if (link.querySelector('img')) return;

        if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- ✅ Portfolio Tabs Setup ---
    const firstTab = document.querySelector('#portfolio-tabs .nav-link');
    const firstTabContent = document.querySelector('.tab-content .tab-pane');

    if (firstTab && firstTabContent) {
        firstTab.classList.add('active');
        firstTabContent.classList.add('active', 'show');
    }

    // --- ✅ Portfolio Pagination Logic ---
    const cardsPerPage = 5;
    const dataContainer = document.getElementById('data-container');
    const pagination = document.getElementById('pagination');
    const pageLinks = document.querySelectorAll('.page-link');
    const allTab = document.getElementById('all-tab');
    const videosTab = document.getElementById('videos-tab');
    const brandTab = document.getElementById('brand-tab');
    const viewBtn = document.getElementById('view-btn');
    const portSec = document.querySelector('.portfolio-section');

    if (!dataContainer) return;

    const allCards = Array.from(dataContainer.getElementsByClassName('item-info'));
    let currentCards = [];
    let currentPageNum = 1;

    function filterCards(tab) {
        if (tab === 'all') {
            return allCards;
        } else if (tab === 'videos') {
            return allCards.filter(card => card.classList.contains('video'));
        } else if (tab === 'brand') {
            return allCards.filter(card => card.classList.contains('brand'));
        }
        return [];
    }

    function displayAllCards(cardList) {
        allCards.forEach(card => card.style.display = 'none');
        cardList.forEach(card => card.style.display = 'block');
        pagination.style.display = 'none';
    }

    function displayPage(page, cardList) {
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        allCards.forEach(card => card.style.display = 'none');
        cardList.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'block';
            }
        });

        shouldShowPagination(cardList);
    }

    function updatePagination() {
        pageLinks.forEach(link => {
            const page = parseInt(link.getAttribute('data-page'));
            link.classList.toggle('active', page === currentPageNum);
        });
    }

    function shouldShowPagination(cardList) {
        pagination.style.display = cardList.length > cardsPerPage ? 'flex' : 'none';
    }

    function handleTabClick(tabType) {
        currentPageNum = 1;
        currentCards = filterCards(tabType);

        if (!viewBtn) {
            displayAllCards(currentCards);
        } else {
            displayPage(currentPageNum, currentCards);
            updatePagination();

            viewBtn.style.top = '0';
            viewBtn.style.right = '0';
            portSec.style.paddingBottom = '200px';

            if (tabType === 'all') {
                viewBtn.style.top = '-50px';
                viewBtn.style.right = '-10px';
                portSec.style.paddingBottom = '65px';
            }
        }
    }

    allTab?.addEventListener('click', (e) => {
        e.preventDefault();
        handleTabClick('all');
    });

    videosTab?.addEventListener('click', (e) => {
        e.preventDefault();
        handleTabClick('videos');
    });

    brandTab?.addEventListener('click', (e) => {
        e.preventDefault();
        handleTabClick('brand');
    });

    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = parseInt(link.getAttribute('data-page'));
            if (page !== currentPageNum) {
                currentPageNum = page;
                displayPage(currentPageNum, currentCards);
                updatePagination();
            }
        });
    });

    // Initial load
    currentCards = filterCards('all');
    if (!viewBtn) {
        displayAllCards(currentCards);
    } else {
        displayPage(currentPageNum, currentCards);
        updatePagination();
    }
});

// --- ✅ AOS & Swiper Initialization ---
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        once: false,
        duration: 800,
        disable: function () {
            return window.innerWidth < 768;
        }
    });

    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            slideChangeTransitionStart: function () {
                const activeSlide = swiper.slides[swiper.activeIndex];
                const heroContent = activeSlide.querySelector('.hero-content');
                if (heroContent) {
                    heroContent.classList.add('animate');
                }
            },
            slideChangeTransitionEnd: function () {
                swiper.slides.forEach(slide => {
                    const content = slide.querySelector('.hero-content');
                    if (content) {
                        content.classList.remove('animate');
                    }
                    AOS.refresh();
                });
            },
        },
    });
});

