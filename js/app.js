document.addEventListener('DOMContentLoaded', function(){
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
});

inputEmail.addEventListener('blur', function(){
    console.log('Se está ejecutando porque el usuario dejó de interactuar con el elemento');
})