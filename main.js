let otherLinks = document.getElementById('otherlinks');
let megaMenu = document.getElementById('megamenu');
let landing = document.querySelector('.landing');
let closeMega = document.querySelector('.close');

megaMenu.classList.add('hide');
otherLinks.onclick = function () {
    megaMenu.classList.remove('hide');
}

closeMega.onclick = function () {
    megaMenu.classList.add('hide');
    
}

landing.onclick = function () {
    megaMenu.classList.add('hide');
}