let body = document.querySelector("body")
let btnBlack = document.getElementById('btnB')
let titre = document.getElementsByTagName('h1')[0]
btnBlack.addEventListener("click", () => {
    body.style.backgroundColor = 'black'
    titre.style.color = 'white'
    body.style.color = 'white'
})

let btnWhite = document.getElementById('btnW')
btnWhite.addEventListener("click", () => {
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    titre.style.color = 'black'
})
let btnconnexion = document.getElementById('btnconnexion');
let connexion = document.getElementById('connexion');
btnconnexion.addEventListener('click', () => {
    connexion.classList.replace('d-none', 'd-block');
})
let dots = document.getElementsByClassName('slide');
carouselActive = (even) => {
    let dots = document.getElementsByClassName('slide');
    for (let i = 0; i < dots.length; i++) {
        if (even == dots[i]) {
            dots[i].style.backgroundColor = '#888888';
            let mesImages = document.getElementsByClassName('rowElements')[0];
            if (even == dots[0]) {
                mesImages.style.transform = "translateX(-5px)";
            } else if (even == dots[1]) {
                mesImages.style.transform = "translateX(-328px)";
            } else if (even == dots[2]) {
                mesImages.style.transform = "translateX(-620px )";
            } else if (even == dots[3]) {
                mesImages.style.transform = "translateX(-910px)";
            }
            mesImages.style.transition = 'all 1s ease-out';
        } else {
            dots[i].style.backgroundColor = '#ffffff';
        }
    }
}
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', (event) => {
        carouselActive(event.target)
    });
}



