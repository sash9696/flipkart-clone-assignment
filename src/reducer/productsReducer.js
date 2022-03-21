import { productList } from "../data/data";

export const initialState = {
    productList,
    brandList: [],
    filterByGender: "",
    sort: ""
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOW_TO_HIGH":
            return {
                ...state, 
                sort: "LOW_TO_HIGH"
            };
        
        case "HIGH_TO_LOW":
            return {
                ...state, 
                sort: "HIGH_TO_LOW"
            };

        case "FILTER_BRAND":
            let alreadyInBrandList = state.brandList.includes(action.payload);
            return {
                ...state,
                brandList: alreadyInBrandList 
                ? state.brandList.filter(brand => brand !== action.payload)
                : [...state.brandList, action.payload]
            };

        case "FILTER_BY_GENDER":
            return {
                ...state,
                filterByGender: action.payload
            }
    
        default:
            return state
    }
}