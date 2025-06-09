import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    return (
        <div className="product-detail">
            <h1>Product Detail for {id}</h1>
            <p>This is the product detail page.</p>
        </div>
    );
}
export default ProductDetail;