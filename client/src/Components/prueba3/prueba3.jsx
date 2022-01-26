import { Link } from "react-router-dom"


export default function Prueba3() {

    return <div >
        <p className="title">
        este es el componente 3
        </p>
        <div className="link">
            <Link to= '/' >
                <strong>Me voy a casa</strong>
            </Link>
        </div>

        


    </div>
}