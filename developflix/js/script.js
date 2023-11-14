import peliculas from '/peliculas.js'

//genre_ids: genero
//poster_path: imagenes
//title: titulo


const mostrarPeliculaPorGenero = (generoId,contenedorId) => {
    const contenedor = document.getElementById(contenedorId)
    const peliculaGenero = peliculas.filter((pelicula) => pelicula.genre_includes(generoId))
    peliculaGenero.forEach => {   
        let templatePelis = ``
        <div class="pelicula">
            <img src="https//image.tmdb.org/t/p/w200/${pelicula.poster_path}" alt="${pelicula.title}">
            <h3>${pelicula.title}</h3>
        <div/>
    contenedor.innerHTML += templatePelis
    })
    
}



mostrarPeliculaPorGenero(28, "genero-28")
mostrarPeliculaPorGenero(53, "genero-53")
mostrarPeliculaPorGenero(12, "genero-12")












/*const accion = document.getElementById("genero-28");
const thriller = document.getElementById("genero-53");
const aventura = document.getElementById("genero-12");

document.getElementById("genero-28").innerHTML = accion.filter(checkGenero);
function checkGenero(peliculas){
    return peliculas = genero-28
    console.log(peliculas)
}


/*const cartelera = ['Muzzle','Retribution','Fax X','the Equalizer','Gran Turismo','Expend4bles','Mission impossible',
'Sound of Freedom','Desperation Road','Uri','Boudica','Blue Beetle', 'Paw Patrol','Sniper G.R.I.T.',
'Transformers','The Sworsman','Spider Man','Babylon A.D','The Enginer'];
connsole.log(cartelera);*/








