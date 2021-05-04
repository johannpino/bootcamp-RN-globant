import Link from "next/link";
import styles from "../../styles/index.module.css";

const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>Bienvenido a tu pokedex.</h1>
      <p className={styles.paragraph}>
        Aqui encontraras informacion sobre todos los pokemon
      </p>
      <div className={styles.buttonsDiv}>
        <Link href="/explore">
          <button className={`${styles.button} ${styles.button1}`}>
            Explorar
          </button>
        </Link>

        <Link href="/fight">
          <button className={`${styles.button} ${styles.button2}`}>
            Fight!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
