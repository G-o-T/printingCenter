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
        <div className={cn(styles.sliderWrapper, styles.blackBG)}>
            <MaxWidthWrapper>
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
    )
}

export default Slider2;
