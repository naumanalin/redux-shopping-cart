import { useDispatch, useSelector } from "react-redux";
import { remove, addonemore, removebyone } from '../redux/cartSlice'; // Import actions
import Header from "./Header";

const AddedCarts = () => {
    const cartItems = useSelector((state) => state.cart); // Access cart state from the store
    const dispatch = useDispatch();

    const handlRemove = (id) => {
        dispatch(remove(id));
    };

    const handleAddOneMore = (id) => {
        dispatch(addonemore(id));
    };

    const handleRemoveByOne = (id) => {
        dispatch(removebyone(id));
    };

    return (
        <>
            <Header />
            <div className="container">
                {cartItems.length === 0 ? (
                    <p>No items in the cart.</p>
                ) : (
                    <div className="cart-items">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr.</th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={item.image} alt={item.title} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>
                                            <button onClick={() => handleRemoveByOne(item.id)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleAddOneMore(item.id)}>+</button>
                                        </td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                        <td>
                                            <button className="remove-btn" onClick={() => handlRemove(item.id)}>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <div className="total-price-section">
                    <h3>
                        Total Price RS. {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} /-
                    </h3>
                </div>
            </div>
        </>
    );
};

export default AddedCarts;
