import Header from "./components/Header";
import Categories from "./components/Categories";
import Tile from "./components/Tile";
import styles from './page.module.css';
import Card from "./components/Card";
import fs from 'fs';
import path from 'path';

export async function fetchData(context) {
  const slug = context.params.slug;
  const directoryPath = path.join(process.cwd(), 'public', 'blogs');
  const files = await fs.promises.readdir(directoryPath);
  const readPromises = files.map(async file => {
    const markdownFilePath = path.join(directoryPath, file);
    const markdownContent = await fs.promises.readFile(markdownFilePath, 'utf-8');
    return { markdownContent };
  });
  const fileContents = await Promise.all(readPromises);
  const categoryData = fileContents
    .map(({ markdownContent }) => markdownContent);
  return {
    markdownContent: categoryData
  };
}
export default async function Home(context) {
 

    const data = await fetchData(context);
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.linesContainer}>
          <div className={styles.container}>
            <Categories />
            <div className={styles.cardContainer}>
            {data?.markdownContent?.map(content => <Card key={content} data={content} />)}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
