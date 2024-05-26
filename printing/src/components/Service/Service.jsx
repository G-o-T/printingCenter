'use client';

import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Image from "next/image";
import cn from "classnames";
import styles from "./Service.module.scss";
import { usePathname } from "next/navigation";

const Service = ({ title, parag, list, url, color, id, minPrice }) => {

    const path = usePathname();

    return (
        <div className={styles.wrapper}>
            <MaxWidthWrapper>
                <div className={styles.container}>
                    <div className={styles.size}>
                        <Image src={url} className={styles.img} alt="фото услуги" priority/>
                    </div>
                    <div className={path === '/largeFormatPrint' ? cn(styles.content, styles.contentPlus) : styles.content}>
                        <div className={styles.title}>{title}</div>
                        {minPrice ? <div className={styles.price}>{minPrice}</div> : <div className={styles.fakeMinPrice}></div>}
                        <div className={styles.text}>
                            {parag.map((i, ind) => (
                                <p key={ind}>{i}</p>
                            ))}
                            {list.length > 0
                                && 
                            <ul className={styles.list}>
                                {list.map((i, ind) => (
                                    <li key={ind} className={styles.item}>{i}</li>
                                ))}
                            </ul>}
                        </div>
                    </div>
                </div>

            </MaxWidthWrapper>
        </div>
    )
}

export default Service;