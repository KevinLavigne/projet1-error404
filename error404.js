const button = document.getElementById('bouton-retour')
const text = document.getElementById('text-event')
function redirection(){
    document.location.href="accueil.html";
}
function reload(){
text.style.color ='black'
 setInterval(redirection, 10000)
}
button.addEventListener("click",reload)
