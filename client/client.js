function getUsersFromAPI(){
    var usuarios = ""
    $.ajax({
        url: 'http://localhost:3000/api/users',
        method: 'GET',
        async: false,
        success: function(response){
            usuarios = response
        },
        error: function(error){
            usuarios = "Error al consultar la API"
        }
    })
    return usuarios
}

function getUsersDataFromAPI(){
    var data = ""
    $.ajax({
        url: 'http://localhost:3000/api/users/data',
        method: 'GET',
        async: false,
        success: function(response){
            data = response
        },
        error: function(error){
            data = "Error al consultar la API"
        }
    })
    return data
}

function loadUsers(){
    const promise = new Promise((resolve,reject)=>{
        console.log("Se buscan los usuarios")
        usuarios = getUsersFromAPI()
        if(usuarios.includes("Error")){
            return reject(usuarios)
        }
        return resolve(usuarios)
    })
    return promise;
}

function loadUsersData(){
    const promise = new Promise((resolve,reject)=>{
        console.log("Se buscan los datos")
        data = getUsersDataFromAPI()
        if(data.includes("Error")){
            return reject(data)
        }
        return resolve(data)
    })
    return promise;
}

function handleClic(){
    var messageInput = document.getElementById('messageInput');
    loadUsers()
    .then(function(usuarios){
        console.log("Los usuarios son: "+usuarios)
        messageInput.value += usuarios
        return loadUsersData()
    })
    .then(function(data){
        console.log("Los datos son: "+data)
        messageInput.value += data
    })
    .catch(error=>{
        messageInput.value = error
    })
}