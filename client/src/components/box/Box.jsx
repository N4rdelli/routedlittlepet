import styles from "./Box.module.css";
import seta from "../../assets/seta.svg";

const Box = ({icon, text}) => {
  return (
    <div className={styles.container}>
        <img src={icon} alt="" className={styles.icon}/>
        <h3>{text}</h3>
        <img src={seta} alt="" className={styles.seta} />
    </div>
  )
}

export default Box