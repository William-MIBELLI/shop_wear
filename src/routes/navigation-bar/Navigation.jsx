import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/UserContext'
import { signOutUser } from '../../utils/Firebase'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import { CartContext } from '../../contexts/CartContext'

import { NavigationBar, LogoContainer, NavLinks, NavLink } from './Navigation.style'


const Navigation = () => {

    const { currentUser } = useContext(UserContext)
    const { displayCart } = useContext(CartContext)

    return (
        <>
            <NavigationBar>
                <LogoContainer className='logo-container' to='/'>
                    <CrwnLogo/>
                </LogoContainer>
                <NavLinks>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        !currentUser ? (
                            <NavLink to='/auth'>
                                 SIGN-IN
                            </NavLink>
                        ) : (
                            <NavLink as='span' onClick={signOutUser}>SIGN-OUT</NavLink>
                        )
                    }
                    <CartIcon/>
                </NavLinks>
                {displayCart && (
                    <CartDropdown />
                )}
            </NavigationBar>
            <Outlet/>
        </>
    )
}

export default Navigation