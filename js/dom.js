/////////////////////////////////WEB APi's///////////////////////////////////////////////////////////////////////////////////////////////////
//let texto = "Hola, soy el fercho coronel y ya me voy de la casa XD"

//const hablar = (texto) => speechSynthesis.
//speak(new SpeechSynthesisUtterance(texto));

//hablar(texto);
//console.log("************Elementos del Documento**************")
//console.log(document.head);
//console.log(document.body);
//console.log(document.charset);
//console.log(document.title);
//console.log(document.links);
//console.log(document.images);
//console.log(document.forms);
//console.log(document.styleSheets);
//console.log(document.scripts);
//console.log(document.getSelection().toString);
//document.write("<h1>Escrito desde el DOM</h1>")
//////////////////////Nodos, Elementos y Selectores///////////////////////////////////////////////////////////////////////////
//Metodos que ya no se utilizan
//console.log(document.getElementsByTagName("li"));
//console.log(document.getElementsByClassName("card"));
//console.log(document.getElementsByName("nombre"));

//Metodos que se utilizan
//console.log(document.getElementById("menu"));
//console.log(document.querySelector("#menu"));
//console.log(document.querySelector("a"));
//console.log(document.querySelectorAll("a"));
//console.log(document.querySelectorAll("a").length);
//document.querySelectorAll("a").forEach((el) => console.log(el));
//console.log(document.querySelectorAll(".card"))
//console.log(document.querySelectorAll(".card")[2])
//console.log(document.querySelector("#menu li"))
//console.log(document.querySelectorAll("#menu li"))
///////////////////////DOM: Atributos y Data Attributes/////////////////////////////////////////////////////////////////////////////
//Para acceder al atributo lang del HTML con cualquiera de los dos metodos
//console.log(document.documentElement.lang);
//console.log(document.documentElement.getAttribute("lang"));
//Sirve para ver el url del server
//console.log(document.querySelector(".link-dom").href);
//console.log(document.querySelector(".link-dom").getAttribute("href"));
//Sirve para agregar un nuevo valor al atributo
//document.documentElement.lang = "en";
//console.log(document.documentElement.lang);
//document.documentElement.setAttribute("lang", "es-MX");
//console.log(document.documentElement.lang);

//El signo del dolar se le asigna para poder identificar las variables del DOM
//const $linkDOM = document.querySelector(".link-dom");

//$linkDOM.setAttribute("target", "_blank");
//$linkDOM.setAttribute("href", "https://www.avaid.com.mx");
//Por buena practica y seguridad hack
//$linkDOM.setAttribute("rel", "noopener");
//console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
//console.log($linkDOM.getAttribute("data-description"));
//console.log($linkDOM.dataset);
//$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
//console.log($linkDOM.getAttribute("data-description"));
//////////////////////DOM: Estilos y Variables CSS//////////////////////////////////////////////////////////////////////////////////////////////////////
//const $linkDOM = document.querySelector(".link-dom");
//console.log($linkDOM.style);
//console.log($linkDOM.getAttribute("style"));
//console.log($linkDOM.style.backgroundColor);
//console.log($linkDOM.style.color);
//console.log(window.getComputedStyle($linkDOM))
//console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"))

//$linkDOM.style.setProperty("text-decoration", "none");
//$linkDOM.style.setProperty("display", "block");
//$linkDOM.style.width = "50%";
//$linkDOM.style.textAlign = "center";
//$linkDOM.style.marginLeft = "auto";
//$linkDOM.style.marginRight = "auto";
//$linkDOM.style.padding = "1rem";
//$linkDOM.style.borderRadius = ".5rem";

//console.log($linkDOM);
//console.log($linkDOM.getAttribute("style"));
//console.log(getComputedStyle($linkDOM))

//Variables CSS -- Custom Properties CSS
//const $html = document.documentElement,
//$body = document.body;

//let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//    varBlueColor = getComputedStyle($html).getPropertyValue("--blue-color");

//console.log(varDarkColor, varBlueColor);    

//$body.style.backgroundColor = varDarkColor;
//$body.style.color = varBlueColor;

//$html.style.setProperty("--dark-color", "black");
//varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

//$body.style.setProperty("background-color", varDarkColor);
//////////////////////////DOM: Clases CSS////////////////////////////////////////////////////////////////////////////////////////////////
//const $card = document.querySelector(".card");

