const links = document.querySelectorAll('.navbar a');
const current = window.location.pathname.split("/").pop();

links.forEach(link =>{
    if(link.getAttribute('href') === current){
        link.classList.add('active');
    }
});