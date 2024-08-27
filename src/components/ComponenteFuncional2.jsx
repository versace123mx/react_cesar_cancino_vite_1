function ComponenteFuncional2({ props1, numero, paises }) {
    return (
        <div>
            <hr />
            <ul>
                <li>Contenido desde el porp1: {props1}</li>
                <li>Numero:{numero}</li>
                {paises.map((pais, i) =>
                    <li key={++i}>ID: {++i} - Pais:{pais.nombre}</li>
                )}
            </ul>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Dominio</th>
                    </tr>
                </thead>
                <tbody>
                    {paises.map((pais, i) =>
                        <tr key={pais.id}>
                            <td>{pais.id}</td>
                            <td>{pais.nombre}</td>
                            <td>{pais.dominio}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ComponenteFuncional2
