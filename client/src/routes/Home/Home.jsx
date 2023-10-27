import styles from "./Home.module.css";
import imgDogs from "../../assets/dogsImage.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.home}>
          <img src={imgDogs} alt="Dois cachorros num fundo roxo" />
          
        </div>
      </div>
    </>
  );
};

export default Home;
