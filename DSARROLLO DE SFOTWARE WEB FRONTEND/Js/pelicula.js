const params = new URLSearchParams(window.location.search);
const idPelicula = parseInt(params.get("id"));


const peliculas = [
    { id: 1, titulo: "Moana 2", imagen: "Public/Portadas/moana2.jpg", genero: ["Acción", "Comedia"], rating: 4.5, vistas: 0, 
      descripcion: "Moana regresa en una nueva aventura para explorar más allá del océano y descubrir su verdadero destino.", 
      actores: ["Auli'i Cravalho", "Dwayne Johnson"],
      sinopsis: "Moana emprende un épico viaje en busca de un artefacto perdido, enfrentándose a criaturas míticas y peligros ocultos. En el camino, descubre el poder de su linaje y su conexión con el océano. A medida que explora tierras desconocidas, Moana debe aprender a confiar en sí misma y en las personas a su alrededor para salvar su hogar.", 
      informacion: "La película cuenta con espectaculares efectos visuales y un soundtrack que combina música tradicional polinesia con toques modernos. Es una mezcla perfecta de acción, comedia y lecciones sobre el valor personal y la importancia de la comunidad."  },
      { 
        id: 2, 
        titulo: "Mufasa", 
        imagen: "Public/Portadas/mufasa.jpg", 
        genero: ["Comedia", "Aventura"], 
        rating: 3.8, 
        vistas: 0, 
        descripcion: "La historia jamás contada del pasado de Mufasa, el rey león. Esta película explora su origen, su lucha por el poder y la sabiduría que lo llevó a ser uno de los personajes más admirados del reino animal. El relato muestra cómo Mufasa creció junto a su hermano Scar, antes de que su destino lo llevara al trono.", 
        actores: ["Aaron Pierre", "Seth Rogen", "Billy Eichner"], 
        sinopsis: "En su juventud, Mufasa no siempre fue el rey sabio que conocemos. Su relación con su hermano Scar y su ascenso al trono se ven empañados por secretos oscuros. La película narra los eventos previos al trágico incidente que cambiaría el destino de la Sabana y nos ofrece un vistazo a las emociones y las decisiones que hicieron de Mufasa el gran líder.", 
        informacion: "Con un enfoque en la familia y el sacrificio, 'Mufasa' es una aventura que combina momentos conmovedores con grandes dosis de acción. La película da un giro inesperado al revelarnos el lado humano de los personajes, y sus lecciones sobre el perdón y la superación." 
      },
      { 
        id: 3, 
        titulo: "Sonic 3", 
        imagen: "Public/Portadas/sonic3.jpg", 
        genero: ["Acción", "Aventura"], 
        rating: 4.2, 
        vistas: 0, 
        descripcion: "En esta tercera entrega, Sonic y sus amigos enfrentan un nuevo enemigo que amenaza el equilibrio entre dimensiones. Con la ayuda de nuevos aliados, deben viajar por distintas realidades para detener una amenaza cósmica que podría destruir su mundo.", 
        actores: ["Ben Schwartz", "Idris Elba", "Jim Carrey"], 
        sinopsis: "Sonic, Tails y Knuckles se enfrentan a una amenaza mucho más peligrosa que nunca. Un villano interdimensional ha llegado a su mundo, y su único objetivo es deshacer el tejido de la realidad misma. Mientras luchan por salvar su hogar, Sonic y sus amigos deben tomar decisiones difíciles, cuestionando lo que están dispuestos a sacrificar por el bien de todos.", 
        informacion: "La película lleva la saga de Sonic a nuevas alturas, con efectos visuales impresionantes y un guion que mantiene el equilibrio entre acción y humor. Los personajes presentan una mayor evolución y profundización en sus relaciones, y Sonic debe aprender a ser un verdadero líder." 
      },
      { 
        id: 4, 
        titulo: "The Brutalist", 
        imagen: "Public/Portadas/Brutalist.jpg", 
        genero: ["Drama", "Acción"], 
        rating: 5, 
        vistas: 0, 
        descripcion: "En una época donde la arquitectura moderna se enfrenta a la brutalidad de los cambios urbanos, un arquitecto inmigrante se ve forzado a luchar contra el sistema para establecer su legado. 'The Brutalist' es un relato sobre los sacrificios que deben hacerse para cumplir con un sueño en un mundo que parece estar en contra.", 
        actores: ["Adrien Brody", "Felicity Jones", "Guy Pearce"], 
        sinopsis: "Un inmigrante recién llegado con grandes aspiraciones decide enfrentarse a la burocracia y el elitismo del mundo de la arquitectura. A medida que busca su espacio en una ciudad que no lo acepta, su vida y su carrera toman giros inesperados. Su lucha no solo es personal, sino también un comentario social sobre los desafíos que enfrentan aquellos que intentan cambiar el mundo desde dentro.", 
        informacion: "Con un enfoque introspectivo y potente, 'The Brutalist' presenta una visión única de la arquitectura, mostrando cómo un solo individuo puede marcar la diferencia en un sistema que valora más la forma que la función. El diseño y la dirección de arte son fundamentales en esta historia que explora la lucha de la creatividad contra la conformidad." 
      },
      { 
        id: 5, 
        titulo: "Solo Leveling Awakening", 
        imagen: "Public/Portadas/Sololeveling.jpg", 
        genero: ["Comedia", "Acción"], 
        rating: 5, 
        vistas: 0, 
        descripcion: "Jinwoo, un cazador débil, obtiene un misterioso poder tras un encuentro con una criatura de otro mundo. Este poder lo convierte en el ser más fuerte, y de pronto se ve atrapado en una nueva dimensión llena de monstruos y desafíos. En su ascenso hacia la cima, descubre que el poder tiene un precio.", 
        actores: ["Taito Ban", "Aleks Le", "Genta Nakamura"], 
        sinopsis: "Jinwoo vivió siempre a la sombra de los cazadores más fuertes. Un día, tras una misión mortal, es elegido por un poder desconocido que le otorga habilidades sobrehumanas. Ahora, en su nueva misión, debe enfrentarse a enemigos aún más poderosos mientras explora los oscuros secretos de su origen y los motivos detrás de su transformación.", 
        informacion: "Con una mezcla de acción, humor y drama, 'Solo Leveling' es una historia cautivadora sobre superación personal, el precio del poder y las decisiones difíciles que debemos tomar cuando se nos da más de lo que esperábamos." 
      },
      { 
        id: 6, 
        titulo: "Avatar 2", 
        imagen: "Public/Portadas/avatar2.jpg", 
        genero: ["Ciencia Ficción", "Aventura"], 
        rating: 4.7, 
        vistas: 0, 
        descripcion: "Jake Sully y Neytiri tienen una familia y han encontrado un lugar en el mundo de Pandora. Pero cuando una nueva amenaza pone en peligro todo lo que han construido, deben unirse a nuevas tribus y enfrentarse a desafíos más grandes de lo que jamás imaginaron.", 
        actores: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"], 
        sinopsis: "La continuación de la saga de Pandora sigue a Jake y Neytiri mientras se enfrentan a nuevos desafíos en su mundo natal. Enfrentando la devastación, la película explora los conflictos internos de los personajes mientras luchan por proteger su hogar y su familia, mientras el futuro de Pandora está en juego.", 
        informacion: "En esta película, James Cameron no solo continúa la historia de los personajes, sino que también nos introduce a nuevas culturas y paisajes de Pandora. La película destaca los efectos visuales innovadores y profundiza en los temas de familia, supervivencia y la conexión con la naturaleza." 
      },
      { 
        id: 7, 
        titulo: "Jurassic World: Dominion", 
        imagen: "Public/Portadas/jurassicworlddominion.jpg", 
        genero: ["Acción", "Ciencia Ficción"], 
        rating: 4.3, 
        vistas: 0, 
        descripcion: "Los dinosaurios ahora viven entre los humanos y el mundo está al borde del caos. Un grupo de científicos y sobrevivientes luchan para restaurar el orden mientras enfrentan nuevas criaturas y una amenaza más peligrosa.", 
        actores: ["Chris Pratt", "Bryce Dallas Howard", "Jeff Goldblum"], 
        sinopsis: "Los dinosaurios, que antes estaban confinados a parques, ahora se encuentran en todo el mundo. Mientras algunos luchan por convivir pacíficamente, otros buscan aprovecharse de los recursos naturales que los dinosaurios han alterado. Los protagonistas se embarcan en una misión para evitar que la humanidad sucumba a esta nueva era prehistórica.", 
        informacion: "Con efectos visuales asombrosos y una trama que reflexiona sobre la ética de la manipulación genética, esta película ofrece una explosión de acción, tensión y momentos conmovedores, mientras se enfrentan a la pregunta de si los humanos deberían intentar controlar a la naturaleza." 
      }, { 
        id: 8, 
        titulo: "The Flash", 
        imagen: "Public/Portadas/flash.jpg", 
        genero: ["Acción", "Aventura"], 
        rating: 4.1, 
        vistas: 0, 
        descripcion: "Barry Allen viaja atrás en el tiempo para evitar la muerte de su madre, pero sus acciones tienen consecuencias inesperadas que alteran la realidad de manera irreversible.", 
        actores: ["Ezra Miller", "Michael Keaton", "Ben Affleck"], 
        sinopsis: "El viaje en el tiempo no es algo sencillo, y Barry Allen lo aprende de la manera más difícil. En su intento por salvar a su madre, crea una nueva línea de tiempo donde los héroes no existen y la amenaza de un enemigo aún más peligroso se avecina.",
        informacion: "Esta película no solo presenta emocionantes secuencias de acción, sino que también profundiza en la psicología de sus personajes y las implicaciones de jugar con el tiempo y las realidades alternas." 
 },  { 
  id: 9, 
  titulo: "Transformers: Rise of the Beasts", 
  imagen: "Public/Portadas/transformersbeasts.jpg", 
  genero: ["Acción", "Ciencia Ficción"], 
  rating: 4.6, 
  vistas: 0, 
  descripcion: "Los Autobots y los Decepticons deben enfrentar una nueva amenaza de una especie de transformers primitivos, lo que da lugar a una nueva guerra que podría decidir el futuro del universo.", 
  actores: ["Anthony Ramos", "Dominique Fishback", "Ron Perlman"], 
  sinopsis: "La guerra entre Autobots y Decepticons da un giro inesperado con la aparición de los Maximals, una raza antigua de transformers. Estos nuevos aliados de los Autobots deben luchar contra los terroríficos Predacons y los Decepticons para evitar una catástrofe a escala universal.", 
  informacion: "Con una espectacular mezcla de acción frenética y escenas llenas de emoción, esta nueva entrega en la saga Transformers lleva la historia a nuevas dimensiones con increíbles efectos visuales y una historia más profunda sobre el sacrificio y la lealtad." 
},

{ 
  id: 10, 
  titulo: "Fast & Furious 10", 
  imagen: "Public/Portadas/fastfuriuos10.jpg", 
  genero: ["Acción", "Aventura"], 
  rating: 4.8, 
  vistas: 0, 
  descripcion: "La saga de acción y velocidad continúa con una nueva entrega llena de emoción y adrenalina. Esta vez, los protagonistas deben enfrentarse a una amenaza global que los lleva a desafiar límites nunca antes alcanzados.", 
  actores: ["Vin Diesel", "Michelle Rodriguez", "Tyrese Gibson"], 
  sinopsis: "El equipo de 'Fast & Furious' se enfrenta a nuevos desafíos que los llevarán más allá de lo que conocen. Mientras Dominic Toretto y su equipo luchan por detener una nueva amenaza, su lealtad, habilidad y fuerza serán puestos a prueba como nunca antes. Una película llena de acción, carreras y giros inesperados que mantendrán al público al borde de su asiento.", 
  informacion: "La décima entrega de esta exitosa franquicia promete continuar con el legado de emoción, escenas espectaculares y la química entre los personajes que ha convertido a 'Fast & Furious' en una de las franquicias más queridas del cine de acción." 
},
];

