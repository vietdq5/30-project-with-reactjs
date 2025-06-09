import { Route, Routes } from 'react-router-dom';

import Admin from './components/Admin/Admin.jsx';
import Articles from './components/Articles/Articles.jsx';
import Product from './components/Products/Product.jsx';
import Home from './components/Home/Home.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import AdminSale from './components/Admin/AdminSale.jsx';
import AdminSeller from './components/Admin/AdminSeller.jsx';

const AppRouting = () => {
    return (
        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Product />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/admin' element={<Admin />}>
                <Route path='sale' element={<AdminSale />} />
                <Route path='seller' element={<AdminSeller />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes >
    );
}

export default AppRouting;