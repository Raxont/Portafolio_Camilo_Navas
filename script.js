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

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm("service_fxfoxxu","template_tpau2qt", this)
    .then(function() {
        alert('El mensaje ha sido enviado correctamente!');
        document.getElementById('contact-form').reset();
    }, function(error) {
        alert('Ha ocurrido un error al enviar el mensaje. Por favor, intenta nuevamente.', error);
    });
});