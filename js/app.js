document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector ('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type = "reset"]');
    const spinner = document.querySelector('#spinner');

    inputEmail.addEventListener('blur', validar);

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);
    formulario.addEventListener('submit', enviarEmail);



    btnReset.addEventListener('click', function(evt){
        evt.preventDefault();

        email.email='',
        email.asunto='',
        email.mensaje= '',

        formulario.reset();
        comprobarEmail();
    })

    function validar(evt){
        if(evt.target.value.trim()=== ''){
            mostrarAlerta("El campo ${evt.target.id} es obligatorio, evt.target.parentElement");
            email[evt.target.id]='';
            comprobarEmail();
            return;
        }

        if (evt.target.id === 'email' &&  !validarEmail(evt.target.value)){
            mostrarAlerta('El email introducido no es correcto', evt.target.parentElement);
            email[evt.target.id]='';

            comprobarEmail();

            return;
        }

        limpiarAlerta(evt.target.parentElement);

        email[evt.target.id] = evt.target.value.trim().toLowerCase();

        comprobarEmail();
    }

    function mostrarAlerta(mensaje,referencia){
        limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }

    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado; 
    }

    function comprobarEmail(){
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        
    }

    function enviarEmail(evt){
        evt.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
            
        }, 3000);
        


    }
});