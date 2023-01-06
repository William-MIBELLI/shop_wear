
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/Firebase'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'

import { NavigationBar, LogoContainer, NavLinks, NavLink } from './Navigation.style'
import {  useSelector } from 'react-redux'
import { selectDisplayCart } from '../../store/cart/cart.selector'
import { selectCategoryReducer } from '../../store/category/category.selector'


const Navigation = () => {

    const { currentUser } = useSelector((state) => state.user )
    const displayCart = useSelector(selectDisplayCart)
    const cat = useSelector(selectCategoryReducer)

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