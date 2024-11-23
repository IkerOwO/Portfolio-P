
// Btn Abajo
document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
});

// Btn Arriba
document.getElementById('scrollupButton').addEventListener('click', function() {
    document.getElementById('git').scrollIntoView({ behavior: 'smooth' });
});


window.addEventListener('load', function() {
    const animatedWord = document.getElementById('animatedWord');
    animatedWord.classList.add('visible'); // Add the 'visible' class when the page loads
});

window.addEventListener('load', function() {
    const animatedWord2 = document.getElementById('animatedWord2');
    animatedWord2.classList.add('visible'); // Add the 'visible' class when the page loads
});