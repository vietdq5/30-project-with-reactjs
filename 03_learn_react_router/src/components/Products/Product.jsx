import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div>
            <h1>Product</h1>

            <ul>
                <li>
                    <Link to="/products/1">Product 1</Link>
                </li>
                <li>
                    <Link to="/products/2">Product 2</Link>
                </li>
                <li>
                    <Link to="/products/3">Product 3</Link>
                </li>
            </ul>
        </div>

    );
}

export default Product;