import { Link } from "react-router-dom";
import styles from './styles/errorPage.module.css';

const ErrorPage = () => {
    return (
        <div className={styles.errorDiv}>
            <h1>Page was not found</h1>
            <Link to="/">
                Go back
            </Link>
        </div>
    );
};

export default ErrorPage;