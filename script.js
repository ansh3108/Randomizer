function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomSize() {
    return Math.floor(Math.random() * 50) + 10 + 'px'; // Random size between 10px and 60px
}

function changeTextProperties() {
    const textElements = document.querySelectorAll('.random-text');
    textElements.forEach(textElement => {
        textElement.style.color = getRandomColor();
        textElement.style.fontSize = getRandomSize();
    });
}

let autoChangeInterval = null;

function startAutoChange() {
    const intervalInput = document.getElementById('interval');
    const interval = parseInt(intervalInput.value, 10) * 1000; // Convert seconds to milliseconds
    if (autoChangeInterval) {
        clearInterval(autoChangeInterval);
    }
    autoChangeInterval = setInterval(changeTextProperties, interval);
}

function stopAutoChange() {
    if (autoChangeInterval) {
        clearInterval(autoChangeInterval);
    }
}
