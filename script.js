const inferior = document.querySelector('.parteInferior')

//Redes sociales

const Deslizantes = document.querySelectorAll(".carpetaDeslizantes")
const iconosDeMenu = document.querySelectorAll(".menuIteam")

iconosDeMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
        Deslizantes[0].style.transform = `translateY(${-124 * index}%)`
        Deslizantes[1].style.transform = `translateY(${-123 * index}%)`
        Deslizantes[2].style.transform = `translateY(${-122 * index}%)`
        Deslizantes[3].style.transform = `translateY(${-122 * index}%)`


        inferior.classList.remove('proyecto')
        inferior.classList.remove('info')
        inferior.classList.add('arriba')


        document.querySelector('.iconosDeMenu .activo').classList.remove('activo')
        item.classList.toggle('activo')
    })
})



// Informacion

const contenedor = document.querySelectorAll(".contenedor")
const logosF = document.querySelectorAll('.frontal')

logosF.forEach((item, index) => {
    item.addEventListener("click", () => {
        contenedor[0].style.transform = `translateY(${-109 * index}%)`
        contenedor[1].style.transform = `translateY(${-109 * index}%)`
        contenedor[2].style.transform = `translateY(${-109 * index}%)`


        inferior.classList.remove('proyecto')
        inferior.classList.remove('arriba')
        inferior.classList.add('info')


        document.querySelector('.locosJBR .activo').classList.remove('activo')
        item.classList.toggle('activo')
    })
})


// Proyectos

const proyectos = document.querySelectorAll(".proyectos")
const numerosDePaginas = document.querySelectorAll('.numeros')

numerosDePaginas.forEach((item, index) => {
    item.addEventListener("click", () => {
        proyectos[0].style.transform = `translateY(${-69 * index}vh)`
        proyectos[1].style.transform = `translateY(${-69 * index}vh)`
        proyectos[2].style.transform = `translateY(${-69 * index}vh)`

        inferior.classList.remove('arriba')
        inferior.classList.remove('info')
        inferior.classList.add('proyecto')

        document.querySelector('.numerosDePaginas .activo').classList.remove('activo')
        item.classList.toggle('activo')
    })
})