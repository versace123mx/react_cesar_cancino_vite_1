import { Link } from "react-router-dom"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'
function UtilesGraficosjs() {

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['PHP', 'Python', 'Java', 'Javascript', 'C#', 'Golang'],
        datasets: [
            {
                label: 'Número de desarrolladores',
                data: [1200, 5501, 4300, 5231, 3214, 960],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/utiles">Home - Utiles</Link></li>
                    <li className="breadcrumb-item active">Graficas con Pie Chart</li>
                </ul>
            </nav>
            <hr />
            <h3>Graficas con Pie Chart</h3>
            <Pie data={data} />
        </>
    )
}

export default UtilesGraficosjs
