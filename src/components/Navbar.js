import logo from './image/logo.png'
import { AiOutlinePlusSquare, AiOutlineHeart  } from 'react-icons/ai';
import {IoPaperPlaneOutline} from 'react-icons/io5';


const Navbar = () => {
    return(
        <div className="nav">
            <ul>
                <li> <img  id="logo"src={logo}/> </li>
                <div className='icons'>
                <li > <AiOutlinePlusSquare /> </li>
                <li > <AiOutlineHeart /> </li>
                <li > <IoPaperPlaneOutline/></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;