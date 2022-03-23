document.body.onload = function () {
    nbr = 5;
    p = 0;
    carousel = document.getElementById("carousel");
    g = document.getElementById("g");
    d = document.getElementById("d");
    carousel.style.width = (90 * nbr) + "vw";
    for (i = 1; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = "image-carousel";
        div.style.backgroundImage = "url('images/im" + i + ".jpg')";
        carousel.appendChild(div);
    }
    displayHidden();

}
g.onclick = function () {
    if (p > -nbr + 3);
        p--;
    carousel.style.transform = "translate(" + p * 90 + "vw)";
    carousel.style.transition = "all 0.5s ease";
    displayHidden();
}

d.onclick = function () {
    if (p < 2);
        p++;
    carousel.style.transform = "translate(" + p * 90 + "vw)";
    carousel.style.transition = "all 0.5s ease";
    displayHidden();
}

function displayHidden() {
    if (p == -nbr +3)
        g.style.visibility = "hidden";
    else
        g.style.visibility = "visible";
    if (p == 2)
        d.style.visibility = "hidden";
    else
        d.style.visibility = "visible";
}