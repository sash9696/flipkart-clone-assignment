import { ProductCard } from "../Components/ProductCard";
import { Sidebar } from "../Components/Sidebar";
import { useStoreContext } from "../context/productContext";
import './Store.css'

export const Store = () => {

    const { state } = useStoreContext();
    console.log(state);

    const sortProducts = (type, products) => {
        if (type === "LOW_TO_HIGH") {
            return products.sort((a, b) => a.discountedPrice - b.discountedPrice);
        };

        if(type === "HIGH_TO_LOW") {
            return products.sort((a, b) => b.discountedPrice - a.discountedPrice);
        };

        return products;
    
    };

    const sortedProducts = sortProducts(state.sort, state.productList.products);

    function filterProducts(brandList, products) {
        
        if(brandList.length > 0) {
            return products.filter(product => brandList.includes(product.brand))
        };
        
        return products
        
    };

    let filteredProducts = filterProducts(state.brandList, sortedProducts);

    function filterByGender(gender, products) {
        console.log(gender);
        if (gender) {
            return products.filter(product => product.idealFor === gender);
        } 

        return products
    };

    let filteredByGender = filterByGender(state.filterByGender, filteredProducts);

    return (
        <div className="flex background-white w-full store">
            <Sidebar/>
            <div className="w-80">
                <h2>{state.productList.category}</h2>

                <ul className="flex flex-wrap">
                    {
                        filteredByGender.map(product => (
                            <li key={product.id}
                                className="flex-col product-card"
                            >
                                <ProductCard product={product}/>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}
