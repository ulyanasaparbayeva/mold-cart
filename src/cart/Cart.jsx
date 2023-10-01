  import './Cart.scss';
  import {BsCart2} from "react-icons/bs";
  import {AiOutlineClose} from "react-icons/ai";
  import React, {useState} from "react";
  import empty from "../images/empty.png";
  import { useSelector } from 'react-redux';
  import {FaChevronRight} from "react-icons/fa";
  import {FiTrash2} from "react-icons/fi";

  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  const Cart = () => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartProducts = useSelector(state => state.cart.cartProducts) || [];
    console.log(cartProducts);


    const totalPrice = cartProducts.reduce((total, product) => {
      return total + (product.totalPrice || 0);
    }, 0);
    const cartMainStyle = cartProducts.length !== 0 ? { overflowY: 'auto' } : { overflowY: 'visible' };


    return (
      <div>
        {isCartOpen && <div className="overlay"></div>}
        <div className={isCartOpen ? "cart cart--active": "cart"}>
          {isCartOpen ?
            <button onClick={() => setIsCartOpen(false)} className="close-btn">
              <AiOutlineClose className="close-btn"/>
            </button>
            :
            <button onClick={() => setIsCartOpen(true)} className="cart-toggle">
              <div className="wrapper">
                <p className="number-cart">{cartProducts.length}</p>
                <BsCart2 className="cart-icon"/>
              </div>
              <div className="Navbar_navbar__maincost">
                <p>{totalPrice}</p><span>CUM</span>
              </div>
            </button>
          }
          <div className="cart-body">
            <div className="cart-item">
              <h2 className="cart-title">Cart</h2>
              {cartProducts.length > 0 && (
                <button   className="btn-close-remove">Барчасини ўчириш</button>
              )}
            </div>
            <div  className={`cart-main${cartProducts.length !== 0 ? ' cart--main-secondary' : ''}`}  style={cartMainStyle}
            >
              {cartProducts.length === 0 ? (
                <div className="cart-empty">
                  <div style={{marginBottom:"30px", fontSize:"30px", fontWeight:"bold"}}>Сават бўш</div>
                  <img src={empty}/>
                  <div className="cart__title">Харид қилиш</div>
                </div>
              ) : (
                cartProducts.map(product =>
                  <div key={product.id}>{product.name}
                    <div className="cart-main">
                      <div className="cart-container">
                        <div className="container-aznt">
                          <div className="cart-item-secondary">
                            <img className="cart-images" src={product?.productImages}/>
                            <div className="cart-info">
                              <div style={{display:"flex", alignItems:"center"}}>
                                <h1 className="productName_uz">{product?.productName_uz}</h1>
                                <FaChevronRight style={{fontSize:"25px", margin:"0 10px"}}/>
                              </div>
                              <div className="cart-price">{product?.totalPrice} CУМ</div>
                              <div className="cart-count">
                                <h2 style={{fontWeight:"500",fontSize:"18px",color:"#696969",paddingTop:"10px"}}>Cони:
                                  <button className="cart-btn-counter">-</button>
                                  <button className="cart-btn-counter">+</button>
                                </h2>
                              </div>
                            </div>
                            <button className="cart-item-remove">
                              <FiTrash2/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>)
              )}
            </div>
            <br/>
            <br/>
            {cartProducts.length > 0 && (
              <div className="cart-submission">
                <div className="cart-submission-title">Coni: {cartProducts.length}</div>
                <div className="cart-submission-total-price"> {totalPrice}<span> CUM</span></div>
                <form>
                  <input
                    className="cart-submission-input"
                    required minLength={3}
                    type="text"
                    placeholder="Your First and Last Name"/>
                  <input
                    className="cart-submission-input"
                    required type="text"
                    placeholder="Phone (991234567)"/>
                  <button className="cart-submission-btn">Submit an order</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default Cart;
