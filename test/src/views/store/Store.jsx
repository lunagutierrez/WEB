import { Link } from "react-router-dom";
import Crumbs from "../../components/crumbs/Crumbs"
import Filter from "../../components/inputs/filter/Filter";
import SearchBar from "../../components/inputs/searchbar/SearchBar";
import Prods3 from "../../components/products/prods3/Prods3";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const paths = [
    { name: 'Inicio', link: '/printlab/landing' },
    { name: 'Tienda', link: '/printlab/store' },];
  

const Store = () => {
    return (
        <>
            <Crumbs paths={paths} />
            <div className="d-flex justify-content-between mx-5 px-5">
                <SearchBar />
                <Filter />
            </div>
            <Prods3 />
            <Prods3 />
            <Prods3 />
        </>   
    )
}

export default Store