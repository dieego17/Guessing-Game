const adivinanza = document.getElementById("adivinanza")
const respuesta = document.getElementById("respuesta")
const adivinanza_eleccion = document.getElementById("adivinanza_eleccion")
const respuesta_eleccion = document.getElementById("respuesta_eleccion")
const btn_comprobar = document.getElementById("btn_comprobar")
const btn_jugar = document.getElementById("btn_jugar")
const jugar = document.getElementById("ju");


/* const aniadriEl = (elemento, capa_destino) => {

    if(elemento.nodeName === "P"){
        capa_destino.appendChild(elemento);
    }
} 

jugar.addEventListener("click", aniadriEl); 

respuesta_eleccion.addEventListener("click", (event) =>{
    aniadriEl(event.target,respuesta)
})
adivinanza_eleccion.addEventListener("click", (event) =>{
    aniadriEl(event.target,adivinanza)
}) */

const moveAdi = (event) =>{

    let element = event.target;
    if(element.nodeName === "P"){

        adivinanza_eleccion.appendChild(element)

    }
}

const moveRe = (event) =>{

    let element = event.target;
    console.log(event);
    if(element.nodeName === "P"){

        respuesta_eleccion.appendChild(element)

    }
} 

const comprobar = (event) => {

    const adivinanzaChildren = adivinanza_eleccion.children;
    const respuestaChildren = respuesta_eleccion.children;

    for (let i = 0; i < adivinanzaChildren.length; i++) {

        color = "rojo";

        if(adivinanzaChildren[i]){
            if(adivinanzaChildren[i].textContent.includes(respuestaChildren[i].textContent)){
                color = "verde";
            }
        }
        adivinanzaChildren[i].classList.add(color);
        respuestaChildren[i].classList.add(color);
    }
    //cuando esten todos los elementos valuados, 
    //actualizamos la pagina
    if(adivinanza.children.length === 0 && respuesta.children.length === 0){

        btn_comprobar.classList.add("ocultar")
        btn_jugar.classList.add("mostrar");
    }
   
}


adivinanza.addEventListener("click", moveAdi)
respuesta.addEventListener("click", moveRe)
btn_jugar.addEventListener("click", (event) => {
    location.reload();
})
btn_comprobar.addEventListener("click", comprobar);