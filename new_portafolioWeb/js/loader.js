
document.addEventListener("DOMContentLoaded", function() {
    // Oculta el loader
    setTimeout(function(){
        document.getElementById('loader').style.display = 'none';
        // Muestra el contenido seguido
        document.getElementById('content').style.display = 'block';
    }, 3000);
});
