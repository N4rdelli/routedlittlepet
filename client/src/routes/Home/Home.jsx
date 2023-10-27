import styles from "./Home.module.css";
import imgDogs from "../../assets/dogsImage.jpg";
import Box from "../../components/box/box";

import dogs from "../../assets/dogs.jpg";
import cats from "../../assets/dogs.jpg";
import birds from "../../assets/dogs.jpg";
import others from "../../assets/dogs.jpg";

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
        <div className={styles.produtos}>
          <div className={styles.texto}>
            <p>Texto Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
          <div className={styles.animais}>
            <div> <img src={dogs} alt="Cachorros" width={600} height={250} /> </div>
            <div> <img src="https://placehold.co/275x250" alt="Gatos" width={275} height={250} /> </div>
            <div> <img src="https://placehold.co/275x250" alt="Pássaros" width={275} height={250} /> </div>
            <div> <img src="https://placehold.co/600x250" alt="Roedores" width={600} height={250} /> </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
