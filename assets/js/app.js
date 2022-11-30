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
});

function modoOscuro() {
  const buttonDark = document.getElementById('darkMode');
  buttonDark.innerText = 'Modo Claro'
  document.body.style.background = 'black';
  document.querySelector('nav').style.background = 'black';
  document.querySelector('.bio').style.background = 'black';
  document.querySelector('.mas-sobre').style.background = 'black';
  const skills = document.querySelectorAll('.tarjeta-icono');
  skills.forEach(skill => {
    skill.style.background = 'black';
  });
  document.querySelector('.proyectos').style.background = 'black';
  const projects = document.querySelectorAll('.tarjeta-de-proyecto');
  projects.forEach(project => {
    project.style.background = 'black'
  });
  const inputs = document.querySelectorAll('.input-field');
  inputs.forEach(input => {
    input.style.background = 'black';
    input.style.color = '#4756df';
  });
  const buttonSubmit = document.querySelector('.submit-btn');
  buttonSubmit.style.background = 'black';
  buttonSubmit.style.color = '#4756df';

  buttonSubmit.addEventListener('mouseover', () => {
    buttonSubmit.style.background = '#4756df';
    buttonSubmit.style.color = 'black';
    buttonSubmit.style.border = '2px solid #4756df';
    buttonSubmit.style.cursor = 'pointer';
  });
  buttonSubmit.addEventListener('mouseout', () => {
    buttonSubmit.style.background = 'black';
    buttonSubmit.style.color = '#4756df';
  });
  document.getElementsByTagName('footer')[0].style.background = 'black';
  document.getElementsByTagName('footer')[0].style.color = '#4756df';
}

function modoClaro() {
  const buttonDark = document.getElementById('darkMode');
  buttonDark.innerText = 'Modo Oscuro'
  document.body.style.background = '#fcfcfc';
  document.querySelector('nav').style.background = '#fcfcfc';
  document.querySelector('.bio').style.background = '#fcfcfc';
  document.querySelector('.mas-sobre').style.background = '#fcfcfc';
  const skills = document.querySelectorAll('.tarjeta-icono');
  skills.forEach(skill => {
    skill.style.background = '#fcfcfc';
  });
  document.querySelector('.proyectos').style.background = '#fcfcfc';
  const projects = document.querySelectorAll('.tarjeta-de-proyecto');
  projects.forEach(project => {
    project.style.background = '#fcfcfc'
  });
  const inputs = document.querySelectorAll('.input-field');
  inputs.forEach(input => {
    input.style.background = '#fcfcfc';
    input.style.color = '#4756df';
  });
  const buttonSubmit = document.querySelector('.submit-btn');
  buttonSubmit.style.background = '#fcfcfc';
  buttonSubmit.style.color = '#4756df';

  buttonSubmit.addEventListener('mouseover', () => {
    buttonSubmit.style.background = '#4756df';
    buttonSubmit.style.color = 'black';
    buttonSubmit.style.border = '2px solid #4756df';
    buttonSubmit.style.cursor = 'pointer';
  });
  buttonSubmit.addEventListener('mouseout', () => {
    buttonSubmit.style.background = '#fcfcfc';
    buttonSubmit.style.color = '#4756df';
  });
  document.getElementsByTagName('footer')[0].style.background = '#fcfcfc';
  document.getElementsByTagName('footer')[0].style.color = 'black';
}

function claroOscuro() {
  const boton = document.getElementById('darkMode').innerText
  console.log(boton)
  if (boton === 'Modo Oscuro') {
    modoOscuro()
  } else {
    modoClaro()
  }
}