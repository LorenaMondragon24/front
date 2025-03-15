const peliculas = [
    { id: 1, titulo: "Moana 2", imagen: "Public/Portadas/moana2.jpg", genero: ["Acción", "Comedia"], rating: 4.5,vistas:100 },
    { id: 2, titulo: "Mufasa", imagen: "Public/Portadas/mufasa.jpg", genero: ["Comedia"], rating: 3.8, vistas:4555  },
    { id: 3, titulo: "Sonic 3", imagen: "Public/Portadas/sonic3.jpg", genero: ["Drama"], rating: 4.9, vistas:75000 },
    { id: 4, titulo: "The Brutalist", imagen: "Public/Portadas/Brutalist.jpg", genero: ["Acción"], rating: 4.5, vistas:150 },
    { id: 5, titulo: "Solo Leveling Awakening", imagen: "Public/Portadas/Sololeveling.jpg", genero: ["Comedia"], rating: 5, vistas:5000000 },
    { id: 6, titulo: "Avatar 2", imagen: "Public/Portadas/avatar2.jpg", genero: ["Ciencia Ficción", "Aventura"], rating: 4.7, vistas: 120000 },
    { id: 7, titulo: "Jurassic World: Dominion", imagen: "Public/Portadas/jurassicworlddominion.jpg", genero: ["Acción", "Ciencia Ficción"], rating: 4.3, vistas: 95000 },
    { id: 8, titulo: "The Flash", imagen: "Public/Portadas/flash.jpg", genero: ["Acción", "Aventura"], rating: 4.1, vistas: 65000 },
    { id: 9, titulo: "Transformers: Rise of the Beasts", imagen: "Public/Portadas/transformersbeasts.jpg", genero: ["Acción", "Ciencia Ficción"], rating: 4.6, vistas: 200000 },
    { id: 10, titulo: "Fast & Furious 10", imagen: "Public/Portadas/fastfuriuos10.jpg", genero: ["Acción", "Aventura"], rating: 4.8, vistas: 450000 }
    

    
];

const contenedor = document.getElementById("peliculas-container");
const buscador = document.getElementById("search");
const filtroGenero = document.getElementById("filter");
const paginacionContenedor = document.getElementById("pagination");
const filterButtons = document.getElementById("filterButtons");

let generoSeleccionado = "all";
let ordenSeleccionado = "todos";
let paginaActual = 1;
const peliculasPorPagina = 12; 

const generarEstrellas = (rating) => {
    let estrellas = "";
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        estrellas += '<i class="bi bi-star-fill text-warning"></i> ';
    }
    if (halfStar) {
        estrellas += '<i class="bi bi-star-half text-warning"></i> ';
    }
    for (let i = fullStars + (halfStar ? 1 : 0); i < maxStars; i++) {
        estrellas += '<i class="bi bi-star text-warning"></i> ';
    }
    return estrellas;
};

const mostrarPeliculas = () => {
    const textoBusqueda = buscador.value.toLowerCase();
    const peliculasFiltradas = peliculas.filter(pelicula =>
        (generoSeleccionado === "all" || pelicula.genero.some(g => g.toLowerCase() === generoSeleccionado.toLowerCase())) &&
        pelicula.titulo.toLowerCase().includes(textoBusqueda)
        
    );

    
    if (ordenSeleccionado === "popular") {
        peliculasFiltradas.sort((a, b) => b.vistas - a.vistas);
    } else if (ordenSeleccionado === "top-rated") {
        peliculasFiltradas.sort((a, b) => b.rating - a.rating);
    } else if (ordenSeleccionado === "todos") {
     
    }


    const totalPaginas = Math.ceil(peliculasFiltradas.length / peliculasPorPagina);
    paginaActual = Math.min(paginaActual, totalPaginas);

    const inicio = (paginaActual - 1) * peliculasPorPagina;
    const peliculasPagina = peliculasFiltradas.slice(inicio, inicio + peliculasPorPagina);

    contenedor.innerHTML = "";

    const formatearVistas = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + "M"; 
        } else if (num >= 1000) {
            return Math.floor(num / 1000) + "k"; 
        } else {
            return num.toString(); 
        }
    };
    

    peliculasPagina.forEach(pelicula => {
        const div = document.createElement("div");
        div.classList.add("col-md-3");
        div.innerHTML = `
           <div class="card mb-4 shadow-lg hover-effect" style="max-width: 100%; min-height: 500px; background-color:white">
    <span class="badge bg-success position-absolute top-0 end-0 m-2"> 
        <span class="view-count" data-id="${pelicula.id}">
            <i class="bi bi-eye"></i> ${formatearVistas(pelicula.vistas)}
        </span>
    </span>
    <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}" style="height: 350px; object-fit: fill;">
    <div class="card-body text-center">
        <h5 class="card-title text-wrap">${pelicula.titulo}</h5>
        <p class="text-muted">${pelicula.genero.join(", ")}</p>
        <div class="rating">${generarEstrellas(pelicula.rating)}</div>
        <p class="text-warning fw-bold">${pelicula.rating.toFixed(1)}</p>
        <a href="pelicula.html?id=${pelicula.id}" class="btn btn-primary">Ver más</a>
    </div>
</div>

        `;
    
    
        div.querySelector(".card").style.cursor = "pointer";
    
        contenedor.appendChild(div);
    });
    

    generarPaginacion(totalPaginas);
};

const generarPaginacion = (totalPaginas) => {
    paginacionContenedor.innerHTML = "";

    if (totalPaginas > 1) {
        if (paginaActual > 1) {
            paginacionContenedor.innerHTML += `<button class="btn btn-secondary" onclick="cambiarPagina(${paginaActual - 1})">Anterior</button>`;
        }

        for (let i = 1; i <= totalPaginas; i++) {
            paginacionContenedor.innerHTML += `<button class="btn ${paginaActual === i ? 'btn-primary' : 'btn-outline-secondary'} mx-1" onclick="cambiarPagina(${i})">${i}</button>`;
        }

        if (paginaActual < totalPaginas) {
            paginacionContenedor.innerHTML += `<button class="btn btn-secondary" onclick="cambiarPagina(${paginaActual + 1})">Siguiente </button>`;
        }
    }
};

const cambiarPagina = (nuevaPagina) => {
    paginaActual = nuevaPagina;
    mostrarPeliculas();
};

filtroGenero.addEventListener("change", (e) => {
    generoSeleccionado = e.target.value;
    paginaActual = 1;
    mostrarPeliculas();
});

buscador.addEventListener("input", () => {
    paginaActual = 1;
    mostrarPeliculas();
});

filterButtons.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        document.querySelectorAll("#filterButtons .btn").forEach(btn => {
            btn.classList.remove("btn-success", "active");
            btn.classList.add("btn-outline-light");
        });

        event.target.classList.remove("btn-outline-light");
        event.target.classList.add("btn-success", "active");

        const filtro = event.target.textContent.trim().toLowerCase(); 

           if (filtro === "popular") {
            ordenSeleccionado = "popular";
        } else if (filtro === "top-rated") {
            ordenSeleccionado = "top-rated";
        } else if (filtro === "todos") {
            ordenSeleccionado = "todos"; 
        }


        mostrarPeliculas();
    }
});

mostrarPeliculas();
 