const categorias = [
    {id:1,nombre:'Frutas'},
    {id:2,nombre:'Verduras'},
]

const productos = [
    {id:1,categoria_id:1,nombre:'Manzana',precio:100},
    {id:2,categoria_id:1,nombre:'Uvas',precio:123},
    {id:3,categoria_id:1,nombre:'Duraznos',precio:245},
    {id:4,categoria_id:2,nombre:'Papas',precio:790},
    {id:5,categoria_id:2,nombre:'Lechuga',precio:1200},
    {id:6,categoria_id:2,nombre:'Repollo',precio:1800},
    {id:7,categoria_id:2,nombre:'Pimenton',precio:840},
    {id:8,categoria_id:2,nombre:'Limon',precio:1120},
    {id:9,categoria_id:1,nombre:'Cereza',precio:180},
    {id:10,categoria_id:1,nombre:'Fresa',precio:100},
]

const paises = [
    {id:1,nombre:"Chile",dominio:'cl'},
    {id:2,nombre:"Peru",dominio:'pe'},
    {id:3,nombre:"Bolivia",dominio:'bo'},
    {id:4,nombre:"Argentina",dominio:'ar'},
    {id:5,nombre:"España",dominio:'es'},
    {id:6,nombre:"USA",dominio:'us'},
    {id:7,nombre:"Mexico",dominio:'mx'},
    {id:8,nombre:"Colombia",dominio:'co'},
    {id:9,nombre:"Venezuela",dominio:'ve'}
]

const categoria_productos = [
    {id:1, nombre:'Abarrotes'},
    {id:2, nombre:'Lacteos'},
    {id:3, nombre:'Carnes'},
    {id:4, nombre:'Licores'},
    {id:5, nombre:'Perfumes'}
]
const atributos = [
    {id:1, nombre:'Perecible'},
    {id:2, nombre:'Armable'},
    {id:3, nombre:'Fragil'},
    {id:4, nombre:'Multiuso'},
    {id:5, nombre:'Edicion Limitada'}
]
const imagenes = [{
    id: 1,
    titulo: "Curso Django",
    nombre: 'https://automationpanda.com/wp-content/uploads/2017/09/django-logo-negative.png?w=620'
},
{
    id: 2,
    titulo: "Curso Laravel",
    nombre: 'https://proximahost.es/blog/wp-content/uploads/2022/05/Laravel.jpg'
},
{
    id: 3,
    titulo: "Curso SprinBoot",
    nombre: 'https://www.qindel.com/wp-content/uploads/2023/04/spring-boot.jpeg'
},
{
    id: 4,
    titulo: "Curso FastAPI",
    nombre: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/FastAPI_b.jpg'
},
{
    id: 5,
    titulo: "Curso Node",
    nombre: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fs15ubgod56c7butyt7eu.jpg'
},
{
    id: 6,
    titulo:"Curso Angular",
    nombre: 'https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2021/10/angular-todo-lo-que-necesitas-saber.png'
}
];
export {
    categorias,
    productos,
    paises,
    categoria_productos,
    atributos,
    imagenes
}