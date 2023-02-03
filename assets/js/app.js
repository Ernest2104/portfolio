// Iniciar en Modo Oscuro
modoOscuro()
// funcionalidad de desplazar hacia arriba
const desplazarArriba = document.getElementById('desplazarse-hacia-arriba');

desplazarArriba.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

// Selecciones para Barra de navegación hamburguesa
const burger = document.querySelector('#menu-hamburguesa');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  ul.classList.toggle('show');
});

// Cerrar el menú de hambuguesa cuando se hace click en un enlace  

// Seleccionar enlaces de navegación
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link) =>
  link.addEventListener('click', () => {
    ul.classList.remove('show');
  })
);

// Traducir Ingles/Español
function espIng() {
  const traductor = document.getElementById('idioma');
  traductor.innerText = 'Español';
  const buttonDark = document.getElementById('darkMode');
  if (buttonDark.innerText === 'Modo Oscuro') {
    buttonDark.innerText = 'Dark Mode'
  } else {
    buttonDark.innerText = 'Clear Mode'
  } 
  document.getElementById('acerca').innerText = 'About me';
  document.getElementById('habilidad').innerText = 'Skills';
  document.getElementById('proyecto').innerText = 'Projects';
  document.getElementById('contactar').innerText = 'Contact';
  document.getElementById('nombre').innerText = 'HI!, I AM ERNESTO';
  document.getElementById('ingeniero').innerText = 'SYSTEMS ENGINEER';
  document.getElementById('mas').innerText = 'More About Me';
  document.getElementById('p1').innerText = 'Fullstack Web Developer and Information Systems Engineer. As a developer I perform both Frontend and Backend tasks.'
  document.getElementById('p2').innerText = 'I also have more than 15 years of experience in the public passenger transport sector, both in the administrative-operative part, as well as managerial.'
  document.getElementById('p3').innerText = 'I am currently looking for new challenges in the IT sector, in a company where I can add value from my experience and knowledge both within Web development and my university career.'
  document.getElementById('encabezado-habilidad').innerText = 'My Best Skills';
  document.getElementById('titulo-de-proyectos').innerText= 'Some Of My Recent Projects';
  document.getElementsByClassName('enlace-de-proyecto')[0].innerText = 'Check it out!';
  document.getElementById('popular_movies').innerText = 'This project was created with Create React App. It uses the public API The Movie Database (TMDB) API. When the application starts, it shows the list of most popular movies, sorted by popularity. It has a search bar to search by movie name, filtered by rating, using a sort menu in star shape. If there are no movies in the filter or search, it shows an illustrative image. Clicking on the image of a film accesses a detail that shows another image, synopsis and date of realization among others.'
  document.getElementsByClassName('enlace-de-proyecto')[1].innerText = 'Check it out!';
  document.getElementById('my_ticket').innerText = 'Participation in an agile development team with sprint of one week, exposing a Product Owner, advances on the development of a complete application of an Ecommerce, with the following features: catalog of products, category filter, search bar, login of users, shopping cart, checkout of the order and payment with Paypal, administrator and seller dashboard for product editing. Used technology: Javascript | HTML | CSS | React | Redux | Node | Sequelize | PostgreSQL '
  document.getElementsByClassName('enlace-de-proyecto')[2].innerText = 'Check it out!';
  document.getElementById('henry_food').innerText = 'SPA (Single-page Application) that integrates all the technologies seen in the bootcamp and consumes external API (https://spoonacular.com/food-api). In the application you can search for recipes, order them by score and by name, filter them by type of diet and origin, and even add your own recipes to your database. Fully develop this application both frontend and backend, with the following technologies: Javascript | HTML | CSS | React | Redux | Node | Sequelize | PostgreSQL'
  document.getElementById('curriculum').innerText = 'Download my resume'
  document.getElementById('titulo_contacto').innerText = 'Contact Me';
  document.getElementById('name').placeholder = 'write your name'
  document.getElementById('nombre_contacto').innerText = 'Name';
  document.getElementById('email').placeholder = 'enter your email'
  document.getElementById('email_contacto').innerText = 'Email';
  document.getElementById('mensaje_contacto').innerText = 'Message';
  document.getElementById('mensaje').placeholder = 'Write your message'
  document.getElementById('submit-btn').value = 'Send'
}

