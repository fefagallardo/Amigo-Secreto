let amigos=[]; //array para guardar amigos ingresados
let nombreAmigo="";//variable para guardar nombre ingresado provisoriamente
let lista=[];// lista auxiliar de amigos que usaremos para mostrar los nombres en HTML
let amigoSorteado="";//nombre del amigo sorteado aleatoriamente



function agregarAmigo(){
    nombreAmigo=document.getElementById('amigo').value;//capturar el valor de campo de entrada id "amigo"
    if (nombreAmigo==""){                       //validar entrada con if
        alert("Por favor, inserte un nombre.");//si esta vacio muestra alerta
    } else{
        amigos.push(nombreAmigo);//valor es valido se agrega a la lista
        limpiarEntrada();//limpia caja de entrada
        mostrarAmigos();//muestra nombre al listado de html
    }
   
}
function limpiarEntrada(){                    //funcion para limpair caja de entrada
    document.querySelector('#amigo').value='';
}

function mostrarAmigos(){                      //funcion que permite visualizar los amigos en el HTML
    lista=document.getElementById('listaAmigos');
    lista.innerHTML="";

    for (let i = 0; i < amigos.length; i++) { //iteración que permite ir agregando nombres a medidas que se vayan ingresando a la Amigos
        let agregar = document.createElement("li");
        agregar.textContent = amigos[i];
        lista.appendChild(agregar);

}
}
function sortearAmigo() {           //Funcion que realizara sorteo de quien es el amigo secreto
                                        
    if (amigos=="") {               //si esta vacia el array Amigos, van a salir dos avisos, un  alert y un mensaje en la pagina
        document.getElementById("resultado").innerHTML="No hay registros guardados";
        alert('Favor ingrese nombres');
    } else{                         //si no esta vacio, realizara el sorte eleigiendo un indice, el cual señalara el amigosorteado
        let indice= Math.floor(Math.random()*amigos.length);
        amigoSorteado=amigos[indice]
        document.getElementById("resultado").innerHTML=amigoSorteado;
    }
}