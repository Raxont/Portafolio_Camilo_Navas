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

    const formData = {
        user_name: this.user_name.value,
        user_email: this.user_email.value,
        user_phone: this.user_phone.value,
        subject: this.subject.value,
        message: this.message.value
    };

    fetch(`http://localhost:3001/send-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert('El mensaje ha sido enviado correctamente!');
            document.getElementById('contact-form').reset();
        } else {
            alert('Ha ocurrido un error al enviar el mensaje.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ha ocurrido un error al enviar el mensaje.');
    });
});