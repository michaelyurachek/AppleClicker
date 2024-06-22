// Script to make scrolling feel unique and not boring
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const audio = new Audio('/AppleClicker/asset/mp3/homeMusic.mp3'); // Change to /AppleClicker 

function playAudio() {
    audio.play(); // Play the audio
}

function pauseAudio() {
    audio.pause(); // Pause the audio
}

function setVolume(volume) {
    audio.volume = volume; // Set the audio volume
}

function playHoverSound() {
    var audio = new Audio('/AppleClicker/asset/mp3/hoverSound.wav'); // Change to /AppleClicker 
    audio.play();
}

function playClickSound() {
    var audio = new Audio('/AppleClicker/asset/mp3/clickSound.wav'); // Change to /AppleClicker 
    audio.play();
}