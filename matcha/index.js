/* =========================================
   MATCHA LOVE WEBSITE
   INTERACTIVE JAVASCRIPT
========================================= */


/* GET ELEMENTS */

const welcomeSection = document.getElementById("welcomeSection");

const messageSection = document.getElementById("messageSection");

const messageTitle = document.getElementById("messageTitle");

const messageText = document.getElementById("messageText");

const messageIcon = document.getElementById("messageIcon");

const matchaContainer = document.getElementById("matchaAnimation");

let isAnimating = false;


/* =========================================
   MOOD MESSAGES
========================================= */

const messages = {

    happy: {

        icon: "🌷",

        title: "yay! that makes me happy too ♡",

        text: `
            I'm glad you're feeling happy today! Hehe, 
            I hope you have even more reasons to smile. 
            Keep that cute smile of yours, okay? 
            And don't forget that you deserve lots of good things too! ✨ 🍵
        `

    },


    tired: {

        icon: "🍵",

        title: "hey, it's okay to be tired ♡",

        text: `
            You've been doing your best, so don't forget to give yourself a little break too, okay? 
            You don't have to be productive every seconds of the day. 
            Take a deep breath, drink some water, and rest whenever you can.
            I hope something nice happens to you today, even if it's just 
            a little thing that makes you smile. And hey, be kind to yourself, naa. 
            You deserve that too. 🫶🏻🌷
        `

    }

};


/* =========================================
   CHOOSE MOOD
========================================= */

function chooseMood(mood) {

    if (isAnimating) return;

    isAnimating = true;

    const selectedMessage = messages[mood];

    if (!selectedMessage) {
        isAnimating = false;
        return;
    }

    // Start matcha animation
    createMatchaAnimation();

    // Wait for animation
    setTimeout(() => {

        welcomeSection.classList.add("hidden");

        messageSection.classList.remove("hidden");

        // Change message content
        messageIcon.textContent = selectedMessage.icon;

        messageTitle.textContent = selectedMessage.title;

        messageText.textContent =
            selectedMessage.text.trim().replace(/\s+/g, " ");

        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        isAnimating = false;

    }, 1800);

}


/* =========================================
   FLOATING MATCHA ANIMATION
========================================= */

function createMatchaAnimation() {

    const particles = [
        "🍵",
        "🍵",
        "🍵",
        "💚",
        "✨",
        "🌸",
        "♡",
        "🍵",
        "✨",
        "💚",
        "🍵",
        "🌷",
        "♡",
        "🍵",
        "✨"
    ];

    particles.forEach((emoji, index) => {

        setTimeout(() => {

            const particle = document.createElement("span");

            particle.classList.add("matcha-particle");

            particle.textContent = emoji;

            // Random horizontal position
            particle.style.left =
                Math.random() * 90 + 5 + "%";

            // Random size
            particle.style.fontSize =
                (25 + Math.random() * 25) + "px";

            // Random animation duration
            particle.style.animationDuration =
                (2 + Math.random()) + "s";

            matchaContainer.appendChild(particle);

            // Remove after animation
            setTimeout(() => {

                particle.remove();

            }, 3200);

        }, index * 100);

    });

}


/* =========================================
   GO BACK
========================================= */

function goBack() {

    messageSection.classList.add("hidden");

    welcomeSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   GO TO NOTES PAGE
========================================= */

function goToNotes() {

    // Play matcha animation
    createMatchaAnimation();

    // Redirect to next page
    setTimeout(() => {

        window.location.href = "notes.html";

    }, 1800);

}