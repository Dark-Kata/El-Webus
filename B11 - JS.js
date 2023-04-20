function PromeniGrad() {
    var x = document.getElementById("box");
    var selectgrad = x.options[x.selectedIndex].value;
    document.getElementById("prognoza").src = "https://naslovi.net/vremenska-prognoza/" + selectgrad;

    const text = [
        "<html><body style='background-color: darkorange;'><h1 style='text-align: center; color: white;  font-family: Arial, Helvetica, sans-serif;'>Grad1</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: darkorange;'><h1 style='text-align: center; color: white;  font-family: Arial, Helvetica, sans-serif;'>Grad2</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: darkorange;'><h1 style='text-align: center; color: white;  font-family: Arial, Helvetica, sans-serif;'>Grad3</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: darkorange;'><h1 style='text-align: center; color: white;  font-family: Arial, Helvetica, sans-serif;'>Grad4</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: darkorange;'><h1 style='text-align: center; color: white;  font-family: Arial, Helvetica, sans-serif;'>Grad5</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: darkorange;'><h1 style='text-align: center; color: white;  font-family: Arial, Helvetica, sans-serif;'>Grad6</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: darkorange;'><h1 style='text-align: center; color: white;  font-family: Arial, Helvetica, sans-serif;'>Grad7</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: darkorange;'><h1 style='text-align: center; color: white;  font-family: Arial, Helvetica, sans-serif;'>Grad8</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: darkorange;'><h1 style='text-align: center; color: white;  font-family: Arial, Helvetica, sans-serif;'>Grad9</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
        "<html><body style='background-color: darkorange;'><h1 style='text-align: center; color: white;  font-family: Arial, Helvetica, sans-serif;'>Grad10</h1><p style='text-align: center; font-family: Arial, Helvetica, sans-serif;'>Nesto nesto nesto nesto</p></body></html>",
    ];
    var prozor = window.open("", "", 'width=500, height=300');
    prozor.document.write(text[x.selectedIndex]);
}