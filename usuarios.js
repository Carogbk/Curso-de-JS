// USUARIOS
const contenedorComentarios = document.getElementById("comentarios")

function obtenerComentarios() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response);
            return response.json()
        })
        .then((data) => {
            console.log(data);
            console.log(data[0].body);
            data.forEach((comentario) => {
                let columna = document.createElement("div")
                columna.className = "col"
                columna.innerHTML = `<div class="cardBox m-3 border border-success" style="width: 18rem;">
        <div class="card-header">
        ${comentario.name}
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${comentario.email}</li>
        <li class="list-group-item">${comentario.phone}</li>
        <li class="list-group-item">${comentario.address.city}</li>
        </ul>
        </div>`
                contenedorComentarios.appendChild(columna)
            })
        });

}

obtenerComentarios();