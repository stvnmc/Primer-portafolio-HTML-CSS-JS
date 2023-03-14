
const parteS = document.querySelector(".parteSuperior")
const menu = document.querySelector(".menu")
const wrapper = document.querySelector(".informacionDeIconos")
const menuIteam = document.querySelectorAll(".menuIteam")
const portadaDeP = document.querySelector(".portadaDeP")
const parteInferior = document.querySelector(".parteInferior")
const cajaProyectos = document.querySelectorAll(".cajasDeProyectos")
const elementos1 = document.querySelector(".primerContenido")
const elementos2 = document.querySelector(".segundoContenido")
const elementos3 = document.querySelector(".tercerContenido")




menu.addEventListener("click", () => {
    parteS.classList.toggle("open")
    parteInferior.classList.toggle("bajo")
});
portadaDeP.addEventListener("click", () => {
    parteInferior.classList.toggle("open")
    // orisontal.parentNode.classList.remove('open')
});



function mover1() {
    elementos1.style.transform = "translate(0%, -2%)";
    elementos2.style.transform = "translate(110%, -100%)";
    elementos3.style.transform = "translate(110%, -200%";
}
function mover2() {
    elementos1.style.transform = "translate(110%, 0%)";
    elementos2.style.transform = "translate(0%, -100%)";
    elementos3.style.transform = "translate(110%, -200%";
}
function mover3() {
    elementos1.style.transform = "translate(117%, 0%)";
    elementos2.style.transform = "translate(106%, -100%)";
    elementos3.style.transform = "translate(0%, -200%)";
}


// carucell
menuIteam.forEach((item, index) => {
    item.addEventListener("click", () => {
        //chnge the current slide

        wrapper.style.transform = `translateX(${-100 * index}vw)`;

    });
});





const toggles = document.querySelectorAll(".frontal1, .frontal2 ,.frontal3");
const contenedor = document.querySelectorAll(".contenedor-js1, .contenedor-js2, .contenedor-js3");


toggles[0].addEventListener('click', () => {
    parteInferior.classList.remove('open')
    contenedor[0].classList.toggle('open')
    contenedor[1].classList.remove('open')
    contenedor[2].classList.remove('open')
})
toggles[1].addEventListener('click', () => {
    parteInferior.classList.remove('open')
    contenedor[0].classList.remove('open')
    contenedor[1].classList.toggle('open')
    contenedor[2].classList.remove('open')
})
toggles[2].addEventListener('click', () => {
    parteInferior.classList.remove('open')
    contenedor[0].classList.remove('open')
    contenedor[1].classList.remove('open')
    contenedor[2].classList.toggle('open')
})


