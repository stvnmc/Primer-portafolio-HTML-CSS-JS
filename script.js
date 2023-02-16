const parteS = document.querySelector(".parteSuperior");
const menu = document.querySelector(".menu");
const wrapper = document.querySelector(".informacionDeIconos");
const menuIteam = document.querySelectorAll(".menuIteam");
const portadaDeP = document.querySelector(".portadaDeP");
const parteInferior = document.querySelector(".parteInferior");
const numeros = document.querySelectorAll(".numeros");


const abrirSuperior = menu.addEventListener("click", ()=>parteS.classList.toggle("open"));
const abrirInferior = portadaDeP.addEventListener("click", ()=>parteInferior.classList.toggle("open"));


numeros.forEach((item,index) => {
    item.addEventListener("click",()=>
    {
        
    })
})




// carucell
menuIteam.forEach((item, index) => {
    item.addEventListener("click", () => {
        //chnge the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

    });
});

