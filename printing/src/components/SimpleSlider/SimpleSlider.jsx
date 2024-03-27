'use client';

import {useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../HomeBlocks/Slider/Slider1";
import Slider2 from "../HomeBlocks/Slider/Slider2";
import Slider3 from "../HomeBlocks/Slider/Slider3";
import Image from 'next/image';

import styles from "./SimpleSlider.module.scss";
import cn from "classnames";

import img from "../../../public/arrowSlider.svg";

const SimpleSlider = () => {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={styles.wrapper}>
            <Slider 
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                <Slider1 index={1}/>
                <Slider2 index={2}/>
                <Slider3 index={3}/>
            </Slider>
            <div className={styles.btns}>
                <button className={styles.btn} onClick={previous}>
                    <Image src={img} alt="стрелка влево" className={cn(styles.arrow, styles.left)}/>
                </button>
                <button className={styles.btn} onClick={next}>
                    <Image src={img} alt="стрелка вправо" className={styles.arrow}/>
                </button>
            </div>
        </div>
    );
}

export default SimpleSlider;