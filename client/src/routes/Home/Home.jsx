import styles from "./Home.module.css";
import imgDogs from "../../assets/dogsImage.jpg";
import Box from "../../components/box/box";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.home}>
          <img src={imgDogs} alt="Dois cachorros num fundo roxo" />
          <h1>O carinho e a qualidade <span>que seu pet merece!</span> <br/> <p>Nós do petshop DevPet estamos comprometidos em cuidar do bem-estar e felicidade dos seus amados companheiros!</p> </h1>
        </div>
        <div className={styles.servicos}>
          <h1>O que podemos fazer por você?</h1>
          <h3>Conheça os nossos serviços:</h3>
          <div className={styles.services}>
            <Box icon={"https://placehold.co/30x30"} text={"Loja"}/>
            <Box icon={"https://placehold.co/30x30"} text={"Banho e Tosa"}/>
            <Box icon={"https://placehold.co/30x30"} text={"Vacinação"}/>
            <Box icon={"https://placehold.co/30x30"} text={"Treinamento"}/>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