function ingEsp() {
  const traductor = document.getElementById('idioma');
  traductor.innerText = 'English';
  const buttonDark = document.getElementById('darkMode');
  
  if (buttonDark.innerText === 'Dark Mode') {
    buttonDark.innerText = 'Modo Oscuro'
  } else {
    buttonDark.innerText = 'Modo Claro'
  } 

    document.getElementById('acerca').innerText = 'Acerca de mi';
    document.getElementById('habilidad').innerText = 'Habilidades';
    document.getElementById('proyecto').innerText = 'Proyectos';
    document.getElementById('contactar').innerText = 'Contacto';
    document.getElementById('nombre').innerText = 'HOLA!, SOY ERNESTO';
    document.getElementById('ingeniero').innerText = 'ING.EN SIST.DE INFORMACIÓN';
    document.getElementById('mas').innerText = 'Más sobre mí';
    document.getElementById('p1').innerText = 'Fullstack Web Developer e Ingeniero en Sistemas de Información. Como desarrollador realizo tareas tanto de Frontend como de Backend.'
    document.getElementById('p2').innerText = 'Cuento además, con mas de 15 años de experiencia en el sector del Transporte público de pasajeros, tanto en la parte administrativa-operativa, como gerencial.'
    document.getElementById('p3').innerText = 'Actualmente busco nuevos desafíos en el sector IT, en una empresa donde pueda aportar valor desde mi experiencia y conocimientos tanto dentro del desarrollo Web, como de mi carrera universitaria.'
    document.getElementById('encabezado-habilidad').innerText = 'Mis mejores habilidades';
    document.getElementById('titulo-de-proyectos').innerText= 'Algunos de mis proyectos recientes';
    document.getElementsByClassName('enlace-de-proyecto')[0].innerText = 'Echale un vistazo!';
    document.getElementById('popular_movies').innerText = 'Este proyecto fue creado con Create React App. Utiliza la API pública The Movie Database (TMDB) API. La aplicación al iniciar, muestra el listado de películas mas populares, ordenadas por popularidad. Tiene una barra de busqueda para buscar por nombre de pélicula, filtrado por puntuación, mediante un menú de clasificación en forma de estrellas. En caso de no existir películas en el filtrado o búsqueda, muestra una imágen ilustrativa. Al hacer click sobre la imágen de una película se accede a un detalle que muestra otra imágen, sinopsis y fecha de realización entre otros.'
    document.getElementsByClassName('enlace-de-proyecto')[1].innerText = 'Echale un vistazo!';
    document.getElementById('my_ticket').innerText = 'Participación en un equipo de desarrollo ágil con sprint de una semana, presentándole a un Product Owner, avances sobre el desarrollo de una aplicación completa de un Ecommerce con las siguientes features: catálogo de productos, filtro por categorías, barra de búsqueda, login de usuarios, carrito de compras, checkout de la orden y pago con paypal, dashboard de administrador y vendedor para edición de productos. Tecnologías utilizadas: ReactJs, Redux, Express, Sequelize, PostgreSQL entre otras.'
    document.getElementsByClassName('enlace-de-proyecto')[2].innerText = 'Echale un vistazo!';
    document.getElementById('henry_food').innerText = 'SPA (Single-page Application) que integra todas las tecnologías vistas en el bootcamp y consume API externa (https://spoonacular.com/food-api). En la aplicación se pueden buscar recetas de cocina, ordenarlos por puntuación y por nombre, filtrarlos por tipo de dieta y origen, e incluso añadir tus propias recetas a tu base de datos. Para el Frontend utilicé React, Redux y CSS (styled-components), el Backend fue desarrollado con Node.js, Express y se conecta a la base de datos hecha en PostgreSQL, a través del ORM Sequelize.'
    document.getElementById('curriculum').innerText = 'Descarga mi curriculum'
    document.getElementById('titulo_contacto').innerText = 'Contactame';
    document.getElementById('name').placeholder = 'Escribe tu nombre'
    document.getElementById('nombre_contacto').innerText = 'Nombre';
    document.getElementById('email').placeholder = 'Ingresa tu correo electrónico'
    document.getElementById('email_contacto').innerText = 'Email';
    document.getElementById('mensaje_contacto').innerText = 'Mensaje';
    document.getElementById('mensaje').placeholder = 'Escribe tu mensaje'
    document.getElementById('submit-btn').value = 'Enviar'
}

function traductor() {
  const traductor = document.getElementById('idioma');
  if (traductor.innerText === 'English') {
    espIng();
  } else {
    ingEsp();
  }
};

function modoOscuro() {
  const buttonDark = document.getElementById('darkMode');
  if (document.getElementById('idioma').innerText === 'Español') {
    buttonDark.innerText = 'Clear Mode';
  } else {
    buttonDark.innerText = 'Modo Claro';
  }
  buttonDark.style.color = 'black';
  buttonDark.style.background = '#fcfcfc';
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
  if (document.getElementById('idioma').innerText === 'Español') {
    buttonDark.innerText = 'Dark Mode';
  } else {
    buttonDark.innerText = 'Modo Oscuro';
  }
  buttonDark.style.color = '#fcfcfc';
  buttonDark.style.background = 'black'
  document.body.style.background = '#fcfcfc';
  // document.body.style.transition = 'color 0.1s, background-color 0.2s ease-in-out';
  document.querySelector('nav').style.background = '#fcfcfc';
  document.querySelector('.bio').style.background = 'antiquewhite';
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
  if (boton === 'Modo Oscuro' || boton === 'Dark Mode') {
    modoOscuro()
  } else {
    modoClaro()
  }
}