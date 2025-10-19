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