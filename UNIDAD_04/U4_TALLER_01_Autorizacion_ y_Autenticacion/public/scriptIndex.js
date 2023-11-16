function signIn(){
    console.log('Function signIng')
    let password_ = document.getElementById('password').value
    let email_ = document.getElementById('email').value 
    
    let data = {
        email: email_,
        password: password_
    }
    console.log(data)

    return new Promise((resolve, reject) =>{
        const request_options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Indicar que se envían datos JSON
            },
            body: JSON.stringify(data) // Convertir los datos a JSON

        };

        fetch('/auth/signIn', request_options)
            .then(response => {
                if (response.status === 401) {
                    response.json().then(data => {
                        alert(data.message)
                    });
                } else if (response.ok) {
                    response.json().then(data => {
                        //Captura el token
                        let token = data.token
                        console.log('authToken'+ token)
                        sessionStorage.setItem('authToken', token)
                        // Redirige a una nueva página
                        window.location.replace("representante.html")
                    });
                } else {
                    console.log('Error en la solicitud:', response.status);
                    alert('Error al hacer login')
                }
            })
            .catch((error) => reject(`[error]: ${error}`));

    })
} 

function login(){
    signIn()
    /*.then((response) => {
        console.log(response)
        if(response.status === 401){
            alert('No autorizado. Debes iniciar sesión.')
        }else if (response.ok){
            //Captura el token
            let token = response.token
            sessionStorage.setItem('authToken', token)
            // Redirige a una nueva página
            window.location.href = 'representante.html';
        }else{
            alert('Error en la solicitud')
        }        
    })
    .catch((error) => {
        alert('Error al hacer login')
    })*/
}