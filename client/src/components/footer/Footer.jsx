import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import face from "../../assets/logo-facebook.svg";
import insta from "../../assets/logo-instagram.svg";
import tiktok from "../../assets/logo-tiktok.svg";

const navigation = [
  { component: "/", name: "Página Inicial" },
  { component: "/products", name: "Produtos" },
  { component: "/services", name: "Sobre nós" },
  { component: "/about", name: "Contato" },
  { component: "/galery", name: "Galeria" },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.direciona}>
          <div>
            <h3>Banho e Tosa & Cuidados</h3>
            <h1>(14) 99655-5555</h1>
            <p>Jardim Regina, Jaú - SP</p>
            <p>Rua Cap. José Ribeiro, 294</p>
          </div>
          <div>
            <h3>Adote um pet & </h3>
            <h1>https://apaja.org.br/</h1>
            <p>contato.apaja@gmail.com</p>
          </div>
        </div>
        <div className={styles.links}>
          {navigation.map((item) => (
            <Link key={item.name} to={item.component}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <div>
          <h3>Nos siga</h3>
          <div className={styles.socialIcons}>
            <img src={face} alt="Facebook"/>
            <img src={insta} alt="Instagram"/>
            <img src={tiktok} alt="TikTok"/>
          </div>
        </div>
        <p>Feito com carinho por Nardelli</p>
      </div>
    </div>
  );
};

export default Footer;