// Buscar película por ID
const pelicula = peliculas.find(p => p.id === idPelicula);

if (pelicula) {
    pelicula.vistas += 1;
    // Cargar datos en la página
    document.getElementById("titulo-pelicula").textContent = pelicula.titulo;
    document.getElementById("imagen-pelicula").src = pelicula.imagen;
    document.getElementById("rating-pelicula").textContent = pelicula.rating;
    document.getElementById("genero-pelicula").textContent = pelicula.genero;
    document.getElementById("descripcion-pelicula").textContent = pelicula.descripcion;
    document.getElementById("informacion-pelicula").textContent=pelicula.informacion;
    document.getElementById("sipnosis-pelicula").textContent=pelicula.sinopsis;
    document.getElementById("actores-pelicula").textContent = "Actores: " + pelicula.actores.join(" - ");
   

}

// Guardar comentario en localStorage
function guardarComentario() {
  const nombre = document.getElementById("nombre-usuario").value.trim();
  const comentario = document.getElementById("comentario").value.trim();

  if (!nombre || !comentario) {
      alert("Por favor, ingresa tu nombre y comentario.");
      return;
  }

  const fecha = new Date().toLocaleString(); // Obtener fecha y hora del comentario

  let comentarios = JSON.parse(localStorage.getItem(`comentarios-${idPelicula}`)) || [];
  comentarios.unshift({ nombre, comentario, fecha }); // Agregar al inicio para que sea el más reciente
  localStorage.setItem(`comentarios-${idPelicula}`, JSON.stringify(comentarios));

  document.getElementById("comentario").value = ""; // Limpiar el campo
  mostrarComentarios();
}

function mostrarComentarios() {
  const lista = document.getElementById("lista-comentarios");
  lista.innerHTML = "";
  let comentarios = JSON.parse(localStorage.getItem(`comentarios-${idPelicula}`)) || [];

  comentarios.forEach(com => {
      lista.innerHTML += `
          <div class="d-flex align-items-start mb-3 p-3 border rounded "  style="background-color: rgba(0, 0, 0, 0.8); color:white">
              <i class="bi bi-person-circle fs-1 text-secondary me-2"></i>
              <div>
                  <strong>${com.nombre}</strong> <small class="text-white" >${com.fecha}</small>
                  <p class="m-0">${com.comentario}</p>
              </div>
          </div>
      `;
  });

  // Mostrar u ocultar el botón de borrar si hay comentarios
  document.getElementById("borrar-todo").style.display = comentarios.length ? "block" : "none";
}

function borrarComentarios() {
  if (confirm("¿Estás seguro de borrar todos los comentarios?")) {
      localStorage.removeItem(`comentarios-${idPelicula}`);
      mostrarComentarios();
  }
}

mostrarComentarios();
