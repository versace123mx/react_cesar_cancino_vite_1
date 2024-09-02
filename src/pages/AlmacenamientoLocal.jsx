import { Link } from "react-router-dom"
import { useState } from "react"
import { showAlert } from "../helper/helpers"
function AlmacenamientoLocal() {
    return (
        <>
            <h1>Loca Storage</h1>
            <ul>
                <li>
                    <Link to="/almacenamientoLocal/LocalStorage">LocaStorage</Link>
                </li>
                <li>
                    <Link to="/almacenamientoLocal/sessionStorage">sessionStorage</Link>
                </li>
            </ul>
        </>
    )
}

export default AlmacenamientoLocal
