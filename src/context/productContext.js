import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/productsReducer";

const StoreContext = createContext();

export const StoreProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
};

export const useStoreContext = () => {
    return useContext(StoreContext);
}