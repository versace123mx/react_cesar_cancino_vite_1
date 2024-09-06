const Validaciones = ({errores}) => {
    return (
      <>
      <div className="alert alert-danger">
          <ul>
              {errores.map((error, i) => (
              <li key={i}>{error}</li>
              ))}
          </ul>
          
      </div>
      </>
    )
  }
  
  export default Validaciones