import { createContext } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const url = 'https://medical-backend-x262.onrender.com';


    const ContextValue ={
        url
    }
    return(
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
