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
                className = title ? cn(styles.row, styles.half) : cn(styles.row, styles.half, styles.accent);
                break;
            case "/calendar":
                className = cn(styles.row, styles.halfPlus);
                break;
            case "/photoPrint":
            case "/businessCard":
                className = cn(styles.row, styles.third);
                break;
            case "/photocopy":
            case "/scan":
                className = cn(styles.row, styles.share);
                break;
            case "/largeFormatPrint":
                className = cn(styles.row, styles.twoThirds);
                break;
            case "/photoRestoration":
                className = cn(styles.row, styles.oneThreeOne);
                break;
        }
        return className;
    }
    
    const defineRowClass = (headers) => {
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
                className = cn((headers.length > 0 ? styles.rowBorder : styles.row), styles.half);
                break;
            case "/calendar":
                className = cn((headers.length > 0 ? styles.rowBorder : styles.row), styles.halfPlus);
                break;
            case "/photoPrint":
            case "/businessCard":
                className = cn((headers.length > 0 ? styles.rowBorder : styles.row), styles.third);
                break;
            case "/photocopy":
            case "/scan":
                className = cn((headers.length > 0 ? styles.rowBorder : styles.row), styles.share);
                break;
            case "/largeFormatPrint":
                className = cn((headers.length > 0 ? styles.rowBorder : styles.row), styles.twoThirds);
                break;
            case "/photoRestoration":
                className = cn((headers.length > 0 ? styles.rowBorder : styles.row), styles.oneThreeOne);
                break;
        }
        return className;
    }

    return (
        <div className={cn(styles.wrapper, className)}>
            {title && <div className={styles.title}>{title}</div>}
            <table className={styles.table}>
                {headers.length > 0 && (
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
                        <tr key={ind} className={defineRowClass(headers)}>
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