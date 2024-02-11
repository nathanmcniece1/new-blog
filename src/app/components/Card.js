import styles from './Card.module.css'

function extractTitleFromMarkdown(markdownContent, heading) {
    const lines = markdownContent?.split('\n');

    const titleLine = lines.find(line => line.startsWith(heading));

    if (titleLine) {
        // Extract the title value
        const title = titleLine.split(':')[1].trim();
        return title.replace(/"/g, '');
    } else {
        return null;
    }
}


function Tile({data}) {
    const title = extractTitleFromMarkdown(data, 'title');
    const preview = extractTitleFromMarkdown(data, 'preview');
    const date = extractTitleFromMarkdown(data, 'date');
    return (
        <>
            <div className={styles.card}>
                <div className={`${styles.content} ${styles.roboto}`}>
                    <h2 className={`${styles.title} ${styles.roboto}`}>
                        {title}
                    </h2>
                    <p className={styles.body}>
                        {preview}
                    </p>
                    <div className={styles.bottomContent}>
                        <p className={styles.date}>
                            {date}
                        </p>
                        <p>READ</p>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default Tile;