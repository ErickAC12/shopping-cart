import { Link } from "react-router-dom";
import styles from "./styles/mainPage.module.css";

function MainPage() {

  return (
    <>
      <img src="src/img/mainBackground.jpg" alt="" id={styles.mainBg} />
      <div id={styles.mainDiv}>
        <h1>Welcome to The Store!</h1>
        <p>We have things that you can buy (with money!!!!)</p>
        <Link to="shop">Start shopping</Link>
      </div>
    </>
  );
}

export default MainPage;