//console.log($card);
//console.log($card.className);
//console.log($card.classList);
//$card.classList.add("rotate-45");
//console.log($card.classList.contains("rotate-45"));
//console.log($card.className);
//console.log($card.classList);
//$card.classList.remove("rotate-45");

////////////////////DOM: Texto y HTML//////////////////////////////////////////////////////////////////
//const $whatIsDOM = document.getElementById("que-es");

//let text = `<p>Document Object Model o DOM('Modelo de Objetos del Documento' o 
//'Modelo en Objetos para la Representación de Documentos') 
//es esencialmente una interfaz de plataforma que proporciona 
//un conjunto estándar de objetos para representar 
//documentos HTML, XHTML y XML,.</p>`;

//$whatIsDOM.innerText = text;//ya no se utiliza
//$whatIsDOM.textContent = text;
//$whatIsDOM.innerHTML = text; //asiga como si fuera html
//$whatIsDOM.outerHTML = text;
/////////////////DOM: Traversing, recorriendo el DOM///////////////////////////////////////////////////////////////////////////
//const $cards = document.querySelector(".cards");

//console.log($cards);
//console.log($cards.children);
//console.log($cards.childrenNodes);
//console.log($cards.children[2]);
//console.log($cards.parentElement);
//console.log($cards.firstElementChild);
//console.log($cards.lastElementChild);
//console.log($cards.previousSibling);
//console.log($cards.previousElementSibling);
//console.log($cards.nextElementSibling);
//console.log($cards.children[3].closest("section"))
////////////////DOM: Creando Elementos y Fragmentos//////////////////////////////////////////////////////////////////////////////////////////////
//const $figure = document.createElement("figure"),
//$img = document.createElement("img"),
//$figcaption = document.createElement("figcaption"),
//$figcaptionText = document.createTextNode("Animals"),
//$cards = document.querySelector(".cards"),
//$figure2 = document.createElement("figure");

//$img.setAttribute("src", "https://placeimg.com/200/200/animals");
//$img.setAttribute("alt", "Animales");
//$figure.classList.add("card");

//$figcaption.appendChild($figcaptionText);
//$figure.appendChild($img);
//$figure.appendChild($figcaption);
//$cards.appendChild($figure);

//$figure2.innerHTML = `
//<img src="https://placeimg.com/200/200/people" alt="People">
//<figcaption>Personas</figcaption>
//`;

//$figure2.classList.add("card");
//$cards.appendChild($figure2);

//const estaciones = ["Primavera", "Verano", "Otono", "Invierno"],
//$ul = document.createElement("ul");

//document.write("<h3>Estaciones del anio</h3>");
//document.body.appendChild($ul);

//estaciones.forEach(el =>{
//const $li = document.createElement("li");
//$li.textContent = el;
//$ul.appendChild($li);
//});

//const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
//$ul2 = document.createElement("ul");

//document.write("<h3>Continentes del Mundo</h3>");
//document.body.appendChild($ul2);
//$ul2.innerHTML = "";
//continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//const meses = [
//"Enero",
//"Febrero",
//"Marzo",
//"Abril",
//"Mayo",
//"Junio",
//"Julio",
//"Agosto",
//"Septiembre",
//"Octubre",
//"Noviembre",
//"Diciembre"
//],
//$ul3 = document.createElement("ul"),
//$fragment = document.createDocumentFragment();

//meses.forEach(el => {
//    const $li = document.createElement("li");
//    $li.textContent = el;
//    $fragment.appendChild($li);
//});

//document.write("<h3>Meses del Anio</h3>");
//$ul3.appendChild($fragment)
//document.body.appendChild($ul3);
/////////////////DOM: Templates HTML////////////////////////////////////////////////////////////////////////////
//const $cards = document.querySelector(".cards"),
//$template = document.getElementById("template-card").content,
//$fragment = document.createDocumentFragment(),
//cardContent = [
//{    
//    title: "Tecnologia",
//    img:"https://placeimg.com/200/200/tech",
//},
//{
//    title:"Animales",
//    img: "https://placeimg.com/200/200/animals",
//},
//{
//    title:"Arquitectura",
//    img: "https://placeimg.com/200/200/arch",
//},
//{
//    title:"Personas",
//    img: "https://placeimg.com/200/200/people",
//},
//{
//    title:"Naturaleza",
//    img: "https://placeimg.com/200/200/nature",
//},
//];

//cardContent.forEach(el => {
//$template.querySelector("img").setAttribute("src", el.img);    
//$template.querySelector("img").setAttribute("alt", el.title);
//$template.querySelector("figcaption").textContent = el.title;

