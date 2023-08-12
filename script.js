const datos = {
  infoDeContactos: [
    {
      i: "fa-brands fa-linkedin",
      h2: "Linkedin",
      p: `Como desarrollador autodidacta desde mis comienzos siempre estuve aplicando lo que aprendía haciendo proyectos que destacaran los conocimientos
            adquiridos, estudiando las mejores prácticas, entendiendo cómo funciona la programación y la mejor forma de emplear su uso.`,
      img: "img/Git.png",
    },
    {
      i: "fa-brands fa-instagram",
      h2: "Instagram",
      p: `Empleo Instagram para compartir imágenes y videos de mis proyectos web, brindando una visión visual de mis habilidades. Esta plataforma me permite 
            presentar de manera atractiva mi trabajo a reclutadores y seguidores, destacando mis logros en el desarrollo.`,
      img: "img/Instagram.png",
    },
    {
      i: "fa-brands fa-github",
      h2: "Git",
      p: `Logré buenos hábitos y prácticas de código aplicables a cualquier trabajo como desarrollador, logré crear distintos proyectos y aprender sobre 
            distintas tecnologías y frameworks como: HTML, CSS, JavaScript, React, Git, entre otros mas.`,
      img: "img/Git.png",
    },
    {
      i: "fa-brands fa-youtube",
      h2: "Youtube",
      p: `Utilizo YouTube como plataforma para compartir videos detallados de mis proyectos de codificación. Esto permite a otros ver de manera visual y comprensible
            cómo abordo diferentes desafíos y desarrollo soluciones.`,
      img: "img/Instagram.png",
    },
  ],
  infoDeLoAprendido: [
    {
      i: "fa-brands fa-html5",
      h: "HTML & CSS",
      p: `Opto por HTML y CSS para construir mis proyectos web debido a su versatilidad y poder creativo.
            Estos lenguajes me permiten dar vida a mis ideas con estructura y estilo, creando experiencias 
            cautivadoras y funcionales que reflejan mis habilidades de desarrollo.`,
      img: "img/One piece, Yamato.jpg",
    },
    {
      i: "fa-brands fa-square-js",
      h: "JavaScript",
      p: `Integro JavaScript en mis proyectos web para potenciar la interactividad y la dinámica. 
            Con este lenguaje, transformo conceptos en funciones y características envolventes, 
            proporcionando experiencias web fluidas y enriquecedoras que demuestran mi compromiso con la excelencia en el desarrollo.`,
      img: "img/One piece, Falco.jpg",
    },
    {
      i: "fa-brands fa-react",
      h: "React",
      p: `Abrazo React en mis proyectos web por su enfoque en componentes reutilizables y eficiencia. A través de esta biblioteca,
            construyo interfaces dinámicas y de alto rendimiento que reflejan mi dedicación a proporcionar experiencias digitales 
            modernas y cautivadoras en mis desarrollos.`,
      img: "img/One piece,Kiado.jpg",
    },
    {
      i: "fa-solid fa-code",
      h: "TypeScript",
      p: `Empleo TypeScript en mis proyectos web para elevar la calidad de mi código. Con su tipado estático y herramientas
            de desarrollo robustas, construyo aplicaciones más seguras y mantenibles. Mi compromiso con la excelencia técnica 
            se refleja en cada implementación respaldada por TypeScript.`,
      img: "img/One piece, Falco.jpg",
    },
    {
      i: "fa-brands fa-bootstrap",
      h: "Bootstrap",
      p: `Bootstrap en mis proyectos web para agilizar el diseño responsivo y la estética. Sus componentes
            predefinidos me permiten crear interfaces pulidas y adaptables, demostrando mi capacidad para entregar 
            experiencias visuales y funcionales de alta calidad.`,
      img: "img/One piece, Falco.jpg",
    },
  ],
  infoProyectos: [
    {
      nombre: "PokeApi",
      img: "img/PokeApi.jpg",
      href: "https://github.com/stvnmc/Mini-Proyectos_JS/tree/main/PokeApi2",
      AboutP:
        "Una PokeApi mas completa con sus con la informacion del pokemon y su generaciones",
    },
    {
      nombre: "2dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: " 3 omoesas",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: "4 dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: "5 dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: "6 dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: " 7 PokeApi",
      img: "img/PokeApi.jpg",
      href: "https://github.com/stvnmc/Mini-Proyectos_JS/tree/main/PokeApi2",
      AboutP:
        "Una PokeApi mas completa con sus con la informacion del pokemon y su generaciones",
    },
    {
      nombre: " 8 2dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: " 9 comoesas",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: "10 4dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: "11 5dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: "12 6dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: "13 7dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: "14 8dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: "15 8dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: "16 8dsd",
      img: "img/b lurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: "17 8dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
    {
      nombre: "18 5dsd",
      img: "img/blurry loading.png",
      AboutP: "XBOX and PLAYS",
    },
  ],
};

const inferior = document.querySelector("body");

//////////////   Conctacto //////////////

for (let i = 0; i < datos.infoDeContactos.length; i++) {
  buttonContactoHTML = `
        <button class="menuIteam" id='${datos.infoDeContactos[i].h2}'>
        <i class="${datos.infoDeContactos[i].i}"></i>
        </button>
        `;
  document.getElementById("iconosDeMenu").innerHTML += buttonContactoHTML;

  if (i === 0)
    document
      .getElementById(`${datos.infoDeContactos[i].h2}`)
      .classList.add("activo");

  setTimeout(() => {
    let iconosDeContacto = document.getElementById(
      `${datos.infoDeContactos[i].h2}`
    );

    iconosDeContacto.addEventListener("click", () => {
      inferior.classList.add("arriba");
      inferior.classList.remove("info");
      inferior.classList.remove("proyecto");
      mostarInformcaionContacto(i);
      document
        .querySelector(".iconosDeMenu .activo")
        .classList.remove("activo");
      iconosDeContacto.classList.toggle("activo");
    });
  }, 100);
}

const mostarInformcaionContacto = (value) => {
  document.getElementById("informacionDeIconos").innerHTML = "";
  infoContactoHTML = `
            <section class="carpetaDeslizantes">
                <div class="contentDivided">
                    <h1>${datos.infoDeContactos[value].h2}</h1>
                    <p>${datos.infoDeContactos[value].p}</p>
                    <div>
                        <button><i class="${datos.infoDeContactos[value].i}"></i></button>
                    </div>
                </div>
                <div  class="contentDivided">
                    <img src="${datos.infoDeContactos[value].img}" alt="${datos.infoDeContactos[value].h2}">
                </div>
            </section>
        `;
  document.getElementById("informacionDeIconos").innerHTML += infoContactoHTML;
};
mostarInformcaionContacto(0);

//////////////   Lo Aprendido //////////////
function createButtons() {
  // Creamos los bototens
  for (let i = 0; i < datos.infoDeLoAprendido.length; i++) {
    buttonLoAprendidoHTML = `
            <button class="frontal" id='${datos.infoDeLoAprendido[i].h}'>
                <i class="${datos.infoDeLoAprendido[i].i}"></i>
            </button>
            `;
    document.getElementById("logosParteFrontal").innerHTML +=
      buttonLoAprendidoHTML;

    if (i === 0)
      document
        .getElementById(`${datos.infoDeLoAprendido[i].h}`)
        .classList.add("activo");
  }

  // Agregamos el evento a lo botones
  let buttons = document.querySelectorAll(".frontal");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      inferior.classList.remove("arriba");
      inferior.classList.add("info");
      inferior.classList.remove("proyecto");
      mostarInformacionLoAprendido(index);
      document.querySelector(".locosJBR .activo").classList.remove("activo");
      button.classList.toggle("activo");
    });
  });

  // Mostramos la informacion correpondiente de cada boton
  const mostarInformacionLoAprendido = (value) => {
    if (value == 0) value = 0;
    document.getElementById("informacion").innerHTML = "";
    infoLoAprendidoHTML = `<aside class="contentInf">
                <div class="contentDivided">
                    <h1>${datos.infoDeLoAprendido[value].h}</h1>
                    <p>${datos.infoDeLoAprendido[value].p}</p>
                    <div>
                        <button><i class="${datos.infoDeLoAprendido[value].i}"></i></button>
                        <button><i class="${datos.infoDeLoAprendido[value].i}"></i></button>
                        <button><i class="${datos.infoDeLoAprendido[value].i}"></i></button>
                    </div>
                </div>
                <div class="contentDivided">
                    <h2>Ejemplos </h2>
                    <div class="contentImg">
                        <div class="contProyec">
                            <img src="${datos.infoDeLoAprendido[value].img}">
                        </div>
                        <div class="contProyec">
                            <img src="${datos.infoDeLoAprendido[value].img}">
                        </div>
                        <div class="contProyec">
                            <img src="${datos.infoDeLoAprendido[value].img}">
                        </div>
                        <div class="contProyec">
                            <img src="${datos.infoDeLoAprendido[value].img}">
                        </div>
                    </div>
                </div>
            </aside>`;
    document.getElementById("informacion").innerHTML += infoLoAprendidoHTML;
  };
}

