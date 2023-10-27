import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

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
            <h1>+55 (14) 99655-5555</h1>
            <p>Cidade tal, bairro tal</p>
            <p>Rua não sei oq não sei oq lá, 1995</p>
          </div>
          <div>
            <h3>Adote um pet & </h3>
            <h1>https://sitedeadoção</h1>
            <p>Cidade tal, bairro tal</p>
            <p>Rua não sei oq não sei oq lá, 1995</p>
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
            <img src="https://placehold.co/30x30" alt="Facebook"/>
            <img src="https://placehold.co/30x30" alt="Instagram"/>
            <img src="https://placehold.co/30x30" alt="TikTok"/>
          </div>
        </div>
        <p>Feito com carinho por Nardelli</p>
      </div>
    </div>
  );
};

export default Footer;
