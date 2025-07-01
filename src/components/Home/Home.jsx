import { Link } from "react-router-dom";
import { getAllProducts } from "../ApiService/Api";
import "./Home.css";

import { useEffect, useState } from "react";

const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts();
            console.log(data, "data");
            setProduct(data.products);
        };
        fetchProducts();
    }, []);

    return (
        <div className="product-grid">
            {product.map((product) => (
                <div className="product" key={product.id}>
                    <img src={product.images[0]} alt={product.title} />

                    <h2>{product.title}</h2>
                    <p>
                        <span className="price">{product.price}</span>
                    </p>
                    <Link to={`product/${product.id}`}>
                        <button>Product Detais</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
