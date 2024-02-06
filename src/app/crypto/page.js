import Header from "../components/Header";
import Categories from "../components/Categories";
import Tile from "../components/Tile";
import styles from './page.module.css';

export default function Crypto() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.linesContainer}>
          <div className={styles.container}>
            <Categories />
            <p>Hello</p>
          </div>
        </div>
      </main>
    </>
  );
}
