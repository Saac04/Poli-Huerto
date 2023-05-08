document.querySelector("form").addEventListener(
    "submit", enviarFormulario
)

async function enviarFormulario(event){
    event.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let contrasenya = document.getElementById("contrasenya").value;
    let respuesta = await fetch("./usuarios/"+usuario+"-"+contrasenya);
    if(respuesta.ok){
        if(contrasenya =="1234" && usuario =="admin"){location.href = "usuarios/app.html" ;}else{
            location.href = "usuarios/usuario-final-registrado1.html"
        }
    }else{
        alert("Usuario incorrecto");
    }
}