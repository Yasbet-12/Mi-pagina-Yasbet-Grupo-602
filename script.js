function da_click (){
    let mensaje=document.getElementById("mensaje1");
    mensaje.innerHTML ="🐾Cuida y proteje a los animales";
    mensaje.style.display = "black";

setTimeout (() => {
    mensaje.style.opacity = "1";
    mensaje.style.transform = "transformateY/(0)";
  }, 50);
}


function mostrar_mensaje (){
   let mensaje=document.getElementById("Proyecto Pec");
   mensaje.innerHTML="🐾Cuida y proteje a los animales";
   mensaje.style.display = "black";

setTimeout (() => {
    mensaje.style.opacity = "1";
    mensaje.style.transform = "transformateY/(0)";
  }, 50);
}

document.addEventListener('DOMContentLoaded', function() {
    const btnToggle = document.getElementById('btnToggle');
    const infoOculto = document.getElementById('infoOculto');
    
    btnToggle.addEventListener('click', function() {
        infoOculto.classList.toggle('mostrar');
        
        // Cambiar texto del botón
        if (infoOculto.classList.contains('mostrar')) {
            btnToggle.innerHTML = '🙈 Ocultar Información';
            btnToggle.style.background = 'linear-gradient(45deg, #ef4444, #dc2626)';
        } else {
            btnToggle.innerHTML = '👁️ Ver Información Secreta';
            btnToggle.style.background = 'linear-gradient(45deg, #4ade80, #22c55e)';
        }
    });
});

