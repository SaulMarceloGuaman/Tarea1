const URL_API = 'https://swapi.dev/api/people/'

function personaje(texto, id) {

    let div = document.createElement('div')

    let nombrePersonaje = document.createTextNode(texto.name)
    let h1 = document.createElement('h1')
    h1.appendChild(nombrePersonaje)
    div.appendChild(h1)

    let idPersonaje = document.createTextNode(id)
    let h2 = document.createElement('h2')
    h2.appendChild(idPersonaje)
    div.appendChild(h2)

    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild( div )
}

async function obtener_personaje(id) {
    try {
        let response = await fetch(`${URL_API}${id}`)
        return personaje( await response.json(), id )
    } catch(error) {
        console.error(`[error]: ${error}`)
    }
}

for (let i=1; i<81; i++) {
    obtener_personaje(i)
}
