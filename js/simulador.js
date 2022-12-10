const arrayPeliculas = [];

const pelicula1 = new Pelicula(
    '1',
    'Back to the future',
    'La pelicula trata sobre un adolescente llamado Marty McFly que accidentalmente viajar a través del tiempo y ahora debe viajar a su época original o deja de existir para siempre',
    '1500',
)

const pelicula2 = new Pelicula(
    '2',
    'Back to the future 2',
    'La historia transcurre esta vez en el futuro, en el año 2015, donde Marty McFly y el Doc Brown viajan hacia el futuro para evitar que el hijo de Marty (Marty McFly Jr.) sea encarcelado por culpa de Griff Tannen',
    '1500',
)

const pelicula3 = new Pelicula(
    '3',
    'Back to the future 3',
    'Los viajes en el tiempo de Marty McFly y el Dr. Brown están a punto de llegar a su fin. Después del accidente que sufre el Doc Brown en 1955, enviándolo al año 1885, Marty decide, al cabo de una serie de eventos, rescatar a su amigo en el pasado, con la ayuda del Emmett Brown de 1955, el cual se sorprende mucho de ver a Marty cuando acababa de irse.',
    '1500',
)

arrayPeliculas.push(pelicula1,pelicula2,pelicula3);




/* const DOMdescripcion = document.querySelectorAll('#btnVer');

DOMdescripcion.forEach (() => {
    let numBoton = DOMdescripcion.item
    let boton = DOMdescripcion.values[numBoton]
    boton.onclick = () => {console.log('hola')}
}); */


/* for (const pelicula of arrayPeliculas){
    let cont = 0;
    let contenedor = document.getElementsByClassName("descripcion");
    contenedor[cont].innerHTML = `${pelicula.descripcion}`;
    DOMdescripcion.appendChild(contenedor[cont]);
    cont ++;
}
 */
/* function renderizarPeliculas(){
    arrayPeliculas.forEach((info) => {
    let contenedor = document.getElementById("item-desc");
    
    contenedor.innerText = `${info.descripcion}`;
    
    DOMdescripcion.appendChild(contenedor);   
    console.log('hola')
    });
}

renderizarPeliculas(); */
/*Toastify({

    text: "This is a toast",
    
    duration: 3000
    
    }).showToast();
    

function peliculaRandom(){
    return Math.floor(Math.random() * arrayPeliculas.length) + 1;
}

function verOtraPelicula(){
    return confirm ('Queres ver otra pelicula?');
}

function verDescripcion(pelicula){
    return alert (pelicula.descripcion);
}

function existePelicula(numero){
    return pelicula_ver = arrayPeliculas.find (pelicula => pelicula.id === numero);
}
let pelirandom = '';
sessionStorage.setItem(pelirandom,peliculaRandom());

function mostrarPeliculas(){
  
    let peliculaNumero = '';
    let seguirViendo = false;

    do {
        peliculaNumero = prompt ('Que pelicula queres ver?', '1, 2 o 3');

        //const pelicula_ver = arrayPeliculas.find (pelicula => pelicula.id === peliculaNumero);
        

        if (existePelicula(peliculaNumero)) {
            verDescripcion (pelicula_ver);
        }
        else {
            alert ('La pelicula no existe!');
        }
        
        if (peliculaNumero === '3') {
            alert ('cayo un rayo sobre el Delorean, vas a dirigirte a otra pelicula');
        
            peliculaNumero = sessionStorage.getItem(pelirandom); 
            verDescripcion (existePelicula(peliculaNumero.toString()));                                
        }
        
    } while (verOtraPelicula())

}     

mostrarPeliculas();
 */



