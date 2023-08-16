const datos = {
  infoDeContactos: [
    {
      i: "fa-brands fa-linkedin",
      h2: "Linkedin",
      p: `Fortalezco mi perfil profesional, exhibiendo proyectos web y conexiones clave para oportunidades de crecimiento y colaboración.`,
      img: "img/Git.png",
    },
    {
      i: "fa-brands fa-instagram",
      h2: "Instagram",
      p: `Comparto mi pasión creativa. A través de imágenes y videos, exhibo proyectos web, inspirando y conectando con audiencias.`,
      img: "img/Instagram.png",
    },
    {
      i: "fa-brands fa-github",
      h2: "Git",
      p: `Control preciso de versiones. Git asegura la integridad y colaboración fluida, mejorando la calidad de mis proyectos web.`,
      img: "img/Git.png",
    },
    {
      i: "fa-brands fa-youtube",
      h2: "Youtube",
      p: `Transmito conocimientos y procesos. Mediante videos, comparto mis proyectos web globalmente, estimulando aprendizaje y visibilidad.`,
      img: "img/Instagram.png",
    },
  ],
  infoDeLoAprendido: [
    {
      i: "fa-brands fa-html5",
      h: "HTML",
      p: `Con HTML, estructuro sólidas bases para mis proyectos, dando forma a la información esencial y navegación fluida.`,
    },
    {
      i: "fa-brands fa-css3-alt",
      h: "CSS",
      p: `CSS da vida a mis diseños, creando atractivas interfaces y estilos consistentes para experiencias visuales impactantes.`,
    },
    {
      i: "fa-brands fa-square-js",
      h: "JavaScript",
      p: ` Utilizo JavaScript para interactividad dinámica, transformando estáticos sitios en aplicaciones web potentes y envolventes.`,
    },
    {
      i: "fa-brands fa-bootstrap",
      h: "Bootstrap",
      p: `Con Bootstrap, desarrollo ágilmente interfaces responsivas y modernas, agilizando el diseño y optimizando la experiencia del usuario.`,
    },
  ],
  infoProyectos: [
    {
      nombre: "PokeApi",
      type: "html, css, javaScript",
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
                  <figure class="contentContacto">
                    <img src="${datos.infoDeContactos[value].img}" alt="${datos.infoDeContactos[value].h2}">
                  </figure>
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
                  <div class="contentDivided" id="ProyectosEspesificados">
                  </div>
            </aside>`;
    document.getElementById("informacion").innerHTML += infoLoAprendidoHTML;
    imgProyectos(value);
  };

  const imgProyectos = (value) => {
    console.log(value);

    imgProyecto = `
    <figure class="contenedoresInfo">
      <div class="contProyec")">
        <img src="${datos.infoProyectos[0].img}"/>
      </div>
    </figure>
    <figure class="contenedoresInfo">
      <div class="contProyec">
        <img src="${datos.infoProyectos[0].img}"/>
      </div>
    </figure>
    `;
    document.getElementById("ProyectosEspesificados").innerHTML += imgProyecto;
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
