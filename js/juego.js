let intento = 0;
let punt = 0;

function opCorrecta() {
    intento++;


    if (intento === 1) {
        punt = 10;
        document.getElementById('labelPunt').innerText = punt;
        document.getElementById('labelInt').innerText = intento;
        document.getElementById('titulo').style.color = "yellow";
        document.getElementById('foto').src = '../img/img2.png';
        document.getElementById('label1').innerText = "Felicitaciones, has seleccionado la opción correcta";
        document.getElementById('label1').style.visibility = "visible";
        document.getElementById('btnR').style.visibility = "visible";
    } else if (intento === 2) {
        punt = 8;
        document.getElementById('labelPunt').innerText = punt;
        document.getElementById('labelInt').innerText = intento;
        document.getElementById('titulo').style.color = "yellow";
        document.getElementById('foto').src = '../img/img2.png';
        document.getElementById('label1').innerText = "Felicitaciones, has seleccionado la opción correcta";
        document.getElementById('label1').style.visibility = "visible";
        document.getElementById('btnR').style.visibility = "visible";
    } else if (intento === 3) {
        punt = 7;
        document.getElementById('labelPunt').innerText = punt;
        document.getElementById('labelInt').innerText = intento;
        document.getElementById('titulo').style.color = "yellow";
        document.getElementById('foto').src = '../img/img2.png';
        document.getElementById('label1').innerText = "Felicitaciones, has seleccionado la opción correcta";
        document.getElementById('label1').style.visibility = "visible";
        document.getElementById('btnR').style.visibility = "visible";
    }


}


function opIncorrecta() {
    intento++;


    if (intento === 1) {
        punt = 0;
        document.getElementById('labelPunt').innerText = punt;
        document.getElementById('labelInt').innerText = intento;
        document.getElementById('titulo').style.color = "red";
        document.getElementById('label1').innerText = "Pokémon incorrecto, la respuesta es: excadrill";
        document.getElementById('label1').style.visibility = "visible";
   
    } else {
       if(intento === 2){
            punt = 0;
            document.getElementById('labelPunt').innerText = punt;
            document.getElementById('labelInt').innerText = intento;
            document.getElementById('titulo').style.color = "red";
            document.getElementById('label1').innerText = "Pokémon incorrecto, la respuesta es: excadrill";
            document.getElementById('label1').style.visibility = "visible";
        }else{
            if(intento === 3){
                punt = 0;
                document.getElementById('labelPunt').innerText = punt;
                document.getElementById('labelInt').innerText = intento;
                document.getElementById('titulo').style.color = "red";
                document.getElementById('label1').innerText = "Pokémon incorrecto, la respuesta es: excadrill";
                document.getElementById('label1').style.visibility = "visible";
                document.getElementById('btnR').style.visibility = "visible";

            }
        }
    }
}

function reiniciar() {
    intento = 0; // Cambiar a la variable global
    punt = 0;    // Cambiar a la variable global
    document.getElementById('labelPunt').innerText = punt;
    document.getElementById('labelInt').innerText = intento;
    document.getElementById('titulo').style.color = "black";
    document.getElementById('foto').src = '../img/img1.png';
    document.getElementById('label1').style.visibility = "hidden";
    document.getElementById('btnR').style.visibility = "hidden";
}
