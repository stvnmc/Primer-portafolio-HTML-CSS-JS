const inferior = document.querySelector('.parteInferior')
//Redes sociales
const Deslizantes = document.querySelectorAll(".carpetaDeslizantes")
// const iconosDeMenu = document.querySelectorAll(".menuIteam")
//Principal
const principal = document.querySelectorAll('.lista')
// lenguages y franworks
const contenedor = document.querySelectorAll(".contenedor")
const logosF = document.querySelectorAll('.frontal')
// Proyectos
const Proyectoddds = document.querySelectorAll('.numerosDePaginas')

//Principal
principal.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (index === 0) {
            abrirInformacion(iconosDeMenu)
        } else if (index === 1) {
            abrirInformacion(logosF)
        } else {
            abrirInformacion(Proyectoddds)
        }
        document.querySelector('.listas .activo').classList.remove('activo')
        item.classList.toggle('activo')
    })
})
//Redes sociales

// lenguages y franworks
logosF.forEach((item, index) => {
    item.addEventListener("click", () => {
        abrirInformacion(logosF, index)
        document.querySelector('.locosJBR .activo').classList.remove('activo')
        item.classList.toggle('activo')

        document.querySelector('.listas .I').classList.remove('activo')
        document.querySelector('.listas .L').classList.add('activo')
        document.querySelector('.listas .P').classList.remove('activo')
    })
})
// Proyectos
// numerosDePaginas.forEach((item, index) => {
//     item.addEventListener("click", () => {
//         document.querySelector('.numerosDePaginas .activo').classList.remove('activo');
//         item.classList.toggle('activo')

//         document.querySelector('.listas .I').classList.remove('activo')
//         document.querySelector('.listas .L').classList.remove('activo')
//         document.querySelector('.listas .P').classList.add('activo')
//     })
// })

const infoProyectContactos = [
    {
        i: 'fa-brands fa-linkedin',
        h2: 'Linkedin',
        p: 'este es un parofo donde tengo que esplicar lo que e visto js y venderla motos Lorem ipsum dolor',
        img: 'img/One piece, Yamato.jpg'
    }, {
        i: 'fa-brands fa-discord',
        h2: 'Instagram & Discord',
        p: 'este es un parofo donde tengo que esplicar lo que e visto js y venderla motos Lorem ipsum dolor',
        img: 'img/One piece, Yamato.jpg'
    }, {
        i: 'fa-brands fa-discord',
        h2: 'Git',
        p: 'este es un parofo donde tengo que esplicar lo que e visto js y venderla motos Lorem ipsum dolor',
        img: 'img/One piece, Yamato.jpg'
    }, {
        i: 'fa-solid fa-crop-simple',
        h2: 'Fraworts',
        p: 'este es un parofo donde tengo que esplicar lo que e visto js y venderla motos Lorem ipsum dolor',
        img: 'img/One piece, Yamato.jpg'
    }
]

const infoProyectos = [
    {
        nombre: 'PokeApi',
        img: 'img/PokeApi.jpg',
        href: 'https://github.com/stvnmc/Mini-Proyectos_JS/tree/main/PokeApi2',
        AboutP: 'Una PokeApi mas completa con sus con la informacion del pokemon y su generaciones'
    },
    {
        nombre: '2dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '3dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '4dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '5dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '6dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '7dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '8dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '8dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '8dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '8dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '5dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '5dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '5dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '5dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '5dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '5dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    }
]
const proyectos = document.querySelectorAll(".proyectos")

const hola = () => {
    //Proyecto    
    const infoProyect = infoProyectos.length / 6
    for (let i = 0; i < infoProyect; i++) {
        buttonHTML =
            `
            <button class="indicador">${i + 1}</button>
            `
        document.getElementById('indicadores').innerHTML += buttonHTML;

        if (i === 0) {
            document.querySelector('.indicador').classList.add('activo')
        }
    };
    const holaaa = document.querySelectorAll('.indicador')
    holaaa.forEach((como, index) => {
        como.addEventListener('click', (e) => {
            abrirInformacion(Proyectoddds)
            document.getElementById('proyects').style.transform = `translateY(${index * -71}vh)`
            document.querySelector('.numerosDePaginas .activo').classList.remove('activo')
            e.target.classList.add('activo');
        });
    });
    infoProyectos.forEach(hola => {
        generationsHTML = `
        <figure class="contenedores">
        <img src="${hola.img}">
        <div class="proyectos-informacion">
            <h2>${hola.nombre}</h2>
            <div>
            <a href="${hola.href}">
            <i class="fa-brands fa-github"></i>
            </a>
            </div>
            <div>
                <p>${hola.AboutP}</p>
            </div>
        </div>
    </figure>
        `
        proyects.innerHTML += generationsHTML;
    });


    // Informacion  
    infoProyectContactos.forEach(info => {
        buttonContactoHTML =
            `
            <div class="menuIteam">
                <i class="${info.i}"></i>
            </div>
            `
        document.getElementById('iconosDeMenu').innerHTML += buttonContactoHTML;

        infoContactoHTML =
            `
            <div class="carpetaDeslizantes">
                        <div class="descricion">
                            <h2>${info.h2}</h2>
                            <p>${info.p}</p>
                        </div>
                        <div class="foto">
                            <img src="${info.img}">
                        </div>
                    </div>
            `
        document.getElementById('informacionDeIconos').innerHTML += infoContactoHTML;
    })

    const iconosDelMenuDeContacto = document.querySelectorAll('.menuIteam')


    iconosDelMenuDeContacto.forEach((item, index) => {
        item.addEventListener("click", () => {
            abrirInformacion(iconosDeMenu, index)
            // document.querySelector('.iconosDeMenu .activo').classList.remove('activo')
            // item.classList.toggle('activo')
    
            // document.querySelector('.listas .I').classList.add('activo')
            // document.querySelector('.listas .L').classList.remove('activo')
            // document.querySelector('.listas .P').classList.remove('activo')
        })
    })



}

hola()




function abrirInformacion(openSeccion, index) {
    if (openSeccion === principal) {
        console.log('principal');
    } else if (openSeccion === iconosDeMenu) {
        document.getElementById('informacionDeIconos').style.transform = `translateY(${index * -53}vh)`
        inferior.classList.add('arriba')
        inferior.classList.remove('info')
        inferior.classList.remove('proyecto')
    }
    else if (openSeccion === logosF) {
        document.getElementById('informacion').style.transform = `translateY(${index * -77}vh)`
        inferior.classList.remove('arriba')
        inferior.classList.add('info')
        inferior.classList.remove('proyecto')
    }

    else if (openSeccion === Proyectoddds) {
        inferior.classList.remove('arriba')
        inferior.classList.remove('info')
        inferior.classList.add('proyecto')
    }
}
