const button = document.getElementById('confetti-button');

button.addEventListener('click', () => {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.4 }
    });
});