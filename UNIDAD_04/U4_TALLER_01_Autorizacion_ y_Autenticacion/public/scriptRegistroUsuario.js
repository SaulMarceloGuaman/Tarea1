function guardar() {

    console.log('Funcion Guardar')
    let username_ = document.getElementById('username').value
    let email_ = document.getElementById('email').value
    let password_ = document.getElementById('password').value
    //let rol = document.getElementById('rol').value
    var select = document.getElementById("selectRol")
    var rol = select.value
    console.log(rol)

    let listRoles = [];
    listRoles.push({name: rol})
   

    let data = {  
        username: username_, 
        email:email_,
        password: password_,
        roles: listRoles
    }

    console.log(data)

    return new Promise((resolve, reject) => {
        const request_options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Indicar que se envían datos JSON
            },
            body: JSON.stringify(data) // Convertir los datos a JSON
        };

        fetch('/users', request_options)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`));
    })
}



function guardar_usuario() {
    guardar()
        .then( (response) => {
            alert('Registro exitoso.')
            // Redirige a una nueva página
            window.location.replace("index.html")
        } )
        .catch( (error) => {
            alert('Error al ingresar.')
        } )
}

function listarRoles(){
    return new Promise((resolve, reject)=>{
        const request_options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', // Indicar que se envían datos JSON
            }
        };

        fetch('/role', request_options)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`))
    })
}

listarRoles()
    .then((data) => {
        console.log(data)
        cargarSelectRol(data)
    })
    .catch((error) => console.log(error))

function cargarSelectRol(data){
    data.forEach((item) => {
        console.log(`ID: ${item._id}, name: ${item.name}`)
        var option = document.createElement("option")
        option.value = item.name
        option.text = item.name

        document.getElementById("selectRol").appendChild(option)
    })
}