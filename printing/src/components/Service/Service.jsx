import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { getMinPrices } from "../../utils/getPrices";
import Image from "next/image";
import cn from "classnames";

import styles from "./Service.module.scss";

const Service = async ({ title, parag, list, url, color, id }) => {

    // const defineClassName = (color) => {
    //     let className;
    //     switch (color) {
    //         case "turquoise":
    //             className = cn(styles.size, styles.turquoise);
    //             break;
    //         case "lavender":
    //             className = cn(styles.size, styles.lavender);
    //             break;
    //         case "violet":
    //             className = cn(styles.size, styles.violet);
    //             break;
    //         case "skyBlue":
    //             className = cn(styles.size, styles.skyBlue);
    //             break;
    //         case "pink":
    //             className = cn(styles.size, styles.pink);
    //             break;
    //         default:
    //             className = styles.size;
    //     }
    //     return className;
    // }

    const minPrices = await getMinPrices();
    const minPrice = minPrices[id][1];

    return (
        <div className={styles.wrapper}>
            <MaxWidthWrapper>
                <div className={styles.container}>
                    {/* <div className={defineClassName(color)}> */}
                    <div className={styles.size}>
                        <Image src={url} className={styles.img} alt="фото услуги"/>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.price}>{minPrice}</div>
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