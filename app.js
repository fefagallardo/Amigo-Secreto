let amigos=[]; //array para guardar amigos ingresados
let nombreAmigo="";
let lista=[];
let amigoSorteado="";



function agregarAmigo(){
    nombreAmigo=document.getElementById('amigo').value;//capturar el valor de campo de entrada id "amigo"
    console.log(nombreAmigo);
    if (nombreAmigo==""){                       //validar entrada con if
        alert("Por favor, inserte un nombre.");//si esta vacio muestra alerta
    } else{
        amigos.push(nombreAmigo);//valor es valido se agrega a la lista
        limpiarEntrada();
        console.log(amigos);//verificar
        mostrarAmigos();
    }
   
}
function limpiarEntrada(){                    //funcion para limpair entrada
    document.querySelector('#amigo').value='';
}

function mostrarAmigos(){
    lista=document.getElementById('listaAmigos');
    lista.innerHTML="";

    for (let i = 0; i < amigos.length; i++) {
        let agregar = document.createElement("li");
        agregar.textContent = amigos[i];
        lista.appendChild(agregar);

}
}
function sortearAmigo(){};


function sortearAmigo() {
    
    if (amigos=="") {
        document.getElementById("resultado").innerHTML="No hay registros guardados";
        alert('Favor ingrese nombres');
    } else{
        let indice= Math.floor(Math.random()*amigos.length);
        amigoSorteado=amigos[indice]
        document.getElementById("resultado").innerHTML=amigoSorteado;
    }
}