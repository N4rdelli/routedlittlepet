import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const navigation = [
  { component: "/", name: "Página Inicial" },
  { component: "/products", name: "Produtos" },
  { component: "/services", name: "Sobre nós" },
  { component: "/about", name: "Contato" },
];

const Header = () => {
  return (
    <div className={styles.container}>
        <img src="" alt="Logo" />
        <div className={styles.navBar}>
            {navigation.map((item) => (
                <Link key={item.name} to={item.component}> {item.name}</Link>
            ))}
        </div>
        <div className={styles.navBar2}>
            <input type="text" placeholder="Pesquise aqui"/>
        <button>Cadastre-se</button>
        <button>Entre</button>
        </div>
        
    </div>
  );
};

export default Header;
