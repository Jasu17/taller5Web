function validarFormulario() {
   var nombre = document.getElementById("nombre").value;
   var apellido = document.getElementById("apellido").value;
   var direccion = document.getElementById("direccion").value;
   var usuario = document.getElementById("usuario").value;
   var clave = document.getElementById("password").value;
   var correo = document.getElementById("correo").value;

    function campo(texto){
        if (texto === "") {
            alert("Debe rellenar los campos obligatorios");
            return false;
        }
    }
    function limite(name, lim) {
        if (name.length > lim) {
            alert("El nombre y apellido no pueden tener mas de "+ lim + " caracteres");
            return false;
        }
    }
    function validarClave(clave) {
        var mayusculas = /[A-Z]/.test(clave);
        var minusculas = /[a-z]/.test(clave);
        var numeros = /[0-9]/.test(clave);
        var especiales = /[#,%,/,&]/.test(clave);
        if (!(mayusculas && minusculas && numeros || especiales)) {
            alert("la clave no cumple los parametros de seguridad");
            return false;
        }
    }

    //Vaidacion nombre
    campo(nombre);
    limite(nombre, 25);

   //validacion apellido
    campo(apellido);
    limite(apellido, 25);

   //Validacion direccion
   var direccionPermitida = ["cll","cra","av","anv","trans"]
   var direccionValida = false;
   for (let i = 0; i < direccionPermitida.length; i++) {
    if (direccion.startsWith(direccionPermitida[i])) {
        direccionValida = true;
        break;}
   }

   if (!direccionValida) {
    alert("direccion invalida");
    return false;
   }

   //Validacion usuario
    campo(usuario);
   function userInvalido(usuario){
    var caracteresExtranos = /[^a-zA-Z0-9\s]/;
    return caracteresExtranos.test(usuario);
   }

   if (userInvalido(usuario)) {
    alert("El usuario contiene caracteres no permitidos");
    return false;
    }

    //validacion clave
    campo(clave);
    if (clave.length < 15 || clave.length > 20) {
        alert("La clave debe tener entre 15 y 20 caracteres");
        return false;
    }
    validarClave(clave);

    //validacion email
    campo(correo);
    limite(correo, 120);
    document.getElementById("formularioUser").submit();
}

document.addEventListener("DOMContentLoaded", function() {
    function habilitarGustos() {
      var colorF = document.getElementById("colorF");
      var marcaF = document.getElementById("marcaF");
      var estiloF = document.getElementById("estiloF");
      var modeloF = document.getElementById("modeloF");

      colorF.disabled = false;
      marcaF.disabled = false;
      estiloF.disabled = false;
      modeloF.disabled = false;
    }
  
    function deshabilitarGustos() {
      var colorF = document.getElementById("colorF");
      var marcaF = document.getElementById("marcaF");
      var estiloF = document.getElementById("estiloF");
      var modeloF = document.getElementById("modeloF");

      colorF.disabled = true;
      marcaF.disabled = true;
      estiloF.disabled = true;
      modeloF.disabled = true;
    }
  
    document.getElementById("habilitar").addEventListener("change", function() {
      if (this.checked) {
        habilitarGustos();
      }
    });
  
    document.getElementById("deshabilitar").addEventListener("change", function() {
      if (this.checked) {
        deshabilitarGustos();
      }
    });
    
  });
