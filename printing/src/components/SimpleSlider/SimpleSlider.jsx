'use client';

import {useRef, useState} from "react";
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

    const [counter, setCounter] = useState(0);

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
        if (counter < 2) {
            setCounter(prev => prev + 1);
        }
    };
    const previous = () => {
        sliderRef.slickPrev();
        if (counter > 0) {
            setCounter(prev => prev -1);
        }
    };

    const settings = {
        dots: false,
        infinite: false,
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
                <button className={counter > 0 ? styles.btn: cn(styles.btn, styles.inactive)} onClick={previous}>
                    <Image src={img} alt="стрелка влево" className={cn(styles.arrow, styles.left)}/>
                </button>
                <button className={counter < 2 ? styles.btn : cn(styles.btn, styles.inactive)} onClick={next}>
                    <Image src={img} alt="стрелка вправо" className={styles.arrow}/>
                </button>
            </div>
        </div>
    );
}

export default SimpleSlider;