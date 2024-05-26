import styles from "./TableSkeleton.module.scss";

const TableSkeleton = () => {
    return (
        <div className={styles.wrapper, margin}>
            <div className={styles.title}>Цены на услуги печатного центра Subli.by загружаются</div>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.row}>
                        <td className={styles.cell}>Вид услуги № 1</td>
                        <td className={styles.cell}>Цена</td>
                    </tr>
                    <tr className={styles.row}>
                        <td className={styles.cell}>Вид услуги № 2</td>
                        <td className={styles.cell}>Цена</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableSkeleton;