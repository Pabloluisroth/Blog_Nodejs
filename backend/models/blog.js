
// Partials ---> home.ejs
const home = [

    articulo_1 = {
        "titulo":"developers Web",
        "descripcion":"Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."
    },
    articulo_2 = {
        "titulo":"Backend",
        "descripcion":"Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more."
    },
    articulo_3 = {
        "titulo":"front-end",
        "descripcion":"Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height."
    },
];

// Partials ---> about.ejs
const about = {
    "titulo":"Border hero with cropped image and shadows",
    "descripcion":"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass constiables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass constiables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
    "imagen":"about.jpg"
};

// Partials ---> aplicaciones.ejs
const aplicaciones = [

    informacion = {
        "titulo":"Web",
        "descripcion":"Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.",
    },
    carta_1 = {
        "titulo":"Basica",
        "estado":["Free" , "day"],
        "descripcion":{
        "primera":"10 users included",
        "segunda":"2 GB of storage",
        "tercera":"Email support",
        "cuarta":"Help center access"
        }
    },
    carta_2 = {
        "titulo":"Estandar",
        "estado":["Free" , "day"],
        "descripcion":{
        "primera":"10 users included",
        "segunda":"2 GB of storage",
        "tercera":"Email support",
        "cuarta":"Help center access"
        }
    },
    carta_3 = {
        "titulo":"Advance",
        "estado":["Free" , "day"],
        "descripcion":{
        "primera":"10 users included",
        "segunda":"2 GB of storage",
        "tercera":"Email support",
        "cuarta":"Help center access"
        }
    },
    carta_4 = {
        "titulo":"Pro",
        "estado":["Free" , "day"],
        "descripcion":{
        "primera":"10 users included",
        "segunda":"2 GB of storage",
        "tercera":"Email support",
        "cuarta":"Help center access"
        }
    },
    tabla = {
        "titulo":"Tecnologias empleadas",
        "opciones":["Basica", "Estandar", "Advance", "Pro"],
        "Tecnologias":["Nodejs" ,"Servidor Express", "Lectura Dinamica", "Json Web token", "Base de datos", "Login & Register", "Angular", "Nodemailer"]
    }
];

// Partials ---> contacto.ejs
const contacto = {
    "titulo":"Contactenos",
    "descripcion":"A continuación se muestra un formulario de ejemplo creado completamente con los controles de formulario de Bootstrap. Cada grupo de formulario requerido tiene un estado de validación que se puede activar al intentar enviar el formulario sin completarlo."     
};

module.exports = {home, about, aplicaciones, contacto};