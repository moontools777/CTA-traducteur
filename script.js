// Fonction de sélection de lettre
function selectLetter(letter) {
    const outputDiv = document.getElementById('decodedWord');
    outputDiv.innerText += letter;
}

// Fonction pour effacer la dernière lettre
function deleteLastLetter() {
    const outputDiv = document.getElementById('decodedWord');
    const currentWord = outputDiv.innerText;
    if (currentWord.length > 0) {
        outputDiv.innerText = currentWord.substring(0, currentWord.length - 1);
    }
}

// Fonction pour effacer tout le mot
function deleteWholeWord() {
    const outputDiv = document.getElementById('decodedWord');
    outputDiv.innerText = '';
}

// Ajoute les événements onmouseover et onmouseout à chaque image
const images = document.querySelectorAll('#alphabet img');
images.forEach(image => {
    const alt = image.alt;
    const span = document.createElement('span');
    span.className = 'tooltiptext';
    span.innerText = alt;

    const tooltipDiv = document.createElement('div');
    tooltipDiv.className = 'tooltip';
    tooltipDiv.appendChild(image.cloneNode(true));
    tooltipDiv.appendChild(span);

    image.parentNode.replaceChild(tooltipDiv, image);
});
