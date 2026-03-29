const sections = [
    "Board Games", "Art", "Education", "Community", 
    "Immersive Theatre", "Press Coverage", "Digital Work" // Added one to make 7 unique
];

const hand = document.getElementById('card-hand');
const xpFill = document.getElementById('xp-fill');
const xpText = document.getElementById('xp-text');
const viewedSections = new Set();

// 1. Deal the cards
sections.forEach((title, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = title;
    
    // Create the fan rotation effect
    const rotation = (index - 3) * 10; // Tilts cards from -30 to +30 degrees
    card.style.transform = `rotate(${rotation}deg)`;
    
    card.onclick = () => openSection(title);
    hand.appendChild(card);
});

// 2. Handle Opening a Card
function openSection(title) {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content-area');
    
    content.innerHTML = `<h2>${title}</h2><p>Details about my work in ${title} go here...</p>`;
    overlay.classList.remove('hidden');

    // Update XP
    if (!viewedSections.has(title)) {
        viewedSections.add(title);
        updateXP();
    }
}

// 3. Update Progress Bar
function updateXP() {
    const count = viewedSections.size;
    const percentage = (count / 7) * 100;
    xpFill.style.width = percentage + '%';
    xpText.innerText = `${count}/7 Cards Discovered`;

    if (count === 7) {
        setTimeout(() => alert("ACHIEVEMENT UNLOCKED: Master Explorer! You've seen it all."), 500);
    }
}

// 4. Close Overlay
document.getElementById('close-btn').onclick = () => {
    document.getElementById('overlay').classList.add('hidden');
};
