import Link from "next/link";
import styles from "./BreadCrumbs.module.scss";
import MaxWidthWrapper from "../../MaxWidthWrapper/MaxWidthWrapper";
import arrow from "../../../../public/arrow.svg";
import Image from "next/image";



export default function BreadCrumbs({ items }) {
    return (
        <MaxWidthWrapper >
            <div className={styles.row}>
                <Link href="/" className={styles.link} text="Главная">
                    Главная
                </Link>
                {items.map((item, index) => (
                    <div className={styles.linkRow} key={index}>
                        <Image src={arrow} width={20} height={20} alt="стрелка"/>
                        <Link href={item.href} className={styles.link} text={item.title}>{item.title}</Link>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}
