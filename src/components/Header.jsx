import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const state = useSelector( (state) => state.cart)
    return <>
    <header>
        <nav>
            <div className="container flex flex-space-between-center justify-space-between align-center">
                <div className="nav-left">
                    <Link to={'/'} >Shopping Cart</Link>
                </div>
                <div className="nav-right">
                    <Link to={'/carts'} >
                    cart <sup>{state.length}</sup>
                    </Link>
                </div>
            </div>
        </nav>
    </header>
    
    </>
}


export default Header;