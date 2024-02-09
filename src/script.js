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