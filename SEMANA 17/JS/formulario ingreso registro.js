//PROGRAMACION DE TRANSICION DE AMBOS FORMULARIOS
const signUpButton=document.getElementById("signUp");// BOTOB REGISTRO
const signInButton=document.getElementById("signIn");// BOTON INGRESO
const container=document.getElementById("container");
const boost=document.getElementById("boost");
// PROGRAMAR EVENTO CLICMOSTRAR FORMULARIO DE REGISTRO
signUpButton.addEventListener("click",()=>{
    container.classList.add("right-panel-active");
    boost.style.visibility="hidden";
});
// PROGRAMAR EVENTO CLICK OCULTAR FORM REGISTRO
signInButton.addEventListener("click",()=>{
    container.classList.remove("right-panel-active");
    boost.style.visibility="visible";
})
//MOSTRAR CONTRASEÑA
function mostrarSeña()
{
    var tipo=document.getElementById("seña");
    if(tipo.type=="password")
    {
        tipo.type="text";
    }else{
        tipo.type="password";
    }
}