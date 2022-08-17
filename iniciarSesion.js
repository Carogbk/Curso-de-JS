(function(){
    var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn');
    var validarMail = function(e){
        if (formulario.mail.value == 0){
            alert("no escribiste nada")
            e.preventDefault();
        } 
    };
    
    var validar = function(e){
        validarMail(e);
    };

    formulario.addEventListener("button", validar)
})