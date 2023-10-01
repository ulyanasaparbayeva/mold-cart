import {useState, useEffect} from "react";
import {instance} from "../../api/axios";
import {useParams} from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import {Container} from "../../utils/Utils";
import './MainCategory.scss'

const MainCategory = () => {
  const { categoryId } = useParams();
  const [mainCategoryData, setMainCategoryData] = useState(null);

useEffect(() => {
  instance(`/category/categories/${categoryId}`)
    .then(response => {
      setMainCategoryData(response.data);
    })
    .catch(err => console.log(err))
},[categoryId])
console.log(mainCategoryData)


  return (
    <div className="categories">
      <Container>
        <div className="category-wrapper">
          <h2>{mainCategoryData?.maincategoryTranslate.uz}</h2>
          <div className="wrapper__grid">
            {
              mainCategoryData?.maincategory.map(categoryProductItem =>
                <ProductCard  className="product-card--categories" productData={categoryProductItem}/>
              )
            }
          </div>
        </div>
      </Container>
    </div>
  )
}
export default MainCategory