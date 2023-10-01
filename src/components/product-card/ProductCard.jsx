import React, {useEffect} from 'react';
import { DefaultButton } from '../../utils/Utils';
import "./ProductCard.scss";
import {Link,} from 'react-router-dom';
import {FiChevronRight} from "react-icons/fi";
const ProductCard = ({className, productData}) => {


  return (
    <div className={`product-card ${className}`}>
      <Link to={`/productdetails/${productData._id}`}>
        <img src={productData.productImages[0]} alt="" />
      </Link>
      <h3 title={productData.productName_uz}>{productData.productName_uz.length > 20 ? productData.productName_uz.slice(0, 20) + "...": productData.productName_uz}</h3>
      <div className="product-card__categories">
        <span>{productData.productMainCategory_ru}</span><FiChevronRight/><span>{productData.productSubCategory_ru}</span>
      </div>
      <div className="product-card__price">
        {`${productData?.productSizesAndQuantity[0].price} ${productData?.productSizesAndQuantity.length > 1 ? "-" + productData?.productSizesAndQuantity.reverse()[0].price:""} СУМ`}
      </div>
      {productData.productSizesAndQuantity.length > 1 ? <Link className="default-btn" to={`/productdetails/${productData._id}`}>Tanlash</Link> : <DefaultButton text="Саватга қўшиш"/>  }
    </div>
  )
}

export default ProductCard