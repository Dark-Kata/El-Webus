function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
}
function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause;
    thissound.currentTime = 0;
}

function Opis(Broj) {
    const text = [
        "<h1 style='text-align: center; font-family: arial; font-weight: 200; color: #3C1826; text-shadow: 2px 2px 4px #E1F0AA; position: relative; left: 1.5 %;'>Konj</h1><br /><p style='text-align:center; font-family:arial;'>konjkonjkonjkonjkonj</p>",
        "<h1 style='text-align: center; font-family: arial; font-weight: 200; color: #3C1826; text-shadow: 2px 2px 4px #E1F0AA; position: relative; left: 1.5 %;'>koza</h1><br /><p style='text-align:center; font-family:arial;'>kozakozakozakozakoza</p>",
        "<h1 style='text-align: center; font-family: arial; font-weight: 200; color: #3C1826; text-shadow: 2px 2px 4px #E1F0AA; position: relative; left: 1.5 %;'>krava</h1><br /><p style='text-align:center; font-family:arial;'>kravakravakravakravakrava</p>",
        "<h1 style='text-align: center; font-family: arial; font-weight: 200; color: #3C1826; text-shadow: 2px 2px 4px #E1F0AA; position: relative; left: 1.5 %;'>ovca</h1><br /><p style='text-align:center; font-family:arial;'>ovcaovcaovcaovcaovca</p>",
        "<h1 style='text-align: center; font-family: arial; font-weight: 200; color: #3C1826; text-shadow: 2px 2px 4px #E1F0AA; position: relative; left: 1.5 %;'>petao</h1><br /><p style='text-align:center; font-family:arial;'>petaopetaopetaopetaov</p>",
    ];
    var prozor = window.open("", "", 'width=500, height=300');
    prozor.document.write(text[Broj]);
}