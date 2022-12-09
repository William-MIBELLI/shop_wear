import { useEffect } from "react";
import { createContext, useState } from "react";


const addItemsToCart = (cart, productToAdd) => {
    const existingItem = cart.find(item => item.id === productToAdd.id)
    if(existingItem){
        const temp = cart.map(product => {
            return product.id === productToAdd.id ? 
            {...product, quantity: product.quantity+1} : product
        })
        return temp
    }
    const np = {...productToAdd, quantity:1}
    return [...cart, np]
}

export const CartContext = createContext({
    displayCart: false,
    setDisplayCart: () => null,
    cartItems: [],
    addItemsToCart: () => {},
    nbItems: 0,
    cartTotal: 0
})

const removeItemFromCart = (cart, itemToRemove) => {
    const temp = cart.filter(item => {
         return item.name !== itemToRemove
    })
    return temp
}

const changeQuantityItemOnCart = (cart, itemName, mode) => {


    console.log('mode : ', mode)
    const finded = cart.find(item => item.name === itemName)
    if(finded.quantity === 1 && mode !== '+'){
        return removeItemFromCart(cart, finded.name)
    }
    const temp = cart.map(product => {
        return product.name === itemName 
                ? {...product, quantity: mode === '+' ? product.quantity + 1 : product.quantity - 1} 
                : product
    })
    return temp
}

export const CartProvider = ({ children }) => {

    const [ displayCart, setDisplayCart ] = useState(false)
    const [ cartItems, setCartItems ] = useState([])
    const [ nbItems, setNbItems ] = useState(0)
    const [ cartTotal, setCartTotal ] = useState(0)

    useEffect(()=>{
        const newNbItems = cartItems.reduce((total, current) => total + current.quantity,0)
        setNbItems(newNbItems)
    },[cartItems])

    useEffect(() => {
        const total = cartItems.reduce((total, current) =>  total + (current.quantity*current.price),0)
        setCartTotal(total)
    },[cartItems])

    const updateCart = (product) => {
        setCartItems(addItemsToCart(cartItems, product))
    } 

    const removeItem = (itemToRemove) => {
        setCartItems(removeItemFromCart(cartItems, itemToRemove))
    }

    const changeQuantity = (itemName, mode) => {
        setCartItems(changeQuantityItemOnCart(cartItems, itemName, mode))
    }

    const value = { displayCart, setDisplayCart, updateCart, cartItems, nbItems, removeItem, changeQuantity, cartTotal }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}