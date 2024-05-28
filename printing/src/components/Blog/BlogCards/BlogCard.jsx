import Image from "next/image";
import Link from "next/link";
import { getImg } from "../../../utils/getImg";
import { convertImageSize } from "@/components/utils/convertImageSize";

import styles from "../Blog.module.scss";
import cn from "classnames";

const BlogCard = async ({id, title, desc, page, img }) => {
    
    const src = await getImg(img);

    return (
        <Link href={`/blog/${id}`} className={styles.cardLink}>
            <div className={page !== 'blog' ? cn(styles.cardContainerMain, styles.card) : cn(styles.cardContainerBlog, styles.card)}>
                <div className={styles.img}>
                    <Image className={styles.size} src={src.urls.small} alt={title} width='392' height={(src.height * 392) / src.width} />
                </div>
                <h5 className={styles.cardTitle}>{title}</h5>
                {page === 'blog' && <div className={styles.desc}>{desc}</div>}
                {page === 'blog' && <div className={styles.mist}></div>}
            </div>
        </Link>
    )
}

export default BlogCard;