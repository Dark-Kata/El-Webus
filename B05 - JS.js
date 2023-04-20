function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

function SadrzajTeksta(broj) {
    const text = [
        "<html><body style='background-color: #FEFA98;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif; text-shadow: 2px 2px 15px #666666;'>Instrument1</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: #FEFA98;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif; text-shadow: 2px 2px 15px #666666;'>Instrument2</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: #FEFA98;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif; text-shadow: 2px 2px 15px #666666;'>Instrument3</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: #FEFA98;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif; text-shadow: 2px 2px 15px #666666;'>Instrument4</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: #FEFA98;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif; text-shadow: 2px 2px 15px #666666;'>Instrument5</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: #FEFA98;'><h1 style='text-align: center; color: #517A2E;  font-family: Arial, Helvetica, sans-serif; text-shadow: 2px 2px 15px #666666;'>Instrument6</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
    ];
    var prozor = window.open("", "", 'width=500, height=300');
    prozor.document.write(text[broj]);
}