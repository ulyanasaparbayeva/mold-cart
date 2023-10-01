
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../../api/axios';
import './ProductDetails.scss'
import {FiChevronRight,FiShoppingCart} from "react-icons/fi";
import {CgRadioChecked} from "react-icons/cg";
import {useDispatch} from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductDetails = () => {
  const dispatch = useDispatch()


  const [selectedVariant ,setSelectedVariant] = useState(0)
  const [productDetailsData, setProductDetailsData] = useState(null);
  let productDataInUrl = useParams();
  const [activeImagesNumber, setActiveImagesNumber] = useState(0);
 const [itemCounter, setItemCounter] = useState(1);






  useEffect(() => {
    instance(`/product/single-product/${productDataInUrl.id}`)
      .then(response =>  setProductDetailsData(response.data?.singleProduct?.at(0)))
      .catch(err => console.log(err))
  }, [productDataInUrl.id]);





function decrement() {
if(itemCounter > 1  ){
  setItemCounter(itemCounter - 1)
}
}


  function incerement() {
    if(itemCounter < +productDetailsData?.productSizesAndQuantity[selectedVariant].quantity) {
      setItemCounter(itemCounter + 1)
    }
  }


  function addToCart(product) {
  const {productSizesAndQuantity, ...rest} = product;
    rest.selectedType = productSizesAndQuantity[selectedVariant];
    rest.count = itemCounter;
    rest.totalPrice = productDetailsData.productSizesAndQuantity?.[selectedVariant].price * itemCounter
    console.log(rest)
    dispatch({ type: "ADD_TO_CART", product: rest });
    toast.success('Маҳсулот саватга қўшилди!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000
    });
  }






  return (
    <div className="product-details">
      <div className="product-details__images">
        <img className="product-details--images" src={productDetailsData?.productImages[activeImagesNumber]}/>
        <div className="product-details__images">
          {
            productDetailsData?.productImages.map((productImagesThumb,ind) =>
              <img style={ind === activeImagesNumber ? {border:" 2px solid dodgerblue"} :{border:" 1px solid transparent"} } width="100" height="100" src={productImagesThumb} alt="" onClick={() => setActiveImagesNumber(ind)}/>
            )
          }
        </div>
      </div>
      <div className="product-details__info">
        <h1>{productDetailsData?.productName_uz}</h1>
        <div className="product-details__direction">
           <div className="product-details__category">{productDetailsData?.productMainCategory_uz}</div>
           <span><FiChevronRight/></span>
          <div className="product-details__category">{productDetailsData?.productSubCategory_uz}</div>
        </div>
        <div className="product-details__select">
          <h2> Омборда:<span style={{color:"green"}}>{productDetailsData?.productSizesAndQuantity?.[0]?.quantity}</span></h2>
          <h2 className="product-details_size">Ўлчам:</h2>
          <select className="select" onChange={(e) => {
            setSelectedVariant(+e.target.value)
            setItemCounter(1)
          }}>
            {
              productDetailsData?.productSizesAndQuantity.map((productItemVariant, index) =>
              <option value={index}>{productItemVariant.size}</option>
              )
            }
          </select>
        </div>
        <div className="product-details__price">{productDetailsData?.productSizesAndQuantity[selectedVariant].price} CУМ</div>
        <div className="product-details__item">
          {productDetailsData?.productDescription_uz[0] && (
            <div className="product-details__info">
              <CgRadioChecked />
              {productDetailsData.productDescription_uz[0]}
            </div>
          )}
          {productDetailsData?.productDescription_uz[1] && (
            <div className="product-details__info">
              <CgRadioChecked />
              {productDetailsData.productDescription_uz[1]}
            </div>
          )}
        </div>

        <div className="product-details__counter">
          <div className="product-details__counterContainer">
          <h2 style={{fontWeight:"600",fontSize:"20px"}}>Cони:</h2>
            <div className="product-details_counter">
              <button onClick={decrement}>-</button>
              <span className="itemCounter">{itemCounter}</span>
              <button onClick={incerement}>+</button>
            </div>
          </div>
          <div className="product-details__total">
          <h2 style={{marginBottom:"20px",fontWeight:"600"}}>Умумий нархи:</h2>
            <div className="product-details__totalcost">{itemCounter * +productDetailsData?.productSizesAndQuantity[selectedVariant].price}</div>
          </div>
          <div className="product-details__addcart">
          <h2>.</h2>
            <br/>
            <br/>
            <button style={{cursor:"pointer"}} onClick={() => addToCart(productDetailsData)}>
              <FiShoppingCart/>
            <span>Саватга қўшиш</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProductDetails;
