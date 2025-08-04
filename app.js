
// Declaración de variables
let amigos = [];
let amigo;




// Funciión que actualiza la lista de amigos visible
function actualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (amigo in amigos){
        const li = document.createElement('li');
        li.textContent = amigos[amigo];
        lista.append(li);
    }
}

// Función ejecutada al presionar el botón "Añadir". Añade el nombre ingresado a la lista de amigos
function agregarAmigo(){
    amigo = document.getElementById('amigo').value;
    if (amigo == ''){
        alert('Por favor, inserte un nombre.');
    }else {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        actualizarListaAmigos();
    }
}

// Función ejecutada al presionar el botón "Sortear Amigo". Elige un amigo al azar y lo muestra.
function sortearAmigo(){
    let cantidadAmigos = amigos.length;
    let numeroAleatorio;
    let resultado = document.getElementById('resultado');
    if (cantidadAmigos == 0) {
        alert('Debe añadir amigos antes de realizar el sorteo.');
    }
    else{
        numeroAleatorio = Math.floor(Math.random() * cantidadAmigos);
        document.getElementById('listaAmigos').innerHTML = '';
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[numeroAleatorio]}`;
    }
}