let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function mostrarCorreo() {
    var correoDiv = document.getElementById('correo');
    if (correoDiv.style.display === 'flex') {
        correoDiv.style.display = 'none';
    } else {
        correoDiv.style.display = 'flex';
    }
}