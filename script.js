
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




const contenedor = document.querySelectorAll(".contenedor");
const logosF = document.querySelectorAll('.frontal')



logosF.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        parteInferior.classList.remove('open')
        contenedor[2].style.transform = `translateY(${-81 * index}vh)`
        contenedor[0].style.transform = `translateY(${-82 * index}vh)`
        contenedor[1].style.transform = `translateY(${-82 * index}vh)`

        document.querySelector('.locosJBR .activo').classList.remove('activo')
        item.classList.toggle('activo')
    });
});
