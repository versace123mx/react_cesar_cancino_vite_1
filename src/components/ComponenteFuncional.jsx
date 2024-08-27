import ComponenteFuncional2 from "./ComponenteFuncional2"
import ChildrenComponent from './ChildrenComponent'

export default function ComponenteFuncional() {
    const nombre = "Gustavo Marchena"
    const numero = 1234
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
    return (
        <div>
            <h1>Componente funcional 1</h1>
            <ComponenteFuncional2 
                props1={nombre}
                numero={numero}
                paises={paises}
            />
            <hr />
            <ChildrenComponent>
                <p className="class_green">Desde el Children</p>
            </ChildrenComponent>
        </div>
    )
}
