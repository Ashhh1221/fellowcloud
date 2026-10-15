/* =========================================
   RETRO LOVE NOTEPAD
========================================= */


/* ELEMENTS */

const letterText = document.getElementById("letterText");

const typingCursor = document.getElementById("typingCursor");

const letterSignature = document.getElementById("letterSignature");

const replayBtn = document.getElementById("replayBtn");


/* =========================================
   YOUR PERSONAL LETTER
========================================= */

const letter = `hello, pretty girl! ♡

i made this little corner of the internet just for you.

i know it's not much, but i wanted to make something that might bring a little smile to your face.

you know, some people are like sunshine, and i think you're one of them.

even on the most ordinary days, you somehow make things feel a little more special.

i hope you're taking care of yourself, eating well, resting enough, and finding little reasons to smile.

and whenever life feels a little too heavy, i hope you remember that you deserve kindness, happiness, and all the good things this world has to offer.

if i could, i'd leave your favorite matcha right beside you while you read this. 🍵

anyway, i just wanted you to know that someone out here thinks you're pretty wonderful.

and yes, that someone is me. ♡`;


/* =========================================
   TYPING ANIMATION
========================================= */

let charIndex = 0;

let typingTimeout;

const typingSpeed = 35;


function typeLetter() {

    if (charIndex < letter.length) {

        letterText.textContent += letter.charAt(charIndex);

        charIndex++;

        typingTimeout = setTimeout(
            typeLetter,
            typingSpeed
        );

    } else {

        typingCursor.style.display = "none";

        letterSignature.classList.add("show");

    }

}


/* =========================================
   REPLAY LETTER
========================================= */

function replayLetter() {

    clearTimeout(typingTimeout);

    charIndex = 0;

    letterText.textContent = "";

    typingCursor.style.display = "inline-block";

    letterSignature.classList.remove("show");

    typeLetter();

}


/* =========================================
   EVENT LISTENERS
========================================= */

replayBtn.addEventListener("click", replayLetter);


/* START TYPING */

window.addEventListener("load", () => {

    setTimeout(typeLetter, 600);

});