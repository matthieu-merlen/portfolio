const links = document.querySelectorAll('.navbar a');
const current = window.location.pathname.split("/").pop();

links.forEach(link =>{
    const href = link.getAttribute('href');

    if (current === '' && href === 'index.html'){
        link.classList.add('active');
    }
    else if (href === current){
        link.classList.add('active');
    }
});

document.addEventListener('contextmenu', event => event.preventDefault());

const track = document.querySelector('.track');

let clone = track.cloneNode(true);
track.parentElement.appendChild(clone);

let x = 0;

function loop(){
    x -= 1; // vitesse
    track.style.transform = `translateX(${x}px)`;
    clone.style.transform = `translateX(${x}px)`;

    if (Math.abs(x) >= track.offsetWidth){
        x = 0;
    }

    requestAnimationFrame(loop);
}

loop();