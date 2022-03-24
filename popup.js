function myFunction() {
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
const button = document.getElementById("buttonDonate")
function thanksYou(){
  const text = document.getElementById("thank-you");
  text.innerHTML = "Merci pour votre générosité"
}
button.addEventListener("click",thanksYou)
