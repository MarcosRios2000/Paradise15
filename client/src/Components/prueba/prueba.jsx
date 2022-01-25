import { Link } from "react-router-dom"


export default function Prueba() {

    return <div >
        <p className="title">
        este es el componente
        </p>
        <div className="link">
            <Link to= '/' >
                <strong>Me voy a casa</strong>
            </Link>
        </div>

        


    </div>
}