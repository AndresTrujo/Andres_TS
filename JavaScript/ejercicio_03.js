const cuadro = document.querySelector('#miId');
cuadro.textContent = "Ese texto viene desde JavaScript";

const contenedor = document.querySelector('.miClase');
contenedor.textContent = "Este texto viene desde JavaScript tambien";

function logEvent(event){
    console.log(`El evento ${event.type} fue disparado.`);
}

function agregarClase(event){
    //no se le ponen acotaciones de clase ( . ó # )
    contenedor.classList.toggle('claseNueva');
}

cuadro.addEventListener('click', () => {
    cuadro.innerText = "Hiciste click en el contenedor";
});
cuadro.addEventListener('dblclick', () => {
    cuadro.textContent = "";
});
cuadro.addEventListener('mouseover', logEvent);
cuadro.addEventListener('mousedown', logEvent);
cuadro.addEventListener('mouseup', logEvent);
cuadro.addEventListener('mousemove', logEvent);
cuadro.addEventListener('mouseout', logEvent);

contenedor.addEventListener('click', agregarClase);