<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
        
        // Aquí puedes agregar cualquier validación adicional antes de mostrar el SweetAlert

        // Mostrar SweetAlert de éxito
        Swal.fire({
            title: '¡Bien hecho!',
            text: '¡Hiciste clic en el botón!',
            icon: 'success',
            confirmButtonText: 'Ok'
        });

        // Puedes agregar aquí el código para enviar el formulario con AJAX si es necesario
        // Por ejemplo:
        /*
        fetch('url_para_enviar_formulario', {
            method: 'POST',
            body: new FormData(event.target)
        })
        .then(response => response.json())
        .then(data => {
            // Aquí puedes manejar la respuesta del servidor si es necesario
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
        });
        */
    });
