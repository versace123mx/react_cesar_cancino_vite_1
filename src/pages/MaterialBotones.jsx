import { Link } from "react-router-dom"
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function MaterialBotones() {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/material">Home - Material</Link></li>
                    <li className="breadcrumb-item active">Material Botones</li>
                </ul>
            </nav>
            <hr />
            <h3>Material Botones</h3>
            <div className="my-3">
                <Stack spacing={2} direction='row'>
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outline</Button>
                </Stack>
            </div>
            <div className="my-3">
                <Stack direction='row' spacing={2}>
                    <Button>Primary</Button>
                    <Button disabled>Disabled</Button>
                    <Button href="#">Link</Button>
                </Stack>
            </div>
            <div className="my-3">
                <Stack direction='row' spacing={2}>
                    <Button variant="contained">Contained</Button>
                    <Button variant="contained" disabled>Disabled</Button>
                    <Button href="#" variant="contained">Link</Button>
                </Stack>
            </div>
            <div className="my-3">
                <Stack direction='row' spacing={2}>
                    <Button variant="contained" disableElevation >Disable elevation</Button>
                </Stack>
            </div>
            <div className="my-3">
                <Stack direction='row' spacing={2}>
                    <Button variant="outline">Primary</Button>
                    <Button variant="outline" disabled>Disabled</Button>
                    <Button href="#" variant="outline">Link</Button>
                </Stack>
            </div>
            <div className="my-3">
                <Stack direction='row' spacing={2}>
                    <Button color="secondary">Secondary</Button>
                    <Button variant="contained" color="success">Disabled</Button>
                    <Button variant="outlined" color="error">Error</Button>
                </Stack>
            </div>

            <div className="my-3">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label">
                  Upload
                  <input hidden accept="image/*" multiple type="file" />
              </Button>
              <IconButton color="primary" aria-label="upload picture" component="label"><i className="fas fa-camera-retro"></i>
                  <input hidden accept="image/*" type="file" />
                  
              </IconButton>
          </Stack>
          </div>
          <div className="my-3">
          <Stack direction="row" spacing={2}>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
              </Button>
              <Button variant="contained" endIcon={<SendIcon />}>
                  Send
              </Button>
          </Stack>
          </div>
          <div className="my-3">
          <Stack direction="row" spacing={1}>
              <IconButton aria-label="delete">
                  <DeleteIcon />
              </IconButton>
              <IconButton aria-label="delete" disabled color="primary">
                  <DeleteIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="add an alarm">
                  <AlarmIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon />
              </IconButton>
          </Stack>
          </div>
        </>
    )
}

export default MaterialBotones
