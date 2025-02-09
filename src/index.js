
// Btn Abajo
document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('adios').scrollIntoView({ behavior: 'smooth' });
});

// Btn Arriba
document.getElementById('scrollupButton').addEventListener('click', function() {
    document.getElementById('hola').scrollIntoView({ behavior: 'smooth' });
});


window.addEventListener('load', function() {
    const animatedWord = document.getElementById('animatedWord');
    animatedWord.classList.add('visible'); // Add the 'visible' class when the page loads
});

window.addEventListener('load', function() {
    const animatedWord2 = document.getElementById('animatedWord2');
    animatedWord2.classList.add('visible'); // Add the 'visible' class when the page loads
});

//Boton Secret
const btnSend = document.getElementById('send');
const text = document.getElementById('secret');
const secretText = document.getElementById('secretText');

btnSend.addEventListener('click', () => {
    const textInput = text.value; 
    if (textInput === "Secret" || textInput === "secret") {
        secretText.classList.remove('hidden'); 
    }
});