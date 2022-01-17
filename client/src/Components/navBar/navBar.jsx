import './navBar.css'
// import DehazeIcon from '@mui/icons-material/Dehaze';
import MenuButton from '../../assets/images/menu-button.png'



export function NavBar(){




    return <div className= 'navBar-container'>
        <img className='menu-icon' src={MenuButton} alt='img not found'/>
        <img className='logo-container' src='/images/LogoParadise.png' alt='img not found'/>
    </div>
}