function Uvecaj(slika, tekst) {
    document.getElementById("SlikeTu").src = slika.src;
    var visibleP = document.getElementById(tekst);
    var i, len, ps = document.getElementsByTagName('p');
    for (i = 0, len = ps.length; i < len; i++) {
        ps[i].style.display = 'none';
    }
    visibleP.style.display = 'inline';
}