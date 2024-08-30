import { Link } from "react-router-dom"
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

function UtilesSwipeablejs() {

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction 
                onClick={() => console.log("di click") }
                destructive={true}
                >
                <div className="alert alert-warning">Editar</div>
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => console.log("di click") }
                destructive={true}
                >
                <div className="alert alert-danger">Eliminar</div>
            </SwipeAction>
        </TrailingActions>
    )
    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/utiles">Home - Utiles</Link></li>
                    <li className="breadcrumb-item active">Swipeable</li>
                </ul>
            </nav>
            <hr />
            <h3>Swipeable</h3>
            <SwipeableList>
                <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
                    <div className="alert alert-dark">
                        Esta es una prueba
                    </div>
                </SwipeableListItem>
            </SwipeableList>
        </>
    )
}

export default UtilesSwipeablejs
