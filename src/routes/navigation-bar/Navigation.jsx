import { useContext } from 'react'
import './Navigation.style.scss'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/UserContext'
import { signOutUser } from '../../utils/Firebase'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import { CartContext } from '../../contexts/CartContext'

const Navigation = () => {

    const { currentUser } = useContext(UserContext)
    const { displayCart } = useContext(CartContext)

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        !currentUser ? (
                            <Link className='nav-link' to='/auth'>
                                 SIGN-IN
                            </Link>
                        ) : (
                            <span className='nav-link' onClick={signOutUser}>SIGN-OUT</span>
                        )
                    }
                    <CartIcon/>
                </div>
                {displayCart && (
                    <CartDropdown />
                )}
            </div>
            <Outlet/>
        </>
    )
}

export default Navigation