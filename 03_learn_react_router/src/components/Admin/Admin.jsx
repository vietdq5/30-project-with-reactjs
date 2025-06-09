import { Link, Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>This is the admin dashboard where you can manage the application.</p>
            <ul>
                <li>
                    <Link to="/admin/sale">Sale</Link>
                </li>
                <li>
                    <Link to="/admin/seller">Seller</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default Admin;