// funcionalidad de desplazar hacia arriba
const desplazarArriba = document.getElementById("desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Selecciones para Barra de navegación hamburguesa

const burger = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Cerrar el menú de hambuguesa cuando se hace click en un enlace  

// Seleccionar enlaces de navegación
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Traducir Ingles/Español

const traductor = document.getElementById('idioma');
console.log(traductor)

traductor.addEventListener("click", () => {
  if (traductor.innerHTML = "Inglés") {
    traductor.innerHTML = "Español";
    document.getElementById("acerca").innerHTML = "About Me";
    document.getElementById("habilidad").innerHTML = "Skills";
    document.getElementById("proyecto").innerHTML = "Projects";
    document.getElementById("contactar").innerHTML = "Contact";
    document.getElementById("nombre").innerText = "HI!, I AM ERNESTO";
    document.getElementById("ingeniero").innerText = "SYSTEMS ENGINEER";
    document.getElementById("mas").innerText = "More About Me";
    document.getElementById("p1").innerText = "Fullstack Web Developer and Information Systems Engineer. As a developer I perform both Frontend and Backend tasks."
    document.getElementById("p2").innerText = "I also have more than 15 years of experience in the public passenger transport sector, both in the administrative-operative part, as well as managerial."
    document.getElementById("p3").innerText = "I am currently looking for new challenges in the IT sector, in a company where I can add value from my experience and knowledge both within Web development and my university career."
    document.getElementById("encabezado-habilidad").innerText = "My Best Skills";
    document.getElementById("titulo-de-proyectos").innerText= "Some Of My Recent Projects";
    document.getElementsByClassName("enlace-de-proyecto")[0].innerText = "Check it out!";
    document.getElementById("popular_movies").innerText = "This project was created with Create React App. It uses the public API The Movie Database (TMDB) API. When the application starts, it shows the list of most popular movies, sorted by popularity. It has a search bar to search by movie name, filtered by rating, using a sort menu in star shape. If there are no movies in the filter or search, it shows an illustrative image. Clicking on the image of a film accesses a detail that shows another image, synopsis and date of realization among others."
    document.getElementsByClassName("enlace-de-proyecto")[1].innerText = "Check it out!";
    document.getElementById("my_ticket").innerText = "Participation in an agile development team with sprint of one week, exposing a Product Owner, advances on the development of a complete application of an Ecommerce, with the following features: catalog of products, category filter, search bar, login of users, shopping cart, checkout of the order and payment with Paypal, administrator and seller dashboard for product editing. Used technology: Javascript | HTML | CSS | React | Redux | Node | Sequelize | PostgreSQL "
    document.getElementsByClassName("enlace-de-proyecto")[2].innerText = "Check it out!";
    document.getElementById("henry_food").innerText = "SPA (Single-page Application) that integrates all the technologies seen in the bootcamp and consumes external API (https://spoonacular.com/food-api). In the application you can search for recipes, order them by score and by name, filter them by type of diet and origin, and even add your own recipes to your database. Fully develop this application both frontend and backend, with the following technologies: Javascript | HTML | CSS | React | Redux | Node | Sequelize | PostgreSQL"
    document.getElementById("titulo_contacto").innerText = "Contact Me";
    document.getElementById("name").placeholder = "write your name"
    document.getElementById("nombre_contacto").innerText = "Name";
    document.getElementById("email").placeholder = "enter your email"
    document.getElementById("email_contacto").innerText = "Email";
    document.getElementById("mensaje_contacto").innerText = "Message";
    document.getElementById("mensaje").placeholder = "Write your message"
    document.getElementById("submit-btn").value = "Send"
  } else {
    location.reload();
  }
  // if (traductor.innerHTML = "Inglés") {
  //   traductor.innerHTML = "Español"
  // }
})