const obtenerPublicaciones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}

const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";

    // Método para recorrer los registros
    publicaciones.forEach(publicacion => {
        secciones += `
            <section class="d-flex gap-5 border p-3 mb-3">
                <a href="#">
                    <div>
                        <img src="${publicacion.url_imagen}" class="rounded image-post">
                    </div>
                </a>
                <div class="d-flex flex-column justify-content-center">
                    <h3 class="mt-3 mb-3">${publicacion.titulo}</h3>
                    <p>${publicacion.descripcion}</p>
                    <p class="mt-3"><b>Fecha:</b> ${publicacion.fecha}</p>
                </div>
            </section>
        `;
    });


    // Se crea la lista
    elementoHtml.innerHTML = secciones;

}



document.addEventListener('DOMContentLoaded', async () => {

    const publicaciones = await obtenerPublicaciones()
    console.log(publicaciones)


    // Modificar el DOM para mostrar las publicaciones
    const main = document.querySelector('#lista-publicaciones')

    mostrarPublicaciones(publicaciones, main)
})