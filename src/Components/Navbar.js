import { Link } from "react-router-dom"
import './NavBar.css'
import { AiOutlineDown } from "react-icons/ai";

export const Navbar = () => {
    return (
        <div className="bg-blue nav">
            <div className="nav-container flex justify-between items-center p-1 ">
                <div className="flex items-center">
                    <img 
                        src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png" 
                        alt="logo"
                        className="nav-logo"
                    />
                    
                </div>

                <div className="flex">
                    <Link to="/login">
                        Login
                    </Link>
                    
                    <Link to="/cart" className="ml-half">
                        Cart
                    </Link>
                </div>

            </div>
        </div>
    )
}
