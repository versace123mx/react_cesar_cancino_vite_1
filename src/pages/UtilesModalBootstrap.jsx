import { Link } from "react-router-dom"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";//https://react-bootstrap.github.io/components/modal/


function UtilesModalBootstrap() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/utiles">Home - Utiles</Link></li>
                    <li className="breadcrumb-item active">Modal Bootstrap</li>
                </ul>
            </nav>
            <hr />
            <h3>Modal Bootstrap</h3>
            <Button variant="primary" onClick={handleShow}>Abrir</Button>
            <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Título</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="card  mb-3">
                        <div className="card-header text-white bg-primary">
                            <h1>Almacenamiento local</h1>
                        </div>
                        <div className="card-body">
                            <h3>Título</h3>
                            <p>Párrafo párrafo Párrafo párrafo Párrafo párrafo Párrafo párrafo Párrafo párrafo Párrafo párrafo Párrafo párrafo Párrafo párrafo Párrafo párrafo Párrafo párrafo</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                    <Button variant="primary">Alguna acción</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UtilesModalBootstrap
