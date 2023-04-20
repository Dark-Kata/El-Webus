function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

function Opis(Broj) {
    const text = [
        "<html><body style='background-color: #E1F0AA;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif;'>Zemlja</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Glavni grad</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Broj stanovnika</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Povrsina</p></body></html>",
        "<html><body style='background-color: #E1F0AA;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif;'>Zemlja</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Glavni grad</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Broj stanovnika</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Povrsina</p></body></html>",
        "<html><body style='background-color: #E1F0AA;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif;'>Zemlja</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Glavni grad</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Broj stanovnika</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Povrsina</p></body></html>",
        "<html><body style='background-color: #E1F0AA;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif;'>Zemlja</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Glavni grad</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Broj stanovnika</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Povrsina</p></body></html>",
        "<html><body style='background-color: #E1F0AA;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif;'>Zemlja</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Glavni grad</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Broj stanovnika</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Povrsina</p></body></html>",
        "<html><body style='background-color: #E1F0AA;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif;'>Zemlja</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Glavni grad</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Broj stanovnika</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Povrsina</p></body></html>",
        "<html><body style='background-color: #E1F0AA;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif;'>Zemlja</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Glavni grad</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Broj stanovnika</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Povrsina</p></body></html>",
        "<html><body style='background-color: #E1F0AA;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif;'>Zemlja</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Glavni grad</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Broj stanovnika</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Povrsina</p></body></html>",
        "<html><body style='background-color: #E1F0AA;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif;'>Zemlja</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Glavni grad</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Broj stanovnika</p><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Povrsina</p></body></html>",
    ];
    var prozor = window.open("", "", 'width=500, height=300');
    prozor.document.write(text[Broj]);
}