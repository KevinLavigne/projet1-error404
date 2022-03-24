function redirection(){
    document.location.href="accueil.html";
}
const reload = setInterval(redirection, 5000)
window.addEventListener("load",reload)