import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './styles/shopPage.module.css';

function ShopPage() {
    const ShopElements = () => {
        const [elems, setElems] = useState([]);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(res => {
                if (res.status >= 400) {
                    throw new Error("Server error");
                }
                return res.json();
            })
            .then(res => setElems(res))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
        }, [])

        if (loading) return <p>Loading...</p>;
        if (error) return <p>A network error was encountered</p>;

        return (
            <>
                {elems.map((element) => {
                    return(
                        <Link key={element.id} to={`product/${element.id}`}>
                            <div className={styles.gridElem}>
                                <img src={element.image} alt="" />
                                <h3>{element.title}</h3>
                                <p>${element.price}</p>
                            </div>
                        </Link>
                    )
                })}
            </>
        )
    }

    return (
        <>
            <div id={styles.grid}>
                <ShopElements />
            </div>
        </>
    );
}

export default ShopPage;