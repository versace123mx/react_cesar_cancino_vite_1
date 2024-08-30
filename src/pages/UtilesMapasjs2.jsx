import { Link } from "react-router-dom"
import Map from 'react-map-gl'
const UtilesMapasjs2 = () => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/utiles">Home - Utiles</Link></li>
                    <li className="breadcrumb-item active">MapBox</li>
                </ul>
            </nav>
            <hr />
            <h3>MapBox</h3>
            <Map
                mapboxAccessToken="pk.eyJ1IjoiYWdlbmNpYXRhbWlsYSIsImEiOiJjbGIxYTIyOTIxYmN2M3BtOWZwaHBpc2szIn0.o5-258tBNKjcSg7INn3K1Q"
                initialViewState={{
                    longitude: -70.6097749,
                    latitude: -33.5312374,
                    zoom: 14,
                    itch: 60,
                    bearing: -60,
                    attributionControl: false
                }}
                style={{ width: 800, height: 600 }}
                mapStyle="mapbox://styles/mapbox/streets-v9" />
        </>
    )
}

export default UtilesMapasjs2
