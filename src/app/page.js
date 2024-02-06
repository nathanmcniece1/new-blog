import Header from "./components/Header";
import Categories from "./components/Categories";
import Tile from "./components/Tile";
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.linesContainer}>
          <div className={styles.container}>
            <Categories />
            {/* Wrap each pair of Tiles in a tileContainer */}
            <div className={styles.tileContainer}>
              <Tile />
              <Tile />
            </div>
            <div className={styles.tileContainer}>
              <Tile />
              <Tile />
            </div>
            <div className={styles.tileContainer}>
              <Tile />
              <Tile />
            </div>
            <div className={styles.tileContainer}>
              <Tile />
              <Tile />
            </div>
            <div className={styles.tileContainer}>
              <Tile />
              <Tile />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
