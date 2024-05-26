import { OFFER } from "../../../config/index.js";
import MaxWidthWrapper from "../../MaxWidthWrapper/MaxWidthWrapper.jsx";
import SliderText from "./SliderText.jsx";
import MainButton from "../../UI/Buttons/MainButton/MainButton.jsx";
import Image from "next/image";

import img from '../../../../public/sliderImg/1.png';

import styles from "./Slider.module.scss";
import cn from "classnames";

const Slider1 = () => {

    const data = OFFER[0];

    return (
        <>
            <div className={cn(styles.sliderWrapper, styles.lilacBG)}>
                <MaxWidthWrapper className={styles.l}>
                    <div className={styles.offer}>
                        <div className={styles.container}>
                            <SliderText title={data.title} subtitle={data.subtitle} features={data.features} pipeClassName={styles.lilacPipe}/>
                            <Image className={styles.img} src={img} alt="фото продукции" priority/>
                        </div>
                    </div>
                    <MainButton classNameBtn={styles.lilacBtn} href="/order">
                        Заказать
                    </MainButton>
                </MaxWidthWrapper>
            </div>
            <MaxWidthWrapper className={cn(styles.sliderWrapper, styles.lilacBG, styles.s)}>
                <div className={styles.imgBlock}>
                    <Image className={styles.img} src={img} alt="фото продукции" />
                </div>
                <div className={cn(styles.textBlock, styles.lilacBottom)}>
                    <h1 className={styles.h1}>{data.title}</h1>
                    <p className={styles.subtitle}>{data.subtitle}</p>
                    <MainButton classNameBtn={styles.whiteBtn} href="/order">
                        Заказать
                    </MainButton>
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default Slider1;
