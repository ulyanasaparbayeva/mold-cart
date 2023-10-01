import './Sidebar.scss'
import {FiGrid,FiChevronRight} from "react-icons/fi";
import {useState, useEffect} from "react";
import {instance} from "../../api/axios";
import {Link} from "react-router-dom"

const Sidebar = (showSidebar ) => {
  const [categoryData, setCategoryData] = useState([])
  useEffect(() => {
    let isFetched = false
  instance("/category/category-nest")
    .then(response => setCategoryData(response.data))
    .catch(err => console.log(err))
   console.log(isFetched)

    return () => {
      isFetched = true;
    }

  }, [])
  return (
    <div className={'sidebar'}>
     <div className={'sidebar__header'}>
       <FiGrid/>
       Категория
     </div>
      <ul>
        {
          categoryData?.mainCategory_ru ? categoryData.mainCategory_ru.map((mainCategoryItem, index) =>
            <li  className={'sidebar__menu-item'} key={index}>
              <Link to={`/maincategory/${mainCategoryItem}`} style={{textDecoration:"none"}}>
                {mainCategoryItem}
                <FiChevronRight/>
              </Link>
              <div  className={'sub-category-item'}>
                {
                  categoryData.productSubCategories_ru && categoryData.productSubCategories_ru[index] ?
                    categoryData.productSubCategories_ru[index].map((subCategoryItem, subIndex) => (
                     subCategoryItem ?
                       <Link to={`/subcategory/${subCategoryItem}`} key={subIndex}>{subCategoryItem}</Link>
                       : <></>
                    )) : 'Loading...'
                }
              </div>
             </li>
          ) : 'Loading...'
        }
      </ul>
    </div>
  )
}
export default Sidebar

{/*

  */}