import { Link } from "react-router-dom"
import { useState } from "react";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MaterialAcordeon = () => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/material">Home - Material</Link></li>
                    <li className="breadcrumb-item active">Material Acordeon</li>
                </ul>
            </nav>
            <hr />
            <h3>Material Acordeon</h3>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography variant="h4" sx={{ width: '33%', flexShrink: 0 }}>
                        PHP
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        echo "hola mundo;"
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src="/image/laravel750x422-1.jpg" width="250" />
                    <hr />
                    <Typography>
                        PHP es uno de los lenguajes más utilizados en la actualidad, sobre todo a nivel de los CMS (Content Management System) y
                        LMS (Learning Management System) que existen en el mercado.

                        Laravel es el framework estrella de PHP, es el más utilizado actualmente, y cuenta con una amplia comunidad detrás que
                        está permanentemente desarrollando mejoras.

                        En este curso aprenderás cómo crear aplicaciones completamente funcionales con este potente framework de desarrollo, y
                        obtendrás las herramientas para salir de forma real a buscar empleo con Laravel. Además aprenderás a implementar la
                        pasarela de pago Webpay de Transbank .
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography variant="h4" sx={{ width: '33%', flexShrink: 0 }}>Spring Boot</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        th:text="hola mundo"
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src="/image/springb750x422.jpg" width="250" />
                    <hr />
                    <Typography>
                        Spring Boot facilita la creación de aplicaciones basadas en Spring independientes y de grado de producción que puede
                        "simplemente ejecutar". Según sus creadores, se tomó una opinión obstinada de la plataforma Spring y las bibliotecas de
                        terceros para que pueda comenzar con el mínimo esfuerzo. La mayoría de las aplicaciones de Spring Boot necesitan una
                        configuración mínima de Spring.

                        Existe una alta demanda en el mercado por profesionales que manejen esta herramienta del ecosistema de Java Enterprise
                        Edition, y junto con el ORM Hibernate, se han logrado posicionar bastante bien.

                        En este curso aprenderás a trabajar de forma real con este framework, para tener una salida laboral efectiva. Al
                        terminar el curso contarás son sólidos conocimientos sobre esta Spring Boot.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography variant="h4" sx={{ width: '33%', flexShrink: 0 }}>FastAPI</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        print("hola mundo")
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src="/image/sticker-fastapi-tamila2.png" width="250" />
                    <hr />
                    <Typography>
                        Hoy vivimos en el mundo de las integraciones, en donde la mayoría de las aplicaciones deben ser capaces de poder
                        integrarse entre sí. Para eso, el mercado demanda profesionales capacitados para el desarrollo de APIs Rest para dichas
                        integraciones, ya sea para ser consumidas por clientes rest, o implementadas en microservicios.



                        FaspAPI es un ágil y moderno framework de Python, posee una alta demanda en el mercado, por su forma de hacer las cosas,
                        al estilo python, y con altos estándares, sobre todo desde el punto de vista de la seguridad.



                        En este curso te enseñaremos de manera enteramente práctica el uso de este framework de Python. Aprenderemos a trabajar
                        con él, y a conocer sus principales herramientas, y a implementar cada una de sus funcionalidades.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography variant="h4" sx={{ width: '33%', flexShrink: 0 }}>Django</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        print("hola mundo")
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src="/image/django-tamila-750.jpg" width="250" />
                    <hr />
                    <Typography>



                        Python es un lenguaje de programación creado por Guido Van Rossum a finales de los años 80s. Su versatilidad ha hecho
                        que Python se convierta en uno de los lenguajes de programación más utilizado en la actualidad, teniendo como nichos de
                        operación el mundo web, la ciencia de datos, el machine elearning, la bigdata, la automatización de procesos batch, el
                        hacking spripting, videojuegos, aplicaciones móviles nativas, entre otros.

                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default MaterialAcordeon
