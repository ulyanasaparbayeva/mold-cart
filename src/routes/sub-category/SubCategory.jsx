import {useState, useEffect} from "react";
import {instance} from "../../api/axios";
import {useParams} from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import {Container} from "../../utils/Utils";



const SubCategory = () => {
  const { categoryId } = useParams();
  const [mainCategoryData, setMainCategoryData] = useState(null);
  console.log(categoryId)
  useEffect(() => {
    instance(`/category/subcategories/${categoryId}`)
      .then(response => {
        setMainCategoryData(response.data);
      })
      .catch(err => console.log(err))
  },[categoryId])
  console.log(mainCategoryData)




  return (
    <div>
      <div className="categories">
        <Container>
          <div>dsdsdsd</div>
          <div className="category-wrapper">
            <h2>{mainCategoryData?.subCategoryTranslate.uz}</h2>
            <div className="wrapper__grid">
              {
                mainCategoryData?.subCategory.map(categoryProductItem =>
                  <ProductCard className="product-card--categories" productData={categoryProductItem}/>
                )
              }
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
export default SubCategory