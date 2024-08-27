import { formatearFecha, formatearNumero, acortarTexto } from './helper/helpers'

function App() {


  const edad = 18
  const valor = 12
  const paises = [
    {nombre:"Chile",dominio:'cl'},
    {nombre:"Peru",dominio:'pe'},
    {nombre:"Bolivia",dominio:'bo'},
    {nombre:"Argentina",dominio:'ar'},
    {nombre:"España",dominio:'es'},
    {nombre:"USA",dominio:'us'},
    {nombre:"Mexico",dominio:'mx'},
    {nombre:"Colombia",dominio:'co'},
    {nombre:"Venezuela",dominio:'ve'},
  ]

  const fecha = new Date();
  const cantidad = 34343
  const texto = `The Tailwind name and logos are trademarks of Tailwind Labs Inc.
                  You may not use the Tailwind name or logos in any way that could mistakenly imply any official connection with or endorsement of Tailwind Labs Inc. Any use of the Tailwind name or logos in a manner that could cause customer confusion is not permitted.
                  This includes naming a product or service in a way that emphasizes the Tailwind brand, like “Tailwind Themes” or “Tailwind Studio”, as well as in domain names like “tailwindkits.com”.
                  Instead, you must use your own brand name in a way that clearly distinguishes it from Tailwind CSS. Examples that are permitted include “ComponentStudio for Tailwind CSS” or “UtilityThemes: Templates for Tailwind CSS”.
                  Additionally, you may not use our trademarks for t-shirts, stickers, or other merchandise without explicit written consent.
                  `
  return (
    <>
      <h1>Condicional</h1>
      {edad >= 18 && 'Mayor de edad'}
      <hr />
      <h1>Renderizado con switch</h1>
      {(()=> {
          switch(valor){
            case 13:
              return 'Es 13'
            break;
            case 12:
              return 'Es 12'
            break;
            default:
              return 'Es otro'
            break;
          }
        })()}

        <hr />
        <h1>Ejemplo de loop</h1>
        <h3>Loop normal con ES6</h3>
        <ul>
          {[...Array(10)].map((x,i) => (
            <li>{++i}</li>
          ))}
        </ul>
        <h3>Inline IIFE</h3>
        <ul>
          {( function (rows, i ,len){
            while(++i <= len){
              rows.push(<li>{i}</li>)
            }
            return rows
          })([],0,10)}
        </ul>

        <h3>Con ES2015 syntax y Array methods</h3>
          <ul>
            {
              Array(10).fill(1).map((el,i)=> <li>{++i}</li>)
            }
          </ul>
        <h3>Ciclo for sencillo</h3>
          <ul>
            {(()=> {
              let rows = []
              for(let i = 1; i <= 10; i ++){
                rows.push(<li>{i}</li>)
              }
              return rows
            })()}
            </ul>
        <hr />
        <h1>Recorriendo con map</h1>
        {paises.map((pais) => 
          <p>Pais: {pais.nombre} - Dominio: {pais.dominio}</p>
        )}

        <hr />
        <h1>Helper Personalizado</h1>
        <ul>
          <li>Fecha {formatearFecha(fecha)}</li>
          <li>Cantidad {`$${formatearNumero(cantidad)}`}</li>
          <li>Texto {acortarTexto(texto,2,50)}</li>
        </ul>
    </>
  )
}

export default App