//let $clone = document.importNode($template, true);
//$fragment.appendChild($clone);
//});

//$cards.appendChild($fragment);
///////////////////DOM:Modificar Elementos con Old Style//////////////////////////////////////////////////////////////////////////////
//const $cards = document.querySelector(".cards"),
//$newCard = document.createElement("figure"),
//$cloneCards = $cards.cloneNode(true);

//$newCard.innerHTML = `
//<img src="https://placeimg.com/200/200/any" alt="Any">
//<figcaption>Cualquiera</figcaption>
//`;
//$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[3]);//Reemplaza la tarjeta que este en el array
//$cards.removeChild($cards.lastElementChild);//Elimina una tarjeta
//$cards.insertBefore($newCard,$cards.firstElementChild);//la cambia por la primer tarjeta
//document.body.appendChild($cloneCards);
////////////////DOM: Modificar Elementos con Cool Style /////////////////////////////////////////////////////////////////////
//const $cards = document.querySelector(".cards"),
//$newCard = document.createElement("figure"),
//$cloneCards = $cards.cloneNode(true);

//let $contenCard = `
//<img src="https://placeimg.com/200/200/any" alt="Any">
//<figcaption></figcaption>
//`;
//$newCard.classList.add("card");

//$newCard.insertAdjacentHTML("beforeend", $contenCard);
//$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Cualquiera")
//$cards.insertAdjacentElement("afterbegin", $newCard);
///////////////////////DOM: Manejador de Eventos////////////////////////////////////////////////////////////////////
//function holaMundo(){
//    alert("Hola Mundo");
//    console.log(event);
//}
//function saludar(nombre = "Desconocido"){
//    alert(`Hola ${nombre}`);
//    console.log(event);
//}
//const $eventoSemantico = document.getElementById("evento-semantico"),
//    $eventoMultiple = document.getElementById("evento-multiple"),
//    $eventoRemover = document.getElementById("evento-remover");

//$eventoSemantico.onclick = holaMundo();
//$eventoSemantico.onclick = function(e){
//    alert("Hola Mundo Manejador de Evento Semantico");
//    console.log(e);
//    console.log(event);
//};

//$eventoMultiple.addEventListener("click",holaMundo);
//$eventoMultiple.addEventListener("click",(e) => {
//    alert("Hola Mundo Manejador de Eventos Multiples");
//    console.log(e);
//    console.log(e.type);
//    console.log(e.target);
//    console.log(event);
//});

//$eventoMultiple.addEventListener("click",() => {
//    saludar();
//    saludar("Fercho");
//});

//const removerDobleClick = (e) =>{
//    alert(`Removiendo el evento de tipo ${e.type}`);
//    console.log(e);
//    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
//    $eventoRemover.disable = true;
//}

//$eventoRemover.addEventListener("dblclick",removerDobleClick);
///////////////DOM: Flujo de Eventos(Burbuja y Captura)/////////////////////////////////////////////////////////////////////////
//const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//    $linkEventos = document.querySelector(".eventos-flujo a")
////////////////////DOM: Delegacion de Eventos////////////////////////////////////////////////////////////////////
//function flujoEventos(e){
//console.log(`Hola te saluda ${this.className}, el click lo origino 
//${e.target.className} `);
//}

//document.addEventListener("click", (e) =>{
//    console.log("Click en ", e.target);

//if(e.target.matches(".eventos-flujo div")){
//        flujoEventos(e);
//}

//if(e.target.matches(".eventos-flujo a")){
//    alert("Hola Soy Fercho")
//    e.preventDefault();
//}
//});
////////////////////BOM: Propiedades y Eventos///////////////////////////////////////////////////////////////////
//window.addEventListener("resize", (e) =>{
//    console.clear();
//    console.log("****Evento Resize****")
//    console.log(window.innerWidth);
//    console.log(window.innerHeight);
//    console.log(outerWidth);
//    console.log(outerHeight);
//    console.log(scrollX);
//    console.log(screenY);
//    console.log(e);
//});

//window.addEventListener("scroll", (e) =>{
//    console.clear();
//    console.log("****Evento Resize****")
//    console.log(scrollX);
//    console.log(screenY);
//    console.log(e);
//});

//window.addEventListener("load", (e) =>{
//    console.clear();
//    console.log("****Evento Load****")
//    console.log(window.screenX);
//    console.log(window.screenY);
//    console.log(e);
//})
///////////////////////////////////////////////////////////////////////////////////////////


































































