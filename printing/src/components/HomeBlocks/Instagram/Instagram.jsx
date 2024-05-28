import MaxWidthWrapper from '../../MaxWidthWrapper/MaxWidthWrapper';
import styles from "./Instagram.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import img1 from "../../../../public/instaImg/1.png";
import img2 from "../../../../public/instaImg/2.png";
import img3 from "../../../../public/instaImg/3.png";
import img4 from "../../../../public/instaImg/4.png";
import img5 from "../../../../public/instaImg/5.png";

const InstagramBlock = () => {
    return (
        <div className={styles.container}>
            <MaxWidthWrapper className={styles.paddings}>
                <h2 className={styles.title}>
                    Следите за нами в&nbsp;
                    <span>
                        <Link className={styles.link} href="https://www.instagram.com/subli.by/" target="_blank">
                            Instagram
                        </Link>
                    </span>
                </h2>
                <div className={styles.desc}>
                    <p>
                        В инстаграме мы делимся процессом своей работы, фотографиями готовой продукции. 
                    </p>
                    <p>
                        Для заказа - пишите в директ.
                    </p>
                </div>
                <div className={styles.photo}>
                    <Image className={styles.p1} src={img1} alt="фото продукции" />
                    <div className={styles.test}>
                        <Image className={styles.p2} src={img2} alt="фото продукции" />
                    </div>
                    <div className={styles.test}>
                        <Image className={styles.p3} src={img3} alt="фото продукции" />
                    </div>
                    <Image className={styles.p4} src={img4} alt="фото продукции" />
                    <Image className={styles.p5} src={img5} alt="фото продукции" />
                </div>
            </MaxWidthWrapper>
        </div>

    )
}

export default InstagramBlock;