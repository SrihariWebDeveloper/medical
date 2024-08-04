import { createContext } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const url = 'http://localhost:10000';


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
