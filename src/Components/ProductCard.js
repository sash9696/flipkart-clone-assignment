

export const ProductCard = ({product}) => {
    return (
        <>
            <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
            />
            <p className="l-color">{product.brand}</p>
            <p className="text-s">{product.description}</p>
            <p>
                ₹ {product.discountedPrice} <span 
                    className="strikethrough"
                >
                    {product.originalPrice} 
                </span> <span>
                    ({(100 - Math.ceil((product.discountedPrice / product.originalPrice )* 100))}%)
                </span>
            </p>
        </>
    )
}
