document.addEventListener('DOMContentLoaded', function(){
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    inputEmail.addEventListener('blur', validar);

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);

    function validar(evt){
        if(evt.target.value.trim()=== ''){
            mostrarAlerta(`El campo ${evt.target.id} es obligatorio`);
        }else{
            console.log('Si hay algo');
        }
    }

    function mostrarAlerta(mensaje){
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        formulario.appendChild(error);
    }
});

