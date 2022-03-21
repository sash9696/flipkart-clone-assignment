import { useStoreContext } from "../context/productContext";
import './Sidebar.css'

export const Sidebar = () => {

    const { state, dispatch } = useStoreContext();
    let brands = [];
    let idealFor = [];

    const brandList = state.productList.products.filter(product => {
        return !brands.includes(product.brand) && brands.push(product.brand);
    });

    const filterByGender = state.productList.products.filter(product => {
        return !idealFor.includes(product.idealFor) && idealFor.push(product.idealFor);
    })

    return (
        <div className="w-20 mx-10 sidebar">
            <h3 className="my-10">Sort</h3>
            <div className="flex-col">
                <label>
                    <input 
                        type="radio" 
                        name="sort" 
                        onChange={() => dispatch({type:"LOW_TO_HIGH"}) }  
                    /> 
                    Low To High
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="sort" 
                        onChange={() => dispatch({type: "HIGH_TO_LOW"}) }  
                    /> 
                    High To Low
                </label>
            </div>

            <h3 className="my-10">Filter</h3>
            <div className="flex-col">
                {
                    brands.map((brand, index) => (
                        <label key={index}>
                            <input 
                                type="checkbox" 
                                name={brand} 
                                onClick={() => dispatch({type: "FILTER_BRAND", payload: brand}) }
                            /> 
                            {brand}
                        </label>
                    ))
                }
            </div>
            
            <h3 className="my-10">Ideal for</h3>
            <div className="flex-col">
                {idealFor.map((gender, index) => (
                    <label key={index}>
                        <input 
                            type="radio" 
                            name="gender"
                            onClick={() => dispatch({type: "FILTER_BY_GENDER", payload: gender}) }
                        /> 
                        {gender}
                    </label>
                ))}
            </div>

        </div>
    )
}
