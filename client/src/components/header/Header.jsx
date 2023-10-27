import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import searchIcon from "../../assets/searchIcon.png";

const navigation = [
  { component: "/", name: "Página Inicial" },
  { component: "/products", name: "Produtos" },
  { component: "/services", name: "Sobre nós" },
  { component: "/about", name: "Contato" },
];

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>DevPet</h1>
      </div>
      <div className={styles.navBar}>
        {navigation.map((item) => (
          <Link key={item.name} to={item.component}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className={styles.end}>
        <div className={styles.search}>
          <img src={searchIcon} alt="ícone"/>
        </div>
          <button>Cadastre-se</button>
          <button>Entre</button>
      </div>
    </div>
  );
};

export default Header;
