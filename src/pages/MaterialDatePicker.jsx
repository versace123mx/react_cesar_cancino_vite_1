import { Link } from "react-router-dom"

import { useState } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/es'


import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
dayjs.locale('es')

const MaterialDatePicker = () => {

    const [fecha1, setFecha1] = useState();
    const [hora1, setHora1] = useState();
    const handleFormulario = (e) => {
        e.preventDefault();
        setFecha1(e);
        alert(dayjs(fecha1).format('DD/MM/YYYY') + " | " + dayjs(hora1).format('H:mm'));
    };

    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/material">Home - Material</Link></li>
                    <li className="breadcrumb-item active">Material DatePicker</li>
                </ul>
            </nav>
            <hr />
            <h3>Material DatePicker</h3>

            <form onSubmit={handleFormulario}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
                    <Stack spacing={3}>
                        <div className='form-group'>
                            <DesktopDatePicker
                                className='form-control'
                                label="Fecha 1"
                                inputFormat="DD/MM/YYYY"
                                value={fecha1}
                                onChange={setFecha1}
                                renderInput={(params) => <TextField value={fecha1}
                                    {...params} />}
                            />
                        </div>
                        <div className='form-group'>
                            <TimePicker
                                className='form-control'
                                label="Hora"
                                value={hora1}
                                onChange={setHora1}
                                renderInput={(params) => <TextField {...params} value={hora1}
                                />}
                            />
                        </div>

                    </Stack>
                </LocalizationProvider>
                <hr />
                <Button variant="contained" type='submit'>Enviar</Button>
            </form>
        </>
    )
}

export default MaterialDatePicker
