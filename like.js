const likeBtn = document.querySelector(".top-like-btn");
let likeIcon = document.querySelector("#top-like-icon"),
  count = document.querySelector("#top-like-count");

let clicked = false;

const button1 = document.getElementById('d')
const button2 = document.getElementById('g')
button1.addEventListener("click",randomlike)
button2.addEventListener("click",randomlike)
function randomlike(){
const random = Math.floor(Math.random() * 100) + 1;
  count.innerHTML = random
}
likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent--;
  }
});