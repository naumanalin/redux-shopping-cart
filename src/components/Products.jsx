import { useDispatch, useSelector } from "react-redux";
import { add, remove } from '../redux/cartSlice';
import { useEffect, useState } from "react";
import { fetchProducts } from '../redux/productSlice';

const Products = () => {
    const productsList = useSelector((state) => state.productList); // Fetch product list from the store
    const cartItems = useSelector((state) => state.cart); // Cart products
    const dispatch = useDispatch();
    const [filterCategory, setFilterCategory] = useState('all'); // State to store the selected category

    // Fetch products when the component mounts
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(add(product)); // Dispatch add action with the product object
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(remove(productId)); // Dispatch remove action with the product id
    };

    // Filter products based on the selected category
    const filteredProducts = productsList.data?.filter((product) => {
        if (filterCategory === 'all') return true;
        return product.category === filterCategory;
    });

    return (
        <div className="container">

            <div className="filter-section my-2rem">
                <button onClick={() => setFilterCategory('all')} className="filter-btn">All</button>
                <button onClick={() => setFilterCategory("men's clothing")} className="filter-btn">Men's Clothing</button>
                <button onClick={() => setFilterCategory("women's clothing")} className="filter-btn">Women's Clothing</button>
                <button onClick={() => setFilterCategory('jewelery')} className="filter-btn">Jewelery</button>
                <button onClick={() => setFilterCategory('electronics')} className="filter-btn">Electronics</button>
            </div>

            {productsList.isLoading && <p>Loading...</p>}
            {productsList.isError && <p>Error fetching products!</p>}

            {filteredProducts && (
                <div className="productWrapper">
                    {filteredProducts.map((product) => {
                        const isInCart = cartItems.some((item) => item.id === product.id);

                        return (
                            <div className="productitem" key={product.id}>
                                <div className="pro-img">
                                    <img src={product.image} alt="product" />
                                </div>

                                <p className="pro-cat">{product.category}</p>
                                <h3 className="pro-title">{product.title}</h3>
                                <p className="pro-price">${product.price}</p>

                                {isInCart ? (
                                    <button 
                                        className="btn btn-remove"
                                        onClick={() => handleRemoveFromCart(product.id)}>
                                        Remove from Cart
                                    </button>
                                ) : (
                                    <button 
                                        onClick={() => handleAddToCart(product)} 
                                        className="btn-cart">
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Products;
