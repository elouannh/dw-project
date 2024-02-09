document.getElementById('openModalBtn').addEventListener('mousedown', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('mousedown', function() {
    document.getElementById('myModal').style.display = 'none';
});

window.addEventListener('mousedown', function(event) {
    if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
});

document.getElementById('darkModeBtn').addEventListener('mousedown', function(event) {
    var elements = document.querySelectorAll('*');

    elements.forEach(function(element) {
        if (element.classList.contains('menu-element')) return;
        
        if (window.getComputedStyle(element).backgroundColor === 'rgb(218, 229, 238)') {
            element.style.backgroundColor = 'var(--dark)';
            element.style.color = 'var(--white)';
        } else if (window.getComputedStyle(element).backgroundColor === 'rgb(18, 29, 38)') {
            element.style.backgroundColor = 'var(--white)';
            element.style.color = 'var(--dark)';
        }
    });
});

const boomCursor = document.getElementsByClassName('boom-cursor').item(0);
let splitMargin = 1;

document.body.addEventListener('mousedown', (event) => {
    var nouvelleImage = document.createElement('img');

    nouvelleImage.src = './img/explo.gif';

    nouvelleImage.style.position = 'fixed';
    nouvelleImage.style.width = '40px';
    nouvelleImage.style.height = '40px';
    nouvelleImage.style.left = (event.clientX - 8) + 'px';
    nouvelleImage.style.top = (event.clientY - 8) + 'px';

    document.body.appendChild(nouvelleImage);

    setTimeout(function() { document.body.removeChild(nouvelleImage); }, 1000);
});

function splitCouple() {
    splitMargin += splitMargin;

    if (splitMargin - 500 > window.innerWidth) {
        document.getElementById('split').style.display = "none";
    }
    else document.getElementById('split').style.marginLeft = `${splitMargin}px`;
}

document.getElementById('split').addEventListener('mousedown', (event) => {
    splitCouple();
});