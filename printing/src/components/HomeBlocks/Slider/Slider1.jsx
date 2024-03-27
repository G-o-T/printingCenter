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
        <div className={cn(styles.sliderWrapper, styles.lilacBG)}>
            <MaxWidthWrapper>
                <div className={styles.offer}>
                    <div className={styles.container}>
                        <SliderText title={data.title} subtitle={data.subtitle} features={data.features} pipeClassName={styles.lilacPipe}/>
                        <Image className={styles.img} src={img} alt="фото продукции" />
                    </div>
                </div>
                <MainButton classNameBtn={styles.lilacBtn} href="/order">
                    Заказать
                </MainButton>
            </MaxWidthWrapper>
        </div>
    )
}

export default Slider1;
