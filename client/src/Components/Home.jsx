import Form from '../Components/Form';
import './Home.css'



export default function Home(){
    return (
        <div className="homeContainer">
            <img className="logo" src="/images/LogoParadise.png" alt="Logo" />
            <div className="paginaConstruccion">🚧 Página en construcción 🚧</div>
            <Form/>
        </div>
    )
}