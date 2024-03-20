import { Link } from 'react-router-dom';

import * as userService from "../../utilities/user-service";

const NavBar = ({user, setUser}) => {
    const handleLogout = () => {
        userService.logOut();
        setUser = nill;
    }
    return (
        <nav>
            <Link to="/orders">Order History</Link>
            i refuse to use nbsp | i refuse to use nbsp
            <Link to="/orders/new">New Order</Link> | 
            <Link to="" onClick={handleLogout}>Logout { user.name }</Link> | 
        </nav>
    );
}

export default NavBar;