// --- 1. DEFINE VARIABLES ---
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const videoContainer = document.getElementById('videoContainer');
const closeBtn = document.querySelector(".close-btn");

const allCards = document.querySelectorAll(".project-card");
const igCards = document.querySelectorAll('.ig-card');

const carousel = document.getElementById('designCarousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// --- 2. MODAL LOGIC (Standard Projects) ---
allCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        modalTitle.innerText = title; 
        modal.style.display = "flex"; 
    });
});

// --- 3. MODAL LOGIC (Instagram Reels) ---
igCards.forEach(card => {
    card.addEventListener('click', () => {
        const igLink = card.getAttribute('data-ig-link');
        videoContainer.innerHTML = `
            <iframe src="${igLink}embed" 
                    width="100%" height="100%" 
                    frameborder="0" scrolling="no" 
                    allowtransparency="true">
            </iframe>`;
        modal.style.display = "flex";
    });
});

// --- 4. CLOSING THE MODAL ---
if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
        videoContainer.innerHTML = ""; 
    });
}

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        videoContainer.innerHTML = ""; 
    }

    if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
});

// --- 5. CAROUSEL SCROLL LOGIC ---
if (nextBtn && prevBtn && carousel) {
    nextBtn.addEventListener('click', () => {
        // Measure the first card specifically to get the scroll distance
        const card = carousel.querySelector('.design-card');
        if (card) {
            const scrollAmount = card.offsetWidth + 20; 
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });

    prevBtn.addEventListener('click', () => {
        const card = carousel.querySelector('.design-card');
        if (card) {
            const scrollAmount = card.offsetWidth + 20;
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    });



    


}