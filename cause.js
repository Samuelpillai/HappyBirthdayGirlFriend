 // Reasons database
 const reasons = [
    { 
        text: "Hey Anci, happy birthday. I truly hope your 24th year brings you peace, happiness, love, and every beautiful thing you deserve. Someone with a heart as kind as yours deserves endless smiles and warmth, and I genuinely believe Jesus will bless you abundantly for the goodness you carry inside you. No matter what happened between us, I will always admire your kindness. You had this rare ability to make everyone feel loved, understood, and cared for, even when you were silently struggling yourself. That softness in your heart is something this world rarely sees anymore.I know I hurt you, and I know my mistakes destroyed something precious we built with love and trust. But every good thing I ever said about you was true. You changed me in ways I never expected. Even now, I remember your smile, your voice, your “shilae shilae,” and the way you made ordinary moments feel magical. Thank you for every memory and every piece of love you gave me. 💖", 
        emoji: "🌟",
        gif: "gif1.gif"
    },
    { 
        text: "What I love most about you is your heart. Beyond your beauty, adorable expressions, and your cute little “shilae shilae,” it was your kindness that made you unforgettable to me. The way you smiled, spoke gently, and made people feel comfortable slowly became my favorite part of life. Your cuteness was never just about your looks. It was in the way you cared for people, checked on them, listened to them, and tried to make everyone feel loved even when you were tired yourself. You had this warmth that naturally comforted people without even trying. Our story may not have started perfectly, and maybe it ended more painfully than either of us imagined, but despite everything, you became one of the most meaningful parts of my life. Every moment we shared was real to me, and I will always carry those memories in my heart. 🌸 ", 
        emoji: "💗",
        gif: "gif2.gif"
    },
    { 
        text: "Our story may not have started perfectly, and maybe it ended more painfully than either of us imagined, but despite everything, you became one of the most meaningful parts of my life. Every moment we shared was real to me, and I will always carry those memories in my heart. Before you, I never truly understood certain emotions or even certain parts of myself. You changed the way I looked at love and life. Through you, I learned how beautiful simple moments could feel holding hands, laughing at silly things, hearing your cute voice, and feeling peace just by being beside you. I genuinely dreamed about a future with you. I imagined growing together, traveling together, and building a peaceful life side by side. But somewhere along the way, my mistakes and inability to understand your heart shattered those dreams. Still, no matter where life takes us now, I’ll always be grateful for the love, warmth, and memories you once gave me. ✨ ", 
        emoji: "💕",
        gif: "gif3.gif"
    }
];

// State management
let currentReasonIndex = 0;
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
let isTransitioning = false;

// Create reason card with gif
function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    
    const text = document.createElement('div');
    text.className = 'reason-text';
    text.innerHTML = `${reason.emoji} ${reason.text}`;
    
    const gifOverlay = document.createElement('div');
    gifOverlay.className = 'gif-overlay';
    gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Friendship Memory">`;
    
    card.appendChild(text);
    card.appendChild(gifOverlay);
    
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "back.out"
    });

    return card;
}

// Display new reason
function displayNewReason() {
    if (isTransitioning) return;
    isTransitioning = true;

    if (currentReasonIndex < reasons.length) {
        const card = createReasonCard(reasons[currentReasonIndex]);
        reasonsContainer.appendChild(card);
        
        // Update counter
        reasonCounter.textContent = `Reason ${currentReasonIndex + 1} of ${reasons.length}`;
        
        currentReasonIndex++;

        // Check if we should transform the button
        if (currentReasonIndex === reasons.length) {
            gsap.to(shuffleButton, {
                scale: 1.1,
                duration: 0.5,
                ease: "elastic.out",
                onComplete: () => {
                    shuffleButton.textContent = "Enter Our Storylane 💫";
                    shuffleButton.classList.add('story-mode');
                    shuffleButton.addEventListener('click', () => {
                        gsap.to('body', {
                            opacity: 0,
                            duration: 1,
                            onComplete: () => {
                                window.location.href = 'last.html'; // Replace with the actual URL of the next page
                            }
                        });
                    });
                }
            });
        }

        // Create floating elements
        createFloatingElement();
        
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    } else {
        // Handle navigation to new page or section
        window.location.href = "#storylane";
        // Or trigger your next page functionality
    }
}

// Initialize button click
shuffleButton.addEventListener('click', () => {
    gsap.to(shuffleButton, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    displayNewReason();
});

// Floating elements function (same as before)
function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '🦋', '⭐'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = Math.random() * window.innerHeight + 'px';
    element.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        duration: Math.random() * 10 + 10,
        opacity: 0,
        onComplete: () => element.remove()
    });
}

// Custom cursor (same as before)
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2
    });
});

// Create initial floating elements
setInterval(createFloatingElement, 2000);