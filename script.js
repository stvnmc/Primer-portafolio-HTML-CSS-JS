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


const datos = {
    "infoDeContactos": [
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
    ],
    "infoDeLoAprendido": [
        {
            i: 'fa-brands fa-square-js',
            h: 'HTML & CSS',
            p: 'este es un parofo donde tengo que esplicar lo que e visto js y venderla motos Lorem ipsum dolor',
            img: 'img/One piece, Yamato.jpg'
        }, {
            i: 'fa-brands fa-bootstrap',
            h: 'JavaScript',
            p: 'este es un parofo donde tengo que esplicar lo que e visto js y venderla motos Lorem ipsum dolor',
            img: 'img/One piece,Kiado.jpg'
        }, {
            i: 'fa-brands fa-react',
            h: 'React',
            p: 'este es un parofo donde tengo que esplicar lo que e visto js y venderla motos Lorem ipsum dolor',
            img: 'img/One piece, Falco.jpg'
        }
    ],
    'infoProyectos': [
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
            nombre: 'comoesas',
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
}


//////////////   Conctacto //////////////

for (let i = 0; i < datos.infoDeContactos.length; i++) {
    buttonContactoHTML =
        `
        <div class="menuIteam" id='${datos.infoDeContactos[i].h2}'>
        <i class="${datos.infoDeContactos[i].i}"></i>
        </div>
        `
    document.getElementById('iconosDeMenu').innerHTML += buttonContactoHTML;

    if (i === 0) {
        document.getElementById(`${datos.infoDeContactos[i].h2}`).classList.add('activo')
    };

    setTimeout(() => {
        let iconosDeContacto = document.getElementById(`${datos.infoDeContactos[i].h2}`)

        iconosDeContacto.addEventListener("click", () => {
            abrirInformacion(iconosDeMenu, i)
            document.querySelector('.iconosDeMenu .activo').classList.remove('activo')
            iconosDeContacto.classList.toggle('activo')
        })
    }, 100);

    infoContactoHTML =
        `
            <div class="carpetaDeslizantes">
                        <div class="descricion">
                            <h2>${datos.infoDeContactos[i].h2}</h2>
                            <p>${datos.infoDeContactos[i].p}</p>
                        </div>
                        <div class="foto">
                            <img src="${datos.infoDeContactos[i].img}">
                        </div>
                    </div>
            `
    document.getElementById('informacionDeIconos').innerHTML += infoContactoHTML;
};



//////////////   Lo Aprendido //////////////

for (let i = 0; i < datos.infoDeLoAprendido.length; i++) {
    buttonLoAprendidoHTML =
        `
        <button class="frontal" id='${datos.infoDeLoAprendido[i].h}'>
        <i class="${datos.infoDeLoAprendido[i].i}"></i>
        </button>
        `
    document.getElementById('logosParteFrontal').innerHTML += buttonLoAprendidoHTML;

    if (i === 0) {
        document.getElementById(`${datos.infoDeLoAprendido[i].h}`).classList.add('activo')
    };

    setTimeout(() => {
        let button = document.getElementById(`${datos.infoDeLoAprendido[i].h}`)

        button.addEventListener("click", () => {
            abrirInformacion(logosF, i)
            document.querySelector('.locosJBR .activo').classList.remove('activo')
            button.classList.toggle('activo')
        })
    }, 100);

    infoLoAprendidoHTML =
        `
        <div class="contenedor">
            <h2>${datos.infoDeLoAprendido[i].h}</h2>
            <p>${datos.infoDeLoAprendido[i].p}</p>
            <div class="cont2">
                <img src="${datos.infoDeLoAprendido[i].img}">
            </div>
        </div>
    `
    document.getElementById('informacion').innerHTML += infoLoAprendidoHTML;
}


//////////////  Proyecto  //////////////  

for (let i = 0; i < datos.infoProyectos.length / 6; i++) {
    buttonHTML =
        `
        <button class="indicador" id='${datos.infoProyectos[i].nombre}'>${i + 1}</button>
        `
    document.getElementById('indicadores').innerHTML += buttonHTML;

    if (i === 0) {
        document.querySelector('.indicador').classList.add('activo')
    }

    setTimeout(() => {
        let cajaDeProyectos = document.getElementById(`${datos.infoProyectos[i].nombre}`)
        cajaDeProyectos.addEventListener("click", () => {
            abrirInformacion(Proyectoddds, i)
            document.querySelector('.numerosDePaginas .activo').classList.remove('activo')
            cajaDeProyectos.classList.add('activo');
        })
    }, 1000)

};

datos.infoProyectos.forEach(hola => {
    console.log('fuera')
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
        document.getElementById('proyects').style.transform = `translateY(${index * -71}vh)`
        inferior.classList.remove('arriba')
        inferior.classList.remove('info')
        inferior.classList.add('proyecto')
    }
}
