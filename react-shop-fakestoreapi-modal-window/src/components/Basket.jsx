import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";


export function Basket({ orders, plus, minus, remove, removeAll, basketAmount, showBasket, setShowBasket }) {
    const total = orders.reduce((sum, el) => sum + el.price * el.quantity, 0)

    return (
        <div className='Basket'>
            <div className="heading">
                <h2 className="title">Shopping Bag ({basketAmount})</h2>
                <IoMdArrowForward onClick={() => setShowBasket(!showBasket)} />
            </div>

            <div className="cart-container">
                {
                    orders.map(item => (
                        <div className="cart">
                            <img src={item.image} alt={item.description} />

                            <div className="content">
                                <div className="name">
                                    <h3>{item.title}</h3>
                                    <IoMdClose onClick={() => remove(item.id)} />
                                </div>

                                <div className="details">
                                    <div className="quantity">
                                        <IoMdRemove onClick={() => minus(item.id)} />
                                        {item.quantity}
                                        <IoMdAdd onClick={() => plus(item.id)} />
                                    </div>

                                    <div className="price">
                                        <p>Price: ${item.price}</p>
                                        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {

                !!orders.length && <div className="total">
                    <p>Total: ${(total).toFixed(2)}</p>
                    <FiTrash2 onClick={removeAll} />
                </div>
            }
        </div>
    )
}