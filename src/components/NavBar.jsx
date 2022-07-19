import { slide as Menu } from 'react-burger-menu'

const NavBar = () => {
    return (
        <>
<header id="header">
<img id="img-header" class="animate__animated animate__fadeInLeft" src="./logo1.png"></img>


<nav class="animate__animated animate__fadeInDownBig">
            <ul class="menu">

                <li><a href=".\index.html">Home</a></li>
                <li> <a href=".\pages\nosotros.html">Nosotros</a></li>
                <li> <a href=".\pages\galeria.html">Carrito</a></li>
                <li> <a href=".\pages\contacto.html">Contacto</a></li>
                <li> <a href=".\pages\comprar.html">Como comprar?</a></li>

            </ul>
            
        </nav>

 
        </header>



       </>
        
    )
}

export default NavBar