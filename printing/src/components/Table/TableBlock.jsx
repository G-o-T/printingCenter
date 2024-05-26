import Link from "next/link";

import styles from "./Table.module.scss";
import cn from "classnames";

const convert = (n) => {
    if ( Number.isFinite(n)) {
        return n.toFixed(2);
    } else if (typeof n === "string") {
        if (n.includes("м2")) {
    const re = /м2/gi;
    return n.replace(re, "м²");
        } else if (n.includes("см. Печать фотографий")) {
            return <Link href="/photoPrint" className={styles.link}>см. Печать фотографий</Link>
        } else {
            return n;
        }
    }
}

const TableBlock = ({ title, headers, data, path, className }) => {

    const defineHeaderClass = () => {
        let className;
        switch (path) {
            case "/photoForDocuments":
            case "/collage":
            case "/design":
            case "/fabricPrint":
            case "/mugPrint":
            case "/postpressProcess":
            case "/sticker":
            case "/canvasPrint":
                className = title ? cn(styles.row, styles.half) : cn(styles.half, styles.fakeTitle);
                break;
            case "/calendar":
                className = title ? cn(styles.row, styles.halfPlus) : cn(styles.halfPlus, styles.fakeTitle);
                break;
            case "/photoPrint":
                className = title ? cn(styles.row, styles.third) : cn(styles.third, styles.fakeTitle);
                break;
            case "/businessCard":
                className = title ? cn(styles.row, styles.third, styles.cardSpec) : cn(styles.third, styles.fakeTitle, styles.cardSpec);
                break;
            case "/photocopy":
            case "/scan":
                className = title ? cn(styles.row, styles.share) : cn(styles.share, styles.fakeTitle);
                break;
            case "/largeFormatPrint":
                className = title ? cn(styles.row, styles.twoThirds) : cn(styles.twoThirds, styles.fakeTitle);
                break;
            case "/photoRestoration":
                className = title ? cn(styles.row, styles.oneThreeOne, styles.restSpec) : cn(styles.oneThreeOne, styles.fakeTitle, styles.restSpec);
                break;
        }
        return className;
    }
    
    const defineRowClass = () => {

        const condition = headers.length > 0 && title;

        let className;
        switch (path) {
            case "/photoForDocuments":
            case "/collage":
            case "/design":
            case "/fabricPrint":
            case "/mugPrint":
            case "/postpressProcess":
            case "/sticker":
            case "/canvasPrint":
                className = cn((condition ? styles.rowBorder : styles.row), styles.half);
                break;
            case "/calendar":
                className = cn((condition ? styles.rowBorder : styles.row), styles.halfPlus);
                break;
            case "/photoPrint":
            case "/businessCard":
                className = cn((condition ? styles.rowBorder : styles.row), styles.third);
                break;
            case "/photocopy":
            case "/scan":
                className = cn((condition ? styles.rowBorder : styles.row), styles.share);
                break;
            case "/largeFormatPrint":
                className = cn((condition ? styles.rowBorder : styles.row), styles.twoThirds);
                break;
            case "/photoRestoration":
                className = cn((condition ? styles.rowBorder : styles.row), styles.oneThreeOne);
                break;
        }
        return className;
    }

    return (
        <div className={cn(styles.wrapper, className)}>
            {title && <div className={styles.title}>{title}</div>}
            {!title && 
                <div className={defineHeaderClass()}>
                    {headers.map((i, ind) => (
                        <div className={styles.fakeHeader} key={ind}>{i}</div>
                    ))}
                </div>}
            <table className={styles.table}>
                {(headers.length > 0 && title) && (
                    <thead>
                        <tr className={defineHeaderClass()}>
                            {headers.map((i, ind) => (
                                <th key={ind} className={styles.header}>{i}</th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {data.map((i, ind) => (
                        <tr key={ind} className={defineRowClass()}>
                            {i.map((j, ind) => (
                                <td key={ind} className={styles.cell}>{convert(j)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableBlock;