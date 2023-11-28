import Products from '../../components/products/Products'
import Banner from '../../components/banner/Banner'
import Services from '../../components/services/Services'
import Whyus from '../../components/whyus/Whyus';

const Landing = () => {
    return (
        <>
            <Banner />
            <Products />
            <Whyus />
            <Services />
        </>
    )
}

export default Landing