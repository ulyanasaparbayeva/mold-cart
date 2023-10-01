import {useState, useEffect} from "react";
import './Navbar.scss'
import {Link, useLocation} from "react-router-dom";
import { FiSearch,} from "react-icons/fi";
import logos from "../../images/logos.svg"
import Sidebar from "../../components/sidebar/Sidebar"
import {Container} from "../../utils/Utils";
import {instance} from "../../api/axios";
import resultno from "../../images/resultno.png";
import {useTranslation} from "react-i18next";
const exceptionalRoutes = ["/login", "/admin"]

const Navbar = ({showSidebar} ) => {
  const localtion = useLocation()
  const {t} = useTranslation()
  const [inputSearch, setInputSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showNoResult, setShowNoResult] = useState(true);


  const hideNoResult = () => {
    setShowNoResult(false);
    setInputSearch("")
  };
  useEffect(() => {
    instance(`/product/search/${inputSearch}`)
      .then(response => {
        setSearchResult(response.data);
        setShowNoResult(response.data.length === 0 && inputSearch !== "");
      })
      .catch(err => {
        setSearchResult([]);
        setShowNoResult(true);
        console.log(err);
      });
  }, [inputSearch]);




  return  !exceptionalRoutes.includes(localtion.pathname) ? (
    <div className="navbar">
      <div className="navbar__main">
        <Container style={{textAlign:"center", margin:"auto"}}>
          <div  className="search__group">
            <div className={'navbar_logo'}>
              <Link to="/" className={'navbar_logo'}>
                <img src={logos} className={'navbar_images'}/>
              </Link>
            </div>
            <div className={'navbar_searchbar'}>
              <div className={'form'}>
                <input className={'searchbar_input'}
                 value={inputSearch}
                  onChange={e => setInputSearch(e.target.value)}
                 placeholder="Қидириш..." type="text"/>
                <button className={'navbar_search_submit'}>
                  <FiSearch/>
                </button>
                {
                  showNoResult && inputSearch ? (
                    <div className='no-result'>
                      <div className={'navbar__search__result'}>
                        <div className="header__flex">
                          <div>Қидириш натижалари:</div>
                          <div className="Navbar_search__indicator">
                            #{inputSearch}
                          </div>
                        </div>
                        <div className="header__result">
                          <span>0 Натижа</span>
                          <div onClick={hideNoResult}>
                            Бекор қилиш
                          </div>
                        </div>
                      </div>
                      <div className="images__group">
                        <img src={resultno} className={'no-result-images'} alt="No results" />
                      </div>
                    </div>
                  ) : (
                    searchResult.length > 0 && (
                      <div className='search__result'>
                        <div className={'navbar__search__result results'}>
                          <div className="header__flex">
                            <div>Қидириш натижалари:</div>
                            <div className="Navbar_search__indicator">
                              #{inputSearch}
                            </div>
                          </div>
                          <div className="header__result">
                            <span>{searchResult.length}  Натижа {searchResult.length !== 1 ? " ": ''}</span>
                            <div onClick={hideNoResult}>
                              Бекор қилиш
                            </div>
                          </div>
                        </div>
                        {searchResult?.map(searchedItem =>
                          <Link className="search__result_link" to={`/productdetails/${searchedItem._id}`}>
                            <div className={'search__result-item'}>
                              <img src={searchedItem?.productImages[0]} alt=""/>
                              <h4>{searchedItem?.productName_ru}</h4>
                              <strong>{`${searchedItem?.productSizesAndQuantity[0].price} ${searchedItem?.productSizesAndQuantity.length > 1 ? "-" + searchedItem?.productSizesAndQuantity.reverse()[0].price : ""} SUM`}</strong>
                            </div>
                          </Link>
                        )}
                      </div>
                    )
                  )
                }

              </div>
              <div className={'navbar_top_categories'}>
                {showSidebar && <Sidebar />}
                <ul className={'navbar_categories_menu-all'}>
                  <li className={'navbar_categories_menu'}>
                    <Link to="/" className={'navbar_categories_item'}>{t("Бош сахифа")}</Link>
                  </li>
                  <li className={'navbar_categories_menu'}>
                    <Link to="/Partner" className={'navbar_categories_item'}>{t('Хамкорлар')}</Link>
                  </li>
                  <li className={'navbar_categories_menu'}>
                    <Link to="/About" className={'navbar_categories_item'}>{t('Биз ҳақимизда')}</Link>
                  </li>
                  <li className={'navbar_categories_menu'}>
                    <Link to="/Contact" className={'navbar_categories_item'}>{t('Алоқа')}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  ) : <></>
}
export default  Navbar