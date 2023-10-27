import styles from "./Home.module.css";
import imgDogs from "../../assets/dogsImage.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.home}>
          <img src={imgDogs} alt="Dois cachorros num fundo roxo" />
          <h1>O carinho e a qualidade <span>que seu pet merece!</span> <br/> <p>Nós do petshop DevPet estamos comprometidos em cuidar do bem-estar e felicidade dos seus amados companheiros!</p> </h1>
        </div>
        <div className={styles.services}>
          <div>
            <img src="https://placehold.co/30x30" alt="ícone" />
            <h2>Banho e Tosa</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
