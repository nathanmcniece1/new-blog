import Header from "../components/Header";
import Categories from "../components/Categories";
import Card from "../components/Card";
import styles from './page.module.css';
import fs from 'fs';
import path from 'path';

function extractCategoryFromMarkdown(markdownContent) {
  const lines = markdownContent?.split('\n');
  const categoryLine = lines.find(line => line.startsWith('category'));
  if (categoryLine) {
    const category = categoryLine.split(':')[1].trim();
    return category.replace(/"/g, '');
  } else {
    return null;
  }
}

export async function fetchData(context) {
  const slug = context.params.slug;
  const directoryPath = path.join(process.cwd(), 'public', 'blogs');
  const files = await fs.promises.readdir(directoryPath);
  const readPromises = files.map(async file => {
    const markdownFilePath = path.join(directoryPath, file);
    const markdownContent = await fs.promises.readFile(markdownFilePath, 'utf-8');
    const category = extractCategoryFromMarkdown(markdownContent);
    return { category, markdownContent };
  });
  const fileContents = await Promise.all(readPromises);
  const categoryData = fileContents.filter(({ category }) => category?.toLowerCase() === slug?.toLowerCase())
    .map(({ markdownContent }) => markdownContent);
  return {
    markdownContent: categoryData
  };
}

export default async function Crypto(context) {
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
