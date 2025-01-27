import { Link } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';
function MaterialTable() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'Nombre', width: 130 },
        { field: 'lastName', headerName: 'E-Mail', width: 130 },
        {
            field: 'age',
            headerName: 'Edad',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Nombre completo',
            description: 'Esta columna tiene un captador de valor y no se puede ordenar.',
            sortable: false,
            width: 160,
            valueGetter: (value,row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
    ];
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/material">Home - Material</Link></li>
                    <li className="breadcrumb-item active">Material Tablet</li>
                </ul>
            </nav>
            <hr />
            <h3>Material Tablet</h3>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
            </div>
        </>
    )
}

export default MaterialTable
