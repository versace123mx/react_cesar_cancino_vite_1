import Parser from 'html-react-parser'

function App() {
  const ejemplo1 = `<h1>Titulo desde JSX con Interpolacion sin parsear</h1>`
  const ejemplo2 = `<h1>Hola desde JSX con interpolacion y con libreria interna de react</h1>`
  const ejemplo3 = `<h1 className='class_green'>Hola desde JSX con interpolacion y con libreria parser</h1>`
  return (
    <>
      <div>
        <h1>Hola Culoncita</h1>
        <img src="" alt="" />
      </div>
      {ejemplo1}
      <h1 className='class_roja' >Esta es la clase roja</h1>
      <div className='class_azul'  
      dangerouslySetInnerHTML={{__html:ejemplo2}}></div>
      <hr />
      {Parser(ejemplo3)}
    </>
  )
}

export default App
