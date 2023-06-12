let otherLinks = document.getElementById('otherlinks');
let megaMenu = document.getElementById('megamenu');
let landing = document.querySelector('.landing');
let closeMega = document.querySelector('.close');

megaMenu.classList.add('hide');
otherLinks.onclick = () => {
    megaMenu.classList.remove('hide');
}

closeMega.onclick = () => {
    megaMenu.classList.add('hide');

}

landing.onclick = () => {
    megaMenu.classList.add('hide');
};


let btn = document.getElementById('btn');


window.onscroll = () => {
    if (scrollY >= 400) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
}

btn.onclick = () => {
    window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}

let scroll = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


window.addEventListener("scroll", () => {
    let = scrollTop = document.documentElement.scrollTop;
    scroll.style.width = `${(scrollTop / height) * 100}%`
});


