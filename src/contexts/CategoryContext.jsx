
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import SHOP_DATA from '../shop-data.js'
import { createCollectionOrDocument, getCategoriesAndDocument } from "../utils/Firebase.js";



export const CategoryContext = createContext({
    categories: {},
    setCategories: () => null
})

export const CategoryProvider = ({ children }) => {

    const [ categories, setCategories ] = useState({})
    
    useEffect(() => {
        const getCategorie = async () => {
           const temp = await getCategoriesAndDocument()
           console.log('temp : ', temp)
           setCategories(temp)
        }

        getCategorie()
    },[])
    

    const value = { categories, setCategories }

    return (
        <CategoryContext.Provider value={value}>
            { children }
        </CategoryContext.Provider>
    )
}