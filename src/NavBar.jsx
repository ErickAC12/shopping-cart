/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import styles from './styles/navBar.module.css';

function NavBar() {
    return (
        <>
            <div className={styles.navBar}>
                <Link to="/">
                    <p id={styles.shopText}>The Shop</p>
                </Link>
                <div id={styles.categoriesDiv}>
                    <Link to="/shop"><p>All</p></Link>
                    <Link to="/shop/womens-clothing"><p>Women's clothing</p></Link>
                    <Link to="/shop/mens-clothing"><p>Men's clothing</p></Link>
                    <Link to="/shop/jewelery"><p>Jewelery</p></Link>
                    <Link to="/shop/electronics"><p>Electronics</p></Link>
                </div>
                <Link to="/cart">
                    <img src="/src/img/cart.svg" alt="" className={styles.cartImg} />
                </Link>
            </div>
        </>
    )
}

export default NavBar;