createButtons();

//////////////  Proyecto  //////////////

for (let i = 0; i < datos.infoProyectos.length / 6; i++) {
  buttonHTML = `
        <button class="indicador" id='${
          datos.infoProyectos[i].nombre
        }'><i class="fa-solid fa-${i + 1}"></i></button>
        `;
  document.getElementById("indicadores").innerHTML += buttonHTML;

  if (i === 0) document.querySelector(".indicador").classList.add("activo");

  setTimeout(() => {
    let cajaDeProyectos = document.getElementById(
      `${datos.infoProyectos[i].nombre}`
    );
    cajaDeProyectos.addEventListener("click", () => {
      inferior.classList.remove("arriba");
      inferior.classList.remove("info");
      inferior.classList.add("proyecto");
      document
        .querySelector(".numerosDePaginas .activo")
        .classList.remove("activo");
      cajaDeProyectos.classList.add("activo");
      mostarInformcaionProyectos(i);
    });
  }, 100);
}

const mostarInformcaionProyectos = (value) => {
  let start = value * 6;
  let end = start + 6;
  if (end == 0) end + 6;
  let ShowsProyects = datos.infoProyectos.slice(start, end);

  proyects.innerHTML = "";
  ShowsProyects.forEach((hola) => {
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
            `;
    proyects.innerHTML += generationsHTML;
  });
};
