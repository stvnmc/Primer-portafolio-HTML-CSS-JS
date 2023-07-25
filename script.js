const datos = {
    "infoDeContactos": [
        {
            i: 'fa-brands fa-linkedin',
            h2: 'Linkedin',
            p: 'este es un parofo donde tengo que esplicar lo que e visto js y venderla motos Lorem ipsum dolor',
            img: 'img/One piece, Yamato.jpg'
        }, {
            i: 'fa-brands fa-instagram',
            h2: 'Instagram',
            p: 'este es un parofo donde tengo que esplicar lo que e visto js y venderla motos Lorem ipsum dolor',
            img: 'img/One piece, Yamato.jpg'
        }, {
            i: 'fa-brands fa-github',
            h2: 'Git',
            p: `Como desarrollador autodidacta desde mis comienzos siempre estuve aplicando lo que aprendía haciendo proyectos 
            que destacaran los conocimientos adquiridos, estudiando las mejores prácticas, entendiendo cómo funciona la programación 
            y la mejor forma de emplear su uso.`,
            img: 'img/One piece, Yamato.jpg'
        }, {
            i: 'fa-brands fa-youtube',
            h2: 'Youtube',
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
    'infoProyectos': [{
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
        nombre: ' 3 omoesas',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '4 dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '5 dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '6 dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: ' 7 PokeApi',
        img: 'img/PokeApi.jpg',
        href: 'https://github.com/stvnmc/Mini-Proyectos_JS/tree/main/PokeApi2',
        AboutP: 'Una PokeApi mas completa con sus con la informacion del pokemon y su generaciones'
    },
    {
        nombre: ' 8 2dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: ' 9 comoesas',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '10 4dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '11 5dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '12 6dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '13 7dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '14 8dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '15 8dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '16 8dsd',
        img: 'img/b lurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '17 8dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    },
    {
        nombre: '18 5dsd',
        img: 'img/blurry loading.png',
        AboutP: 'XBOX and PLAYS'
    }
    ]
};

const inferior = document.querySelector('body');

//////////////   Conctacto //////////////

for (let i = 0; i < datos.infoDeContactos.length; i++) {
    buttonContactoHTML =
        `
        <button class="menuIteam" id='${datos.infoDeContactos[i].h2}'>
        <i class="${datos.infoDeContactos[i].i}"></i>
        </button>
        `
    document.getElementById('iconosDeMenu').innerHTML += buttonContactoHTML;

    if (i === 0) document.getElementById(`${datos.infoDeContactos[i].h2}`).classList.add('activo');

    setTimeout(() => {
        let iconosDeContacto = document.getElementById(`${datos.infoDeContactos[i].h2}`)

        iconosDeContacto.addEventListener("click", () => {
            inferior.classList.add('arriba')
            inferior.classList.remove('info')
            inferior.classList.remove('proyecto')
            mostarInformcaionContacto(i)
            document.querySelector('.iconosDeMenu .activo').classList.remove('activo')
            iconosDeContacto.classList.toggle('activo')
        })
    }, 100);
};

const mostarInformcaionContacto = (value) => {
    document.getElementById('informacionDeIconos').innerHTML = '';
    infoContactoHTML =
        `
            <section class="carpetaDeslizantes">
                <div>
                    <h1>${datos.infoDeContactos[value].h2}</h1>
                    <p>${datos.infoDeContactos[value].p}</p>
                    <li><i class="${datos.infoDeContactos[value].i}"></i></li>
                </div>
                    <div class="infoImg">
                        <img src="${datos.infoDeContactos[value].img}" alt="${datos.infoDeContactos[value].h2}">
                    </div>
            </section>
        `
    document.getElementById('informacionDeIconos').innerHTML += infoContactoHTML;
};
mostarInformcaionContacto(0);


//////////////   Lo Aprendido //////////////

for (let i = 0; i < datos.infoDeLoAprendido.length; i++) {
    buttonLoAprendidoHTML =
        `
        <button class="frontal" id='${datos.infoDeLoAprendido[i].h}'>
        <i class="${datos.infoDeLoAprendido[i].i}"></i>
        </button>
        `
    document.getElementById('logosParteFrontal').innerHTML += buttonLoAprendidoHTML;

    if (i === 0) document.getElementById(`${datos.infoDeLoAprendido[i].h}`).classList.add('activo');


    setTimeout(() => {
        let button = document.getElementById(`${datos.infoDeLoAprendido[i].h}`)

        button.addEventListener("click", () => {
            inferior.classList.remove('arriba')
            inferior.classList.add('info')
            inferior.classList.remove('proyecto')
            mostarInformcaionLoAprendido(i)
            document.querySelector('.locosJBR .activo').classList.remove('activo')
            button.classList.toggle('activo')
        })
    }, 100);
};

const mostarInformcaionLoAprendido = (value) => {
    if (value == 0) value = 0;
    document.getElementById('informacion').innerHTML = '';
    infoLoAprendidoHTML =
        `<div class="contentInf">
            <h2>${datos.infoDeLoAprendido[value].h}</h2>
            <p>${datos.infoDeLoAprendido[value].p}</p>
            <img src="${datos.infoDeLoAprendido[value].img}">
        </div>`
    document.getElementById('informacion').innerHTML += infoLoAprendidoHTML;
};


//////////////  Proyecto  //////////////  

for (let i = 0; i < datos.infoProyectos.length / 6; i++) {
    buttonHTML =
        `
        <button class="indicador" id='${datos.infoProyectos[i].nombre}'><i class="fa-solid fa-${i + 1}"></i></button>
        `
    document.getElementById('indicadores').innerHTML += buttonHTML;

    if (i === 0) document.querySelector('.indicador').classList.add('activo');

    setTimeout(() => {
        let cajaDeProyectos = document.getElementById(`${datos.infoProyectos[i].nombre}`)
        cajaDeProyectos.addEventListener("click", () => {
            inferior.classList.remove('arriba')
            inferior.classList.remove('info')
            inferior.classList.add('proyecto')
            document.querySelector('.numerosDePaginas .activo').classList.remove('activo')
            cajaDeProyectos.classList.add('activo');
            mostarInformcaionProyectos(i)
        })
    }, 100)
};

const mostarInformcaionProyectos = (value) => {
    let start = value * 6;
    let end = start + 6;
    if (end == 0) end + 6;
    let ShowsProyects = datos.infoProyectos.slice(start, end)

    proyects.innerHTML = '';
    ShowsProyects.forEach(hola => {
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
};