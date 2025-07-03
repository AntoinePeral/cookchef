import styles from "./Header.module.scss";
import cookchef from "../assets/images/cookchef.png";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <i class="fa-solid fa-bars mr-15"></i>
      <div className="flex-fill">
        <img src={cookchef} alt="logo_cookchef"></img>
      </div>
      <ul className="d-flex flex-row">
        <li className="mr-5">
          <button className="btn btn-reverse-primary">
            <i class="fa-solid fa-basket-shopping mr-5"></i> <span>Panier</span>
          </button>
        </li>
        <li>
          <button className="btn btn-primary">Connexion</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
