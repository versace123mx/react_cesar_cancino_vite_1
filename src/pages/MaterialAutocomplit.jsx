import { Link } from "react-router-dom"
import { useState } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { countries } from "../datos/datos";

function MaterialAutocomplit() {
    const [dato, setDato] = useState();
    const handleCampo = (e) => {
        e.preventDefault();
        alert(dato);
    };
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/material">Home - Material</Link></li>
                    <li className="breadcrumb-item active">Material Autocomplete</li>
                </ul>
            </nav>
            <hr />
            <h3>Material Autocomplete</h3>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleCampo}>
                <Autocomplete
                    id="country-select-demo"
                    sx={{ width: 300 }}
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt=""
                            />
                            {option.label} ({option.code}) +{option.phone}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a country"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            value={dato}
                            onChange={(e) => setDato(e.target.value)}

                        />
                    )}
                />
                <hr />
                <Button variant="contained" type='submit'>Enviar</Button>
            </form>
        </>
    )
}

export default MaterialAutocomplit
