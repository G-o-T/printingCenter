import { OFFER } from "../../../config/index.js";
import MaxWidthWrapper from "../../MaxWidthWrapper/MaxWidthWrapper.jsx";
import SliderText from "./SliderText.jsx";
import MainButton from "../../UI/Buttons/MainButton/MainButton.jsx";
import Image from "next/image";
import Link from "next/link.js";

import img from '../../../../public/sliderImg/2.png';

import styles from "./Slider.module.scss";
import cn from "classnames";

const Slider2 = () => {

    const data = OFFER[1];

    return (
        <>
            <div className={cn(styles.sliderWrapper, styles.blackBG)}>
                <MaxWidthWrapper className={styles.l}>
                    <div className={styles.offer}>
                        <div className={styles.container}>
                            <SliderText title={data.title} subtitle={data.subtitle} features={data.features} pipeClassName={styles.blackPipe}/>
                            <Image className={styles.img} src={img} alt="фото продукции" />
                        </div>
                    </div>
                    <MainButton classNameBtn={styles.blackBtn} href="/order">
                        Заказать
                    </MainButton>
                </MaxWidthWrapper>
            </div>
            <MaxWidthWrapper className={cn(styles.sliderWrapper, styles.blackBG, styles.s)}>
                <div className={styles.imgBlock}>
                    <Image className={styles.img} src={img} alt="фото продукции" />
                </div>
                <div className={cn(styles.textBlock, styles.blackBottom)}>
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

export default Slider2;
