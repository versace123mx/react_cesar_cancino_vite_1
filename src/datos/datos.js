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

export {
    categorias,
    productos,
    paises
}