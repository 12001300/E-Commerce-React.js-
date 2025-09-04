import React from 'react'
import { AddedItems } from './AddedToCart'
import { useContext,createContext,useReducer } from 'react'
export const Authentication = createContext()
export function UserAuthentication({children}){
    const {cart}=useContext(AddedItems)
    function reducer(state,action){
        switch(action.type){
            case "SET-DATA":
                return {...state,logedin:null,userEmail:action.payload.userEmail,userName:action.payload.userName,userPassword:action.payload.userPassword}
                case "LOGIN":
                    return {...state,logedin:true}
                    case "LOGOUT":
                        
                return {...state,userName:"",userPassword:"",userEmail:"",logedin:false} 
            default:
                return state    
        }
    }
   
    function Logout(){
        dispach({type:"LOGOUT"})
    }
 const [state,dispach]=useReducer(reducer,{userName:"",userPassword:"",userEmail:"",logedin:false})
    return(<Authentication.Provider value={{Logout,state,dispach,reducer}}>{children}</Authentication.Provider>)
}
