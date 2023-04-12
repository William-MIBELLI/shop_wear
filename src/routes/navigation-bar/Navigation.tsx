
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'

import { NavigationBar, LogoContainer, NavLinks, NavLink } from './Navigation.style'
import {  useSelector, useDispatch } from 'react-redux'
import { selectDisplayCart } from '../../store/cart/cart.selector'
import { signOutStart } from '../../store/user/user.action'
import { rootState } from '../../store/store'


const Navigation = () => {

    const { currentUser } = useSelector((state : rootState) => state.user )
    const displayCart = useSelector(selectDisplayCart)
    const dispatch = useDispatch()

    const onSignOutClick = () => {
        console.log('on rentre dans onsignoutclick')
        dispatch(signOutStart())
    }

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
                            <NavLink as='span' onClick={onSignOutClick}>SIGN-OUT</NavLink>
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