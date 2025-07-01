import { useEffect, useState } from "react";
import { getProductId } from "../components/ApiService/Api";
import { Link, useParams } from "react-router-dom";
import './ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams();

    const [productDetais, setProductDetais] = useState({});

    useEffect(() => {
        const fetchProductDetails = async () => {
            const data = await getProductId(id);
            setProductDetais(data);
        };

        fetchProductDetails();
    }, [id]);

    return (
        <div className="product-details-container">
            <img src={productDetais.image} alt="alternative" className="product-image" />
            <div className="product-info">
                <h2 className="product-title">{productDetais.title}</h2>
                <p className="product-discription">{productDetais.description}</p>
                <p className="product-price">$ {productDetais.price}</p>
                <button className="buy-now-button">Buy Now</button>
                <Link to="/">
                    <button className="g0-back-home-button">Goback to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;
