import ProductsList from "../../components/Products/ProductList"
import { useSelector } from "react-redux";

const Home = () => {
    const categories = useSelector(s => s.reducer.categories);
    return (
        <section>
            {
                categories.map(item => {
                    return <ProductsList key={item} item={item} limit={4} />
                })
            }
        </section>
    )
}

export default Home;