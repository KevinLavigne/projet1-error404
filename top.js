document.body.onload = function () {
    nbr = 11;
    p = 0;
    carousel = document.getElementById("carousel");
    g = document.getElementById("g");
    d = document.getElementById("d");
    carousel.style.width = (90 * nbr) + "vw";
    for (i = 1; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = "image-carousel";
        div.style.backgroundImage = "url('images/im" + i + ".gif')";
        carousel.appendChild(div);
    }
    displayHidden();

}
g.onclick = function () {
    if (p > -nbr + 6);
        p--;
    carousel.style.transform = "translate(" + p * 90 + "vw)";
    carousel.style.transition = "all 0.5s ease";
    displayHidden();
}

d.onclick = function () {
    if (p < 5);
        p++;
    carousel.style.transform = "translate(" + p * 90 + "vw)";
    carousel.style.transition = "all 0.5s ease";
    displayHidden();
}

function displayHidden() {
    if (p == -nbr +7)
        g.style.visibility = "hidden";
    else
        g.style.visibility = "visible";
    if (p == 5)
        d.style.visibility = "hidden";
    else
        d.style.visibility = "visible";
}




