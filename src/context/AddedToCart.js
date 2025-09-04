import { useContext,createContext ,useReducer} from "react";
import ProductsInfo from "../data/Products";
export const AddedItems=createContext()
export function Addedprouducts({children}){
    function reducer(cart,action){
        switch(action.type){
            case "ADD-ITEM":
                const existedCart=cart.find((prodcut=>prodcut.id===action.payload.id))
                if(existedCart){
                  return  cart.map(cartItem=>cartItem.id==action.payload.id?{...cartItem,quantity:(cartItem.quantity||1)+1}:cartItem)
                }else {
                        // Add new item with quantity
                        return [...cart, { ...action.payload, quantity: 1 }]
                    }
                
            case "REMOVE-ITEM":
                return cart.filter(Item=>Item.id !=action.payload)  
            case "CLEAR-CART":
                return []   
            default :
            return cart      
        }
    }
    const [cart,dispach]=useReducer(reducer,[])

    return(<AddedItems.Provider value={{cart,dispach}}>{children}</AddedItems.Provider>)
}
